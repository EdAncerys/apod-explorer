import { renderHook, act } from '@testing-library/react';
import { useGetAPOD } from '../hooks/useGetAPOD';

// Save original fetch
const originalFetch = global.fetch;

describe('useGetAPOD', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // To control the 1s delay
    jest.resetModules();
    global.fetch = jest.fn();
    process.env.REACT_APP_APOD_API_KEY = 'test_key';
  });

  afterEach(() => {
    jest.useRealTimers();
    global.fetch = originalFetch;
  });

  test('should fetch APOD data successfully', async () => {
    const mockData = {
      title: 'Mock APOD',
      date: '2023-04-12',
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useGetAPOD('2023-04-12'));

    // Fast-forward 1s loading delay
    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.apod).toEqual(mockData);
  });

  test('should set error if fetch fails with bad response', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({
        error: { message: 'Not Found' },
      }),
    });

    const { result } = renderHook(() => useGetAPOD('2023-04-12'));

    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.apod).toBe(null);
    expect(result.current.error).toMatch(/Error 404/i);
  });

  test('should throw error if API key is missing', async () => {
    delete process.env.REACT_APP_APOD_API_KEY;

    const { result } = renderHook(() => useGetAPOD('2023-04-12'));

    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.apod).toBe(null);
    expect(result.current.error).toMatch(/API key is missing/i);
  });

  test('should show error if date is before June 16, 1995', async () => {
    const { result } = renderHook(() => useGetAPOD('1995-06-15'));

    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.apod).toBe(null);
    expect(result.current.error).toMatch(/Date must be after/i);
  });

  test('should handle aborted fetch without setting error', async () => {
    const controller = new AbortController();

    fetch.mockImplementation(
      () =>
        new Promise(
          (_, reject) => {
            setTimeout(() => reject({ name: 'AbortError' }), 100);
          },
          {
            signal: controller.signal,
          }
        )
    );

    const { result, unmount } = renderHook(() => useGetAPOD('2023-04-12'));

    unmount(); // triggers abort

    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
  });
});
