import styles from './Menu.module.scss';

const Menu = ({ title, items, columns }) => {
  let list;

  if (columns) {
    list = (
      <div className={styles.menuColumns}>
        <ul className={styles.list}>
          {items.map((item, i) =>
            i < items.length / 2 ? (
              <li
                key={item.path}
                className={item.title.length > 15 ? styles.long : null}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ) : null
          )}
        </ul>
        <ul className={styles.list}>
          {items.map((item, i) =>
            i < items.length / 2 ? null : (
              <li
                key={item.path}
                className={item.title.length > 15 ? styles.long : null}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            )
          )}
        </ul>
      </div>
    );
  } else {
    list = (
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>{title}</h3>
      {list}
    </div>
  );
};

export default Menu;
