import React, { useState } from 'react';
import { Puck, Render } from '@puckeditor/core';
import type { Data } from '@puckeditor/core';
import { puckConfig, DSFR_COMPONENTS_SUPPORT, getSupportStats } from 'dsfr-puck';
import '@codegouvfr/react-dsfr/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dsfr/utility/utility.min.css';

// Données Puck initiales. Chaque composant doit porter un `props.id` unique
// (requis par Puck pour indexer l'arbre de calques).
const initialData: Data = {
  root: { props: {} },
  content: [
    {
      type: 'DsfrButton',
      props: {
        id: 'button-1',
        children: 'Bouton Primaire',
        variant: 'primary',
        size: 'md',
      },
    },
    {
      type: 'DsfrCard',
      props: {
        id: 'card-1',
        title: 'Bienvenue dans dsfr-puck',
        desc: "Cette démo montre l'intégration des composants DSFR avec Puck Editor.",
        size: 'md',
      },
    },
    {
      type: 'DsfrAlert',
      props: {
        id: 'alert-1',
        severity: 'info',
        title: 'Information',
        description: 'Vous pouvez modifier ce contenu directement dans l\'éditeur.',
      },
    },
  ],
  zones: {},
};

const App = () => {
  const [data, setData] = useState<Data>(initialData);

  const [viewMode, setViewMode] = useState<'editor' | 'preview'>('editor');

  const handlePublish = (newData: Data) => {
    console.log('Données sauvegardées:', newData);
    setData(newData);
  };

  const supportStats = getSupportStats();

  return (
    <div className="fr-container" style={{ padding: '2rem 0' }}>
      {/* En-tête */}
      <header className="fr-header" style={{ marginBottom: '2rem' }}>
        <div className="fr-header__body">
          <div className="fr-header__brand fr-enlarge-link">
            <div className="fr-header__brand-top">
              <div className="fr-header__logo">
                <p className="fr-logo">
                  République
                  <br />
                  Française
                </p>
              </div>
              <div className="fr-header__operator">
                <p className="fr-operator">dsfr-puck</p>
              </div>
            </div>
            <div className="fr-header__service">
              <p className="fr-header__service-title">Demo - Éditeur Puck avec DSFR</p>
              <p className="fr-header__service-tagline">Testez tous les composants DSFR</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="fr-breadcrumb" aria-label="Fil d'Ariane">
        <ol className="fr-breadcrumb__list">
          <li>
            <a className="fr-breadcrumb__link" href="/">
              Accueil
            </a>
          </li>
          <li aria-current="page">Demo</li>
        </ol>
      </nav>

      {/* Statistiques de support */}
      <div 
        className="fr-callout fr-callout--info"
        style={{ marginBottom: '2rem' }}
      >
        <div className="fr-callout__icon">
          <span className="fr-icon-information-line" aria-hidden="true" />
        </div>
        <div className="fr-callout__text">
          <h3 className="fr-callout__title">Statistiques de support</h3>
          <p>
            <strong>{supportStats.full}</strong> composants pleinement supportés ({supportStats.fullPercentage}%) | 
            <strong>{supportStats.partial}</strong> partiellement supportés ({supportStats.partialPercentage}%) | 
            <strong>{supportStats.total}</strong> composants au total
          </p>
        </div>
      </div>

      {/* Sélecteur de mode */}
      <div className="fr-segmented-control" style={{ marginBottom: '2rem' }}>
        <div className="fr-segmented-control__list">
          <button
            type="button"
            className={`fr-segmented-control__button ${viewMode === 'editor' ? 'fr-segmented-control__button--active' : ''}`}
            onClick={() => setViewMode('editor')}
          >
            Éditeur
          </button>
          <button
            type="button"
            className={`fr-segmented-control__button ${viewMode === 'preview' ? 'fr-segmented-control__button--active' : ''}`}
            onClick={() => setViewMode('preview')}
          >
            Aperçu
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <main id="main" className="fr-main">
        {viewMode === 'editor' ? (
          <div className="fr-card fr-card--bordered">
            <div className="fr-card__body">
              <h2 className="fr-card__title">Éditeur Puck</h2>
              <p className="fr-card__desc">
                Glissez-déposez les composants DSFR ci-dessous pour créer votre page.
              </p>
              <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
                <Puck
                  config={puckConfig}
                  data={data}
                  onPublish={handlePublish}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="fr-card fr-card--bordered">
            <div className="fr-card__body">
              <h2 className="fr-card__title">Aperçu</h2>
              <p className="fr-card__desc">
                Voici le rendu final de votre contenu.
              </p>
              <div 
                className="fr-container"
                style={{ 
                  border: '1px solid #ddd', 
                  padding: '2rem', 
                  borderRadius: '4px',
                  backgroundColor: '#fff'
                }}
              >
                <Render config={puckConfig} data={data} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Liste des composants disponibles */}
      <section style={{ marginTop: '3rem' }}>
        <h2>Composants DSFR disponibles dans Puck</h2>
        
        <div className="fr-tabs">
          <ul className="fr-tabs__list" role="tablist">
            <li role="presentation">
              <button 
                type="button" 
                role="tab"
                aria-selected="true"
                aria-controls="panel-full"
                tabIndex={0}
                className="fr-tabs__tab fr-tabs__tab--active"
              >
                Support complet ({supportStats.full})
              </button>
            </li>
            <li role="presentation">
              <button 
                type="button" 
                role="tab"
                aria-selected="false"
                aria-controls="panel-partial"
                tabIndex={-1}
                className="fr-tabs__tab"
              >
                Support partiel ({supportStats.partial})
              </button>
            </li>
          </ul>
          
          <div id="panel-full" className="fr-tabs__panel fr-tabs__panel--selected">
            <div className="fr-grid-row fr-grid-row--gutters">
              {Object.entries(DSFR_COMPONENTS_SUPPORT)
                .filter(([_, info]) => info.supportLevel === 'full')
                .map(([name, info]) => (
                  <div key={name} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                    <div className="fr-card fr-card--sm fr-card--bordered" style={{ marginBottom: '1rem' }}>
                      <div className="fr-card__body">
                        <h3 className="fr-card__title">
                          <code>Dsfr{name}</code>
                        </h3>
                        <p className="fr-card__desc">
                          <strong>{info.displayName}</strong>
                          <br />
                          <small>{info.description}</small>
                        </p>
                        <div className="fr-badge fr-badge--success">Support complet</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          <div id="panel-partial" className="fr-tabs__panel" hidden>
            <div className="fr-grid-row fr-grid-row--gutters">
              {Object.entries(DSFR_COMPONENTS_SUPPORT)
                .filter(([_, info]) => info.supportLevel === 'partial')
                .map(([name, info]) => (
                  <div key={name} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                    <div className="fr-card fr-card--sm fr-card--bordered" style={{ marginBottom: '1rem' }}>
                      <div className="fr-card__body">
                        <h3 className="fr-card__title">
                          <code>Dsfr{name}</code>
                        </h3>
                        <p className="fr-card__desc">
                          <strong>{info.displayName}</strong>
                          <br />
                          <small>{info.description}</small>
                          {info.limitations && (
                            <>
                              <br />
                              <small className="fr-text--warning">
                                Limitations: {info.limitations.join(', ')}
                              </small>
                            </>
                          )}
                        </p>
                        <div className="fr-badge fr-badge--warning">Support partiel</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="fr-footer" style={{ marginTop: '3rem' }}>
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <p>
              <a href="/" title="Retour à l'accueil">
                <span className="fr-logo">République Française</span>
              </a>
            </p>
            <p>dsfr-puck - Intégration Puck + DSFR</p>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="https://github.com/botadrientronics/dsfr-puck" target="_blank" rel="noopener noreferrer">
                Code source
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="https://www.systeme-de-design.gouv.fr/" target="_blank" rel="noopener noreferrer">
                Système de Design de l'État
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="https://puckeditor.com/" target="_blank" rel="noopener noreferrer">
                Puck Editor
              </a>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les contenus de ce site sont sous 
              <a href="https://github.com/botadrientronics/dsfr-puck/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                licence MIT
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
