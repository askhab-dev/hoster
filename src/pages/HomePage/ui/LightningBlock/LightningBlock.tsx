import styles from './LightningBlock.module.css';
import LightningIcon from '../../assets/lightning.svg?react';

export const LightningBlock = () => {
  return (
    <div className={styles.lightningBlock}>
      <LightningIcon />

      <h2 className={styles.lightningTitle}>
        Современная облачная инфраструктура
      </h2>

      <p className={styles.lightningDescription}>
        Масштабируйте проект за минуты. Всё нужное уже внутри: Kubernetes,
        балансировщики, шлюзы.
      </p>

      <picture>
        <source srcSet='/lightning.webp' type='image/webp' />
        <img
          alt=''
          src='/lightning.png'
          className={styles.lightningBg}
          width='208'
          height='267'
        />
      </picture>
    </div>
  );
};
