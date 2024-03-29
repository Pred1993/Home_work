import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './p1-main/m1-ui/u1-app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './p2-homeworks/h10/bll/store';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500FF',
    },
    secondary: {
      main: '#000000',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
