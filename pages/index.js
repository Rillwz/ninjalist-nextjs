import Head from "next/head";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>lorem ipsum</p>
      <Link href="/ninjas">
        <a href="/ninjas">See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
