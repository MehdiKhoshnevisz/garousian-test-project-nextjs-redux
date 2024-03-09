import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.todoTitle}>ToDo App</h1>
        <div className={styles.addToDInputWrapper}>
          <input className={styles.input} placeholder="آیتم جدید اضافه کنید" />
          <button className={styles.button}>اضافه کن</button>
        </div>
        <select className={styles.select}>
          <option value="all">همه</option>
          <option value="doing">در حال انجام</option>
          <option value="done">انجام شده</option>
        </select>
        <div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <input className={styles.checkbox} type="checkbox" id="check1" />
              <label className={styles.listItemTitle} for="check1">
                اولین تسک
              </label>
            </li>
            <li className={styles.listItem}>
              <input className={styles.checkbox} type="checkbox" id="check2" />
              <label className={styles.listItemTitle} for="check2">
                دومین تسک
              </label>
            </li>
            <li className={styles.listItem}>
              <input className={styles.checkbox} type="checkbox" id="check3" />
              <label className={styles.listItemTitle} for="check3">
                سومین تسک
              </label>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
