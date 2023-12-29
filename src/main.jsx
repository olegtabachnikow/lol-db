import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store/store';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundry>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundry>
    </BrowserRouter>
  </React.StrictMode>
);
