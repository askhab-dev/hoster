import { Button } from '@/shared/ui/Button/Button';

import GlobeIcon from './assets/globe.svg?react';
import MessageIcon from './assets/message.svg?react';
import ShieldIcon from './assets/shield.svg?react';

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.firstSection}>
        <div className={styles.hero}>
          <header className={styles.header}>
            <span className={styles.logo}>ХОСТЕР</span>
            <nav className={styles.navigation}>
              <a href="#">Продукты</a>
              <a href="#">Партнерство</a>
              <a href="#">Ресурсы</a>
              <a href="#">Компания</a>
            </nav>
            <a href='#'>Вход / Регистрация</a>
          </header>
          <div className={styles.descriptionBlock}>
            <h1 className={styles.title}>Cтабильный хостинг<br />для ваших проектов</h1>
            <p className={styles.description}>
              Выбери свой вариант по выгодной цене.
              <br />
              <span className={styles.strong}>От 99₽ в месяц.</span>
            </p>
            <Button className={styles.button} variant='primary'>Выбрать тариф</Button>
          </div>

          <div className={styles.options}>
            <div className={styles.optionsLine}></div>
            <div className={styles.option}>
              <div className={styles.optionIconWrapper}>
                <div className={styles.optionIcon}>
                  <MessageIcon />
                </div>
              </div>
              <p className={styles.optionDescription}>
                Круглосуточная<br />поддержка экспертов
              </p>
            </div>
            <div className={styles.option}>
              <div className={styles.optionIconWrapper}>
                <div className={styles.optionIcon}>
                  <GlobeIcon />
                </div>
              </div>
              <p className={styles.optionDescription}>
                Поддержка любого ПО<br />и ОС по вашему выбору
              </p>
            </div>
            <div className={styles.option}>
              <div className={styles.optionIconWrapper}>
                <div className={styles.optionIcon}>
                  <ShieldIcon />
                </div>
              </div>
              <p className={styles.optionDescription}>
                Бесплатная защита<br />от DDoS-атак
              </p>
            </div>
          </div>

          <div className={styles.heroBg}></div>
        </div>
      </section>
    </div>
  )
};
