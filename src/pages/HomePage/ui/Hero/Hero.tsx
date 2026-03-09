import GlobeIcon from '../../assets/globe-white.svg?react';
import MessageIcon from '../../assets/message.svg?react';
import ShieldIcon from '../../assets/shield.svg?react';

import styles from './Hero.module.css';

import { Sections } from '../../config/sections';
import { Button } from '@/shared/ui/Button/Button';
import { scrollToSection } from '@/shared/lib/scroll';

export const Hero = () => {
  const handleChooseClick = () => {
    scrollToSection(Sections.SERVICE);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.descriptionBlock}>
        <h1 className={styles.title}>
          Cтабильный хостинг
          <br />
          для ваших проектов
        </h1>

        <p className={styles.description}>
          Выбери свой вариант по выгодной цене.
          <br />
          <span className={styles.strong}>От 99₽ в месяц.</span>
        </p>

        <Button
          className={styles.button}
          variant='primary'
          onClick={handleChooseClick}
        >
          Выбрать тариф
        </Button>
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
            Круглосуточная
            <br />
            поддержка экспертов
          </p>
        </div>

        <div className={styles.option}>
          <div className={styles.optionIconWrapper}>
            <div className={styles.optionIcon}>
              <GlobeIcon />
            </div>
          </div>

          <p className={styles.optionDescription}>
            Поддержка любого ПО
            <br />и ОС по вашему выбору
          </p>
        </div>

        <div className={styles.option}>
          <div className={styles.optionIconWrapper}>
            <div className={styles.optionIcon}>
              <ShieldIcon />
            </div>
          </div>

          <p className={styles.optionDescription}>
            Бесплатная защита
            <br />
            от DDoS-атак
          </p>
        </div>
      </div>

      <div className={styles.heroBg}></div>
    </div>
  );
};
