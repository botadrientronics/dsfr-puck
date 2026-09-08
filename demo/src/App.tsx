import { useCallback, useMemo, useState } from 'react';
import { Puck } from '@puckeditor/core';
import type { Data } from '@puckeditor/core';
import { puckConfig, fullPuckConfig } from 'dsfr-puck';
import '@codegouvfr/react-dsfr/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dsfr/utility/utility.min.css';

const STORAGE_KEY = 'dsfr-puck-demo:data';

// Contenu initial : primitives de contenu + quelques composants DSFR de page.
// Chaque bloc porte un `props.id` unique (requis par Puck pour son arbre de calques).
const initialData: Data = {
  root: { props: {} },
  content: [
    {
      type: 'Heading',
      props: { id: 'h-1', text: 'Éditer le contenu d’une page', level: 'h2', display: '', anchorId: 'intro' },
    },
    {
      type: 'RichText',
      props: {
        id: 'rt-1',
        content:
          '<p>Glissez-déposez les blocs depuis le panneau de gauche. Les composants sont regroupés par usage : texte, médias, mise en avant, conteneurs, actions.</p>',
        size: 'md',
      },
    },
    {
      type: 'DsfrCallOut',
      props: {
        id: 'co-1',
        title: 'Bon à savoir',
        titleAs: 'h3',
        colorVariant: '',
        content: [
          {
            type: 'RichText',
            props: { id: 'co-rt-1', content: '<p>Le contenu d’un encadré est lui-même une zone de dépôt.</p>', size: 'md' },
          },
        ],
      },
    },
    {
      type: 'DsfrCard',
      props: {
        id: 'card-1',
        title: 'Une carte de contenu',
        titleAs: 'h3',
        desc: 'Titre, description, image, badge et lien.',
        size: 'medium',
        border: true,
        background: true,
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
    /* stockage indisponible : contenu initial */
  }
  return initialData;
};

const App = () => {
  const [data] = useState<Data>(loadData);
  const [showOutOfScope, setShowOutOfScope] = useState(false);

  const config = useMemo(
    () => (showOutOfScope ? fullPuckConfig : puckConfig),
    [showOutOfScope]
  );

  const handlePublish = useCallback((newData: Data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          padding: '0.5rem 1rem',
          borderBottom: '1px solid var(--border-default-grey, #ddd)',
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showOutOfScope}
            onChange={(e) => setShowOutOfScope(e.target.checked)}
          />
          Afficher les composants hors périmètre (formulaires, chrome, graphiques…)
        </label>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Puck config={config as any} data={data} onPublish={handlePublish} />
      </div>
    </div>
  );
};

export default App;
