import { List } from "../utils/types";
import Listing from "./Listing";
import styles from "./RightSide.module.css";

const listings = [
    {
        name: "Listings",
        data: [
            {
                head: "FREE COURSE, this weekend only: Ship better code faster",
                sub: "education",
            },
            {
                head: "MEAN / MERN Stack 100+ Learning Resources {FREE}",
                sub: "misc",
            },
            {
                head: "Looking for advice/mentor in backend development",
                sub: "mentees",
            },
            {
                head: "Swimm to Get Started with Continuous Documentation",
                sub: "collabs",
            },
            {
                head: "API2Cart - Unified API to 40+ eCommerce Platforms",
                sub: "products",
            },
        ],
    },
    {
        name: "#news",
        data: [
            {
                head: "Game Dev Digest — Issue #83 - How and Why",
                sub: "New",
            },
            {
                head: "JavaScript News and Updates of February 2021",
                sub: "New",
            },
            {
                head: "🗞 What's new and special in Create Go App CLI v1.7.0?",
                sub: "New",
            },
            {
                head:
                    "Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!",
                sub: "1 comment",
            },
        ],
    },
    {
        name: "#help",
        data: [
            {
                head:
                    "Converting a website to support Multilanguage after development",
                sub: "3 comments",
            },
            {
                head:
                    "What's holding you back from creating as much content as you would like to?",
                sub: "1 comment",
            },
            {
                head:
                    "Converting a website to support Multilanguage after development",
                sub: "New",
            },
        ],
    },
];

interface RightSideProps {
    listings?: List[];
}

export default function RightSide() {
    return (
        <>
        <div className={styles.card}>
            <img src="/hack.png" alt=""className={styles.img}/>
            <div className={styles.title}>"Hack the Planet" with New Relic & DEV</div>
            <p className={styles.note}>Use New Relic to build a climate-change observability app for the chance to win up to $5,000! <a href="#" className={styles.link}>→ join the hackathon</a> </p>
        </div>
        <div className={styles.list}>
            {listings.map((list) => (
                <Listing list={list}></Listing>
            ))}
        </div>
        </>
    );
}
