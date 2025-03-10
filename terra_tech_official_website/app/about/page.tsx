"use client";
import React, { useRef } from "react";
import styles from './page.module.css'; // assuming this file contains the styles

const Page = () => {
  const foundersRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const ResourceRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "founders" && foundersRef.current) {
      foundersRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "media" && mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "resources" && ResourceRef.current) {
      ResourceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.page_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <h1 className={styles.hero_title}>About Us</h1>
        <p className={styles.hero_description}>
          We are a passionate team, committed to excellence and delivering
          impactful results in the world of technology and media.
        </p>
        <div>
          <button
            onClick={() => scrollToSection("founders")}
            className={styles.hero_button}
          >
            Meet the Founders
          </button>
          <button
            onClick={() => scrollToSection("media")}
            className={styles.hero_button}
          >
            Media & Communications Team
          </button>
          <button
            onClick={() => scrollToSection("media")}
            className={styles.hero_button}
          >
            Resource Team
          </button>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={foundersRef} className={styles.section}>
        <h2 className={styles.section_title}>Our Founders</h2>
        <div className={styles.section_content}>
          {/* Founder 1 */}
          <div className={styles.team_member}>
            <img
              src="https://via.placeholder.com/150"
              alt="Founder 1"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Himil Patel</h3>
            <p className={styles.team_member_role}>CEO & Visionary Leader</p>
            <p className={styles.team_member_bio}>
              Himil is a visionary leader with a passion for innovation.
            </p>
          </div>

          {/* Founder 2 */}
          <div className={styles.team_member}>
            <img
              src="https://via.placeholder.com/150"
              alt="Founder 2"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Dhumin Patel</h3>
            <p className={styles.team_member_role}>COO & Operations Expert</p>
            <p className={styles.team_member_bio}>
              Dhumin is the driving force behind our operational success.
            </p>
          </div>
        </div>
      </section>

      {/* Media & Communications Team Section */}
      <section ref={mediaRef} className={styles.section_dark}>
        <h2 className={styles.section_title}>Media & Communications Team</h2>
        <div className={styles.section_content}>
          {/* Team Member 1 */}
          <div className={styles.team_member_dark}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 1"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Media Member 1</h3>
            <p className={styles.team_member_role_dark}>Head of Communications</p>
          </div>

          {/* Team Member 2 */}
          <div className={styles.team_member_dark}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 2"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Media Member 2</h3>
            <p className={styles.team_member_role_dark}>Content Strategist</p>
          </div>

          {/* Team Member 3 */}
          <div className={styles.team_member_dark}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 3"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Media Member 3</h3>
            <p className={styles.team_member_role_dark}>Public Relations Specialist</p>
          </div>
        </div>
      </section>

      {/* Resource Team Section */}
      <section ref={ResourceRef} className={styles.section}>
        <h2 className={styles.section_title}>Resource Team</h2>
        <div className={styles.section_content}>
          {/* Team Member 1 */}
          <div className={styles.team_member}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 1"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Resource Member 1</h3>
            <p className={styles.team_member_role}>Something fwiorjiowjfr</p>
          </div>

          {/* Team Member 2 */}
          <div className={styles.team_member}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 2"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Resource Member 2</h3>
            <p className={styles.team_member_role}>Something fwiorjiowjfr</p>
          </div>

          {/* Team Member 3 */}
          <div className={styles.team_member}>
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member 3"
              className={styles.team_member_image}
            />
            <h3 className={styles.team_member_name}>Resource Member 3</h3>
            <p className={styles.team_member_role}>Something fwiorjiowjfr</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
