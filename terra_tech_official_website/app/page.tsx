import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
        <main>
          {/* <h1>Hello, Inter Font!</h1> */}
        </main>
      <div className={styles.page_content_1}>
        <h1 className={styles.title} >
          Saving Our Planet Through <span className={styles.bold}>Innovation</span>
        </h1>
        <p className={styles.description}>
          TerraTech is a youth-led organization committed to working for a greener
          future. Our mission is to inspire the next generation of innovators to
          use their passion for STEM to create a more sustainable world.
        </p>
        <Link href="/articles">
          <button className={styles.button}>EXPLORE</button>
        </Link>
      </div>
      <div className={styles.transition}/>
      <div className={styles.page_content_2}>
        <h1 className={styles.title2} >
          Innovating for a <span className={styles.bold}>Greener Tomorrow</span>
        </h1>
        <p className={styles.description2}>
          TerraTech is an organization made by a CEO.
        </p>
        <Link href="/about">
          <button className={styles.button2}>LEARN MORE</button>
        </Link>
      </div>
    {/* <div className={styles.our_goals_section}>
      <h1 className={styles.goals_title}>OUR GOALS</h1>
      <div className={styles.goals_container}>
        <div className={styles.goal_box}>Goal 1</div>
        <div className={styles.goal_box}>Goal 2</div>
        <div className={styles.goal_box}>Goal 3</div>
        <div className={styles.goal_box}>Goal 4</div>
      </div>
    </div> */}
    <div className={styles.our_goals_section}>
    <h1 className={styles.goals_title}>OUR GOALS</h1>
      <div className={styles.goals_container}>
        <div className={styles.goal_box}>
          <h2>Reduce Carbon Footprint</h2>
          <p>We strive to minimize greenhouse gas emissions through innovative technology and sustainable practices.</p>
        </div>
        <div className={styles.goal_box}>
          <h2>Promote Renewable Energy</h2>
          <p>Encouraging the use of solar, wind, and other renewable energy sources for a cleaner future.</p>
        </div>
        <div className={styles.goal_box}>
          <h2>Encourage Eco-Friendly Innovation</h2>
          <p>Fostering creativity to develop solutions that contribute to environmental conservation.</p>
        </div>
        <div className={styles.goal_box}>
          <h2>Educate and Inspire</h2>
          <p>Raising awareness and empowering individuals to take action for a sustainable world.</p>
        </div>
      </div>
    </div>
    </>
  );
}