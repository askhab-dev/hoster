import styles from './Service.module.scss';
import { TariffCard } from './TariffCard/TariffCard';
import { TARIFFS } from '../../config/tariffs';
import { MultiSwitcher } from '@/shared/ui/MultiSwitcher/MultiSwitcher';
import StarIcon from '@/shared/assets/star.svg?react';
import { Button } from '@/shared/ui/Button/Button';

export const Service = () => {
  return (
    <>
      <h1 className={styles.serviceTitle}>Наши услуги</h1>

      <p className={styles.serviceDescription}>
        Найдите VPS, который подойдёт под ваши задачи.
      </p>

      <MultiSwitcher
        items={[
          { id: 'a', label: 'Бюджетные тарифы' },
          { id: 'b', label: 'Популярные тарифы', icon: <StarIcon /> },
          { id: 'c', label: 'Производительные тарифы' },
        ]}
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
