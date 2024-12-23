import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Saving Our Planet Through <span className={styles.bold}>Innovation</span></h1>
      <p>TerraTech is a youth-led organization committed to working for a greener future. Our mission is to inspire the next generation of innovators to use their passion for STEM to create a more sustainable world.</p>
      <Link href={"/about"}>Explore</Link>
    </div>
  );
}
