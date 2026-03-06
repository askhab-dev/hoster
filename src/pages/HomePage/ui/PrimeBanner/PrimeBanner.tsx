import { Button } from '@/shared/ui/Button/Button';
import styles from './PrimeBanner.module.css';
import Line from '../../assets/line.svg?react';

export const PrimeBanner = () => {
  return (
    <div className={styles.primeBannerWrapper}>
      <div className={styles.primeBanner}>
        <div className={styles.primeBannerLeft}>
          <h2 className={styles.primeBannerTitle}>Начните работу над своим проектом уже сегодня</h2>

          <p className={styles.primeBannerDescription}>
            Благодаря нашим простым в установке решениям<br />
            и превосходной поддержке клиентов ваш VPS<br />
            будет запущен и готов к работе всего за 10 минут.<br />
          </p>

          <Button className={styles.primeBannerButton} variant='secondary'>
            Выберите свой план
          </Button>
        </div>

        <Line className={styles.primeBannerLine} />
      </div>

      <img src='/lights.png' alt="Lights" className={styles.primeBannerImage} />
    </div>
  );
};
