import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import { ErrorBoundary } from './components/ErrorBoundry';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //</ErrorBoundary>
);
