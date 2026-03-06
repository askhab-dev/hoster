import { Logo } from '@/shared/ui/Logo';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigation}>
        <a href="#">Продукты</a>
        <a href="#">Партнерство</a>
        <a href="#">Ресурсы</a>
        <a href="#">Компания</a>
      </nav>
      <a href='#'>Вход / Регистрация</a>
    </header>
  )
};
