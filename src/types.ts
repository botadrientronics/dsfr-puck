// Types pour l'intégration DSFR-Puck
import { ReactNode } from 'react';

// Types pour Puck
export type PuckComponentConfig = {
  [key: string]: {
    fields: Record<string, {
      type: string;
      [key: string]: any;
    }>;
    render: (props: Record<string, any>) => ReactNode;
  };
};

export type PuckCategory = {
  title?: string;
  components: string[];
  defaultExpanded?: boolean;
  visible?: boolean;
};

export type PuckConfig = {
  components: PuckComponentConfig;
  categories?: Record<string, PuckCategory>;
};

// Types pour les composants react-dsfr
// Ces types sont basés sur les composants principaux de @codegouvfr/react-dsfr
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-no-outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconId?: string;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  title: string;
  desc?: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  horizontal?: boolean;
  className?: string;
}

export interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  description?: string;
  children?: ReactNode;
  closable?: boolean;
  className?: string;
}

export interface BadgeProps {
  children: ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error' | 'new';
  size?: 'sm' | 'md';
  className?: string;
}

export interface TagProps {
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  nativeInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  hint?: string;
  state?: 'default' | 'success' | 'error';
  stateRelatedMessage?: string;
  className?: string;
}

export interface TextareaProps {
  label: string;
  placeholder?: string;
  nativeTextareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  hint?: string;
  state?: 'default' | 'success' | 'error';
  stateRelatedMessage?: string;
  rows?: number;
  className?: string;
}

export interface SelectProps {
  label: string;
  nativeSelectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  hint?: string;
  state?: 'default' | 'success' | 'error';
  stateRelatedMessage?: string;
  className?: string;
}

export interface OptionProps {
  value: string;
  label: string;
}

export interface CheckboxProps {
  label: string;
  nativeInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  hint?: string;
  state?: 'default' | 'success' | 'error';
  stateRelatedMessage?: string;
  className?: string;
}

export interface RadioProps {
  label: string;
  nativeInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  hint?: string;
  state?: 'default' | 'success' | 'error';
  stateRelatedMessage?: string;
  className?: string;
}

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export interface TabsProps {
  tabs: { id: string; label: string; content: ReactNode }[];
  defaultActiveTab?: string;
  className?: string;
}

export interface BreadcrumbProps {
  segments: { label: string; linkProps?: { href: string } }[];
  className?: string;
}

export interface CalloutProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  text: string;
  iconId?: string;
  className?: string;
}

export interface QuoteProps {
  children: ReactNode;
  author?: string;
  source?: string;
  className?: string;
}

export interface TableProps {
  headers: string[];
  data: (string | ReactNode)[][];
  caption?: string;
  className?: string;
}
