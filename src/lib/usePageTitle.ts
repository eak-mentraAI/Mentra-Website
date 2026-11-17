import { useEffect } from 'react';

/**
 * Set the browser tab title while a page is mounted, and restore the previous title when
 * it unmounts. Titles should match what scripts/prerender-routes.mjs writes for the route,
 * so a direct load and an in-app navigation show the same tab title. Pass null to leave
 * the title alone (for example while a page decides it has nothing to show).
 */
export function usePageTitle(title: string | null) {
  useEffect(() => {
    if (!title) return;
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
