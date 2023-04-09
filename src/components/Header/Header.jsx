import cx from 'classnames';

import Navigation from '../Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import { ReactComponent as Logo } from '../../assets/images/logo-full.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={cx(styles.header, 'container')}>
      <div className={styles.company}>
        <a href="/">
          <Logo title="Welbex logo" width={140} height={24} />
        </a>
        <p>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё 8&nbsp;странах</p>
      </div>
      <Navigation />
      <Contacts className={styles.contacts} />
    </header>
  );
};

export default Header;
