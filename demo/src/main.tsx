import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialisation de react-dsfr (SPA)
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';

// Démarrer react-dsfr
startReactDsfr({ defaultColorScheme: 'system' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
