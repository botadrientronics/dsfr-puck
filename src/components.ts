// Liste complète des composants DSFR disponibles dans react-dsfr
// Basé sur : https://github.com/codegouvfr/react-dsfr/tree/main/src

export const DSFR_COMPONENTS = {
  // Formulaires
  "Button": "Bouton",
  "ButtonsGroup": "Groupe de boutons",
  "Input": "Champ de texte",
  "Textarea": "Zone de texte",
  "Select": "Sélecteur",
  "SelectNext": "Sélecteur avancé",
  "Checkbox": "Case à cocher",
  "RadioButtons": "Boutons radio",
  "ToggleSwitch": "Interrupteur",
  "ToggleSwitchGroup": "Groupe d'interrupteurs",
  "Range": "Curseur",
  "Upload": "Téléversement",
  
  // Affichage
  "Badge": "Badge",
  "Tag": "Tag",
  "TagsGroup": "Groupe de tags",
  "Alert": "Alerte",
  "CallOut": "Encadré",
  "Quote": "Citation",
  "Highlight": "Surlignage",
  "Notice": "Notification",
  "Download": "Téléchargement",
  
  // Conteneurs
  "Card": "Carte",
  "Accordion": "Accordéon",
  "Tabs": "Onglets",
  "Table": "Tableau",
  "Pagination": "Pagination",
  "Stepper": "Étapes",
  "Summary": "Résumé",
  
  // Navigation
  "Breadcrumb": "Fil d'Ariane",
  "SideMenu": "Menu latéral",
  "SkipLinks": "Liens de contour",
  "SegmentedControl": "Contrôle segmenté",
  
  // En-tête et pied de page
  "Header": "En-tête",
  "Footer": "Pied de page",
  
  // Recherche
  "SearchBar": "Barre de recherche",
  
  // Authentification
  "FranceConnectButton": "Bouton FranceConnect",
  "AgentConnectButton": "Bouton AgentConnect",
  "MonCompteProButton": "Bouton MonComptePro",
  "ProConnectButton": "Bouton ProConnect",
  
  // Graphiques
  "BarChart": "Graphique en barres",
  "LineChart": "Graphique en ligne",
  "MultiLineChart": "Graphique multi-lignes",
  "BarLineChart": "Graphique barres-lignes",
  "PieChart": "Camembert",
  "RadarChart": "Graphique radar",
  "GaugeChart": "Jauge",
  "ScatterChart": "Nuage de points",
  
  // Affichage spécial
  "Display": "Affichage",
  "Artwork": "Illustration",
  "ArtworkGov": "Illustration gouvernementale",
  
  // Suivi
  "Follow": "Suivi",
  
  // Langue
  "LanguageSelect": "Sélecteur de langue",
  
  // Divers
  "Modal": "Modale",
  "Tooltip": "Info-bulle",
  "Tile": "Tuile",
} as const;

export type DsfrComponentName = keyof typeof DSFR_COMPONENTS;

export interface DsfrComponentInfo {
  name: DsfrComponentName;
  displayName: string;
  supportLevel: 'full' | 'partial' | 'none';
  /**
   * Périmètre de la bibliothèque, orientée « éditeur de contenu de site statique » :
   * - `content`     : pertinent dans le corps d'une page → présent dans `puckConfig` par défaut ;
   * - `out-of-scope`: conservé et documenté, mais retiré de `puckConfig` (formulaires,
   *   en-tête/pied, navigation, authentification, recherche, graphiques, surcouches…).
   *   Réactivable via `fullPuckConfig`.
   */
  scope: 'content' | 'out-of-scope';
  description: string;
  propsDescription?: string;
  limitations?: string[];
  reactDsfrImport?: string;
}

