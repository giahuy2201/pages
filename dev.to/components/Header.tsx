import styles from "./Header.module.css";

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <div className={styles.left}>
                        <li className={styles.item}>
                            <a href="/">
                                <button className={styles.dev}>DEV</button>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={styles.search}
                            />
                        </li>
                    </div>
                    <div className={styles.right}>
                        <li className={styles.item}>
                            <a href="/login">Log in</a>
                        </li>
                        <li className={styles.item}>
                            <a href="/signup">
                                <button className={styles.signup}>
                                    Create account
                                </button>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
