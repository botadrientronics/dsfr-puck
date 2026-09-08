import React from 'react';
import type { PuckComponentDef } from './types';

// Transforme une URL « grand public » en URL d'embarquement.
const toEmbedSrc = (provider: string, url: string): string | null => {
  const raw = (url || '').trim();
  if (!raw) return null;
  try {
    if (provider === 'iframe') return raw;
    const u = new URL(raw);
    if (provider === 'youtube') {
      const id =
        u.hostname.includes('youtu.be')
          ? u.pathname.slice(1)
          : u.searchParams.get('v') || u.pathname.split('/').pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (provider === 'vimeo') {
      const id = u.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    if (provider === 'dailymotion') {
      const id = u.pathname.includes('/video/')
        ? u.pathname.split('/video/')[1]
        : u.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.dailymotion.com/embed/video/${id}` : null;
    }
    return raw;
  } catch {
    return null;
  }
};

// Vidéo ou iframe responsive, markup DSFR `fr-content-media` + `fr-responsive-vid`.
export const EmbedConfig: PuckComponentDef = {
  label: 'Vidéo / Embed',
  fields: {
    provider: {
      type: 'select',
      label: 'Source',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Vimeo', value: 'vimeo' },
        { label: 'Dailymotion', value: 'dailymotion' },
        { label: 'Iframe (URL directe)', value: 'iframe' },
      ],
    },
    url: {
      type: 'text',
      label: "Lien de la vidéo (ou URL d'iframe)",
      placeholder: 'https://www.youtube.com/watch?v=…',
    },
    ratio: {
      type: 'select',
      label: 'Ratio',
      options: [
        { label: '16:9', value: '16x9' },
        { label: '4:3', value: '4x3' },
        { label: '1:1', value: '1x1' },
      ],
    },
    title: {
      type: 'text',
      label: 'Titre (accessibilité)',
      placeholder: 'Titre de la vidéo',
    },
    caption: { type: 'text', label: 'Légende (optionnel)' },
  },
  defaultProps: { provider: 'youtube', url: '', ratio: '16x9', title: 'Vidéo', caption: '' },
  render: ({ provider, url, ratio, title, caption }) => {
    const src = toEmbedSrc(provider, url);
    const ratioClass = ['16x9', '4x3', '1x1'].includes(ratio) ? ratio : '16x9';
    return (
      <figure className="fr-content-media" role="group">
        <div className={`fr-responsive-vid fr-responsive-vid--${ratioClass}`}>
          {src ? (
            <iframe
              title={title || 'Contenu embarqué'}
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="fr-p-2w fr-background-alt--grey">
              <p className="fr-text--sm fr-mb-0">
                Renseignez le lien de la vidéo dans le panneau de droite.
              </p>
            </div>
          )}
        </div>
        {caption ? <figcaption className="fr-content-media__caption">{caption}</figcaption> : null}
      </figure>
    );
  },
};
