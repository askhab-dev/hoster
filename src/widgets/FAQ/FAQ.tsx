import { useState } from 'react'
import ChevronDown from '@/shared/assets/chevron-down.svg?react'
import styles from './FAQ.module.css'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Как подключиться к VPS-серверу?',
    answer: 'После оплаты вы получите доступ к панели управления, где сможете установить ОС и управлять сервером. Все инструкции доступны в документации.'
  },
  {
    id: 2,
    question: 'Как мне начать работу с VPS-хостингом?',
    answer: 'После оплаты вы получите доступ к панели управления, где сможете установить ОС и управлять сервером. Все инструкции доступны в документации.'
  },
  {
    id: 3,
    question: 'Для чего можно использовать VPS?',
    answer: 'После оплаты вы получите доступ к панели управления, где сможете установить ОС и управлять сервером. Все инструкции доступны в документации.'
  },
  {
    id: 4,
    question: 'В чём преимущества VPS?',
    answer: 'После оплаты вы получите доступ к панели управления, где сможете установить ОС и управлять сервером. Все инструкции доступны в документации.'
  },
  {
    id: 5,
    question: 'Что такое VPS?',
    answer: 'После оплаты вы получите доступ к панели управления, где сможете установить ОС и управлять сервером. Все инструкции доступны в документации.'
  }
]

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>
      <div className={styles.list}>
        {faqData.map((item) => (
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
              <div className={styles.answerContent}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
