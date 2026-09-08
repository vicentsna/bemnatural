import { useEffect } from 'react';

/**
 * Revela elementos [data-reveal] conforme entram na viewport.
 *
 * Estratégia à prova de falhas:
 *  - o conteúdo é visível por padrão (CSS); só escondemos depois que o JS
 *    confirma que vai animar (classe .js-anim no <html>);
 *  - o gatilho é um listener de scroll/resize (eventos que sempre disparam),
 *    não IntersectionObserver nem requestAnimationFrame.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }

    root.classList.add('js-anim');

    let remaining = els.slice();

    const check = () => {
      const vh = window.innerHeight;
      remaining = remaining.filter((el) => {
        if (el.classList.contains('is-in')) return false;
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('is-in');
          return false;
        }
        return true;
      });
      if (!remaining.length) teardown();
    };

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('is-in');
          });
          check();
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
      );
      remaining.forEach((el) => io!.observe(el));
    }

    const teardown = () => {
      io?.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check(); // revela o que já está visível no primeiro paint

    return teardown;
  }, []);
}

/** Rola até um id (o alvo tem scroll-margin-top para o header fixo). */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
