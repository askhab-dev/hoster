import { MultiSwitcher } from '@/shared/ui/MultiSwitcher/MultiSwitcher';
import { TariffCard, TARIFFS } from '@/widgets/TariffCard';
import { FAQ } from '@/widgets/FAQ/FAQ';
import { Footer } from '@/widgets/Footer';
import { SupportForm } from '@/widgets/SupportForm/SupportForm';
import { Banner } from '@/widgets/Banner';
import { Header } from '@/widgets/Header';

import { Button } from '@/shared/ui/Button/Button';
import StarIcon from '@/shared/assets/star.svg?react';

import { FAQ_LIST } from './config/faq';
import { PrimeBanner } from './ui/PrimeBanner';
import { Hero } from './ui/Hero';
import { LightningBlock } from './ui/LightningBlock';
import { SpeedBlock } from './ui/SpeedBlock';

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <main className={styles.container}>
      <Header />

      <section className={styles.heroSection}>
        <Hero />
        <LightningBlock />
        <SpeedBlock />
      </section>

      <section className={styles.serviceSection}>
        <h1 className={styles.serviceTitle}>
          Наши услуги
        </h1>

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
          {TARIFFS.map(item => <TariffCard key={item.name} {...item} />)}
        </div>

        <Button variant='secondary' className={styles.tarrifsButton}>
          Смотреть все тарифы
        </Button>
      </section>

      <section className={styles.bannersSection}>
        <Banner
          title="Надёжная облачная инфраструктура"
          description={
            <>
              Каждый VPS-сервер работает на современном оборудовании<br />
              AMD EPYC и NVMe-накопителях в дата-центрах Tier III.<br />
              Мы используем выделенную сеть <strong>100 Гбит/с и гарантируем<br />
              доступность 99,95 % времени</strong>. Никаких просадок скорости,<br />
              задержек или недоступности.
            </>
          }
          className={styles.banner}
        />

        <Banner
          title="Ресурсы по запросу"
          description={
            <>
              В любой момент вы можете увеличить объём ОЗУ, ядер CPU, диска<br />
              или трафика за пару кликов без переустановки ОС и без остановки<br />
              сервера. <strong>Платите только за то, что реально используете.</strong>
            </>
          }
          list={[
            'Персонально выделенные ресурсы (без оверселлинга)',
            'Мгновенное масштабирование в реальном времени',
            'Полный контроль над мощностью под задачи проекта',
          ]}
          className={styles.banner}
        />

        <Banner
          title="Мощное современное железо"
          description={
            <>
              Производительные процессоры AMD EPYC последнего<br />
              поколения + сверхбыстрые NVMe-диски. Скорость чтения/записи<br />
              в разы выше обычных SSD. Идеально для <strong>высоконагруженных<br />
              сайтов, баз данных, CRM, VPN и любых ресурсоёмких задач.</strong>
            </>
          }
          className={styles.banner}
        />

        <Banner
          title="Комплексное решение для хостинга"
          description={
            <>
              Полная совместимость с Linux. Установка популярных панелей<br />
              управления за один клик: ISPmanager, Plesk, cPanel, DirectAdmin.<br />
              Благодаря Cloud-Init ваш сервер готов к работе уже через<br />
              30–60 секунд после заказа.
            </>
          }
          tags={['Plesk', 'cPanel', 'DirectAdmin', 'SSL', 'Spam filter', 'VPNs']}
          className={styles.banner}
        />
      </section>

      <section className={styles.primeBannerSection}>
        <PrimeBanner />
      </section>

      <section className={styles.faq}>
        <FAQ title='Часто задаваемые вопросы' list={FAQ_LIST} />
      </section>

      <section className={styles.formSection}>
        <SupportForm />
      </section>

      <Footer />
    </main>
  )
};
