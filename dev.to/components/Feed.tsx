import { Article } from "../utils/interfaces";
import Card from "./Card";
import Sorting from "./Sorting";
import styles from "./Feed.module.css";

const data = {
    articles: [
        {
            id: 1,
            time: "Feb 25",
            title: "Ultimate Cheatsheet Compilation",
            content: ".",
            user: {
                id: 11,
                name: "Palash Mondal",
            },
        },
        {
            id: 2,
            time: "Feb 20",
            title: "JavaScript - remove duplicates from array",
            content: ".",
            user: {
                id: 12,
                name: "Dirask",
            },
        },
        {
            id: 3,
            time: "Feb 10",
            title: "A beginner's guide to applying color in UI design",
            content: ".",
            user: {
                id: 13,
                name: "George Francis",
            },
        },
        {
            id: 4,
            time: "Feb 13",
            title:
                "StarHub - A chrome extension that tracks your GitHub stars so you don't have to.",
            content: ".",
            user: {
                id: 14,
                name: "Anshul Saha",
            },
        },
    ],
};

interface FeedProps {
    articles: Article[];
}

const Feed: React.FC<FeedProps> = (props) => {
    return (
        <>
        <Sorting></Sorting>
        <div className={styles.list}>
            {data.articles.map((article) => (
                <Card article={article}></Card>
            ))}
        </div>
        </>
    );
};

export default Feed;
