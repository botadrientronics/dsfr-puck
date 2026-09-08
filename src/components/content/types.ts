import type { ReactNode } from 'react';

// Type volontairement souple : Puck accepte des configurations bien plus
// riches que ce que l'on décrit ici, et les `render` de cette bibliothèque
// travaillent tous en `props: any` (les props sont fournies par l'éditeur).
export type PuckField = {
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'select'
    | 'radio'
    | 'array'
    | 'object'
    | 'slot'
    | 'richtext'
    | 'custom'
    | 'external';
  label?: string;
  [key: string]: any;
};

export type PuckComponentDef = {
  label?: string;
  fields: Record<string, PuckField>;
  defaultProps?: Record<string, any>;
  render: (props: any) => ReactNode;
};

// Booléen exprimé en `radio` (Puck n'a pas de champ booléen natif).
export const boolField = (label: string): PuckField => ({
  type: 'radio',
  label,
  options: [
    { label: 'Oui', value: true },
    { label: 'Non', value: false },
  ],
});
