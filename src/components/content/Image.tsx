import React from 'react';
import type { PuckComponentDef } from './types';

const RATIOS = [
  { label: 'Naturel (aucun)', value: '' },
  { label: '16:9', value: 'fr-ratio-16x9' },
  { label: '4:3', value: 'fr-ratio-4x3' },
  { label: '3:2', value: 'fr-ratio-3x2' },
  { label: '1:1', value: 'fr-ratio-1x1' },
  { label: '2:3 (portrait)', value: 'fr-ratio-2x3' },
  { label: '3:4 (portrait)', value: 'fr-ratio-3x4' },
];

// Image légendée, markup DSFR `fr-content-media`.
export const ImageConfig: PuckComponentDef = {
  label: 'Image',
  fields: {
    src: { type: 'text', label: "URL de l'image", placeholder: 'https://…' },
    alt: {
      type: 'text',
      label: 'Texte alternatif (accessibilité)',
      placeholder: "Description de l'image",
    },
    caption: { type: 'text', label: 'Légende (optionnel)' },
    ratio: { type: 'select', label: "Ratio d'affichage", options: RATIOS },
    size: {
      type: 'select',
      label: 'Largeur',
      options: [
        { label: 'Normale', value: '' },
        { label: 'Réduite', value: 'fr-content-media--sm' },
        { label: 'Élargie', value: 'fr-content-media--lg' },
      ],
    },
  },
  defaultProps: { src: '', alt: '', caption: '', ratio: 'fr-ratio-16x9', size: '' },
  render: ({ src, alt, caption, ratio, size }) => (
    <figure className={['fr-content-media', size].filter(Boolean).join(' ')} role="group">
      {src ? (
        <img
          className={['fr-responsive-img', ratio].filter(Boolean).join(' ')}
          src={src}
          alt={alt || ''}
        />
      ) : (
        <div
          className={['fr-responsive-img', ratio || 'fr-ratio-16x9', 'fr-background-alt--grey']
            .filter(Boolean)
            .join(' ')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="fr-text--sm">Renseignez l'URL de l'image dans le panneau de droite.</span>
        </div>
      )}
      {caption ? <figcaption className="fr-content-media__caption">{caption}</figcaption> : null}
    </figure>
  ),
};
