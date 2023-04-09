import styles from './Navigation.module.scss';

const navData = [
  {
    path: '/services',
    title: 'Услуги',
  },
  {
    path: '/widsets',
    title: 'Виджеты',
  },
  {
    path: '/integrations',
    title: 'Интеграции',
  },
  {
    path: '/cases',
    title: 'Кейсы',
  },
  {
    path: '/certificates',
    title: 'Сертификаты',
  },
];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {navData.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
