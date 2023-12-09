import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// import { Store,persistor } from './redux/store/Store.js';
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={Store}>
  // <PersistGate loading={null} persistor={persistor}>
  <App />
  // </PersistGate>
  // </Provider>
);