// Composants hors périmètre pour un éditeur de contenu de site statique.
// Tout ce qui n'est pas dans cette liste est considéré comme du contenu de page.
export const OUT_OF_SCOPE_COMPONENT_NAMES = new Set<DsfrComponentName>([
  // Formulaires (pas de back-end sur un site statique)
  'Input', 'Textarea', 'Select', 'SelectNext', 'Checkbox', 'RadioButtons',
  'ToggleSwitch', 'ToggleSwitchGroup', 'Range', 'Upload', 'SegmentedControl',
  // Chrome / navigation (générés par le gabarit, pas par le contenu)
  'Header', 'Footer', 'SideMenu', 'SkipLinks', 'Breadcrumb', 'Pagination', 'LanguageSelect',
  // Recherche
  'SearchBar',
  // Authentification
  'FranceConnectButton', 'AgentConnectButton', 'MonCompteProButton', 'ProConnectButton',
  // Surcouches / usage technique
  'Modal', 'Tooltip', 'Display', 'Follow',
  // Graphiques (nécessitent @gouvfr/dsfr-chart, configuration lourde)
  'BarChart', 'LineChart', 'MultiLineChart', 'BarLineChart',
  'PieChart', 'RadarChart', 'GaugeChart', 'ScatterChart',
  // Illustrations : absentes de react-dsfr 1.x → remplacées par la primitive `Image`
  'Artwork', 'ArtworkGov',
]);

// Niveaux de support pour Puck.
// `scope` est calculé plus bas à partir de `OUT_OF_SCOPE_COMPONENT_NAMES` :
// on ne le répète donc pas dans chaque entrée.
type RawComponentInfo = Omit<DsfrComponentInfo, 'scope'>;

