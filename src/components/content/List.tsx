import React from 'react';
import { boolField, type PuckComponentDef } from './types';

// Liste à puces ou ordonnée. Chaque élément est un champ `richtext`
// (permet gras/lien à l'intérieur d'une puce).
export const ListConfig: PuckComponentDef = {
  label: 'Liste',
  fields: {
    ordered: boolField('Liste numérotée'),
    items: {
      type: 'array',
      label: 'Éléments',
      arrayFields: {
        content: { type: 'richtext', label: 'Élément' },
      },
      defaultItemProps: { content: '<p>Élément de liste</p>' },
      getItemSummary: (_item: any, i?: number) => `Élément ${typeof i === 'number' ? i + 1 : ''}`,
    },
  },
  defaultProps: {
    ordered: false,
    items: [
      { content: '<p>Premier élément</p>' },
      { content: '<p>Deuxième élément</p>' },
      { content: '<p>Troisième élément</p>' },
    ],
  },
  render: ({ ordered, items }) => {
    const List = ordered ? 'ol' : 'ul';
    const rows: any[] = Array.isArray(items) ? items : [];
    return (
      <List>
        {rows.map((item, i) => (
          <li key={i}>{item?.content}</li>
        ))}
      </List>
    );
  },
};
