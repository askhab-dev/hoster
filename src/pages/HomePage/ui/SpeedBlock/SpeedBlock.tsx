import styles from './SpeedBlock.module.scss';
import SpeedIcon from '../../assets/speed.svg?react';

export const SpeedBlock = () => {
  return (
    <div className={styles.speedBlock}>
      <SpeedIcon />

      <h2 className={styles.speedTitle}>Высокая скорость</h2>
      <p className={styles.speedDescription}>
        Современные процессоры и сверхбыстрые NVMe SSD внутри каждого сервера
      </p>

      <picture>
        <source srcSet='/speed.webp' type='image/webp' />
        <img src='/speed.png' alt='speed' className={styles.speedBg} />
      </picture>
    </div>
  );
};
