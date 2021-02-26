import styles from './Sorting.module.css'

export default function Sorting(){
    return (
        <div className={styles.row}>
            <div className={styles.sorthead}>Posts</div>
            <ul className={styles.types}>
                <li className={styles.type}><a href="#" className={styles.link}>Feed</a></li>
                <li className={styles.type}><a href="#" className={styles.link}>Week</a></li>
                <li className={styles.type}><a href="#" className={styles.link}>Month</a></li>
                <li className={styles.type}><a href="#" className={styles.link}>Year</a></li>
                <li className={styles.type}><a href="#" className={styles.link}>Infinity</a></li>
                <li className={styles.type}><a href="#" className={styles.link}>Latest</a></li>
            </ul>
        </div>
    )
}