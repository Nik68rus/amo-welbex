import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, type, className }) => {
  return (
    <button type={type || 'button'} className={cx(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
