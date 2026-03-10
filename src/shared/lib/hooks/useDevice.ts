import { useContext } from 'react';
import { DeviceContext } from '@/shared/api/DeviceContext';

export const useDevice = () => {
  const device = useContext(DeviceContext);

  if (!device) throw new Error('no device context');

  return device;
};
