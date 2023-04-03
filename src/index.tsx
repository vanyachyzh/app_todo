import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';

import 'bulma/css/bulma.css';
import './styles/index.scss';
import './styles/todoapp.scss';
import './styles/filter.scss';

import { App } from './App';

ReactDOM.render(
  <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AuthProvider>,
  document.getElementById('root'),
);
