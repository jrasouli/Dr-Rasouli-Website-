import React from 'react';
import { Link } from 'react-router-dom';

/** Shared max-width container used on every page so edges line up. */
export const Container: React.FC<{ children: React.ReactNode; className?: string; narrow?: boolean }> = ({ children, className = '', narrow = false }) => (
  <div className={`${narrow ? 'max-w-4xl' : 'max-w-6xl'} mx-auto px-5 sm:px-8 ${className}`}>{children}</div>
);

type Variant = 'primary' | 'secondary' | 'onDark';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-teal-700 text-white hover:bg-teal-800 border border-teal-700 hover:border-teal-800 shadow-sm',
  secondary: 'bg-white text-navy-800 border border-navy-800/25 hover:border-navy-800 hover:bg-navy-50',
  onDark: 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10',
};

const BASE = 'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

/** One button style for the whole site. Renders <Link> for internal routes and <a> otherwise. */
export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, variant = 'primary', className = '', external }) => {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  if (!isExternal || href.endsWith('.pdf')) {
    if (href.endsWith('.pdf')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
    }
    return <Link to={href} className={cls}>{children}</Link>;
  }
  const newTab = href.startsWith('http');
  return (
    <a href={href} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  );
};

/** Small uppercase label used above headings. */
export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string; onDark?: boolean }> = ({ children, className = '', onDark = false }) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${onDark ? 'text-teal-300' : 'text-teal-700'} ${className}`}>{children}</p>
);

/** Section heading block: eyebrow + serif title + optional lead text. */
export const SectionHeading: React.FC<{ eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; center?: boolean; onDark?: boolean; className?: string }> = ({ eyebrow, title, lead, center = false, onDark = false, className = '' }) => (
  <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
    {eyebrow && <Eyebrow onDark={onDark} className="mb-3">{eyebrow}</Eyebrow>}
    <h2 className={`text-3xl md:text-4xl font-semibold leading-tight ${onDark ? 'text-white' : 'text-navy-800'}`}>{title}</h2>
    {lead && <p className={`mt-4 text-lg leading-relaxed ${onDark ? 'text-navy-100/90' : 'text-slate-600'}`}>{lead}</p>}
  </div>
);

/** The one page-header style used on every inner page. */
export const PageHeader: React.FC<{ eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; children?: React.ReactNode }> = ({ eyebrow, title, lead, children }) => (
  <header className="bg-sand border-b border-sand-200">
    <Container className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
          <h1 className="text-4xl md:text-5xl font-semibold text-navy-800 leading-[1.1]">{title}</h1>
          {lead && <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">{lead}</p>}
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </Container>
  </header>
);

/** <picture> with WebP + JPG fallback for images in /public/images. Pass the base name without extension. */
export const Picture: React.FC<{ name: string; alt: string; className?: string; imgClassName?: string; eager?: boolean; width?: number; height?: number }> = ({ name, alt, className, imgClassName, eager = false, width, height }) => (
  <picture className={className}>
    <source srcSet={`/images/${name}.webp`} type="image/webp" />
    <img
      src={`/images/${name}.jpg`}
      alt={alt}
      className={imgClassName}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      width={width}
      height={height}
    />
  </picture>
);
