import { FAQ } from '@/widgets/FAQ/FAQ';
import { Footer } from '@/widgets/Footer';
import { SupportForm } from '@/widgets/SupportForm/SupportForm';
import { Banner } from '@/widgets/Banner';
import { Header } from '@/widgets/Header';

import { BANNERS } from './config/banners';
import { FAQ_LIST } from './config/faq';

import { PrimeBanner } from './ui/PrimeBanner';
import { Hero } from './ui/Hero';
import { LightningBlock } from './ui/LightningBlock';
import { SpeedBlock } from './ui/SpeedBlock';
import { Service } from './ui/Service';

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
        <Service />
      </section>

      <section className={styles.bannersSection}>
        {BANNERS.map((banner) => (
          <Banner
            key={banner.title}
            title={banner.title}
            description={banner.description}
            list={banner.list}
            tags={banner.tags}
            className={styles.banner}
          />
        ))}
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
