import React from 'react';

export interface AttributionMeta {
  title: string;
  author: string;
  license: string;
  sourceName: string;
  sourceUrl: string;
}

export interface AttributionImageProps {
  src: string;
  alt: string;
  meta: AttributionMeta;
  className?: string;
}

const AttributionImage: React.FC<AttributionImageProps> = ({ src, alt, meta, className }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className="w-full h-auto rounded border border-border" />
      <figcaption className="mt-2 text-xs text-muted-foreground">
        <span className="font-medium">{meta.title}</span> — {meta.author}. License: {meta.license}. Source: <a href={meta.sourceUrl} target="_blank" rel="noreferrer" className="underline">{meta.sourceName}</a>
      </figcaption>
    </figure>
  );
};

export default AttributionImage;


