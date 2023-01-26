# Proxumer - Frontend Developer Interview Question

Take a look at [requirement](requirements.md)

This project was built by Create React App

# Setup

This project use [`supabase`](https://supabase.com/docs) for realtime database as a purpose to create realtime chat

1. This project use yarn, if you don't have this then run this command to install npm install --global yarn
2. yarn for install all dependencies
3. Create file .env.local at root directory of this project (same level as .env)
4. run `yarn start` for development

```env
REACT_APP_SUPABASE_URL="YOUR_SUPABASE_URL"
REACT_APP_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

# Useful Information

- [Supabase](https://supabase.com/)
- [React Router Dom](https://reactrouter.com/en/main/start/tutorial)
- [Styled Components](https://styled-components.com/docs/basics)

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:4100](http://localhost:4100) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

More details about [Available scripts](https://create-react-app.dev/docs/available-scripts)

To learn React, check out the [React documentation](https://reactjs.org/).