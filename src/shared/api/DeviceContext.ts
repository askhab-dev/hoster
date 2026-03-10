import { createContext } from 'react';

export type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isMobileOrTablet: boolean;
  isLaptop: boolean;
};

export const DeviceContext = createContext<DeviceType | undefined>(undefined);
