import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.left}></div>
                    <div className={styles.middle}></div>
                    <div className={styles.right}></div>
                </main>
            </div>
            <Footer></Footer>
        </>
    );
}
