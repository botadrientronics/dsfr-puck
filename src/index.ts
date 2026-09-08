// dsfr-puck - Intégration complète de @codegouvfr/react-dsfr avec Puck Editor
// ==========================================================================

// Export de la configuration Puck
export { puckConfig, generateFullPuckConfig } from './puckConfig.complete';
export { default as defaultPuckConfig } from './puckConfig.complete';

// Export des informations sur les composants
export {
  DSFR_COMPONENTS,
  DSFR_COMPONENTS_SUPPORT,
  SUPPORTED_COMPONENTS,
  getSupportStats,
} from './components';

// Export des types
export type { PuckConfig, PuckComponentConfig } from './types';
export type { DsfrComponentName, DsfrComponentInfo } from './components';
