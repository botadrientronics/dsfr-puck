import React from 'react';
import { PuckConfig } from './types';
import {
  DSFR_COMPONENTS_SUPPORT,
  DsfrComponentName,
  IN_SCOPE_COMPONENTS,
  OUT_OF_SCOPE_COMPONENTS,
} from './components';
import { contentComponentsConfig } from './components/content';

// =====================================================================
// dsfr-puck — configuration Puck orientée « éditeur de contenu de page »
// =====================================================================
// - `puckConfig`            : primitives de contenu + composants DSFR du corps
//                             de page (défaut, recommandé).
// - `fullPuckConfig`         : ci-dessus + composants DSFR hors périmètre
//                             (formulaires, chrome, navigation, auth, graphiques…).
// - `contentComponentsConfig`: uniquement les primitives maison.
// - `outOfScopeComponentsConfig` : uniquement les composants DSFR hors périmètre.
//
// Les composants DSFR proviennent de @codegouvfr/react-dsfr (>= 1.34). Depuis la
// v1, chaque composant vit sur son propre sous-chemin : on les regroupe ici dans
// un registre indexable, utilisé par les fonctions `render`.
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

// Affiché à la place d'un composant absent du paquet react-dsfr installé.
const MissingComponent: React.FC<{ [key: string]: any }> = () => (
  <div className="fr-alert fr-alert--warning fr-alert--sm">
    <p>Ce composant n'est pas disponible dans cette version de react-dsfr.</p>
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

// Convertit une valeur de slot Puck (fonction composant) en élément rendu.
const renderSlot = (slot: any): React.ReactNode =>
  typeof slot === 'function' ? React.createElement(slot) : slot ?? null;

// Nettoie les chaînes vides → `undefined` (react-dsfr distingue les deux).
const orUndef = <T,>(v: T): T | undefined =>
  v === '' || v === null ? undefined : v;

// react-dsfr n'a pas de composant `Textarea` : c'est `Input` avec la prop `textArea`.
const Textarea: React.FC<any> = (props) => {
  const InputAny = Input as React.ComponentType<any>;
  return <InputAny textArea label="" {...dsfrProps(props)} />;
};

const DSFR: Record<string, React.ComponentType<any> | undefined> = {
  Button, ButtonsGroup, Input, Textarea, Select, SelectNext, Checkbox,
  RadioButtons, ToggleSwitch, ToggleSwitchGroup, Range, Upload, Badge, Tag,
  TagsGroup, Alert, CallOut, Quote, Highlight, Notice, Download, Card,
  Accordion, Tabs, Table, Pagination, Stepper, Summary, Breadcrumb, SideMenu,
  SkipLinks, SegmentedControl, Header, Footer, SearchBar, FranceConnectButton,
  AgentConnectButton, MonCompteProButton, ProConnectButton, Display, Follow,
  LanguageSelect, Tooltip, Tile,
};

// --- Robustesse du rendu dans Puck -----------------------------------------
// Un composant déposé est monté avec ses seules `defaultProps`. Beaucoup de
// composants react-dsfr lèvent si une prop structurée attendue est absente ;
// sans garde, l'exception démonte tout l'arbre React (page blanche). On isole
// donc chaque composant derrière une frontière d'erreur.
class ComponentErrorBoundary extends React.Component<
  { name: string; resetKey: string; children: React.ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidUpdate(prevProps: { resetKey: string }) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="fr-alert fr-alert--warning fr-alert--sm" role="alert">
          <h3 className="fr-alert__title">« {this.props.name} » n'a pas pu s'afficher</h3>
          <p>
            Ce composant a besoin d'être configuré dans le panneau de droite.
            {this.state.error?.message ? ` (${this.state.error.message})` : ''}
          </p>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}

const RenderInvoker: React.FC<{
  render: (props: any) => React.ReactNode;
  props: any;
}> = ({ render, props }) => <>{render(props)}</>;

const serializeForKey = (props: Record<string, any>) => {
  try {
    return JSON.stringify(props, (_k, v) => (typeof v === 'function' ? undefined : v));
  } catch {
    return String(Date.now());
  }
};

// --- Fragments de champs réutilisables ------------------------------------
const SEVERITY_OPTIONS = [
  { label: 'Information', value: 'info' },
  { label: 'Succès', value: 'success' },
  { label: 'Avertissement', value: 'warning' },
  { label: 'Erreur', value: 'error' },
];

const ACCENT_COLOR_OPTIONS = [
  { label: 'Défaut', value: '' },
  { label: 'Vert bourgeon', value: 'green-bourgeon' },
  { label: 'Vert émeraude', value: 'green-emeraude' },
  { label: 'Vert menthe', value: 'green-menthe' },
  { label: 'Bleu écume', value: 'blue-ecume' },
  { label: 'Bleu cumulus', value: 'blue-cumulus' },
  { label: 'Violet glycine', value: 'purple-glycine' },
  { label: 'Rose macaron', value: 'pink-macaron' },
  { label: 'Jaune tournesol', value: 'yellow-tournesol' },
  { label: 'Marron caramel', value: 'brown-caramel' },
];

const headingLevelField = (label: string, withParagraph = false) => ({
  type: 'select' as const,
  label,
  options: [
    ...(withParagraph ? [{ label: 'Paragraphe', value: 'p' }] : []),
    { label: 'Titre 2', value: 'h2' },
    { label: 'Titre 3', value: 'h3' },
    { label: 'Titre 4', value: 'h4' },
    { label: 'Titre 5', value: 'h5' },
    { label: 'Titre 6', value: 'h6' },
  ],
});

const boolField = (label: string) => ({
  type: 'radio' as const,
  label,
  options: [
    { label: 'Oui', value: true },
    { label: 'Non', value: false },
  ],
});

const iconField = {
  type: 'text' as const,
  label: "Icône (classe fr-icon-*)",
  placeholder: 'fr-icon-arrow-right-line',
};

const classNameField = { type: 'text' as const, label: 'Classes CSS supplémentaires' };

// Valeurs par défaut structurées pour un rendu immédiat après glisser-déposer.
const STRUCTURED_DEFAULT_PROPS: Record<string, Record<string, any>> = {
  ButtonsGroup: {
    buttons: [
      { children: 'Action principale', priority: 'primary' },
      { children: 'Action secondaire', priority: 'secondary' },
    ],
  },
  Tabs: {
    tabs: [
      { label: 'Premier onglet', content: '<p>Contenu du premier onglet.</p>' },
      { label: 'Second onglet', content: '<p>Contenu du second onglet.</p>' },
    ],
  },
  Table: {
    caption: 'Titre du tableau',
    headers: [{ label: 'Colonne 1' }, { label: 'Colonne 2' }, { label: 'Colonne 3' }],
    rows: [
      { cells: [{ value: 'Ligne 1' }, { value: 'Valeur' }, { value: 'Valeur' }] },
      { cells: [{ value: 'Ligne 2' }, { value: 'Valeur' }, { value: 'Valeur' }] },
    ],
  },
  Summary: {
    links: [
      { text: 'Première section', href: '#section-1' },
      { text: 'Deuxième section', href: '#section-2' },
    ],
  },
  TagsGroup: {
    tags: [{ label: 'Étiquette 1' }, { label: 'Étiquette 2' }, { label: 'Étiquette 3' }],
  },
  Accordion: { content: [] },
  CallOut: { content: [] },
  Card: { footer: [] },
  // Composants hors périmètre (rendus corrects dans `fullPuckConfig`)
  RadioButtons: {
    legend: 'Légende',
    options: [
      { label: 'Option 1', nativeInputProps: { name: 'radio', value: '1' } },
      { label: 'Option 2', nativeInputProps: { name: 'radio', value: '2' } },
    ],
  },
  Checkbox: {
    legend: 'Légende',
    options: [
      { label: 'Option 1', nativeInputProps: { name: 'checkbox', value: '1' } },
      { label: 'Option 2', nativeInputProps: { name: 'checkbox', value: '2' } },
    ],
  },
  Select: { label: 'Intitulé du sélecteur', nativeSelectProps: {} },
  SegmentedControl: {
    legend: 'Légende',
    segments: [
      { label: 'Option 1', nativeInputProps: { value: '1', defaultChecked: true } },
      { label: 'Option 2', nativeInputProps: { value: '2' } },
    ],
  },
  SkipLinks: { links: [{ anchor: '#content', label: 'Contenu' }] },
  Breadcrumb: {
    currentPageLabel: 'Page courante',
    segments: [{ label: 'Accueil', linkProps: { href: '/' } }],
  },
  ToggleSwitchGroup: {
    toggles: [
      { label: 'Interrupteur 1', inputTitle: 'interrupteur-1' },
      { label: 'Interrupteur 2', inputTitle: 'interrupteur-2' },
    ],
  },
  Footer: {
    accessibility: 'non compliant',
    brandTop: 'RÉPUBLIQUE\nFRANÇAISE',
    homeLinkProps: { href: '/', title: 'Accueil' },
  },
  SideMenu: {
    title: 'Titre du menu',
    burgerMenuButtonText: 'Dans cette rubrique',
    items: [
      { text: 'Premier lien', linkProps: { href: '#' } },
      { text: 'Deuxième lien', linkProps: { href: '#' }, isActive: true },
    ],
  },
  Header: {
    brandTop: 'RÉPUBLIQUE\nFRANÇAISE',
    homeLinkProps: { href: '/', title: 'Accueil' },
    serviceTitle: 'Nom du service',
  },
};

const buildDefaultProps = (componentName: string, fields: Record<string, any>) => {
  const fromFields: Record<string, any> = {};
  for (const [key, field] of Object.entries(fields || {})) {
    if (field && field.defaultValue !== undefined) fromFields[key] = field.defaultValue;
    else if (field && field.type === 'slot') fromFields[key] = [];
  }
  return { ...fromFields, ...(STRUCTURED_DEFAULT_PROPS[componentName] || {}) };
};

// Types de champs reconnus par Puck 0.23.
const PUCK_FIELD_TYPES = new Set([
  'text', 'textarea', 'number', 'select', 'radio', 'array', 'object',
  'external', 'slot', 'custom', 'richtext',
]);

const sanitizeFields = (fields: Record<string, any>): Record<string, any> => {
  const out: Record<string, any> = {};
  for (const [key, field] of Object.entries(fields || {})) {
    if (!field || !PUCK_FIELD_TYPES.has(field.type)) continue;

    if ((field.type === 'select' || field.type === 'radio') && !Array.isArray(field.options)) {
      continue;
    }
    if (field.type === 'array') {
      if (!field.arrayFields || typeof field.arrayFields !== 'object') {
        out[key] = { type: 'textarea', label: field.label };
        continue;
      }
      out[key] = { ...field, arrayFields: sanitizeFields(field.arrayFields) };
      continue;
    }
    if (field.type === 'object') {
      if (!field.objectFields || typeof field.objectFields !== 'object') continue;
      out[key] = { ...field, objectFields: sanitizeFields(field.objectFields) };
      continue;
    }
    out[key] = field;
  }
  return out;
};

// =====================================================================
// Configuration par composant DSFR
// =====================================================================
const createComponentConfig = (componentName: DsfrComponentName): any => {
  switch (componentName) {
    // ---------------------------------------------------------------- Actions
    case 'Button':
      return {
        fields: {
          children: { type: 'text', label: 'Texte du bouton', defaultValue: 'Libellé du bouton' },
          priority: {
            type: 'select',
            label: 'Niveau',
            defaultValue: 'primary',
            options: [
              { label: 'Primaire', value: 'primary' },
              { label: 'Secondaire', value: 'secondary' },
              { label: 'Tertiaire', value: 'tertiary' },
              { label: 'Tertiaire sans contour', value: 'tertiary no outline' },
            ],
          },
          size: {
            type: 'select',
            label: 'Taille',
            defaultValue: 'medium',
            options: [
              { label: 'Petit', value: 'small' },
              { label: 'Moyen', value: 'medium' },
              { label: 'Grand', value: 'large' },
            ],
          },
          href: { type: 'text', label: 'Lien (URL)', placeholder: 'https://…' },
          iconId: iconField,
          iconPosition: {
            type: 'select',
            label: "Position de l'icône",
            defaultValue: 'left',
            options: [
              { label: 'À gauche', value: 'left' },
              { label: 'À droite', value: 'right' },
            ],
          },
          className: classNameField,
        },
        render: (props: any) => {
          const B = DSFR.Button ?? MissingComponent;
          const { children, priority, size, href, iconId, iconPosition, className } = props;
          const common: any = {
            priority,
            size,
            className: orUndef(className),
            iconId: orUndef(iconId),
            ...(iconId ? { iconPosition } : {}),
          };
          return href ? (
            <B {...common} linkProps={{ href }}>
              {children}
            </B>
          ) : (
            <B {...common}>{children}</B>
          );
        },
      };

    case 'ButtonsGroup':
      return {
        fields: {
          buttons: {
            type: 'array',
            label: 'Boutons',
            defaultValue: [
              { children: 'Action principale', priority: 'primary', href: '' },
              { children: 'Action secondaire', priority: 'secondary', href: '' },
            ],
            arrayFields: {
              children: { type: 'text', label: 'Texte' },
              priority: {
                type: 'select',
                label: 'Niveau',
                options: [
                  { label: 'Primaire', value: 'primary' },
                  { label: 'Secondaire', value: 'secondary' },
                  { label: 'Tertiaire', value: 'tertiary' },
                ],
              },
              href: { type: 'text', label: 'Lien (URL)' },
              iconId: iconField,
            },
            getItemSummary: (item: any) => item?.children || 'Bouton',
          },
          alignment: {
            type: 'select',
            label: 'Alignement',
            defaultValue: 'left',
            options: [
              { label: 'Gauche', value: 'left' },
              { label: 'Centré', value: 'center' },
              { label: 'Droite', value: 'right' },
            ],
          },
          buttonsSize: {
            type: 'select',
            label: 'Taille des boutons',
            defaultValue: 'medium',
            options: [
              { label: 'Petit', value: 'small' },
              { label: 'Moyen', value: 'medium' },
              { label: 'Grand', value: 'large' },
            ],
          },
          inlineLayoutWhen: {
            type: 'select',
            label: 'Disposition en ligne',
            defaultValue: 'always',
            options: [
              { label: 'Jamais (empilés)', value: 'never' },
              { label: 'Toujours', value: 'always' },
              { label: 'À partir de « md »', value: 'md and up' },
            ],
          },
          className: classNameField,
        },
        render: (props: any) => {
          const G = DSFR.ButtonsGroup ?? MissingComponent;
          const rows: any[] = Array.isArray(props.buttons) ? props.buttons : [];
          const buttons = rows
            .filter((b) => b && b.children)
            .map((b) => ({
              children: b.children,
              priority: b.priority || 'primary',
              iconId: orUndef(b.iconId),
              ...(b.href ? { linkProps: { href: b.href } } : {}),
            }));
          if (buttons.length === 0) return <p className="fr-text--sm">Ajoutez au moins un bouton.</p>;
          return (
            <G
              buttons={buttons as any}
              alignment={props.alignment}
              buttonsSize={props.buttonsSize}
              inlineLayoutWhen={props.inlineLayoutWhen}
              className={orUndef(props.className)}
            />
          );
        },
      };

    case 'Download':
      return {
        fields: {
          label: { type: 'text', label: 'Libellé', defaultValue: 'Télécharger le document' },
          details: { type: 'text', label: 'Détails (format, poids)', defaultValue: 'PDF – 1,2 Mo' },
          href: { type: 'text', label: 'URL du fichier', placeholder: '/documents/fichier.pdf' },
          className: classNameField,
        },
        render: (props: any) => {
          const D = DSFR.Download ?? MissingComponent;
          return (
            <D
              label={props.label}
              details={props.details}
              linkProps={{ href: props.href || '#', download: true }}
              className={orUndef(props.className)}
            />
          );
        },
      };

    // -------------------------------------------------------------- Mise en avant
    case 'Alert':
      return {
        fields: {
          severity: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: SEVERITY_OPTIONS,
          },
          title: { type: 'text', label: 'Titre', defaultValue: "Titre de l'alerte" },
          description: { type: 'textarea', label: 'Description', defaultValue: "Texte de l'alerte." },
          small: boolField('Version compacte'),
          closable: boolField('Peut être fermée'),
          as: headingLevelField("Niveau de titre"),
          className: classNameField,
        },
        render: (props: any) => {
          const A = DSFR.Alert ?? MissingComponent;
          const small = !!props.small && !!props.description;
          return (
            <A
              severity={props.severity || 'info'}
              title={small ? orUndef(props.title) : props.title}
              description={orUndef(props.description)}
              small={small}
              closable={!!props.closable}
              as={orUndef(props.as)}
              className={orUndef(props.className)}
            />
          );
        },
      };

    case 'CallOut':
      return {
        fields: {
          title: { type: 'text', label: 'Titre', defaultValue: "Titre de la mise en avant" },
          titleAs: headingLevelField('Niveau de titre', true),
          content: { type: 'slot', label: 'Contenu' },
          iconId: iconField,
          colorVariant: {
            type: 'select',
            label: "Couleur d'accent",
            defaultValue: '',
            options: ACCENT_COLOR_OPTIONS,
          },
          buttonLabel: { type: 'text', label: 'Bouton — texte (optionnel)' },
          buttonHref: { type: 'text', label: 'Bouton — lien' },
          className: classNameField,
        },
        render: (props: any) => {
          const C = DSFR.CallOut ?? MissingComponent;
          const buttonProps = props.buttonLabel
            ? { children: props.buttonLabel, linkProps: { href: props.buttonHref || '#' } }
            : undefined;
          const content = renderSlot(props.content);
          return (
            <C
              title={orUndef(props.title)}
              titleAs={orUndef(props.titleAs)}
              bodyAs="div"
              iconId={orUndef(props.iconId)}
              colorVariant={orUndef(props.colorVariant)}
              buttonProps={buttonProps as any}
              className={orUndef(props.className)}
            >
              {content ?? <span />}
            </C>
          );
        },
      };

    case 'Notice':
      return {
        fields: {
          title: { type: 'text', label: 'Titre', defaultValue: "Bandeau d'information" },
          description: { type: 'textarea', label: 'Description' },
          severity: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Information', value: 'info' },
              { label: 'Avertissement', value: 'warning' },
              { label: 'Alerte', value: 'alert' },
            ],
          },
          linkLabel: { type: 'text', label: 'Lien — texte (optionnel)' },
          linkHref: { type: 'text', label: 'Lien — URL' },
          isClosable: boolField('Peut être fermé'),
          className: classNameField,
        },
        render: (props: any) => {
          const N = DSFR.Notice ?? MissingComponent;
          const link = props.linkLabel
            ? { text: props.linkLabel, linkProps: { href: props.linkHref || '#' } }
            : undefined;
          return (
            <N
              title={props.title}
              description={orUndef(props.description)}
              severity={props.severity || 'info'}
              link={link as any}
              isClosable={!!props.isClosable}
              className={orUndef(props.className)}
            />
          );
        },
      };

    case 'Highlight':
      return {
        fields: {
          content: {
            type: 'richtext',
            label: 'Contenu',
            defaultValue: '<p>Passage à mettre en relief.</p>',
          },
          size: {
            type: 'select',
            label: 'Taille du texte',
            defaultValue: 'md',
            options: [
              { label: 'Normale', value: 'md' },
              { label: 'Petite', value: 'sm' },
              { label: 'Grande', value: 'lg' },
            ],
          },
          className: classNameField,
        },
        render: (props: any) => {
          const H = DSFR.Highlight ?? MissingComponent;
          return (
            <H
              size={props.size && props.size !== 'md' ? props.size : undefined}
              bodyAs="div"
              className={orUndef(props.className)}
            >
              {props.content ?? <span />}
            </H>
          );
        },
      };

    case 'Quote':
      return {
        fields: {
          text: { type: 'textarea', label: 'Citation', defaultValue: 'Texte de la citation.' },
          author: { type: 'text', label: 'Auteur' },
          source: { type: 'text', label: 'Source' },
          sourceUrl: { type: 'text', label: 'Lien de la source' },
          imageUrl: { type: 'text', label: "URL de l'image (portrait)" },
          size: {
            type: 'select',
            label: 'Taille',
            defaultValue: 'medium',
            options: [
              { label: 'Moyenne', value: 'medium' },
              { label: 'Grande', value: 'large' },
              { label: 'Très grande', value: 'xlarge' },
            ],
          },
          accentColor: {
            type: 'select',
            label: "Couleur d'accent",
            defaultValue: '',
            options: ACCENT_COLOR_OPTIONS,
          },
          className: classNameField,
        },
        render: (props: any) => {
          const Q = DSFR.Quote ?? MissingComponent;
          return (
            <Q
              text={props.text}
              author={orUndef(props.author)}
              source={orUndef(props.source)}
              sourceUrl={orUndef(props.sourceUrl)}
              imageUrl={orUndef(props.imageUrl)}
              size={orUndef(props.size)}
              accentColor={orUndef(props.accentColor)}
              className={orUndef(props.className)}
            />
          );
        },
      };

    case 'Badge':
      return {
        fields: {
          children: { type: 'text', label: 'Texte', defaultValue: 'Badge' },
          severity: {
            type: 'select',
            label: 'Type',
            defaultValue: 'info',
            options: [
              { label: 'Neutre', value: '' },
              ...SEVERITY_OPTIONS,
              { label: 'Nouveau', value: 'new' },
            ],
          },
          small: boolField('Petit'),
          noIcon: boolField('Sans icône'),
          className: classNameField,
        },
        render: (props: any) => {
          const B = DSFR.Badge ?? MissingComponent;
          return (
            <B
              severity={orUndef(props.severity)}
              small={!!props.small}
              noIcon={!!props.noIcon}
              className={orUndef(props.className)}
            >
              {props.children || 'Badge'}
            </B>
          );
        },
      };

    case 'Tag':
      return {
        fields: {
          children: { type: 'text', label: 'Texte', defaultValue: 'Étiquette' },
          iconId: iconField,
          small: boolField('Petit'),
          className: classNameField,
        },
        render: (props: any) => {
          const T = DSFR.Tag ?? MissingComponent;
          return (
            <T
              small={!!props.small}
              className={orUndef(props.className)}
              {...(props.iconId ? { iconId: props.iconId } : {})}
            >
              {props.children || 'Étiquette'}
            </T>
          );
        },
      };

    case 'TagsGroup':
      return {
        fields: {
          tags: {
            type: 'array',
            label: 'Étiquettes',
            defaultValue: [{ label: 'Étiquette 1' }, { label: 'Étiquette 2' }],
            arrayFields: {
              label: { type: 'text', label: 'Texte' },
              iconId: iconField,
            },
            getItemSummary: (item: any) => item?.label || 'Étiquette',
          },
          small: boolField('Petites étiquettes'),
          className: classNameField,
        },
        render: (props: any) => {
          const G = DSFR.TagsGroup ?? MissingComponent;
          const rows: any[] = Array.isArray(props.tags) ? props.tags : [];
          const tags = rows
            .filter((t) => t && t.label)
            .map((t) => ({ children: t.label, ...(t.iconId ? { iconId: t.iconId } : {}) }));
          if (tags.length === 0) return <p className="fr-text--sm">Ajoutez au moins une étiquette.</p>;
          return (
            <G smallTags={!!props.small} tags={tags as any} className={orUndef(props.className)} />
          );
        },
      };

    // ----------------------------------------------------------------- Médias
    case 'Card':
      return {
        fields: {
          title: { type: 'text', label: 'Titre', defaultValue: 'Titre de la carte' },
          titleAs: headingLevelField('Niveau de titre'),
          desc: { type: 'textarea', label: 'Description', defaultValue: 'Description de la carte.' },
          imageUrl: { type: 'text', label: "URL de l'image" },
          imageAlt: { type: 'text', label: "Texte alternatif de l'image" },
          badge: { type: 'text', label: 'Badge sur l\'image (optionnel)' },
          href: { type: 'text', label: 'Lien (URL)' },
          enlargeLink: boolField('Toute la carte cliquable'),
          size: {
            type: 'select',
            label: 'Taille du texte',
            defaultValue: 'medium',
            options: [
              { label: 'Petite', value: 'small' },
              { label: 'Moyenne', value: 'medium' },
              { label: 'Grande', value: 'large' },
            ],
          },
          horizontal: boolField('Disposition horizontale'),
          ratio: {
            type: 'select',
            label: 'Ratio image (horizontal)',
            defaultValue: '',
            options: [
              { label: 'Défaut', value: '' },
              { label: '33 / 66', value: '33/66' },
              { label: '50 / 50', value: '50/50' },
            ],
          },
          shadow: boolField('Ombre portée'),
          border: boolField('Bordure'),
          background: boolField('Fond'),
          grey: boolField('Fond gris'),
          footer: { type: 'slot', label: 'Pied de carte (actions)' },
          className: classNameField,
        },
        render: (props: any) => {
          const C = DSFR.Card ?? MissingComponent;
          const p: any = {
            title: props.title,
            titleAs: orUndef(props.titleAs),
            desc: orUndef(props.desc),
            size: props.size,
            horizontal: !!props.horizontal,
            shadow: !!props.shadow,
            border: props.border === undefined ? true : !!props.border,
            background: props.background === undefined ? true : !!props.background,
            grey: !!props.grey,
            className: orUndef(props.className),
          };
          if (props.horizontal && props.ratio) p.ratio = props.ratio;
          if (props.imageUrl) {
            p.imageUrl = props.imageUrl;
            p.imageAlt = props.imageAlt || '';
            if (props.badge) {
              const B = DSFR.Badge ?? MissingComponent;
              p.badge = <B>{props.badge}</B>;
            }
          }
          if (props.href) {
            p.linkProps = { href: props.href };
            if (props.enlargeLink) p.enlargeLink = true;
          }
          const footer = renderSlot(props.footer);
          if (footer) p.footer = footer;
          return <C {...p} />;
        },
      };

    case 'Tile':
      return {
        fields: {
          title: { type: 'text', label: 'Titre', defaultValue: 'Titre de la tuile' },
          titleAs: headingLevelField('Niveau de titre'),
          desc: { type: 'textarea', label: 'Description' },
          detail: { type: 'text', label: 'Détail (optionnel)' },
          imageUrl: { type: 'text', label: "URL de l'image / pictogramme" },
          href: { type: 'text', label: 'Lien (URL)' },
          orientation: {
            type: 'select',
            label: 'Orientation',
            defaultValue: 'vertical',
            options: [
              { label: 'Verticale', value: 'vertical' },
              { label: 'Horizontale', value: 'horizontal' },
            ],
          },
          small: boolField('Version compacte'),
          grey: boolField('Fond gris'),
          noBorder: boolField('Sans bordure'),
          noBackground: boolField('Sans fond'),
          className: classNameField,
        },
        render: (props: any) => {
          const T = DSFR.Tile ?? MissingComponent;
          const p: any = {
            title: props.title,
            titleAs: orUndef(props.titleAs),
            desc: orUndef(props.desc),
            detail: orUndef(props.detail),
            orientation: props.orientation,
            small: !!props.small,
            grey: !!props.grey,
            noBorder: !!props.noBorder,
            noBackground: !!props.noBackground,
            className: orUndef(props.className),
          };
          if (props.imageUrl) {
            p.imageUrl = props.imageUrl;
            p.imageAlt = '';
          }
          if (props.href) p.linkProps = { href: props.href };
          return <T {...p} />;
        },
      };

    // -------------------------------------------------------------- Conteneurs
    case 'Accordion':
      return {
        fields: {
          label: { type: 'text', label: 'Intitulé', defaultValue: "Intitulé de l'accordéon" },
          titleAs: headingLevelField('Niveau de titre'),
          defaultExpanded: boolField('Ouvert par défaut'),
          content: { type: 'slot', label: 'Contenu' },
          className: classNameField,
        },
        render: (props: any) => {
          const A = DSFR.Accordion ?? MissingComponent;
          return (
            <A
              label={props.label || "Intitulé de l'accordéon"}
              titleAs={orUndef(props.titleAs)}
              defaultExpanded={!!props.defaultExpanded}
              className={orUndef(props.className)}
            >
              {renderSlot(props.content) ?? <span />}
            </A>
          );
        },
      };

    case 'Tabs':
      return {
        fields: {
          tabs: {
            type: 'array',
            label: 'Onglets',
            defaultValue: [
              { label: 'Premier onglet', content: '<p>Contenu du premier onglet.</p>' },
              { label: 'Second onglet', content: '<p>Contenu du second onglet.</p>' },
            ],
            arrayFields: {
              label: { type: 'text', label: "Titre de l'onglet" },
              iconId: iconField,
              content: { type: 'richtext', label: 'Contenu' },
            },
            getItemSummary: (item: any) => item?.label || 'Onglet',
          },
          className: classNameField,
        },
        render: (props: any) => {
          const T = DSFR.Tabs ?? MissingComponent;
          const rows: any[] = Array.isArray(props.tabs) ? props.tabs : [];
          const tabs = rows
            .filter((t) => t && t.label)
            .map((t) => ({
              label: t.label,
              iconId: orUndef(t.iconId),
              content: t.content ?? null,
            }));
          if (tabs.length === 0) return <p className="fr-text--sm">Ajoutez au moins un onglet.</p>;
          return <T tabs={tabs as any} className={orUndef(props.className)} />;
        },
      };

    case 'Table':
      return {
        fields: {
          caption: { type: 'text', label: 'Titre du tableau', defaultValue: 'Titre du tableau' },
          noCaption: boolField('Masquer le titre (accessible seulement)'),
          bottomCaption: boolField('Titre sous le tableau'),
          headers: {
            type: 'array',
            label: 'En-têtes de colonnes',
            defaultValue: [{ label: 'Colonne 1' }, { label: 'Colonne 2' }],
            arrayFields: { label: { type: 'text', label: 'En-tête' } },
            getItemSummary: (item: any) => item?.label || 'Colonne',
          },
          rows: {
            type: 'array',
            label: 'Lignes',
            defaultValue: [
              { cells: [{ value: 'A1' }, { value: 'B1' }] },
              { cells: [{ value: 'A2' }, { value: 'B2' }] },
            ],
            arrayFields: {
              cells: {
                type: 'array',
                label: 'Cellules',
                arrayFields: { value: { type: 'text', label: 'Valeur' } },
              },
            },
            getItemSummary: (_item: any, i?: number) => `Ligne ${typeof i === 'number' ? i + 1 : ''}`,
          },
          bordered: boolField('Bordures'),
          fixed: boolField('Largeur de colonnes fixe'),
          noScroll: boolField('Pas de défilement horizontal'),
          className: classNameField,
        },
        render: (props: any) => {
          const T = DSFR.Table ?? MissingComponent;
          const headers = (Array.isArray(props.headers) ? props.headers : []).map(
            (h: any) => h?.label ?? ''
          );
          const data = (Array.isArray(props.rows) ? props.rows : []).map((r: any) =>
            (Array.isArray(r?.cells) ? r.cells : []).map((c: any) => c?.value ?? '')
          );
          return (
            <T
              caption={props.caption || 'Tableau'}
              noCaption={!!props.noCaption}
              bottomCaption={!!props.bottomCaption}
              headers={headers}
              data={data}
              bordered={!!props.bordered}
              fixed={!!props.fixed}
              noScroll={!!props.noScroll}
              className={orUndef(props.className)}
            />
          );
        },
      };

    // ------------------------------------------------------ Navigation de page
    case 'Summary':
      return {
        fields: {
          title: { type: 'text', label: 'Titre du sommaire', placeholder: 'Sommaire' },
          as: headingLevelField('Niveau de titre', true),
          links: {
            type: 'array',
            label: 'Entrées',
            defaultValue: [
              { text: 'Première section', href: '#section-1' },
              { text: 'Deuxième section', href: '#section-2' },
            ],
            arrayFields: {
              text: { type: 'text', label: 'Texte' },
              href: { type: 'text', label: 'Ancre / URL', placeholder: '#section-1' },
            },
            getItemSummary: (item: any) => item?.text || 'Entrée',
          },
          className: classNameField,
        },
        render: (props: any) => {
          const S = DSFR.Summary ?? MissingComponent;
          const links = (Array.isArray(props.links) ? props.links : [])
            .filter((l: any) => l && l.text)
            .map((l: any) => ({ text: l.text, linkProps: { href: l.href || '#' } }));
          if (links.length === 0) return <p className="fr-text--sm">Ajoutez au moins une entrée.</p>;
          return (
            <S
              title={orUndef(props.title)}
              as={orUndef(props.as)}
              links={links as any}
              className={orUndef(props.className)}
            />
          );
        },
      };

    case 'Stepper':
      return {
        fields: {
          title: { type: 'text', label: "Titre de l'étape en cours", defaultValue: 'Étape en cours' },
          currentStep: { type: 'number', label: 'Étape en cours', defaultValue: 1, min: 1 },
          stepCount: { type: 'number', label: "Nombre d'étapes", defaultValue: 3, min: 1 },
          nextTitle: { type: 'text', label: 'Titre de la prochaine étape (optionnel)' },
          className: classNameField,
        },
        render: (props: any) => {
          const S = DSFR.Stepper ?? MissingComponent;
          const stepCount = Math.max(1, Number(props.stepCount) || 1);
          const currentStep = Math.min(stepCount, Math.max(1, Number(props.currentStep) || 1));
          return (
            <S
              title={props.title || 'Étape en cours'}
              currentStep={currentStep}
              stepCount={stepCount}
              nextTitle={orUndef(props.nextTitle)}
              className={orUndef(props.className)}
            />
          );
        },
      };

    // ============================================================
    // Composants hors périmètre — rendus « best effort » pour `fullPuckConfig`
    // ============================================================
    case 'Input':
    case 'Textarea':
    case 'Select':
    case 'SelectNext':
      return {
        fields: {
          label: { type: 'text', label: 'Libellé', defaultValue: 'Libellé du champ' },
          hint: { type: 'text', label: 'Indice' },
          placeholder: { type: 'text', label: 'Placeholder' },
          className: classNameField,
        },
        render: (props: any) => {
          const C = DSFR[componentName] ?? MissingComponent;
          return <C {...dsfrProps(props)} />;
        },
      };

    case 'Checkbox':
    case 'RadioButtons':
      return {
        fields: {
          legend: { type: 'text', label: 'Légende', defaultValue: 'Légende' },
          options: {
            type: 'array',
            label: 'Options',
            defaultValue: [
              { label: 'Option 1', nativeInputProps: { value: '1' } },
              { label: 'Option 2', nativeInputProps: { value: '2' } },
            ],
            arrayFields: { label: { type: 'text', label: 'Libellé' } },
          },
          hint: { type: 'text', label: 'Indice' },
          className: classNameField,
        },
        render: (props: any) => {
          const C = DSFR[componentName] ?? MissingComponent;
          return <C {...dsfrProps(props)} />;
        },
      };

    case 'Pagination':
      return {
        fields: {
          currentPage: { type: 'number', label: 'Page actuelle', defaultValue: 1 },
          pagesCount: { type: 'number', label: 'Nombre de pages', defaultValue: 5 },
          className: classNameField,
        },
        render: (props: any) => {
          const P = DSFR.Pagination ?? MissingComponent;
          return (
            <P
              count={Number(props.pagesCount) || 1}
              defaultPage={Number(props.currentPage) || 1}
              getPageLinkProps={(page: number) => ({ href: '#', title: `Page ${page}` })}
              className={orUndef(props.className)}
            />
          );
        },
      };

    default:
      return {
        fields: { className: classNameField },
        render: (props: any) => {
          const C = DSFR[componentName] ?? MissingComponent;
          return <C {...dsfrProps(props)} />;
        },
      };
  }
};

