import { Article } from "../utils/interfaces";
import styles from "./Card.module.css";

interface CardProps {
    article: Article;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.avatar}></div>
                <div className={styles.user}>
                    <div className={styles.name}>{props.article.user.name}</div>
                    <div className={styles.time}>{props.article.time}</div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{props.article.title}</div>
                <ul className={styles.tags}>
                    <li className={styles.tag}>#beginners</li>
                    <li className={styles.tag}>#webdev</li>
                    <li className={styles.tag}>#productivity</li>
                    <li className={styles.tag}>#css</li>
                </ul>
            </div>
            <div className={styles.foot}>
                <div className={styles.left}>
                    <div className={styles.reactions}>26 reactions</div>
                    <div className={styles.comments}>3 comments</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.readtime}>4 min read</div>
                    <button className={styles.savebtn}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
