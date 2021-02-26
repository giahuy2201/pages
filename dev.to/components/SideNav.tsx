import styles from "./SideNav.module.css";

export default function SideNav() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.title}>
                    <a href="#" className={styles.clink}>
                        DEV Community
                    </a>{" "}
                    is a community of 576,893 amazing developers
                </div>
                <p className={styles.note}>
                    We're a place where coders share, stay up-to-date and grow
                    their careers.
                </p>
                <button className={styles.btn}>Create new account</button>
                <button className={styles.btn}>Log in</button>
            </div>
            {/*  */}
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🏠</span>Home
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>📝</span>Listings
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🎙</span>Podcasts
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>📽</span>Videos
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🏷</span>Tags
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>👍</span>Code of
                            Conduct
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>💡</span>FAQ
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🛍</span>DEV Shop
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>♥️</span>Sponsors
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🈳</span>About
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>🤓</span>Privacy
                            Policy
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>👀</span>Terms of use
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <span className={styles.emoji}>💍</span>Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <ul className={styles.icons}>
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
            <div className={styles.tagshead}>Popular Tags</div>
            <ul className={styles.tags}>
                <li className={styles.tag}>#javascript</li>
                <li className={styles.tag}>#webdev</li>
                <li className={styles.tag}>#beginners</li>
                <li className={styles.tag}>#react</li>
                <li className={styles.tag}>#tutorial</li>
                <li className={styles.tag}>#python</li>
                <li className={styles.tag}>#programming</li>
                <li className={styles.tag}>#codenewbie</li>
                <li className={styles.tag}>#css</li>
                <li className={styles.tag}>#productivity</li>
            </ul>
        </>
    );
}
