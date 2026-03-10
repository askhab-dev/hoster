import cx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = (props: ButtonProps) => {
  const { children, variant, className, ...restProps } = props;
  let variantClass = '';

  if (variant === 'primary') {
    variantClass = styles.primary;
  } else if (variant === 'secondary') {
    variantClass = styles.secondary;
  }

  return (
    <button
      className={cx(styles.button, variantClass, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
