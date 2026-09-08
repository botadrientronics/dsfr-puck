# dsfr-puck

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-blue?logo=github)](https://botadrientronics.github.io/dsfr-puck/)

**Éditeur visuel de contenu de page pour les sites de l'État**, construit sur [Puck](https://puckeditor.com/) et [@codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr).

`dsfr-puck` fournit une configuration Puck prête à l'emploi, centrée sur **ce qui compose le corps d'une page** : titres, texte riche, images, encadrés, cartes, accordéons, tableaux…
Le gabarit du site (en-tête, pied de page, navigation, fil d'Ariane) est supposé **généré ailleurs** : les composants correspondants ne sont pas proposés par défaut.

## 🚀 Démo

**[botadrientronics.github.io/dsfr-puck](https://botadrientronics.github.io/dsfr-puck/)** — éditeur Puck complet, avec une case pour afficher aussi les composants hors périmètre.

## 📦 Installation

```bash
npm install dsfr-puck @codegouvfr/react-dsfr @puckeditor/core
```

`@codegouvfr/react-dsfr` (≥ 1.34) et `@puckeditor/core` (≥ 0.23) sont des `peerDependencies`.
Suivez la [mise en place de react-dsfr](https://react-dsfr.codegouv.studio/) pour votre framework.

## 🚀 Utilisation

### Éditeur

```tsx
import { Puck } from '@puckeditor/core';
import { puckConfig } from 'dsfr-puck';
import '@codegouvfr/react-dsfr/dsfr/dsfr.min.css';
import '@codegouvfr/react-dsfr/dsfr/utility/utility.min.css';

export function Editor() {
  return <Puck config={puckConfig} data={{ content: [], root: { props: {} } }} onPublish={save} />;
}
```

### Rendu

```tsx
import { Render } from '@puckeditor/core';
import { puckConfig } from 'dsfr-puck';

export default function Page({ data }) {
  return <Render config={puckConfig} data={data} />;
}
```

### Configurations exportées

| Export | Contenu |
|---|---|
| `puckConfig` *(défaut)* | Primitives de contenu + composants DSFR du corps de page, classés par catégories. |
| `fullPuckConfig` | `puckConfig` + tous les composants hors périmètre (formulaires, chrome, auth, graphiques…). |
| `contentComponentsPuckConfig` | Uniquement les primitives de contenu maison. |
| `outOfScopeComponentsPuckConfig` | Uniquement les composants DSFR hors périmètre. |
| `generateContentPuckConfig()` / `generateFullPuckConfig()` / … | Génèrent ces configs à la demande. |

## 🧱 Composants de contenu

### Primitives (blocs maison, absents du DSFR)

| Bloc | Description |
|---|---|
| **Titre** | Titre de section `h2`–`h6`, avec ancre optionnelle pour les sommaires. |
| **Texte riche** | Paragraphes avec gras, italique, listes et liens (éditeur WYSIWYG Puck). |
| **Image** | Image légendée au format `fr-content-media`, avec ratio et largeur. |
| **Liste** | Liste à puces ou numérotée, chaque élément en texte riche. |
| **Séparateur** | Filet horizontal, espacement réglable. |
| **Vidéo / Embed** | YouTube, Vimeo, Dailymotion ou iframe, en ratio responsive. |
| **Grille** | 2 à 4 colonnes DSFR, chacune une zone où déposer d'autres blocs. |

### Composants DSFR retenus et finalisés

Câblés sur l'API réelle de react-dsfr 1.34, avec un niveau d'options élevé.
Le contenu interne (encadré, accordéon, pied de carte, colonnes de grille) est une **zone de dépôt Puck** ; celui des onglets et du surlignage est un **champ texte riche**.

| Catégorie | Composants |
|---|---|
| **Texte / mise en avant** | `DsfrAlert`, `DsfrCallOut`, `DsfrNotice`, `DsfrHighlight`, `DsfrQuote`, `DsfrBadge`, `DsfrTag`, `DsfrTagsGroup` |
| **Médias** | `DsfrCard`, `DsfrTile` |
| **Conteneurs** | `DsfrAccordion`, `DsfrTabs`, `DsfrTable` |
| **Actions** | `DsfrButton`, `DsfrButtonsGroup`, `DsfrDownload` |
| **Navigation de page** | `DsfrSummary`, `DsfrStepper` |

Les liens sont de simples ancres HTML (`href` → `<a href>`), adaptées à un site généré.

## 🚫 Composants conservés mais hors périmètre

Ces composants restent dans le paquet et sont **réactivables via `fullPuckConfig`**, mais ne sont **pas** dans la config par défaut : ils n'ont pas leur place dans le contenu éditorial d'un site statique.

| Groupe | Composants | Raison |
|---|---|---|
| Formulaires | `Input`, `Textarea`, `Select`, `SelectNext`, `Checkbox`, `RadioButtons`, `ToggleSwitch`, `ToggleSwitchGroup`, `Range`, `Upload`, `SegmentedControl` | Pas de traitement côté serveur sur un site statique. |
| Chrome / navigation | `Header`, `Footer`, `SideMenu`, `SkipLinks`, `Breadcrumb`, `Pagination`, `LanguageSelect` | Générés par le gabarit du site, pas par le contenu. |
| Recherche | `SearchBar` | Nécessite une logique de recherche externe. |
| Authentification | `FranceConnectButton`, `AgentConnectButton`, `MonCompteProButton`, `ProConnectButton` | Sans objet dans une page de contenu. |
| Surcouches / technique | `Modal`, `Tooltip`, `Display`, `Follow` | Gestion d'état ou usage spécifique peu adaptés à Puck. |
| Graphiques | `BarChart`, `LineChart`, `MultiLineChart`, `BarLineChart`, `PieChart`, `RadarChart`, `GaugeChart`, `ScatterChart` | Nécessitent `@gouvfr/dsfr-chart` et une configuration de données lourde. |
| Illustrations | `Artwork`, `ArtworkGov` | Absents de react-dsfr ≥ 1 → remplacés par la primitive **Image**. |

`getSupportStats()` donne la répartition `inScope` / `outOfScope`.

## 🔧 Personnalisation

```tsx
import { puckConfig } from 'dsfr-puck';

export const config = {
  ...puckConfig,
  components: {
    ...puckConfig.components,
    // retirer un composant :
    DsfrStepper: undefined,
    // ajouter le vôtre :
    MonBloc: { fields: { titre: { type: 'text' } }, render: (p) => <MonBloc {...p} /> },
  },
};
```

## 🛠️ Développement

```bash
npm install          # à la racine (workspace npm, la démo est incluse)
npm run build        # compile la bibliothèque (tsc → dist/)
npm run demo:dev     # lance la démo sur http://localhost:5173
npm run demo:build   # build statique de la démo
```

## ⚠️ Mentions légales

Le Système de Design de l'État (DSFR) est **réservé aux administrations publiques françaises**, conformément à ses [modalités d'utilisation](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/modalites-dutilisation).

## 📜 Licence

MIT
