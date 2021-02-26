import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="/#">Home</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Listings</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Podcasts</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Videos</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Tags</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Code of Conduct</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">FAQ</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">DEV Shop</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Sponsors</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">About</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Privacy</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Terms of use</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">Contact</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/#">
                            <strong>Sign in/Up</strong>
                        </a>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.icon}>
                        <i className="fab fa-twitter"></i>
                    </li>
                    <li className={styles.icon}>
                        <i className="fab fa-facebook-square"></i>
                    </li>
                    <li className={styles.icon}>
                        <i className="fab fa-github"></i>
                    </li>
                    <li className={styles.icon}>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li className={styles.icon}>
                        <i className="fab fa-twitch"></i>
                    </li>
                </ul>
                <hr className={styles.line} />
                <p className={styles.note}>
                    <strong>DEV Community</strong> – A constructive and
                    inclusive social network for software developers. With you
                    every step of your journey.
                </p>
                <p className={styles.note}>
                    Built on <strong>Forem</strong> — the{" "}
                    <strong>open source</strong> software that powers{" "}
                    <strong>DEV</strong> and other inclusive communities. Made
                    with love and <strong>Ruby on Rails</strong>. DEV Community
                    © 2016 - 2021.
                </p>
                <div className={styles.sprout}></div>
            </div>
        </footer>
    );
}
