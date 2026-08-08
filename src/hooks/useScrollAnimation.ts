import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    const observe = () => {
      const elements = document.querySelectorAll(
        '.fade-up:not(.visible), .fade-left:not(.visible), .fade-right:not(.visible)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Observe elements initially and after any DOM mutations
    observe();

    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