// =====================================================================
// Assemblage des configurations Puck
// =====================================================================
const wrapRender = (key: string, originalRender: (props: any) => React.ReactNode) => (
  props: any
) => (
  <ComponentErrorBoundary name={key} resetKey={serializeForKey(props)}>
    <RenderInvoker render={originalRender} props={props} />
  </ComponentErrorBoundary>
);

const buildDsfrComponents = (names: readonly DsfrComponentName[]) => {
  const components: Record<string, any> = {};
  for (const componentName of names) {
    const key = `Dsfr${componentName}`;
    const config = createComponentConfig(componentName);
    components[key] = {
      ...config,
      label: DSFR_COMPONENTS_SUPPORT[componentName].displayName,
      fields: sanitizeFields(config.fields),
      defaultProps: buildDefaultProps(componentName, config.fields),
      render: wrapRender(key, config.render),
    };
  }
  return components;
};

const buildContentComponents = () => {
  const components: Record<string, any> = {};
  for (const [key, config] of Object.entries(contentComponentsConfig)) {
    components[key] = {
      ...config,
      label: config.label ?? key,
      fields: sanitizeFields(config.fields),
      defaultProps: { ...buildDefaultProps(key, config.fields), ...(config.defaultProps ?? {}) },
      render: wrapRender(key, config.render),
    };
  }
  return components;
};

