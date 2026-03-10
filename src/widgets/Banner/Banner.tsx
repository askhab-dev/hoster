import cx from 'clsx';

import styles from './Banner.module.scss';
import CheckIcon from './assets/check-broken.svg?react';
import type { BannerProps } from './Banner.types';

export const Banner = (props: BannerProps) => {
  const { className, title, description, list, tags } = props;

  return (
    <div className={cx(styles.banner, className)}>
      <h3 className={styles.bannerTitle}>{title}</h3>

      <p className={styles.bannerDescription}>{description}</p>

      {list ? (
        <div className={styles.bannerList}>
          {list.map((item, i) => (
            <div key={i} className={styles.bannerListItem}>
              <CheckIcon />
              <p>{item}</p>
            </div>
          ))}
        </div>
      ) : null}

      {tags ? (
        <div className={styles.bannerTags}>
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
