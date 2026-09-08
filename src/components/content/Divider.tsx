import React from 'react';
import type { PuckComponentDef } from './types';

// Séparateur horizontal. Le `<hr>` est stylé par le DSFR.
export const DividerConfig: PuckComponentDef = {
  label: 'Séparateur',
  fields: {
    spacing: {
      type: 'select',
      label: 'Espacement vertical',
      options: [
        { label: 'Normal', value: '' },
        { label: 'Large', value: 'fr-my-4w' },
        { label: 'Très large', value: 'fr-my-6w' },
      ],
    },
  },
  defaultProps: { spacing: '' },
  render: ({ spacing }) => <hr className={spacing || undefined} />,
};
