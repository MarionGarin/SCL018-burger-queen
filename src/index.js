import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// importando el contexto global aquí abajo:
import {ClientProvider} from './context/ClientContext'


ReactDOM.render(
  <React.StrictMode>
    <ClientProvider>
    <App />
    </ClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// por convención, este es el archivo que renderiza al componente llamado App, que contiene a los demás. 