import { memo, useState } from 'react';
import cx from 'clsx';
import styles from './MultiSwitcher.module.scss';
import type { MultiSwitcherProps, SwitcherId } from './MultiSwitcher.types';

const SwitcherComponent = <T extends SwitcherId>(
  props: MultiSwitcherProps<T>,
) => {
  const {
    items,
    defaultValue,
    value: controlledValue,
    onChange,
    className = '',
  } = props;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );

  const activeId = isControlled ? controlledValue : internalValue;

  const handleClick = (id: T) => {
    if (isControlled) {
      onChange?.(id);
    } else {
      setInternalValue(id);
    }
  };

  return (
    <div className={cx(styles.container, className)}>
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type='button'
            className={cx(
              styles.item,
              isActive && styles.active,
              item.disabled && styles.disabled,
            )}
            onClick={() => !item.disabled && handleClick(item.id)}
            disabled={item.disabled}
          >
            {item.icon}
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export const MultiSwitcher = memo(SwitcherComponent);
