import styles from './Button.module.css';
import cx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  let variantClass = '';

  if (variant === 'primary') {
    variantClass = styles.primary;
  } else if (variant === 'secondary') {
    variantClass = styles.secondary;
  }

  return (
    <button className={cx(styles.button, variantClass, className)} {...props}>
      {children}
    </button>
  );
};
