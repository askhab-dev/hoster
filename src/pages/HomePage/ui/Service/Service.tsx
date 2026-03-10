import styles from './Service.module.scss';
import { TariffCard } from './TariffCard/TariffCard';
import { TARIFFS, TARIFFS_CATEGORIES } from '../../config/tariffs';
import { MultiSwitcher } from '@/shared/ui/MultiSwitcher/MultiSwitcher';
import { Button } from '@/shared/ui/Button/Button';

export const Service = () => {
  return (
    <>
      <h1 className={styles.serviceTitle}>Наши услуги</h1>

      <p className={styles.serviceDescription}>
        Найдите VPS, который подойдёт под ваши задачи.
      </p>

      <MultiSwitcher
        items={TARIFFS_CATEGORIES}
        defaultValue='a'
        className={styles.tariffsSwitcher}
      />

      <div className={styles.tariffsContainer}>
        {TARIFFS.map((item) => (
          <TariffCard key={item.name} {...item} />
        ))}
      </div>

      <Button variant='secondary' className={styles.tarrifsButton}>
        Смотреть все тарифы
      </Button>
    </>
  );
};
