import cx from 'classnames';
import Advantages from '../Advantages/Advantages';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={cx(styles.hero, 'container')}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>
            Зарабатывайте больше
            <br />
            <span className={cx(styles.gradientBg, styles.gradientText)}>
              с&nbsp;WELBEX
            </span>
          </h1>
          <p>
            Развиваем и&nbsp;контролируем <br />
            продажи за&nbsp;вас
          </p>
        </div>
        <Advantages className={styles.advantages} />
      </div>
    </section>
  );
};

export default Hero;
