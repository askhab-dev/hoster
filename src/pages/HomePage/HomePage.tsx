import { useState, useEffect, Suspense, lazy } from 'react';
import { BANNERS } from './config/banners';
import { FAQ_LIST } from './config/faq';
import { Sections } from './config/sections';

import { Hero } from './ui/Hero';
import { LightningBlock } from './ui/LightningBlock';
import { SpeedBlock } from './ui/SpeedBlock';

import styles from './HomePage.module.css';
import { Header } from '@/widgets/Header';

// lazy imports
const Service = lazy(() =>
  import('./ui/Service').then((m) => ({ default: m.Service })),
);
const Banner = lazy(() =>
  import('@/widgets/Banner').then((m) => ({ default: m.Banner })),
);
const PrimeBanner = lazy(() =>
  import('./ui/PrimeBanner').then((m) => ({ default: m.PrimeBanner })),
);
const FAQ = lazy(() =>
  import('@/widgets/FAQ/FAQ').then((m) => ({ default: m.FAQ })),
);
const SupportForm = lazy(() =>
  import('@/widgets/SupportForm/SupportForm').then((m) => ({
    default: m.SupportForm,
  })),
);
const Footer = lazy(() =>
  import('@/widgets/Footer').then((m) => ({ default: m.Footer })),
);

export function HomePage() {
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const handle =
      window.requestIdleCallback?.(() => setLoadRest(true)) ||
      setTimeout(() => setLoadRest(true), 0);
    return () => {
      if (typeof handle === 'number') clearTimeout(handle);
      else window.cancelIdleCallback?.(handle as any);
    };
  }, []);

  return (
    <main className={styles.container}>
      <Header />

      <section className={styles.heroSection} data-section={Sections.HERO}>
        <Hero />
        <LightningBlock />
        <SpeedBlock />
      </section>

      {loadRest && (
        <Suspense fallback={<div style={{ height: '6000px' }}></div>}>
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
        </Suspense>
      )}
    </main>
  );
}
