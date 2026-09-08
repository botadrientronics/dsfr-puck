import React from 'react';
import type { PuckComponentDef } from './types';

// Titre de section. Le H1 est volontairement absent : il est fourni par le
// gabarit de page, pas par le contenu éditorial.
export const HeadingConfig: PuckComponentDef = {
  label: 'Titre',
  fields: {
    text: { type: 'text', label: 'Texte du titre', contentEditable: true },
    level: {
      type: 'select',
      label: 'Niveau',
      options: [
        { label: 'Titre 2', value: 'h2' },
        { label: 'Titre 3', value: 'h3' },
        { label: 'Titre 4', value: 'h4' },
        { label: 'Titre 5', value: 'h5' },
        { label: 'Titre 6', value: 'h6' },
      ],
    },
    display: {
      type: 'select',
      label: 'Taille visuelle (optionnel)',
      options: [
        { label: 'Par défaut', value: '' },
        { label: 'fr-display--xs', value: 'fr-display--xs' },
        { label: 'fr-h1', value: 'fr-h1' },
        { label: 'fr-h2', value: 'fr-h2' },
        { label: 'fr-h3', value: 'fr-h3' },
        { label: 'fr-h4', value: 'fr-h4' },
        { label: 'fr-h5', value: 'fr-h5' },
        { label: 'fr-h6', value: 'fr-h6' },
      ],
    },
    anchorId: {
      type: 'text',
      label: 'Ancre (id) — pour les liens de sommaire',
      placeholder: 'section-1',
    },
  },
  defaultProps: { text: 'Titre de section', level: 'h2', display: '', anchorId: '' },
  render: ({ text, level, display, anchorId }) => {
    const Tag = (['h2', 'h3', 'h4', 'h5', 'h6'].includes(level) ? level : 'h2') as 'h2';
    return (
      <Tag id={anchorId || undefined} className={display || undefined}>
        {text}
      </Tag>
    );
  },
};
