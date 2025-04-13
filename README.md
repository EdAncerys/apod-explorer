APOD Explorer is a React-based application that displays NASA's Astronomy Picture of the Day (APOD). Users can view the daily APOD, add images to their favorites, and explore detailed explanations.

🚨🚨🚨 **Warning:** DO NOT USE IN PRODUCTION 🚨🚨🚨

> This application is for demonstration purposes only. For production use, implement a server-side APIs or use a full stack framework to handle application secrets.

## Features

- **Display APOD:** Automatically fetches and displays the Astronomy Picture of the Day.
- **Favorites:** Add or remove APOD items to/from your favorites list.

## Requirements

- Node.js (>= 14)
- Package managers `npm | yarn | bun`

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/EdAncerys/apod-explorer.git
   cd apod-explorer
   ```

2. **Create a `.env` File:**

   In the root directory, create a file named `.env` and add the following line. Replace `YOUR_API_KEY` with your actual NASA APOD API key.

   ```env
   REACT_APP_APOD_API_KEY=YOUR_API_KEY
   ```

   > **Important:** This key is required to run the application. Do not commit your `.env` file to version control.

   > Instructions on how to obtain `YOUR_API_KEY` will be sent via email

3. **Install Dependencies:**

   ```bash
   npm install
   # or
   ...
   ```

## Running the Application

Start the development server with:

```bash
npm dev
# or
...
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

### Unit & Integration Tests

The project uses React Testing Library for component testing. To run the tests:

```bash
npm test
# or
...
```

### End-to-End Tests

End-to-end tests can be implemented using tools like Cypress or Playwright. See the `docs` for setup instructions.

## Production Warning

**DO NOT USE IN PRODUCTION**  
This application is intended as a demo. **IMPORTANT:** For production deployments, secure your API keys and secrets by using a server-side APIs or a secure full stack framework to handle secrets. Client-side API keys can expose sensitive information and lead to security vulnerabilities.

## License

This project is licensed under the MIT License.
