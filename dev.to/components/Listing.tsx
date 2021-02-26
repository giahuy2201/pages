import { Article } from "../utils/interfaces";
import { List } from "../utils/types";
import styles from "./Listing.module.css";

interface ListingProps {
    list: List;
}

const Listing: React.FC<ListingProps> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.headline}>{props.list.name}</div>
                <div className={styles.right}>
                    <button className={styles.seeallbtn}>See all</button>
                </div>
            </div>
            <ul className={styles.list}>
                {props.list.data.map((item) => (
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            {item.head}
                        </a>
                        <div className={styles.sub}>{item.sub}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listing;
