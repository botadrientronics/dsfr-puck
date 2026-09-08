import React from 'react';
import { PuckConfig } from './types';
import { DSFR_COMPONENTS_SUPPORT, DsfrComponentName } from './components';

// Configuration Puck complète pour TOUS les composants DSFR
// Cette configuration utilise les composants de @codegouvfr/react-dsfr

// --- Registre des composants react-dsfr -----------------------------------
// react-dsfr (>= 1.x) n'expose plus les composants depuis la racine du paquet :
// chaque composant vit sur son propre sous-chemin. On les regroupe ici dans un
// registre indexable par nom, utilisé par les fonctions `render` de Puck.
import { Button } from '@codegouvfr/react-dsfr/Button';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Select } from '@codegouvfr/react-dsfr/Select';
import { Select as SelectNext } from '@codegouvfr/react-dsfr/SelectNext';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { ToggleSwitchGroup } from '@codegouvfr/react-dsfr/ToggleSwitchGroup';
import { Range } from '@codegouvfr/react-dsfr/Range';
import { Upload } from '@codegouvfr/react-dsfr/Upload';
import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { TagsGroup } from '@codegouvfr/react-dsfr/TagsGroup';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { CallOut } from '@codegouvfr/react-dsfr/CallOut';
import { Quote } from '@codegouvfr/react-dsfr/Quote';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { Notice } from '@codegouvfr/react-dsfr/Notice';
import { Download } from '@codegouvfr/react-dsfr/Download';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { Table } from '@codegouvfr/react-dsfr/Table';
import { Pagination } from '@codegouvfr/react-dsfr/Pagination';
import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { Summary } from '@codegouvfr/react-dsfr/Summary';
import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb';
import { SideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { SkipLinks } from '@codegouvfr/react-dsfr/SkipLinks';
import { SegmentedControl } from '@codegouvfr/react-dsfr/SegmentedControl';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { FranceConnectButton } from '@codegouvfr/react-dsfr/FranceConnectButton';
import { AgentConnectButton } from '@codegouvfr/react-dsfr/AgentConnectButton';
import { MonCompteProButton } from '@codegouvfr/react-dsfr/MonCompteProButton';
import { ProConnectButton } from '@codegouvfr/react-dsfr/ProConnectButton';
import { Display } from '@codegouvfr/react-dsfr/Display';
import { Follow } from '@codegouvfr/react-dsfr/Follow';
import { LanguageSelect } from '@codegouvfr/react-dsfr/LanguageSelect';
import { Tooltip } from '@codegouvfr/react-dsfr/Tooltip';
import { Tile } from '@codegouvfr/react-dsfr/Tile';

// Affiché à la place d'un composant absent du paquet react-dsfr installé
// (Modal — API `createModal` incompatible avec un rendu inline —, Artwork, etc.).
const MissingComponent: React.FC<{ [key: string]: any }> = () => (
  <div className="fr-alert fr-alert--warning fr-alert--sm">
    <p>Ce composant n'est pas disponible dans cette démo.</p>
  </div>
);

// Retire les props internes injectées par Puck avant de les transmettre à un
// composant react-dsfr (qui les propagerait sur un noeud DOM → warning React).
const PUCK_INTERNAL_PROPS = ['id', 'editMode', 'puck', 'dragRef', 'isSelected'];
const dsfrProps = (props: Record<string, any>) => {
  const clean: Record<string, any> = {};
  for (const key of Object.keys(props)) {
    if (!PUCK_INTERNAL_PROPS.includes(key)) clean[key] = props[key];
  }
  return clean;
};

// react-dsfr n'a pas de composant `Textarea` : c'est `Input` avec la prop `textArea`.
const Textarea: React.FC<any> = (props) => {
  const InputAny = Input as React.ComponentType<any>;
  return <InputAny textArea label="" {...dsfrProps(props)} />;
};

const DSFR: Record<string, React.ComponentType<any> | undefined> = {
  Button,
  ButtonsGroup,
  Input,
  Textarea,
  Select,
  SelectNext,
  Checkbox,
  RadioButtons,
  ToggleSwitch,
  ToggleSwitchGroup,
  Range,
  Upload,
  Badge,
  Tag,
  TagsGroup,
  Alert,
  CallOut,
  Quote,
  Highlight,
  Notice,
  Download,
  Card,
  Accordion,
  Tabs,
  Table,
  Pagination,
  Stepper,
  Summary,
  Breadcrumb,
  SideMenu,
  SkipLinks,
  SegmentedControl,
  Header,
  Footer,
  SearchBar,
  FranceConnectButton,
  AgentConnectButton,
  MonCompteProButton,
  ProConnectButton,
  Display,
  Follow,
  LanguageSelect,
  Tooltip,
  Tile,
};
// ------------------------------------------------------------------------

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
          const Button = DSFR.Button ?? MissingComponent;
          return <Button {...dsfrProps(props)} />;
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
          const Input = DSFR.Input ?? MissingComponent;
          return <Input {...dsfrProps(props)} />;
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
          const Textarea = DSFR.Textarea ?? MissingComponent;
          return <Textarea {...dsfrProps(props)} />;
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
          const Select = DSFR.Select ?? MissingComponent;
          return <Select {...dsfrProps(props)} />;
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
          const Checkbox = DSFR.Checkbox ?? MissingComponent;
          return <Checkbox {...dsfrProps(props)} />;
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
          const RadioButtons = DSFR.RadioButtons ?? MissingComponent;
          return <RadioButtons {...dsfrProps(props)} />;
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
          const Card = DSFR.Card ?? MissingComponent;
          return <Card {...dsfrProps(props)} />;
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
          const Alert = DSFR.Alert ?? MissingComponent;
          return <Alert {...dsfrProps(props)} />;
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
          const Badge = DSFR.Badge ?? MissingComponent;
          return <Badge {...dsfrProps(props)} />;
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
          const Tag = DSFR.Tag ?? MissingComponent;
          return <Tag {...dsfrProps(props)} />;
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
          const Accordion = DSFR.Accordion ?? MissingComponent;
          return <Accordion {...dsfrProps(props)} />;
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
          const Tabs = DSFR.Tabs ?? MissingComponent;
          return <Tabs {...dsfrProps(props)} />;
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
          const Table = DSFR.Table ?? MissingComponent;
          return <Table {...dsfrProps(props)} />;
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
          const Breadcrumb = DSFR.Breadcrumb ?? MissingComponent;
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
          const CallOut = DSFR.CallOut ?? MissingComponent;
          return <CallOut {...dsfrProps(props)} />;
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
          const Quote = DSFR.Quote ?? MissingComponent;
          return <Quote {...dsfrProps(props)} />;
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
          const ToggleSwitch = DSFR.ToggleSwitch ?? MissingComponent;
          return <ToggleSwitch {...dsfrProps(props)} />;
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
          const Range = DSFR.Range ?? MissingComponent;
          return <Range {...dsfrProps(props)} />;
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
          const Stepper = DSFR.Stepper ?? MissingComponent;
          return <Stepper {...dsfrProps(props)} />;
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
          const Summary = DSFR.Summary ?? MissingComponent;
          const links = props.links?.map((link: any) => ({
            linkProps: { href: link.href },
            text: link.text,
          })) || [];
          return <Summary {...dsfrProps(props)} links={links} />;
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
          const SegmentedControl = DSFR.SegmentedControl ?? MissingComponent;
          return <SegmentedControl {...dsfrProps(props)} />;
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
          const ButtonsGroup = DSFR.ButtonsGroup ?? MissingComponent;
          return <ButtonsGroup {...dsfrProps(props)} />;
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
          const ToggleSwitchGroup = DSFR.ToggleSwitchGroup ?? MissingComponent;
          return <ToggleSwitchGroup {...dsfrProps(props)} />;
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
          const TagsGroup = DSFR.TagsGroup ?? MissingComponent;
          return <TagsGroup {...dsfrProps(props)} />;
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
          const Highlight = DSFR.Highlight ?? MissingComponent;
          return <Highlight {...dsfrProps(props)} />;
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
          const SkipLinks = DSFR.SkipLinks ?? MissingComponent;
          const links = props.links?.map((link: any) => ({
            linkProps: { href: link.href },
            text: link.text,
          })) || [];
          return <SkipLinks {...dsfrProps(props)} links={links} />;
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
          const Artwork = DSFR.Artwork ?? MissingComponent;
          return <Artwork {...dsfrProps(props)} />;
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
          const ArtworkGov = DSFR.ArtworkGov ?? MissingComponent;
          return <ArtworkGov {...dsfrProps(props)} />;
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
          const Pagination = DSFR.Pagination ?? MissingComponent;
          return <Pagination {...dsfrProps(props)} />;
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
          const Component = DSFR[componentName] ?? MissingComponent;
          return <Component {...dsfrProps(props)} />;
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
          const Modal = DSFR.Modal ?? MissingComponent;
          // Note: Modal nécessite une gestion d'état externe
          return <Modal {...dsfrProps(props)} isOpen={true} />;
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
          const Notice = DSFR.Notice ?? MissingComponent;
          return <Notice {...dsfrProps(props)} />;
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
          const Tile = DSFR.Tile ?? MissingComponent;
          return <Tile {...dsfrProps(props)} />;
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
          const LanguageSelect = DSFR.LanguageSelect ?? MissingComponent;
          return <LanguageSelect {...dsfrProps(props)} />;
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
          const Download = DSFR.Download ?? MissingComponent;
          return <Download {...dsfrProps(props)} />;
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
          const SearchBar = DSFR.SearchBar ?? MissingComponent;
          return <SearchBar {...dsfrProps(props)} />;
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
          const SelectNext = DSFR.SelectNext ?? MissingComponent;
          return <SelectNext {...dsfrProps(props)} />;
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
          const Component = DSFR[componentName] ?? MissingComponent;
          return Component ? <Component {...dsfrProps(props)} /> : <div>Composant non disponible</div>;
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
