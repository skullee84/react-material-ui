import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from './libs/theme';
import registerServiceWorker from './libs/registerServiceWorker';

import App from './components/App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>  
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
