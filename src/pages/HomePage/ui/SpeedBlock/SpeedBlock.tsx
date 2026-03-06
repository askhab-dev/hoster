import styles from './SpeedBlock.module.css';
import SpeedIcon from '../../assets/speed.svg?react';

export const SpeedBlock = () => {
  return (
    <div className={styles.speedBlock}>
      <SpeedIcon />

      <h2 className={styles.speedTitle}>
        Высокая скорость
      </h2>
      <p className={styles.speedDescription}>
        Современные процессоры и сверхбыстрые NVMe SSD внутри каждого сервера
      </p>

      <div className={styles.speedBg} />
    </div>
  );
};
