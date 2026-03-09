import cx from 'clsx';

import styles from './Logo.module.css';

export const Logo: React.FC<{ className?: string }> = (props) => {
  const { className } = props;

  return <span className={cx(styles.logo, className)}>ХОСТЕР</span>;
};
