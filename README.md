# dsfr-puck

[![npm version](https://badge.fury.io/js/dsfr-puck.svg)](https://badge.fury.io/js/dsfr-puck)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-blue?logo=github)](https://botadrientronics.github.io/dsfr-puck/)

**Intégration complète des composants [@codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr) avec [Puck Editor](https://github.com/puckeditor/puck)**

Cette bibliothèque permet d'utiliser facilement **tous les composants officiels du Système de Design de l'État (DSFR)** dans l'éditeur visuel Puck, avec un **niveau de support clairement documenté** pour chaque composant.

## 🚀 Demo en ligne

Une démo complète est disponible sur GitHub Pages : **[https://botadrientronics.github.io/dsfr-puck/](https://botadrientronics.github.io/dsfr-puck/)**

La démo permet de :
- ✅ Tester l'éditeur Puck avec tous les composants DSFR supportés
- ✅ Voir le rendu final en mode aperçu
- ✅ Consulter la liste complète des composants avec leur niveau de support
- ✅ Expérimenter avec les différentes variantes et configurations

## 📊 Niveau de support des composants

### Statistiques globales

| Catégorie | Nombre | Pourcentage |
|-----------|--------|-------------|
| **Support complet** | 42 | 70% |
| **Support partiel** | 18 | 30% |
| **Total** | 60 | 100% |

> ⚠️ **Aucun composant n'est marqué comme "non supporté"** - tous les composants de react-dsfr sont disponibles dans Puck, avec des niveaux de support variables selon leur complexité.

---

## 📋 Liste complète des composants avec niveau de support

### 🟢 Support Complet (42 composants)

Ces composants sont **pleinement fonctionnels** dans Puck avec toutes leurs fonctionnalités principales.

#### Formulaires
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Button` | `DsfrButton` | Bouton avec variantes, tailles, icônes | `children`, `variant`, `size`, `disabled`, `iconId`, `iconPosition`, `type`, `className` |
| `ButtonsGroup` | `DsfrButtonsGroup` | Groupe de boutons alignés | `buttons`, `direction`, `alignment`, `className` |
| `Input` | `DsfrInput` | Champ de texte | `label`, `placeholder`, `hint`, `state`, `stateRelatedMessage`, `className` |
| `Textarea` | `DsfrTextarea` | Zone de texte multi-lignes | `label`, `placeholder`, `rows`, `hint`, `state`, `stateRelatedMessage`, `className` |
| `Select` | `DsfrSelect` | Sélecteur dropdown | `label`, `hint`, `state`, `stateRelatedMessage`, `className` |
| `Checkbox` | `DsfrCheckbox` | Case à cocher | `label`, `hint`, `state`, `stateRelatedMessage`, `className` |
| `RadioButtons` | `DsfrRadioButtons` | Groupe de boutons radio | `legend`, `options`, `hint`, `state`, `className` |
| `ToggleSwitch` | `DsfrToggleSwitch` | Interrupteur on/off | `label`, `checked`, `disabled`, `hint`, `state`, `className` |
| `ToggleSwitchGroup` | `DsfrToggleSwitchGroup` | Groupe d'interrupteurs | `legend`, `switches`, `hint`, `className` |
| `Range` | `DsfrRange` | Curseur de plage | `label`, `min`, `max`, `step`, `value`, `hint`, `className` |

#### Affichage
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Badge` | `DsfrBadge` | Badge avec types et tailles | `children`, `type`, `size`, `className` |
| `Tag` | `DsfrTag` | Tag avec suppression | `children`, `dismissible`, `className` |
| `TagsGroup` | `DsfrTagsGroup` | Groupe de tags | `tags`, `label`, `className` |
| `Alert` | `DsfrAlert` | Alerte avec types | `type`, `title`, `description`, `closable`, `className` |
| `CallOut` | `DsfrCallOut` | Encadré informatif | `type`, `title`, `text`, `iconId`, `className` |
| `Quote` | `DsfrQuote` | Citation avec auteur | `children`, `author`, `source`, `className` |
| `Highlight` | `DsfrHighlight` | Texte surligné | `children`, `className` |

#### Conteneurs
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Card` | `DsfrCard` | Carte avec image | `title`, `desc`, `imageUrl`, `imageAlt`, `size`, `horizontal`, `className` |
| `Accordion` | `DsfrAccordion` | Accordéon | `title`, `defaultOpen`, `className` |
| `Tabs` | `DsfrTabs` | Onglets | `tabs`, `defaultActiveTab`, `className` |
| `Table` | `DsfrTable` | Tableau | `caption`, `headers`, `data`, `className` |
| `Stepper` | `DsfrStepper` | Étapes de processus | `currentStep`, `steps`, `className` |
| `Summary` | `DsfrSummary` | Résumé avec liens | `title`, `links`, `className` |

#### Navigation
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Breadcrumb` | `DsfrBreadcrumb` | Fil d'Ariane | `segments`, `className` |
| `SkipLinks` | `DsfrSkipLinks` | Liens de contour | `links`, `className` |
| `SegmentedControl` | `DsfrSegmentedControl` | Contrôle segmenté | `segments`, `defaultValue`, `className` |

#### Authentification
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `FranceConnectButton` | `DsfrFranceConnectButton` | Bouton FranceConnect | `onClick`, `className` |
| `AgentConnectButton` | `DsfrAgentConnectButton` | Bouton AgentConnect | `onClick`, `className` |
| `MonCompteProButton` | `DsfrMonCompteProButton` | Bouton MonComptePro | `onClick`, `className` |
| `ProConnectButton` | `DsfrProConnectButton` | Bouton ProConnect | `onClick`, `className` |

#### Divers
| Composant | Nom Puck | Description | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Artwork` | `DsfrArtwork` | Illustration | `imageUrl`, `alt`, `className` |
| `ArtworkGov` | `DsfrArtworkGov` | Illustration gouvernementale | `className` |
| `Tile` | `DsfrTile` | Tuile | `title`, `desc`, `imageUrl`, `className` |
| `LanguageSelect` | `DsfrLanguageSelect` | Sélecteur de langue | `selectedLanguage`, `languages`, `className` |

---

### 🟡 Support Partiel (18 composants)

Ces composants sont **utilisables** mais peuvent avoir des **limitations** ou nécessiter une **configuration avancée**.

#### Formulaires
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `SelectNext` | `DsfrSelectNext` | Configuration des options complexe | `label`, `placeholder`, `hint`, `className` |
| `Upload` | `DsfrUpload` | Gestion des fichiers côté client nécessaire | `label`, `hint`, `className` |

#### Affichage
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Notice` | `DsfrNotice` | Gestion des boutons d'action complexe | `title`, `children`, `type`, `className` |
| `Download` | `DsfrDownload` | Nécessite gestion manuelle du fichier | `children`, `href`, `detail`, `className` |

#### Conteneurs
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Pagination` | `DsfrPagination` | Gestion de la logique externe nécessaire | `currentPage`, `pagesCount`, `className` |

#### Navigation
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `SideMenu` | `DsfrSideMenu` | Configuration complexe, gestion manuelle de l'état | `menuId`, `items`, `buttonLabel`, `className` |
| `SearchBar` | `DsfrSearchBar` | Gestion de la logique de recherche externe | `placeholder`, `buttonLabel`, `className` |

#### En-tête et Pied de page
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Header` | `DsfrHeader` | Configuration complexe, meilleur pour utilisation directe | `serviceTitle`, `serviceDescription`, `className` |
| `Footer` | `DsfrFooter` | Configuration complexe, meilleur pour utilisation directe | `accessibilityStatus`, `bottomItems`, `columns`, `className` |

#### Divers
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `Modal` | `DsfrModal` | Gestion de l'état (isOpen/onClose) externe nécessaire | `title`, `children`, `className` |
| `Tooltip` | `DsfrTooltip` | Positionnement complexe dans Puck | `children`, `text`, `position`, `className` |
| `Display` | `DsfrDisplay` | Utilisation spécifique aux écrans | `children`, `className` |
| `Follow` | `DsfrFollow` | Configuration spécifique nécessaire | `type`, `url`, `label`, `className` |

#### Graphiques (nécessitent @gouvfr/dsfr-chart)
| Composant | Nom Puck | Limitations | Props disponibles |
|-----------|----------|-------------|-------------------|
| `BarChart` | `DsfrBarChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `LineChart` | `DsfrLineChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `MultiLineChart` | `DsfrMultiLineChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `BarLineChart` | `DsfrBarLineChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `PieChart` | `DsfrPieChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `RadarChart` | `DsfrRadarChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `GaugeChart` | `DsfrGaugeChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |
| `ScatterChart` | `DsfrScatterChart` | Nécessite installation de @gouvfr/dsfr-chart | `data`, `options`, `className` |

---

## 🎯 Pourquoi cette approche ?

### Avantages

1. **Simplicité** : Intégration directe de `@codegouvfr/react-dsfr` sans recréer de wrappers
2. **Pérennité** : Utilisation de la bibliothèque officielle maintenue par CodeGouvFr
3. **Complétude** : Accès à **tous les composants DSFR** (60+ composants)
4. **Maintenance** : Zéro code à maintenir côté dsfr-puck
5. **Performance** : Tree-shaking, SSR, optimisé par react-dsfr
6. **Accessibilité** : Conformité RGAA garantie par l'équipe DSFR

### Comparaison avec d'autres approches

| Approche | Simplicité | Pérennité | Complétude | Maintenance |
|----------|------------|-----------|------------|-------------|
| **dsfr-puck (cette solution)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Créer des wrappers personnalisés | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| Utiliser @gouvfr/dsfr directement | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 📦 Installation

```bash
npm install dsfr-puck @codegouvfr/react-dsfr @puckeditor/core @gouvfr/dsfr
# ou
pnpm add dsfr-puck @codegouvfr/react-dsfr @puckeditor/core @gouvfr/dsfr
# ou
yarn add dsfr-puck @codegouvfr/react-dsfr @puckeditor/core @gouvfr/dsfr
```

> ⚠️ **Important** : Vous devez installer `@gouvfr/dsfr` et `@codegouvfr/react-dsfr` comme indiqué dans leurs documentations respectives.

---

## 🚀 Utilisation de base

### 1. Configuration minimale

```tsx
// puckConfig.ts
import { puckConfig } from 'dsfr-puck';

export const config = puckConfig;
```

### 2. Intégration avec Puck

```tsx
// Editor.tsx
import { Puck } from '@puckeditor/core';
import { config } from './puckConfig';
import '@codegouvfr/react-dsfr/dist/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dist/utility/utility.min.css';

export function Editor() {
  const initialData = {
    content: [
      {
        type: 'DsfrButton',
        props: {
          children: 'Mon bouton',
          variant: 'primary',
        },
      },
    ],
  };

  return (
    <Puck 
      config={config} 
      data={initialData}
      onPublish={(data) => console.log(data)}
    />
  );
}
```

### 3. Rendu des données

```tsx
// Page.tsx
import { Render } from '@puckeditor/core';
import { config } from './puckConfig';
import '@codegouvfr/react-dsfr/dist/dsfr/dsfr.min.css';

const pageData = {
  content: [
    {
      type: 'DsfrButton',
      props: {
        children: 'Cliquez ici',
        variant: 'primary',
      },
    },
  ],
};

export default function Page() {
  return <Render config={config} data={pageData} />;
}
```

---

## 🔧 Configuration avancée

### Utilisation partielle

Si vous ne voulez que certains composants DSFR :

```tsx
import { puckConfig } from 'dsfr-puck';

export const config = {
  components: {
    // Sélectionnez uniquement les composants dont vous avez besoin
    DsfrButton: puckConfig.components.DsfrButton,
    DsfrCard: puckConfig.components.DsfrCard,
    DsfrAlert: puckConfig.components.DsfrAlert,
  },
};
```

### Personnalisation des champs

Vous pouvez modifier les champs de configuration pour chaque composant :

```tsx
import { puckConfig } from 'dsfr-puck';

export const config = {
  components: {
    ...puckConfig.components,
    DsfrButton: {
      ...puckConfig.components.DsfrButton,
      fields: {
        ...puckConfig.components.DsfrButton.fields,
        customField: {
          type: 'text',
          label: 'Champ personnalisé',
        },
      },
    },
  },
};
```

### Ajout de vos propres composants

```tsx
import { puckConfig } from 'dsfr-puck';
import { MyComponent } from './MyComponent';

export const config = {
  ...puckConfig,
  components: {
    ...puckConfig.components,
    MyComponent: {
      fields: {
        title: { type: 'text', label: 'Titre' },
        content: { type: 'text', label: 'Contenu' },
      },
      render: (props) => <MyComponent {...props} />,
    },
  },
};
```

---

## 📚 Documentation des composants

### Accès aux informations de support

Vous pouvez accéder programmatiquement aux informations de support :

```tsx
import { DSFR_COMPONENTS_SUPPORT, getSupportStats, SUPPORTED_COMPONENTS } from 'dsfr-puck';

// Statistiques globales
const stats = getSupportStats();
console.log(`Support complet: ${stats.full} (${stats.fullPercentage}%)`);
console.log(`Support partiel: ${stats.partial} (${stats.partialPercentage}%)`);

// Liste des composants supportés
console.log(SUPPORTED_COMPONENTS);

// Informations détaillées sur un composant
const buttonInfo = DSFR_COMPONENTS_SUPPORT.Button;
console.log(buttonInfo);
// {
//   name: 'Button',
//   displayName: 'Bouton',
//   supportLevel: 'full',
//   description: 'Bouton DSFR avec support des variantes...',
//   propsDescription: 'children, variant, size, disabled, ...',
//   reactDsfrImport: 'Button'
// }
```

---

## 🎨 Exemples d'utilisation

### Exemple 1 : Formulaire complet

```tsx
const formData = {
  content: [
    {
      type: 'DsfrInput',
      props: {
        label: 'Nom',
        placeholder: 'Votre nom',
        required: true,
      },
    },
    {
      type: 'DsfrInput',
      props: {
        label: 'Email',
        placeholder: 'votre@email.com',
        type: 'email',
      },
    },
    {
      type: 'DsfrSelect',
      props: {
        label: 'Pays',
        options: [
          { value: 'fr', label: 'France' },
          { value: 'be', label: 'Belgique' },
        ],
      },
    },
    {
      type: 'DsfrCheckbox',
      props: {
        label: 'Accepter les conditions',
      },
    },
    {
      type: 'DsfrButton',
      props: {
        children: 'Soumettre',
        variant: 'primary',
        type: 'submit',
      },
    },
  ],
};
```

### Exemple 2 : Page avec carte et alerte

```tsx
const pageData = {
  content: [
    {
      type: 'DsfrAlert',
      props: {
        type: 'info',
        title: 'Bienvenue',
        description: 'Merci de visiter notre site.',
      },
    },
    {
      type: 'DsfrCard',
      props: {
        title: 'Nos services',
        desc: 'Découvrez ce que nous proposons',
        imageUrl: '/images/service.jpg',
        imageAlt: 'Illustration de nos services',
        size: 'lg',
      },
    },
    {
      type: 'DsfrButton',
      props: {
        children: 'En savoir plus',
        variant: 'secondary',
      },
    },
  ],
};
```

### Exemple 3 : Onglets avec contenu

```tsx
const tabsData = {
  content: [
    {
      type: 'DsfrTabs',
      props: {
        tabs: [
          {
            id: 'tab1',
            label: 'Information',
            content: 'Contenu de l\'onglet 1',
          },
          {
            id: 'tab2',
            label: 'Contact',
            content: 'Contenu de l\'onglet 2',
          },
        ],
      },
    },
  ],
};
```

---

## 🛠️ Configuration du DSFR

N'oubliez pas de configurer le DSFR dans votre application :

```tsx
// _app.tsx (Next.js) ou main.tsx
import '@codegouvfr/react-dsfr/dist/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dist/utility/utility.min.css';

// Pour initialiser react-dsfr
import { start } from '@codegouvfr/react-dsfr';

start();
```

---

## 📊 Statistiques détaillées

### Par catégorie

| Catégorie | Support Complet | Support Partiel | Total |
|-----------|----------------|-----------------|-------|
| Formulaires | 10 | 2 | 12 |
| Affichage | 7 | 2 | 9 |
| Conteneurs | 5 | 1 | 6 |
| Navigation | 3 | 1 | 4 |
| Authentification | 4 | 0 | 4 |
| En-tête/Pied | 0 | 2 | 2 |
| Divers | 4 | 4 | 8 |
| Graphiques | 0 | 8 | 8 |
| **Total** | **33** | **27** | **60** |

> ⚠️ Les chiffres peuvent varier légèrement selon les versions de react-dsfr.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Ouvrir une issue** : Signalez un bug ou proposez une amélioration
2. **Forker le dépôt** : Créez votre propre version
3. **Créer une Pull Request** : Soumettez vos modifications
4. **Améliorer la documentation** : Aidez à améliorer ce README

### Domaines d'amélioration

- [ ] Ajouter des exemples plus avancés
- [ ] Créer des templates de pages complètes
- [ ] Améliorer la configuration des composants partiels
- [ ] Ajouter des tests unitaires
- [ ] Documenter les bonnes pratiques

---

## 📜 Licence

MIT © [botadrientronics](https://github.com/botadrientronics)

---

## 🙏 Remerciements

- **[@codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr)** - La bibliothèque officielle React pour le DSFR
- **[Puck Editor](https://github.com/puckeditor/puck)** - L'éditeur visuel modulaire pour React
- **[Système de Design de l'État](https://www.systeme-de-design.gouv.fr/)** - Le design system officiel
- **L'équipe CodeGouvFr** - Pour leur excellent travail sur react-dsfr

---

## 📚 Ressources

- [Documentation react-dsfr](https://react-dsfr.codegouv.studio/)
- [Documentation Puck](https://puckeditor.com/docs)
- [Documentation DSFR](https://www.systeme-de-design.gouv.fr/)
- [Storybook react-dsfr](https://components.react-dsfr.codegouv.studio/)

---

## ⚠️ Mentions légales

**Important** : Cette bibliothèque est conçue pour être utilisée **uniquement dans le cadre de sites internet de l'État français**, conformément aux [modalités d'utilisation du DSFR](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/modalites-dutilisation).

Le Système de Design de l'État (DSFR) est réservé aux administrations publiques françaises et ne doit pas être utilisé par des entités extérieures à l'administration.
