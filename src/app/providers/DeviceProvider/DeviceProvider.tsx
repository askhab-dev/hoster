import { useMemo } from 'react';
import { DeviceContext, type DeviceType } from '@/shared/api/DeviceContext';
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isLaptop = useMediaQuery('(min-width: 1024px)');

  const device: DeviceType = {
    isMobile,
    isTablet,
    isMobileOrTablet: isMobile || isTablet,
    isLaptop,
  };
  const context = useMemo(() => device, [isMobile, isTablet, isLaptop]);

  return (
    <DeviceContext.Provider value={context}>{children}</DeviceContext.Provider>
  );
};
