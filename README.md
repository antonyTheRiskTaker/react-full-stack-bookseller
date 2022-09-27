# When you have cloned the repo, takes these steps:
1. Install packages (run `npm install` for the server, `yarn install` for the
React frontend)
2. Create .env files for the server and the frontend
3. The server .env file should have these variables:
    I. DB_NAME,
    II. DB_USERNAME,
    III. DB_PASSWORD,
    IV. JWT_SECRET (can be anything)
    V. STRIPE_PRIVATE_KEY (get it from your stripe account)
    VI. SERVER_URL (set it to http://localhost:8080)
    VII. CLIENT_URL (set it to http://localhost:3000)
4. The frontend .env file should have this variable:
    I. REACT_APP_API_SERVER (set it to http://localhost:8080)