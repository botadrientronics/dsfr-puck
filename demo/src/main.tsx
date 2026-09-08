import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialisation de react-dsfr
import { start } from '@codegouvfr/react-dsfr';

// Démarrer react-dsfr
start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