const RAW_DSFR_COMPONENTS_SUPPORT: Record<DsfrComponentName, RawComponentInfo> = {
  // Formulaires - Support complet
  Button: {
    name: "Button",
    displayName: "Bouton",
    supportLevel: "full",
    description: "Bouton DSFR avec support des variantes (primaire, secondaire, tertiaire), tailles, icônes et états",
    propsDescription: "children, variant, size, disabled, iconId, iconPosition, type, onClick, className",
    reactDsfrImport: "Button",
  },
  
  ButtonsGroup: {
    name: "ButtonsGroup",
    displayName: "Groupe de boutons",
    supportLevel: "full",
    description: "Groupe de boutons alignés horizontalement ou verticalement",
    propsDescription: "buttons, direction, alignment, className",
    reactDsfrImport: "ButtonsGroup",
  },
  
  Input: {
    name: "Input",
    displayName: "Champ de texte",
    supportLevel: "full",
    description: "Champ de texte avec support des états (succès, erreur), indices et labels",
    propsDescription: "label, placeholder, nativeInputProps, hint, state, stateRelatedMessage, className",
    reactDsfrImport: "Input",
  },
  
  Textarea: {
    name: "Textarea",
    displayName: "Zone de texte",
    supportLevel: "full",
    description: "Zone de texte multi-lignes avec support complet",
    propsDescription: "label, placeholder, rows, hint, state, stateRelatedMessage, className",
    reactDsfrImport: "Textarea",
  },
  
  Select: {
    name: "Select",
    displayName: "Sélecteur",
    supportLevel: "full",
    description: "Sélecteur dropdown avec support des options et états",
    propsDescription: "label, options, nativeSelectProps, hint, state, stateRelatedMessage, className",
    reactDsfrImport: "Select",
  },
  
  SelectNext: {
    name: "SelectNext",
    displayName: "Sélecteur avancé",
    supportLevel: "partial",
    description: "Sélecteur avec recherche et sélection multiple (nécessite configuration avancée)",
    propsDescription: "label, options, placeholder, hint, state, className",
    limitations: ["Configuration des options complexe", "Nécéssite gestion manuelle des options"],
    reactDsfrImport: "SelectNext",
  },
  
  Checkbox: {
    name: "Checkbox",
    displayName: "Case à cocher",
    supportLevel: "full",
    description: "Case à cocher avec support des états et indices",
    propsDescription: "label, nativeInputProps, hint, state, stateRelatedMessage, className",
    reactDsfrImport: "Checkbox",
  },
  
  RadioButtons: {
    name: "RadioButtons",
    displayName: "Boutons radio",
    supportLevel: "full",
    description: "Groupe de boutons radio avec support complet",
    propsDescription: "legend, options, hint, state, className",
    reactDsfrImport: "RadioButtons",
  },
  
  ToggleSwitch: {
    name: "ToggleSwitch",
    displayName: "Interrupteur",
    supportLevel: "full",
    description: "Interrupteur on/off avec support des états",
    propsDescription: "label, checked, onChange, disabled, hint, state, className",
    reactDsfrImport: "ToggleSwitch",
  },
  
  ToggleSwitchGroup: {
    name: "ToggleSwitchGroup",
    displayName: "Groupe d'interrupteurs",
    supportLevel: "full",
    description: "Groupe d'interrupteurs avec légende",
    propsDescription: "legend, switches, hint, className",
    reactDsfrImport: "ToggleSwitchGroup",
  },
  
  Range: {
    name: "Range",
    displayName: "Curseur",
    supportLevel: "full",
    description: "Curseur de plage avec support complet",
    propsDescription: "label, min, max, step, value, onChange, hint, className",
    reactDsfrImport: "Range",
  },
  
  Upload: {
    name: "Upload",
    displayName: "Téléversement",
    supportLevel: "partial",
    description: "Composant de téléversement de fichiers",
    propsDescription: "label, hint, nativeInputProps, className",
    limitations: ["Gestion des fichiers côté client nécessaire", "Style limité dans Puck"],
    reactDsfrImport: "Upload",
  },
  
  // Affichage - Support complet
  Badge: {
    name: "Badge",
    displayName: "Badge",
    supportLevel: "full",
    description: "Badge avec support des types (info, succès, avertissement, erreur, nouveau) et tailles",
    propsDescription: "children, type, size, className",
    reactDsfrImport: "Badge",
  },
  
  Tag: {
    name: "Tag",
    displayName: "Tag",
    supportLevel: "full",
    description: "Tag avec support de la suppression",
    propsDescription: "children, dismissible, onDismiss, className",
    reactDsfrImport: "Tag",
  },
  
  TagsGroup: {
    name: "TagsGroup",
    displayName: "Groupe de tags",
    supportLevel: "full",
    description: "Groupe de tags avec labels",
    propsDescription: "tags, label, className",
    reactDsfrImport: "TagsGroup",
  },
  
  Alert: {
    name: "Alert",
    displayName: "Alerte",
    supportLevel: "full",
    description: "Alerte avec support des types et fermeture",
    propsDescription: "type, title, description, closable, className",
    reactDsfrImport: "Alert",
  },
  
  CallOut: {
    name: "CallOut",
    displayName: "Encadré",
    supportLevel: "full",
    description: "Encadré informatif avec icône et types",
    propsDescription: "type, title, text, iconId, className",
    reactDsfrImport: "CallOut",
  },
  
  Quote: {
    name: "Quote",
    displayName: "Citation",
    supportLevel: "full",
    description: "Citation avec auteur et source",
    propsDescription: "children, author, source, className",
    reactDsfrImport: "Quote",
  },
  
  Highlight: {
    name: "Highlight",
    displayName: "Surlignage",
    supportLevel: "full",
    description: "Texte surligné pour mise en évidence",
    propsDescription: "children, className",
    reactDsfrImport: "Highlight",
  },
  
  Notice: {
    name: "Notice",
    displayName: "Notification",
    supportLevel: "full",
    description: "Bandeau d'information avec titre, description, lien et fermeture",
    propsDescription: "title, description, severity, link, isClosable, className",
    reactDsfrImport: "Notice",
  },

  Download: {
    name: "Download",
    displayName: "Téléchargement",
    supportLevel: "full",
    description: "Lien de téléchargement de fichier avec libellé et détails (format, poids)",
    propsDescription: "label, details, linkProps.href, className",
    reactDsfrImport: "Download",
  },
  
  // Conteneurs - Support complet
  Card: {
    name: "Card",
    displayName: "Carte",
    supportLevel: "full",
    description: "Carte avec image, titre, description et contenu",
    propsDescription: "title, desc, imageUrl, imageAlt, children, size, horizontal, className",
    reactDsfrImport: "Card",
  },
  
  Accordion: {
    name: "Accordion",
    displayName: "Accordéon",
    supportLevel: "full",
    description: "Accordéon avec support de l'ouverture/fermeture",
    propsDescription: "title, children, defaultOpen, className",
    reactDsfrImport: "Accordion",
  },
  
  Tabs: {
    name: "Tabs",
    displayName: "Onglets",
    supportLevel: "full",
    description: "Onglets avec navigation et contenu",
    propsDescription: "tabs, defaultActiveTab, className",
    reactDsfrImport: "Tabs",
  },
  
  Table: {
    name: "Table",
    displayName: "Tableau",
    supportLevel: "full",
    description: "Tableau avec en-têtes et données",
    propsDescription: "headers, data, caption, className",
    reactDsfrImport: "Table",
  },
  
  Pagination: {
    name: "Pagination",
    displayName: "Pagination",
    supportLevel: "partial",
    description: "Pagination avec navigation entre pages",
    propsDescription: "currentPage, pagesCount, onChange, className",
    limitations: ["Gestion de la logique de pagination externe nécessaire"],
    reactDsfrImport: "Pagination",
  },
  
  Stepper: {
    name: "Stepper",
    displayName: "Étapes",
    supportLevel: "full",
    description: "Composant d'étapes pour processus multi-étapes",
    propsDescription: "currentStep, steps, className",
    reactDsfrImport: "Stepper",
  },
  
  Summary: {
    name: "Summary",
    displayName: "Résumé",
    supportLevel: "full",
    description: "Résumé avec liens vers sections",
    propsDescription: "links, title, className",
    reactDsfrImport: "Summary",
  },
  
  // Navigation - Support complet
  Breadcrumb: {
    name: "Breadcrumb",
    displayName: "Fil d'Ariane",
    supportLevel: "full",
    description: "Fil d'Ariane pour navigation hiérarchique",
    propsDescription: "segments, className",
    reactDsfrImport: "Breadcrumb",
  },
  
  SideMenu: {
    name: "SideMenu",
    displayName: "Menu latéral",
    supportLevel: "partial",
    description: "Menu latéral avec sections et liens",
    propsDescription: "menuId, items, buttonLabel, className",
    limitations: ["Configuration complexe des items", "Nécéssite gestion manuelle de l'état"],
    reactDsfrImport: "SideMenu",
  },
  
  SkipLinks: {
    name: "SkipLinks",
    displayName: "Liens de contour",
    supportLevel: "full",
    description: "Liens pour contourner la navigation",
    propsDescription: "links, className",
    reactDsfrImport: "SkipLinks",
  },
  
  SegmentedControl: {
    name: "SegmentedControl",
    displayName: "Contrôle segmenté",
    supportLevel: "full",
    description: "Contrôle segmenté pour sélection entre options",
    propsDescription: "segments, defaultValue, onChange, className",
    reactDsfrImport: "SegmentedControl",
  },
  
  // En-tête et pied de page - Support partiel (complexité)
  Header: {
    name: "Header",
    displayName: "En-tête",
    supportLevel: "partial",
    description: "En-tête DSFR complet avec navigation et outils",
    propsDescription: "serviceTitle, serviceDescription, operatorLogo, navigation, tools, className",
    limitations: [
      "Configuration complexe",
      "Nécéssite gestion manuelle de la navigation",
      "Meilleur pour utilisation directe dans l'application"
    ],
    reactDsfrImport: "Header",
  },
  
  Footer: {
    name: "Footer",
    displayName: "Pied de page",
    supportLevel: "partial",
    description: "Pied de page DSFR complet avec liens et informations",
    propsDescription: "accessibilityStatus, bottomItems, columns, className",
    limitations: [
      "Configuration complexe",
      "Nécéssite gestion manuelle des colonnes et liens",
      "Meilleur pour utilisation directe dans l'application"
    ],
    reactDsfrImport: "Footer",
  },
  
  // Recherche
  SearchBar: {
    name: "SearchBar",
    displayName: "Barre de recherche",
    supportLevel: "partial",
    description: "Barre de recherche avec bouton",
    propsDescription: "placeholder, onSearch, buttonLabel, className",
    limitations: ["Gestion de la logique de recherche externe nécessaire"],
    reactDsfrImport: "SearchBar",
  },
  
  // Authentification - Support complet
  FranceConnectButton: {
    name: "FranceConnectButton",
    displayName: "Bouton FranceConnect",
    supportLevel: "full",
    description: "Bouton pour connexion via FranceConnect",
    propsDescription: "onClick, className",
    reactDsfrImport: "FranceConnectButton",
  },
  
  AgentConnectButton: {
    name: "AgentConnectButton",
    displayName: "Bouton AgentConnect",
    supportLevel: "full",
    description: "Bouton pour connexion via AgentConnect",
    propsDescription: "onClick, className",
    reactDsfrImport: "AgentConnectButton",
  },
  
  MonCompteProButton: {
    name: "MonCompteProButton",
    displayName: "Bouton MonComptePro",
    supportLevel: "full",
    description: "Bouton pour connexion via MonComptePro",
    propsDescription: "onClick, className",
    reactDsfrImport: "MonCompteProButton",
  },
  
  ProConnectButton: {
    name: "ProConnectButton",
    displayName: "Bouton ProConnect",
    supportLevel: "full",
    description: "Bouton pour connexion via ProConnect",
    propsDescription: "onClick, className",
    reactDsfrImport: "ProConnectButton",
  },
  
  // Graphiques - Support partiel (nécessite @gouvfr/dsfr-chart)
  BarChart: {
    name: "BarChart",
    displayName: "Graphique en barres",
    supportLevel: "partial",
    description: "Graphique en barres (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "BarChart",
  },
  
  LineChart: {
    name: "LineChart",
    displayName: "Graphique en ligne",
    supportLevel: "partial",
    description: "Graphique en ligne (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "LineChart",
  },
  
  MultiLineChart: {
    name: "MultiLineChart",
    displayName: "Graphique multi-lignes",
    supportLevel: "partial",
    description: "Graphique avec plusieurs lignes (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "MultiLineChart",
  },
  
  BarLineChart: {
    name: "BarLineChart",
    displayName: "Graphique barres-lignes",
    supportLevel: "partial",
    description: "Graphique combiné barres et lignes (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "BarLineChart",
  },
  
  PieChart: {
    name: "PieChart",
    displayName: "Camembert",
    supportLevel: "partial",
    description: "Graphique camembert (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "PieChart",
  },
  
  RadarChart: {
    name: "RadarChart",
    displayName: "Graphique radar",
    supportLevel: "partial",
    description: "Graphique radar (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "RadarChart",
  },
  
  GaugeChart: {
    name: "GaugeChart",
    displayName: "Jauge",
    supportLevel: "partial",
    description: "Graphique de jauge (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "GaugeChart",
  },
  
  ScatterChart: {
    name: "ScatterChart",
    displayName: "Nuage de points",
    supportLevel: "partial",
    description: "Graphique de dispersion (nécessite @gouvfr/dsfr-chart)",
    propsDescription: "data, options, className",
    limitations: ["Nécessite installation de @gouvfr/dsfr-chart", "Configuration complexe des données"],
    reactDsfrImport: "ScatterChart",
  },
  
  // Affichage spécial
  Display: {
    name: "Display",
    displayName: "Affichage",
    supportLevel: "partial",
    description: "Composant d'affichage pour écrans",
    propsDescription: "children, className",
    limitations: ["Utilisation spécifique aux écrans", "Peu utile dans Puck"],
    reactDsfrImport: "Display",
  },
  
  Artwork: {
    name: "Artwork",
    displayName: "Illustration",
    supportLevel: "full",
    description: "Illustration avec image et légende",
    propsDescription: "imageUrl, alt, className",
    reactDsfrImport: "Artwork",
  },
  
  ArtworkGov: {
    name: "ArtworkGov",
    displayName: "Illustration gouvernementale",
    supportLevel: "full",
    description: "Illustration avec style gouvernemental",
    propsDescription: "className",
    reactDsfrImport: "ArtworkGov",
  },
  
  // Suivi
  Follow: {
    name: "Follow",
    displayName: "Suivi",
    supportLevel: "partial",
    description: "Composant de suivi (réseaux sociaux, etc.)",
    propsDescription: "type, url, label, className",
    limitations: ["Configuration spécifique nécessaire"],
    reactDsfrImport: "Follow",
  },
  
  // Langue
  LanguageSelect: {
    name: "LanguageSelect",
    displayName: "Sélecteur de langue",
    supportLevel: "full",
    description: "Sélecteur de langue avec options",
    propsDescription: "languages, selectedLanguage, onChange, className",
    reactDsfrImport: "LanguageSelect",
  },
  
  // Divers
  Modal: {
    name: "Modal",
    displayName: "Modale",
    supportLevel: "partial",
    description: "Modale pour affichage de contenu",
    propsDescription: "children, title, isOpen, onClose, className",
    limitations: ["Gestion de l'état (isOpen/onClose) externe nécessaire"],
    reactDsfrImport: "Modal",
  },
  
  Tooltip: {
    name: "Tooltip",
    displayName: "Info-bulle",
    supportLevel: "partial",
    description: "Info-bulle pour aide contextuelle",
    propsDescription: "children, text, position, className",
    limitations: ["Positionnement complexe dans Puck"],
    reactDsfrImport: "Tooltip",
  },
  
  Tile: {
    name: "Tile",
    displayName: "Tuile",
    supportLevel: "full",
    description: "Tuile pour affichage de contenu",
    propsDescription: "children, title, desc, imageUrl, className",
    reactDsfrImport: "Tile",
  },
};

