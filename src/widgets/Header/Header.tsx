import styles from './Header.module.scss';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { Logo } from '@/shared/ui/Logo';

export const Header = () => {
  const { isMobileOrTablet } = useDevice();

  return (
    <header className={styles.header}>
      <Logo />

      {isMobileOrTablet ? null : (
        <nav className={styles.navigation}>
          <a href='#'>Продукты</a>
          <a href='#'>Партнерство</a>
          <a href='#'>Ресурсы</a>
          <a href='#'>Компания</a>
        </nav>
      )}

      <a href='#'>Вход / Регистрация</a>
    </header>
  );
};
