import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const handleMediaChange = (e: MediaQueryListEvent) => {
    setMatches(e.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);
    media.addEventListener('change', handleMediaChange);

    return () => {
      media.removeEventListener('change', handleMediaChange);
    };
  }, [query]);

  return matches;
};
