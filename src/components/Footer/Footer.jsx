import cx from 'classnames';

import Contacts from '../Contacts/Contacts';
import Menu from '../Menu/Menu';

import styles from './Footer.module.scss';

const companyMenu = {
  title: 'О компании',
  items: [
    {
      title: 'Партнёрская программа',
      path: '/partners',
    },
    {
      title: 'Вакансии',
      path: '/jobs',
    },
  ],
};

const footerMenu = {
  title: 'Меню',
  items: [
    {
      title: 'Расчёт стоимости',
      path: '/prices',
    },
    {
      title: 'Услуги',
      path: '/services',
    },
    {
      title: 'Виджеты',
      path: '/widgets',
    },
    {
      title: 'Интеграции',
      path: '/integrations',
    },
    {
      title: 'Наши клиенты',
      path: '/clients',
    },
    {
      title: 'Кейсы',
      path: '/cases',
    },
    {
      title: 'Благодарственные письма',
      path: '/feedback',
    },
    {
      title: 'Сертификаты',
      path: '/certificates',
    },
    {
      title: 'Блог на Youtube',
      path: '/youtube',
    },
    {
      title: 'Вопрос / Ответ',
      path: '/faq',
    },
  ],
};

const Footer = () => {
  return (
    <footer className={cx(styles.footer, 'container')}>
      <Menu {...companyMenu} />
      <Menu {...footerMenu} columns />
      <Contacts full className={styles.contacts} />
      <div className={styles.copyright}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
