import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** atraso em ms */
  delay?: number;
  className?: string;
  as?: 'div' | 'li';
}

/** Marca o elemento para revelar no scroll. A animação é 100% CSS (.reveal / .is-in). */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined;
  const cls = className ? `reveal ${className}` : 'reveal';
  const Tag = as;
  return (
    <Tag className={cls} data-reveal style={style}>
      {children}
    </Tag>
  );
}
