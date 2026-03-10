import cx from 'clsx';
import styles from './TariffCard.module.scss';
import CpuIcon from '../../../assets/CPU.svg?react';
import GlobeIcon from '../../../assets/globe.svg?react';
import SaveIcon from '../../../assets/save.svg?react';
import ServerIcon from '../../../assets/server.svg?react';
import { Button } from '@/shared/ui/Button/Button';
import StarIcon from '@/shared/assets/star.svg?react';

interface TariffCardProps {
  isPopular?: boolean;
  isAvailable?: boolean;
  name: string;
  description: string;
  cpu: string;
  ram: string;
  storage: string;
  traffic: string;
  oldPrice?: string;
  price: string;
}

export const TariffCard = (props: TariffCardProps) => {
  const {
    isPopular = false,
    isAvailable = true,
    name,
    description,
    cpu,
    ram,
    storage,
    traffic,
    oldPrice = null,
    price,
  } = props;

  return (
    <div className={styles.container}>
      {isPopular && (
        <p className={styles.popularText}>
          <StarIcon className={styles.star} />
          САМЫЙ ПОПУЛЯРНЫЙ
        </p>
      )}
      <div
        className={cx(
          styles.cardWrapper,
          isPopular && styles.popular,
          !isAvailable && styles.disabled,
        )}
      >
        <div className={cx(styles.card)}>
          <div className={styles.cardTop}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.paramsList}>
            <div className={styles.param}>
              <CpuIcon className={styles.icon} />
              <div className={styles.paramText}>
                <p className={styles.paramName}>Процессор</p>
                <p className={styles.paramValue}>{cpu}</p>
              </div>
            </div>

            <div className={styles.param}>
              <SaveIcon className={styles.icon} />
              <div className={styles.paramText}>
                <p className={styles.paramName}>Оперативная память</p>
                <p className={styles.paramValue}>{ram}</p>
              </div>
            </div>

            <div className={styles.param}>
              <ServerIcon className={styles.icon} />
              <div className={styles.paramText}>
                <p className={styles.paramName}>Хранилище</p>
                <p className={styles.paramValue}>{storage}</p>
              </div>
            </div>

            <div className={styles.param}>
              <GlobeIcon className={styles.icon} />
              <div className={styles.paramText}>
                <p className={styles.paramName}>Трафик</p>
                <p className={styles.paramValue}>{traffic}</p>
              </div>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.priceWrapper}>
              {oldPrice && <p className={styles.oldPrice}>${oldPrice}</p>}
              <p className={styles.price}>
                ${price}
                <span className={styles.month}>/месяц</span>
              </p>
            </div>
            <Button
              className={styles.button}
              variant='primary'
              disabled={!isAvailable}
            >
              {isAvailable ? 'Купить' : 'Нет в наличии'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
