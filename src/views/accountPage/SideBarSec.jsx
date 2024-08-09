import styles from "./accountPage.module.css";

const SideBarSec = ({ title, items }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${
              item.isActive ? styles.activeItem : styles.inactiveItem
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarSec;