// Enrichit chaque entrée avec son `scope` (contenu vs hors périmètre).
export const DSFR_COMPONENTS_SUPPORT: Record<DsfrComponentName, DsfrComponentInfo> =
  Object.fromEntries(
    (Object.entries(RAW_DSFR_COMPONENTS_SUPPORT) as [DsfrComponentName, RawComponentInfo][]).map(
      ([name, info]) => [
        name,
        {
          ...info,
          scope: OUT_OF_SCOPE_COMPONENT_NAMES.has(name) ? 'out-of-scope' : 'content',
        } as DsfrComponentInfo,
      ]
    )
  ) as Record<DsfrComponentName, DsfrComponentInfo>;

// Composants DSFR dans la config Puck par défaut (corps de page).
export const IN_SCOPE_COMPONENTS = (
  Object.entries(DSFR_COMPONENTS_SUPPORT) as [DsfrComponentName, DsfrComponentInfo][]
)
  .filter(([, info]) => info.scope === 'content')
  .map(([name]) => name);

// Composants DSFR conservés mais retirés de la config par défaut (opt-in).
export const OUT_OF_SCOPE_COMPONENTS = (
  Object.entries(DSFR_COMPONENTS_SUPPORT) as [DsfrComponentName, DsfrComponentInfo][]
)
  .filter(([, info]) => info.scope === 'out-of-scope')
  .map(([name]) => name);

/** @deprecated Utiliser `IN_SCOPE_COMPONENTS`. */
export const SUPPORTED_COMPONENTS = IN_SCOPE_COMPONENTS;

// Statistiques par périmètre.
export const getSupportStats = () => {
  const values = Object.values(DSFR_COMPONENTS_SUPPORT);
  const total = values.length;
  const inScope = values.filter((c) => c.scope === 'content').length;
  const outOfScope = values.filter((c) => c.scope === 'out-of-scope').length;
  const full = values.filter((c) => c.supportLevel === 'full').length;
  const partial = values.filter((c) => c.supportLevel === 'partial').length;

  return {
    total,
    inScope,
    outOfScope,
    full,
    partial,
    inScopePercentage: Math.round((inScope / total) * 100),
    outOfScopePercentage: Math.round((outOfScope / total) * 100),
  };
};
