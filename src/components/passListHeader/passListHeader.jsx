import styles from './style.module.css';

export default function PassListHeader() {
  return (
    <div className={styles.tableHeader}>
      <p className={styles.tableHeaderName}>Имя</p>
      <p className={styles.tableHeaderTel}>Телефон</p>
      <p className={styles.tableHeaderDate}>Дата</p>
      <p className={styles.tableHeaderStatus}>Статус</p>
      <p className={styles.tableHeaderAction}>Действие</p>
    </div>
  );
}
