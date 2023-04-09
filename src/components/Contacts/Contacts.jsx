import cx from 'classnames';
import SocialLink from '../SocialLink/SocialLink';
import styles from './Contacts.module.scss';

const Contacts = ({ full, className }) => {
  return (
    <address
      className={cx(styles.contacts, full && styles.contactsFull, className)}
    >
      {full ? <h3 className={styles.title}>Контакты</h3> : null}
      <a href="tel:+75555555555" className={styles.phone}>
        +7 555 555-55-55
      </a>
      <ul className={styles.socialList}>
        <li>
          <SocialLink
            type="telegram"
            size={20}
            path="https://t.me/+755555555"
          />
        </li>
        <li>
          <SocialLink
            type="viber"
            size={20}
            path="viber://chat?number=+75555555555"
          />
        </li>
        <li>
          <SocialLink
            type="whatsapp"
            size={20}
            path="https://wa.me/75555555555"
          />
        </li>
      </ul>
      {full && (
        <p className={styles.address}>Москва, Путевой проезд 3с1, к 902</p>
      )}
    </address>
  );
};

export default Contacts;
