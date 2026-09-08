// Primitives de contenu — blocs bruts absents du DSFR mais indispensables
// à l'édition du corps d'une page (titre, texte riche, image, liste…).
import { HeadingConfig } from './Heading';
import { RichTextConfig } from './RichText';
import { ImageConfig } from './Image';
import { ListConfig } from './List';
import { DividerConfig } from './Divider';
import { EmbedConfig } from './Embed';
import { GridConfig } from './Grid';
import type { PuckComponentDef } from './types';

export type { PuckComponentDef, PuckField } from './types';

// Clés Puck (non préfixées `Dsfr` : ce ne sont pas des composants DSFR).
export const contentComponentsConfig: Record<string, PuckComponentDef> = {
  Heading: HeadingConfig,
  RichText: RichTextConfig,
  Image: ImageConfig,
  List: ListConfig,
  Divider: DividerConfig,
  Embed: EmbedConfig,
  Grid: GridConfig,
};

export const CONTENT_PRIMITIVES: Record<string, { displayName: string; description: string }> = {
  Heading: {
    displayName: 'Titre',
    description: 'Titre de section (h2 à h6), avec ancre optionnelle pour les sommaires.',
  },
  RichText: {
    displayName: 'Texte riche',
    description: 'Paragraphes avec gras, italique, listes et liens (éditeur WYSIWYG).',
  },
  Image: {
    displayName: 'Image',
    description: 'Image légendée au format DSFR (fr-content-media), avec ratio et largeur.',
  },
  List: {
    displayName: 'Liste',
    description: 'Liste à puces ou numérotée, chaque élément en texte riche.',
  },
  Divider: {
    displayName: 'Séparateur',
    description: 'Filet horizontal de séparation, espacement réglable.',
  },
  Embed: {
    displayName: 'Vidéo / Embed',
    description: 'Vidéo YouTube/Vimeo/Dailymotion ou iframe, en ratio responsive.',
  },
  Grid: {
    displayName: 'Grille (colonnes)',
    description: '2 à 4 colonnes DSFR, chacune une zone de dépôt de composants.',
  },
};
