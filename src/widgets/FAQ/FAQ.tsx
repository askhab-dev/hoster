import { useState } from 'react';
import styles from './FAQ.module.scss';
import type { FAQProps } from './FAQ.types';
import ChevronDown from '@/shared/assets/chevron-down.svg?react';

export const FAQ: React.FC<FAQProps> = (props) => {
  const { title, list } = props;

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {list.map((item) => (
          <div key={item.id} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openId === item.id}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`${styles.arrow} ${openId === item.id ? styles.rotated : ''}`}
              />
            </button>
            <div
              className={`${styles.answer} ${openId === item.id ? styles.open : ''}`}
              aria-hidden={openId !== item.id}
            >
              <div className={styles.answerContent}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
