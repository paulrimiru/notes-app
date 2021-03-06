import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, grey } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Router from './pages/Routes';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: deepOrange.A200,
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SnackbarProvider maxSnack={3}>
        <HashRouter>
          <Router />
        </HashRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
