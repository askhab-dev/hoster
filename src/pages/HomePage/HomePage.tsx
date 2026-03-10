import { BANNERS } from './config/banners';
import { FAQ_LIST } from './config/faq';
import { Sections } from './config/sections';

import { PrimeBanner } from './ui/PrimeBanner';
import { Hero } from './ui/Hero';
import { LightningBlock } from './ui/LightningBlock';
import { SpeedBlock } from './ui/SpeedBlock';
import { Service } from './ui/Service';

import styles from './HomePage.module.css';
import { Header } from '@/widgets/Header';
import { Banner } from '@/widgets/Banner';
import { SupportForm } from '@/widgets/SupportForm/SupportForm';
import { Footer } from '@/widgets/Footer';
import { FAQ } from '@/widgets/FAQ/FAQ';

export function HomePage() {
  return (
    <main className={styles.container}>
      <Header />

      <section className={styles.heroSection} data-section={Sections.HERO}>
        <Hero />
        <LightningBlock />
        <SpeedBlock />
      </section>

      <section
        className={styles.serviceSection}
        data-section={Sections.SERVICE}
      >
        <Service />
      </section>

      <section
        className={styles.bannersSection}
        data-section={Sections.BANNERS}
      >
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

      <section
        className={styles.primeBannerSection}
        data-section={Sections.PRIME_BANNER}
      >
        <PrimeBanner />
      </section>

      <section className={styles.faq} data-section={Sections.FAQ}>
        <FAQ title='Часто задаваемые вопросы' list={FAQ_LIST} />
      </section>

      <section
        className={styles.formSection}
        data-section={Sections.SUPPORT_FORM}
      >
        <SupportForm />
      </section>

      <Footer />
    </main>
  );
}
