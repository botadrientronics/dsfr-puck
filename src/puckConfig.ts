import React from 'react';
import { PuckConfig } from './types';
import { DSFR_COMPONENTS_SUPPORT, DsfrComponentName } from './components';

// Configuration Puck complète pour TOUS les composants DSFR
// Cette configuration utilise les composants de @codegouvfr/react-dsfr

// Helper pour créer la configuration d'un composant
const createComponentConfig = (componentName: DsfrComponentName) => {
  const info = DSFR_COMPONENTS_SUPPORT[componentName];
  
  // Configuration de base selon le type de composant
  switch (componentName) {
    case 'Button':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Texte du bouton',
            defaultValue: 'Bouton',
          },
          variant: {
            type: 'select',
            label: 'Variante',
            defaultValue: 'primary',
            options: [
              { label: 'Primaire', value: 'primary' },
              { label: 'Secondaire', value: 'secondary' },
              { label: 'Tertiaire', value: 'tertiary' },
              { label: 'Tertiaire sans contour', value: 'tertiary-no-outline' },
            ],
          },
          size: {
            type: 'select',
            label: 'Taille',
            defaultValue: 'md',
            options: [
              { label: 'Petit', value: 'sm' },
              { label: 'Moyen', value: 'md' },
              { label: 'Grand', value: 'lg' },
            ],
          },
          disabled: {
            type: 'boolean',
            label: 'Désactivé',
            defaultValue: false,
          },
          iconId: {
            type: 'text',
            label: 'ID de l\'icône (ex: fr-icon-arrow-right-line)',
            placeholder: 'fr-icon-arrow-right-line',
          },
          iconPosition: {
            type: 'select',
            label: 'Position de l\'icône',
            defaultValue: 'left',
            options: [
              { label: 'À gauche', value: 'left' },
              { label: 'À droite', value: 'right' },
            ],
          },
          type: {
            type: 'select',
            label: 'Type',
            defaultValue: 'button',
            options: [
              { label: 'Bouton', value: 'button' },
              { label: 'Soumettre', value: 'submit' },
              { label: 'Réinitialiser', value: 'reset' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Button = require('@codegouvfr/react-dsfr').Button;
          return <Button {...props} />;
        },
      };

    case 'Input':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé du champ',
          },
          placeholder: {
            type: 'text',
            label: 'Placeholder',
            placeholder: 'Texte de placeholder',
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          stateRelatedMessage: {
            type: 'text',
            label: 'Message lié à l\'état',
            placeholder: 'Message d\'erreur ou de succès',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Input = require('@codegouvfr/react-dsfr').Input;
          return <Input {...props} />;
        },
      };

    case 'Textarea':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé du champ',
          },
          placeholder: {
            type: 'text',
            label: 'Placeholder',
            placeholder: 'Texte de placeholder',
          },
          rows: {
            type: 'number',
            label: 'Nombre de lignes',
            defaultValue: 5,
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          stateRelatedMessage: {
            type: 'text',
            label: 'Message lié à l\'état',
            placeholder: 'Message d\'erreur ou de succès',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Textarea = require('@codegouvfr/react-dsfr').Textarea;
          return <Textarea {...props} />;
        },
      };

    case 'Select':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé du sélecteur',
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          stateRelatedMessage: {
            type: 'text',
            label: 'Message lié à l\'état',
            placeholder: 'Message d\'erreur ou de succès',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Select = require('@codegouvfr/react-dsfr').Select;
          return <Select {...props} />;
        },
      };

    case 'Checkbox':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé de la case à cocher',
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          stateRelatedMessage: {
            type: 'text',
            label: 'Message lié à l\'état',
            placeholder: 'Message d\'erreur ou de succès',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Checkbox = require('@codegouvfr/react-dsfr').Checkbox;
          return <Checkbox {...props} />;
        },
      };

    case 'RadioButtons':
      return {
        fields: {
          legend: {
            type: 'text',
            label: 'Légende',
            defaultValue: 'Légende des boutons radio',
          },
          options: {
            type: 'array',
            label: 'Options',
            defaultValue: [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ],
            arrayFields: {
              label: { type: 'text', label: 'Libellé' },
              value: { type: 'text', label: 'Valeur' },
            },
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const RadioButtons = require('@codegouvfr/react-dsfr').RadioButtons;
          return <RadioButtons {...props} />;
        },
      };

    case 'Card':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de la carte',
          },
          desc: {
            type: 'text',
            label: 'Description',
            placeholder: 'Description de la carte',
          },
          imageUrl: {
            type: 'text',
            label: 'URL de l\'image',
            placeholder: 'https://...',
          },
          imageAlt: {
            type: 'text',
            label: 'Texte alternatif de l\'image',
            placeholder: 'Description de l\'image',
          },
          size: {
            type: 'select',
            label: 'Taille',
            defaultValue: 'md',
            options: [
              { label: 'Petit', value: 'sm' },
              { label: 'Moyen', value: 'md' },
              { label: 'Grand', value: 'lg' },
            ],
          },
          horizontal: {
            type: 'boolean',
            label: 'Horizontal',
            defaultValue: false,
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Card = require('@codegouvfr/react-dsfr').Card;
          return <Card {...props} />;
        },
      };

    case 'Alert':
      return {
        fields: {
          type: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Information', value: 'info' },
              { label: 'Succès', value: 'success' },
              { label: 'Avertissement', value: 'warning' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de l\'alerte',
          },
          description: {
            type: 'text',
            label: 'Description',
            placeholder: 'Description de l\'alerte',
          },
          closable: {
            type: 'boolean',
            label: 'Fermable',
            defaultValue: false,
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Alert = require('@codegouvfr/react-dsfr').Alert;
          return <Alert {...props} />;
        },
      };

    case 'Badge':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Texte',
            defaultValue: 'Badge',
          },
          type: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Information', value: 'info' },
              { label: 'Succès', value: 'success' },
              { label: 'Avertissement', value: 'warning' },
              { label: 'Erreur', value: 'error' },
              { label: 'Nouveau', value: 'new' },
            ],
          },
          size: {
            type: 'select',
            label: 'Taille',
            defaultValue: 'md',
            options: [
              { label: 'Petit', value: 'sm' },
              { label: 'Moyen', value: 'md' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Badge = require('@codegouvfr/react-dsfr').Badge;
          return <Badge {...props} />;
        },
      };

    case 'Tag':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Texte',
            defaultValue: 'Tag',
          },
          dismissible: {
            type: 'boolean',
            label: 'Supprimable',
            defaultValue: false,
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Tag = require('@codegouvfr/react-dsfr').Tag;
          return <Tag {...props} />;
        },
      };

    case 'Accordion':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de l\'accordéon',
          },
          defaultOpen: {
            type: 'boolean',
            label: 'Ouvert par défaut',
            defaultValue: false,
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Accordion = require('@codegouvfr/react-dsfr').Accordion;
          return <Accordion {...props} />;
        },
      };

    case 'Tabs':
      return {
        fields: {
          tabs: {
            type: 'array',
            label: 'Onglets',
            defaultValue: [
              { id: 'tab1', label: 'Onglet 1', content: 'Contenu de l\'onglet 1' },
              { id: 'tab2', label: 'Onglet 2', content: 'Contenu de l\'onglet 2' },
            ],
            arrayFields: {
              id: { type: 'text', label: 'ID' },
              label: { type: 'text', label: 'Libellé' },
              content: { type: 'text', label: 'Contenu' },
            },
          },
          defaultActiveTab: {
            type: 'text',
            label: 'Onglet actif par défaut',
            placeholder: 'ID de l\'onglet',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Tabs = require('@codegouvfr/react-dsfr').Tabs;
          return <Tabs {...props} />;
        },
      };

    case 'Table':
      return {
        fields: {
          caption: {
            type: 'text',
            label: 'Titre du tableau',
            placeholder: 'Titre du tableau',
          },
          headers: {
            type: 'array',
            label: 'En-têtes',
            defaultValue: ['En-tête 1', 'En-tête 2'],
            arrayFields: {
              header: { type: 'text', label: 'En-tête' },
            },
          },
          data: {
            type: 'array',
            label: 'Données',
            defaultValue: [
              ['Cellule 1', 'Cellule 2'],
              ['Cellule 3', 'Cellule 4'],
            ],
            arrayFields: {
              row: { 
                type: 'array', 
                label: 'Ligne', 
                arrayFields: { 
                  cell: { type: 'text', label: 'Cellule' } 
                } 
              },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Table = require('@codegouvfr/react-dsfr').Table;
          return <Table {...props} />;
        },
      };

    case 'Breadcrumb':
      return {
        fields: {
          segments: {
            type: 'array',
            label: 'Segments',
            defaultValue: [
              { label: 'Accueil', linkProps: { href: '/' } },
              { label: 'Page actuelle', linkProps: { href: '/current' } },
            ],
            arrayFields: {
              label: { type: 'text', label: 'Libellé' },
              href: { type: 'text', label: 'URL' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Breadcrumb = require('@codegouvfr/react-dsfr').Breadcrumb;
          const segments = props.segments || [];
          return <Breadcrumb segments={segments} />;
        },
      };

    case 'CallOut':
      return {
        fields: {
          type: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Information', value: 'info' },
              { label: 'Succès', value: 'success' },
              { label: 'Avertissement', value: 'warning' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de l\'encadré',
          },
          text: {
            type: 'text',
            label: 'Texte',
            defaultValue: 'Texte de l\'encadré',
          },
          iconId: {
            type: 'text',
            label: 'ID de l\'icône',
            placeholder: 'fr-icon-information-line',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const CallOut = require('@codegouvfr/react-dsfr').CallOut;
          return <CallOut {...props} />;
        },
      };

    case 'Quote':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Citation',
            defaultValue: 'Texte de la citation',
          },
          author: {
            type: 'text',
            label: 'Auteur',
            placeholder: 'Nom de l\'auteur',
          },
          source: {
            type: 'text',
            label: 'Source',
            placeholder: 'Source de la citation',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Quote = require('@codegouvfr/react-dsfr').Quote;
          return <Quote {...props} />;
        },
      };

    case 'ToggleSwitch':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé de l\'interrupteur',
          },
          checked: {
            type: 'boolean',
            label: 'Coché',
            defaultValue: false,
          },
          disabled: {
            type: 'boolean',
            label: 'Désactivé',
            defaultValue: false,
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          state: {
            type: 'select',
            label: 'État',
            defaultValue: 'default',
            options: [
              { label: 'Par défaut', value: 'default' },
              { label: 'Succès', value: 'success' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const ToggleSwitch = require('@codegouvfr/react-dsfr').ToggleSwitch;
          return <ToggleSwitch {...props} />;
        },
      };

    case 'Range':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé du curseur',
          },
          min: {
            type: 'number',
            label: 'Valeur minimale',
            defaultValue: 0,
          },
          max: {
            type: 'number',
            label: 'Valeur maximale',
            defaultValue: 100,
          },
          step: {
            type: 'number',
            label: 'Pas',
            defaultValue: 1,
          },
          value: {
            type: 'number',
            label: 'Valeur initiale',
            defaultValue: 50,
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Range = require('@codegouvfr/react-dsfr').Range;
          return <Range {...props} />;
        },
      };

    case 'Stepper':
      return {
        fields: {
          currentStep: {
            type: 'number',
            label: 'Étape actuelle (1-indexé)',
            defaultValue: 1,
          },
          steps: {
            type: 'array',
            label: 'Étapes',
            defaultValue: [
              { label: 'Étape 1' },
              { label: 'Étape 2' },
              { label: 'Étape 3' },
            ],
            arrayFields: {
              label: { type: 'text', label: 'Libellé' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Stepper = require('@codegouvfr/react-dsfr').Stepper;
          return <Stepper {...props} />;
        },
      };

    case 'Summary':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            placeholder: 'Titre du résumé',
          },
          links: {
            type: 'array',
            label: 'Liens',
            defaultValue: [
              { linkProps: { href: '#section1' }, text: 'Section 1' },
              { linkProps: { href: '#section2' }, text: 'Section 2' },
            ],
            arrayFields: {
              text: { type: 'text', label: 'Texte' },
              href: { type: 'text', label: 'URL' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Summary = require('@codegouvfr/react-dsfr').Summary;
          const links = props.links?.map((link: any) => ({
            linkProps: { href: link.href },
            text: link.text,
          })) || [];
          return <Summary {...props} links={links} />;
        },
      };

    case 'SegmentedControl':
      return {
        fields: {
          segments: {
            type: 'array',
            label: 'Segments',
            defaultValue: [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ],
            arrayFields: {
              label: { type: 'text', label: 'Libellé' },
              value: { type: 'text', label: 'Valeur' },
            },
          },
          defaultValue: {
            type: 'text',
            label: 'Valeur par défaut',
            placeholder: 'Valeur du segment sélectionné',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const SegmentedControl = require('@codegouvfr/react-dsfr').SegmentedControl;
          return <SegmentedControl {...props} />;
        },
      };

    case 'ButtonsGroup':
      return {
        fields: {
          buttons: {
            type: 'array',
            label: 'Boutons',
            defaultValue: [
              { children: 'Bouton 1', variant: 'primary' },
              { children: 'Bouton 2', variant: 'secondary' },
            ],
            arrayFields: {
              children: { type: 'text', label: 'Texte' },
              variant: { 
                type: 'select', 
                label: 'Variante',
                options: [
                  { label: 'Primaire', value: 'primary' },
                  { label: 'Secondaire', value: 'secondary' },
                  { label: 'Tertiaire', value: 'tertiary' },
                ] 
              },
            },
          },
          direction: {
            type: 'select',
            label: 'Direction',
            defaultValue: 'horizontal',
            options: [
              { label: 'Horizontal', value: 'horizontal' },
              { label: 'Vertical', value: 'vertical' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const ButtonsGroup = require('@codegouvfr/react-dsfr').ButtonsGroup;
          return <ButtonsGroup {...props} />;
        },
      };

    case 'ToggleSwitchGroup':
      return {
        fields: {
          legend: {
            type: 'text',
            label: 'Légende',
            defaultValue: 'Légende du groupe',
          },
          switches: {
            type: 'array',
            label: 'Interrupteurs',
            defaultValue: [
              { label: 'Option 1', checked: false },
              { label: 'Option 2', checked: false },
            ],
            arrayFields: {
              label: { type: 'text', label: 'Libellé' },
              checked: { type: 'boolean', label: 'Coché' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const ToggleSwitchGroup = require('@codegouvfr/react-dsfr').ToggleSwitchGroup;
          return <ToggleSwitchGroup {...props} />;
        },
      };

    case 'TagsGroup':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            placeholder: 'Libellé du groupe',
          },
          tags: {
            type: 'array',
            label: 'Tags',
            defaultValue: [
              { children: 'Tag 1' },
              { children: 'Tag 2' },
            ],
            arrayFields: {
              children: { type: 'text', label: 'Texte' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const TagsGroup = require('@codegouvfr/react-dsfr').TagsGroup;
          return <TagsGroup {...props} />;
        },
      };

    case 'Highlight':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Texte à surligner',
            defaultValue: 'Texte important',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Highlight = require('@codegouvfr/react-dsfr').Highlight;
          return <Highlight {...props} />;
        },
      };

    case 'SkipLinks':
      return {
        fields: {
          links: {
            type: 'array',
            label: 'Liens',
            defaultValue: [
              { linkProps: { href: '#main' }, text: 'Aller au contenu' },
            ],
            arrayFields: {
              text: { type: 'text', label: 'Texte' },
              href: { type: 'text', label: 'URL' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const SkipLinks = require('@codegouvfr/react-dsfr').SkipLinks;
          const links = props.links?.map((link: any) => ({
            linkProps: { href: link.href },
            text: link.text,
          })) || [];
          return <SkipLinks {...props} links={links} />;
        },
      };

    case 'Artwork':
      return {
        fields: {
          imageUrl: {
            type: 'text',
            label: 'URL de l\'image',
            placeholder: 'https://...',
          },
          alt: {
            type: 'text',
            label: 'Texte alternatif',
            placeholder: 'Description de l\'image',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Artwork = require('@codegouvfr/react-dsfr').Artwork;
          return <Artwork {...props} />;
        },
      };

    case 'ArtworkGov':
      return {
        fields: {
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const ArtworkGov = require('@codegouvfr/react-dsfr').ArtworkGov;
          return <ArtworkGov {...props} />;
        },
      };

    case 'Pagination':
      return {
        fields: {
          currentPage: {
            type: 'number',
            label: 'Page actuelle',
            defaultValue: 1,
          },
          pagesCount: {
            type: 'number',
            label: 'Nombre total de pages',
            defaultValue: 5,
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Pagination = require('@codegouvfr/react-dsfr').Pagination;
          return <Pagination {...props} />;
        },
      };

    // Authentification
    case 'FranceConnectButton':
    case 'AgentConnectButton':
    case 'MonCompteProButton':
    case 'ProConnectButton':
      return {
        fields: {
          onClick: {
            type: 'text',
            label: 'Action (leave empty for default)',
            placeholder: 'console.log("clicked")',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Component = require('@codegouvfr/react-dsfr')[componentName];
          return <Component {...props} />;
        },
      };

    // Composants partiels avec configuration simplifiée
    case 'Modal':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de la modale',
          },
          children: {
            type: 'text',
            label: 'Contenu',
            defaultValue: 'Contenu de la modale',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Modal = require('@codegouvfr/react-dsfr').Modal;
          // Note: Modal nécessite une gestion d'état externe
          return <Modal {...props} isOpen={true} />;
        },
      };

    case 'Notice':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            defaultValue: 'Titre de la notification',
          },
          children: {
            type: 'text',
            label: 'Contenu',
            defaultValue: 'Contenu de la notification',
          },
          type: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Information', value: 'info' },
              { label: 'Succès', value: 'success' },
              { label: 'Avertissement', value: 'warning' },
              { label: 'Erreur', value: 'error' },
            ],
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Notice = require('@codegouvfr/react-dsfr').Notice;
          return <Notice {...props} />;
        },
      };

    case 'Tile':
      return {
        fields: {
          title: {
            type: 'text',
            label: 'Titre',
            placeholder: 'Titre de la tuile',
          },
          desc: {
            type: 'text',
            label: 'Description',
            placeholder: 'Description de la tuile',
          },
          imageUrl: {
            type: 'text',
            label: 'URL de l\'image',
            placeholder: 'https://...',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Tile = require('@codegouvfr/react-dsfr').Tile;
          return <Tile {...props} />;
        },
      };

    case 'LanguageSelect':
      return {
        fields: {
          selectedLanguage: {
            type: 'text',
            label: 'Langue sélectionnée',
            defaultValue: 'fr',
          },
          languages: {
            type: 'array',
            label: 'Langues disponibles',
            defaultValue: [
              { id: 'fr', label: 'Français' },
              { id: 'en', label: 'English' },
            ],
            arrayFields: {
              id: { type: 'text', label: 'ID' },
              label: { type: 'text', label: 'Libellé' },
            },
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const LanguageSelect = require('@codegouvfr/react-dsfr').LanguageSelect;
          return <LanguageSelect {...props} />;
        },
      };

    case 'Download':
      return {
        fields: {
          children: {
            type: 'text',
            label: 'Texte du lien',
            defaultValue: 'Télécharger',
          },
          href: {
            type: 'text',
            label: 'URL du fichier',
            placeholder: 'https://...',
          },
          detail: {
            type: 'text',
            label: 'Détails',
            placeholder: 'PDF - 2.5 Mo',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Download = require('@codegouvfr/react-dsfr').Download;
          return <Download {...props} />;
        },
      };

    case 'SearchBar':
      return {
        fields: {
          placeholder: {
            type: 'text',
            label: 'Placeholder',
            defaultValue: 'Rechercher...',
          },
          buttonLabel: {
            type: 'text',
            label: 'Libellé du bouton',
            defaultValue: 'Rechercher',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const SearchBar = require('@codegouvfr/react-dsfr').SearchBar;
          return <SearchBar {...props} />;
        },
      };

    case 'SelectNext':
      return {
        fields: {
          label: {
            type: 'text',
            label: 'Libellé',
            defaultValue: 'Libellé du sélecteur',
          },
          placeholder: {
            type: 'text',
            label: 'Placeholder',
            placeholder: 'Sélectionnez une option',
          },
          hint: {
            type: 'text',
            label: 'Indice',
            placeholder: 'Texte d\'indice',
          },
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const SelectNext = require('@codegouvfr/react-dsfr').SelectNext;
          return <SelectNext {...props} />;
        },
      };

    // Composants non configurés (retour par défaut)
    default:
      return {
        fields: {
          className: {
            type: 'text',
            label: 'Classes CSS supplémentaires',
          },
        },
        render: (props: any) => {
          const Component = require('@codegouvfr/react-dsfr')[componentName];
          return Component ? <Component {...props} /> : <div>Composant non disponible</div>;
        },
      };
  }
};

// Générer la configuration complète
export const generateFullPuckConfig = (): PuckConfig => {
  const components: Record<string, any> = {};

  // Ajouter tous les composants avec support 'full' ou 'partial'
  (Object.keys(DSFR_COMPONENTS_SUPPORT) as DsfrComponentName[]).forEach((componentName) => {
    const info = DSFR_COMPONENTS_SUPPORT[componentName];
    if (info.supportLevel !== 'none') {
      components[`Dsfr${componentName}`] = createComponentConfig(componentName);
    }
  });

  return {
    components,
  };
};

// Configuration complète
export const puckConfig: PuckConfig = generateFullPuckConfig();

export default puckConfig;
