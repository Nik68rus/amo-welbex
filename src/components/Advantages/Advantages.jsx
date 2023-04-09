import cx from 'classnames';
import Button from '../Button/Button';
import styles from './Advantages.module.scss';

const advantages = [
  {
    title: 'Виджеты',
    mobileTitle: '30 виджетов',
    text: `30\u00A0готовых решений`,
  },
  {
    title: 'Dashboard',
    text: 'с\u00A0показателями вашего бизнеса',
  },
  {
    title: 'Skype аудит',
    text: 'отдела продаж и\u00A0CRM системы',
  },
  {
    title: '35 дней',
    mobileTitle: 'Месяц amoCRM',
    text: 'использования CRM',
  },
];

const Advantages = ({ className }) => {
  return (
    <div className={cx(styles.advantages, className)}>
      <p className={cx(styles.intro, styles.gradientBg)}>
        Вместе с{' '}
        <span className={styles.gradientText}>
          бесплатной <br /> консультацией
        </span>{' '}
        мы&nbsp;дарим:
      </p>
      <ul className={styles.list}>
        {advantages.map((adv) => (
          <li key={adv.title} className={styles.item}>
            <h3>
              {adv.mobileTitle ? (
                <span className={styles.mobileTitle}>{adv.mobileTitle}</span>
              ) : null}{' '}
              <span>{adv.title}</span>
            </h3>
            <p>{adv.text}</p>
          </li>
        ))}
      </ul>
      <Button className={styles.action}>Получить консультацию</Button>
    </div>
  );
};

export default Advantages;
