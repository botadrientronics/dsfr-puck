import { useCallback, useState } from 'react';
import { Puck } from '@puckeditor/core';
import type { Data } from '@puckeditor/core';
import { puckConfig } from 'dsfr-puck';
import '@codegouvfr/react-dsfr/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dsfr/utility/utility.min.css';

const STORAGE_KEY = 'dsfr-puck-demo:data';

// Contenu initial. Chaque composant doit porter un `props.id` unique
// (requis par Puck pour indexer l'arbre de calques).
const initialData: Data = {
  root: { props: {} },
  content: [
    {
      type: 'DsfrButton',
      props: { id: 'button-1', children: 'Bouton primaire', variant: 'primary', size: 'md' },
    },
    {
      type: 'DsfrCard',
      props: {
        id: 'card-1',
        title: 'Bienvenue dans dsfr-puck',
        desc: "Glissez-déposez les composants DSFR depuis le panneau de gauche.",
        size: 'md',
      },
    },
    {
      type: 'DsfrAlert',
      props: {
        id: 'alert-1',
        severity: 'info',
        title: 'Information',
        description: 'Cliquez sur « Publier » pour enregistrer votre page dans le navigateur.',
      },
    },
  ],
  zones: {},
};

const loadData = (): Data => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Data;
  } catch {
    /* stockage indisponible : on retombe sur le contenu initial */
  }
  return initialData;
};

const App = () => {
  const [data] = useState<Data>(loadData);

  const handlePublish = useCallback((newData: Data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Puck config={puckConfig} data={data} onPublish={handlePublish} />
    </div>
  );
};

export default App;
