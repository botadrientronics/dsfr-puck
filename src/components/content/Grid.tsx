import React from 'react';
import { boolField, type PuckComponentDef } from './types';

// Grille DSFR : 2 à 4 colonnes qui repassent en pleine largeur sur mobile.
// Chaque colonne est un `slot` où l'on dépose d'autres composants.
const COL_CLASS: Record<number, string> = {
  2: 'fr-col-12 fr-col-md-6',
  3: 'fr-col-12 fr-col-md-4',
  4: 'fr-col-12 fr-col-md-3',
};

export const GridConfig: PuckComponentDef = {
  label: 'Grille (colonnes)',
  fields: {
    columns: {
      type: 'select',
      label: 'Nombre de colonnes',
      options: [
        { label: '2 colonnes', value: 2 },
        { label: '3 colonnes', value: 3 },
        { label: '4 colonnes', value: 4 },
      ],
    },
    gutters: boolField('Gouttières entre colonnes'),
    verticalAlign: {
      type: 'select',
      label: 'Alignement vertical',
      options: [
        { label: 'Haut', value: '' },
        { label: 'Centré', value: 'fr-grid-row--middle' },
        { label: 'Bas', value: 'fr-grid-row--bottom' },
      ],
    },
    col1: { type: 'slot', label: 'Colonne 1' },
    col2: { type: 'slot', label: 'Colonne 2' },
    col3: { type: 'slot', label: 'Colonne 3' },
    col4: { type: 'slot', label: 'Colonne 4' },
  },
  defaultProps: {
    columns: 2,
    gutters: true,
    verticalAlign: '',
    col1: [],
    col2: [],
    col3: [],
    col4: [],
  },
  render: ({ columns, gutters, verticalAlign, col1, col2, col3, col4 }) => {
    const count = [2, 3, 4].includes(Number(columns)) ? Number(columns) : 2;
    const slots = [col1, col2, col3, col4].slice(0, count);
    const rowClass = [
      'fr-grid-row',
      gutters && 'fr-grid-row--gutters',
      verticalAlign,
    ]
      .filter(Boolean)
      .join(' ');
    return (
      <div className={rowClass}>
        {slots.map((Slot, i) => (
          <div className={COL_CLASS[count]} key={i}>
            {typeof Slot === 'function' ? <Slot /> : null}
          </div>
        ))}
      </div>
    );
  },
};
