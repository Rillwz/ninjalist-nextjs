import Head from "next/head";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem ipsum</p>
        <Link href="/ninjas">
          <a className={styles.btn} href="/ninjas">
            See Ninja Listing
          </a>
        </Link>
      </div>
    </>
  );
}
