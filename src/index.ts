// dsfr-puck — éditeur de contenu de page pour sites statiques de l'État
// ====================================================================
// Combine les composants @codegouvfr/react-dsfr utiles au corps d'une page
// avec des primitives de contenu (titre, texte riche, image…) dans Puck.

// Configurations Puck
export {
  puckConfig,
  fullPuckConfig,
  contentComponentsPuckConfig,
  outOfScopeComponentsPuckConfig,
  generateContentPuckConfig,
  generateOutOfScopePuckConfig,
  generateFullPuckConfig,
} from './puckConfig';
export { default as defaultPuckConfig } from './puckConfig';

// Primitives de contenu (blocs maison)
export { contentComponentsConfig, CONTENT_PRIMITIVES } from './components/content';

// Métadonnées sur les composants DSFR
export {
  DSFR_COMPONENTS,
  DSFR_COMPONENTS_SUPPORT,
  IN_SCOPE_COMPONENTS,
  OUT_OF_SCOPE_COMPONENTS,
  OUT_OF_SCOPE_COMPONENT_NAMES,
  SUPPORTED_COMPONENTS,
  getSupportStats,
} from './components';

// Types
export type { PuckConfig, PuckComponentConfig, PuckCategory } from './types';
export type { DsfrComponentName, DsfrComponentInfo } from './components';
export type { PuckComponentDef, PuckField } from './components/content';