// Catégories affichées dans la barre latérale de l'éditeur.
const CONTENT_CATEGORIES = {
  texte: {
    title: 'Texte',
    components: ['Heading', 'RichText', 'List', 'Divider', 'DsfrHighlight', 'DsfrQuote'],
  },
  media: {
    title: 'Médias',
    components: ['Image', 'Embed', 'DsfrCard', 'DsfrTile'],
  },
  miseEnAvant: {
    title: 'Mise en avant',
    components: ['DsfrCallOut', 'DsfrAlert', 'DsfrNotice', 'DsfrBadge', 'DsfrTag', 'DsfrTagsGroup'],
  },
  conteneurs: {
    title: 'Conteneurs',
    components: ['Grid', 'DsfrAccordion', 'DsfrTabs', 'DsfrTable'],
  },
  actions: {
    title: 'Actions',
    components: ['DsfrButton', 'DsfrButtonsGroup', 'DsfrDownload'],
  },
  navigationDePage: {
    title: 'Navigation de page',
    components: ['DsfrSummary', 'DsfrStepper'],
  },
};

// --- Générateurs publics -------------------------------------------------
export const generateContentPuckConfig = (): PuckConfig => ({
  components: {
    ...buildContentComponents(),
    ...buildDsfrComponents(IN_SCOPE_COMPONENTS),
  },
  categories: CONTENT_CATEGORIES,
});

export const generateOutOfScopePuckConfig = (): PuckConfig => ({
  components: buildDsfrComponents(OUT_OF_SCOPE_COMPONENTS),
});

export const generateFullPuckConfig = (): PuckConfig => {
  const content = generateContentPuckConfig();
  const outOfScope = generateOutOfScopePuckConfig();
  return {
    components: { ...content.components, ...outOfScope.components },
    categories: {
      ...CONTENT_CATEGORIES,
      horsPerimetre: {
        title: 'Hors périmètre (site statique)',
        components: Object.keys(outOfScope.components),
        defaultExpanded: false,
      },
    },
  };
};

export const contentComponentsPuckConfig: PuckConfig = generateContentPuckConfig();
export const outOfScopeComponentsPuckConfig: PuckConfig = generateOutOfScopePuckConfig();
export const fullPuckConfig: PuckConfig = generateFullPuckConfig();

// Configuration par défaut : l'éditeur de contenu de page.
export const puckConfig: PuckConfig = contentComponentsPuckConfig;

export default puckConfig;
