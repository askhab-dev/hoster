import type { ReactNode } from 'react';

export type SwitcherId = string | number;

export interface SwitcherItem<T = SwitcherId> {
  id: T;
  label: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface MultiSwitcherProps<T = SwitcherId> {
  items: SwitcherItem<T>[];
  defaultValue?: T;
  value?: T;
  onChange?: (id: T) => void;
  className?: string;
}
