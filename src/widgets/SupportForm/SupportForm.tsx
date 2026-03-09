import styles from './SupportForm.module.css';

import TelegramIcon from './assets/telegram.svg?react';
import { Button } from '@/shared/ui/Button/Button';

export const SupportForm = () => {
  return (
    <form action='' className={styles.form}>
      <h1 className={styles.formTitle}>Остались вопросы?</h1>

      <p className={styles.formDescription}>
        Наша поддержка всегда на связи.
        <br />
        Свяжитесь с нами любым удобным способом.
      </p>

      <input
        type='email'
        name='email'
        placeholder='E-mail'
        className={styles.emailInput}
      />

      <textarea
        id='question'
        name='question'
        placeholder='Ваш вопрос'
        className={styles.questionTextarea}
      />

      <Button
        variant='primary'
        className={styles.formButton}
        onClick={(e) => e.preventDefault()}
      >
        Отправить
      </Button>

      <div className={styles.formLine} />

      <p className={styles.telegramText}>
        Или напишите нам в <strong>Telegram:</strong>
      </p>

      <a
        href='https://t.me/hosterhelp'
        target='_blank'
        className={styles.telegramTextLink}
      >
        <TelegramIcon />
        <span>t.me/hosterhelp</span>
      </a>
    </form>
  );
};
