import styles from './Button.module.css';
import cx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button className={cx(styles.button, variant === 'primary' && styles.primary, className)} {...props}>
      {children}
    </button>
  );
};