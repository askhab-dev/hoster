

import { MultiSwitcher } from '@/shared/ui/MultiSwitcher/MultiSwitcher';
import { TariffCard, TARIFFS } from '@/widgets/TariffCard';
import { FAQ } from '@/widgets/FAQ/FAQ';
import { Footer } from '@/widgets/Footer';
import { SupportForm } from '@/widgets/SupportForm/SupportForm';
import { Banner } from '@/widgets/Banner';

import { Button } from '@/shared/ui/Button/Button';
import { Logo } from '@/shared/ui/Logo';
import StarIcon from '@/shared/assets/star.svg?react';

import { FAQ_LIST } from './config/faq';
import { PrimeBanner } from './ui/PrimeBanner';

import GlobeIcon from './assets/globe.svg?react';
import MessageIcon from './assets/message.svg?react';
import ShieldIcon from './assets/shield.svg?react';
import LightningIcon from './assets/lightning.svg?react';
import SpeedIcon from './assets/speed.svg?react';

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <header className={styles.header}>
            <Logo />
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

        <div className={styles.lightningBlock}>
          <LightningIcon />
          <h2 className={styles.lightningTitle}>Современная облачная инфраструктура</h2>
          <p className={styles.lightningDescription}>Масштабируйте проект за минуты. Всё нужное уже внутри: Kubernetes, балансировщики, шлюзы.</p>
          <div className={styles.lightningBg}></div>
        </div>

        <div className={styles.speedBlock}>
          <SpeedIcon />
          <h2 className={styles.speedTitle}>Высокая скорость</h2>
          <p className={styles.speedDescription}>Современные процессоры и сверхбыстрые NVMe SSD внутри каждого сервера</p>
          <div className={styles.speedBg}></div>
        </div>
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
    </div>
  )
};
