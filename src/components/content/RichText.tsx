import React from 'react';
import type { PuckComponentDef } from './types';

// Bloc de texte courant : gras, italique, listes, liens, titres…
// S'appuie sur le champ `richtext` natif de Puck 0.23.
export const RichTextConfig: PuckComponentDef = {
  label: 'Texte riche',
  fields: {
    content: { type: 'richtext', label: 'Contenu' },
    size: {
      type: 'select',
      label: 'Taille du texte',
      options: [
        { label: 'Normale', value: 'md' },
        { label: 'Accentuée (lead)', value: 'lead' },
        { label: 'Petite', value: 'sm' },
        { label: 'Grande', value: 'lg' },
        { label: 'Très grande', value: 'xl' },
      ],
    },
  },
  defaultProps: {
    content: '<p>Saisissez votre texte ici. Vous pouvez le mettre en gras, en italique, ajouter des listes ou des liens.</p>',
    size: 'md',
  },
  render: ({ content, size }) => {
    const className =
      size === 'lead' ? 'fr-text--lead' : size && size !== 'md' ? `fr-text--${size}` : undefined;
    return <div className={className}>{content}</div>;
  },
};
