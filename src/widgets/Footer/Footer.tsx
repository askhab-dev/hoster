import cx from 'clsx';

import { Button } from '@/shared/ui/Button/Button';

import styles from './Footer.module.css';

import ChatIcon from './assets/chat.svg?react';
import TgIcon from './assets/tg.svg?react';
import VkIcon from './assets/vk.svg?react';
import WhatsappIcon from './assets/whatsapp.svg?react';
import TopIcon from './assets/top.svg?react';
import { Logo } from '@/shared/ui/Logo/Logo';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerFirstLine}>
        <div className={styles.footerDescription}>
          <Logo className={styles.footerLogo} />
          <p>
            Сервера для личного пользования<br />
            или коммерческих проектов.
          </p>
        </div>

        <Button variant='secondary' className={styles.footerSupportButton}>
          <ChatIcon className={styles.footerChatIcon} />
          Поддержка / помощь клиентам
        </Button>

        <div className={styles.footerFirstLineLists}>
          <div className={styles.footerList}>
            <p className={styles.footerListLabel}>
              Мессенджеры:
            </p>
            <a className={styles.footerListItem}>Telegram Bot</a>
          </div>

          <div className={styles.footerList}>
            <p className={styles.footerListLabel}>
              Контакты:
            </p>
            <a className={styles.footerListItem} href="tel:+790443243334">
              +7 904-432-43-34
            </a>
            <a className={styles.footerListItem} href="mailto:hoster@mail.ru">
              hoster@mail.ru
            </a>
          </div>

          <div className={styles.footerList}>
            <p className={styles.footerListLabel}>
              Соц-сети:
            </p>
            <div className={styles.footerSocials}>
              <a href="vk.com" target='_blank'>
                <VkIcon />
              </a>
              <a href="t.me" target='_blank'>
                <TgIcon />
              </a>
              <a href="whatsapp.com" target='_blank'>
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerSecondLine}>
        <p className={styles.footerCopyright}>
          ИП Калашенко Владислав Сергеевич ИНН<br />
          245804543635, ОГРНИП 33424343095530<br />
          © 2026
        </p>

        <div className={styles.footerSecondLineLists}>
          <div className={cx(styles.footerList, styles.footerServicesList)}>
            <p className={styles.footerListLabel}>
              Услуги:
            </p>
            <a className={styles.footerListItem} href="#">VPS серверы</a>
            <a className={styles.footerListItem} href="#">VPS серверы</a>
            <a className={styles.footerListItem} href="#">VPS серверы</a>
          </div>

          <div className={styles.footerList}>
            <p className={styles.footerListLabel}>
              Информация:
            </p>
            <a className={styles.footerListItem} href="#">Защита от атак</a>
            <a className={styles.footerListItem} href="#">Контакты</a>
            <a className={styles.footerListItem} href="#">Реферальная программа</a>
            <a className={styles.footerListItem} href="#">Личный кабинет</a>
          </div>
        </div>

        <div className={styles.footerEndBlock}>
          <Button className={styles.backToTopBtn}>
            <TopIcon />
            Вернуться в начало сайта
          </Button>

          <div className={styles.footerLinks}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
