import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { rootReducer } from './reducers/rootReducer';
import { theme } from './libs/theme';
import registerServiceWorker from './libs/registerServiceWorker';

import App from './components/App';

const configureStore = (history, initialState = {}) => {
  const enhancer = compose(
  applyMiddleware(ReduxThunk, routerMiddleware(history)));
  return createStore(rootReducer, initialState, enhancer);
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>  
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
