"use client";
import React from "react";
import { Sprout, BookOpen, PiggyBank, Footprints } from "lucide-react";
import styles from "./styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.gridBackground}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardsRow}>
          {/* Left Card - Planting */}
          <div className={styles.floatingCard}>
            <div className={`${styles.card} ${styles.cardGreen}`}>
              <div className={styles.iconCircle}>
                <Sprout size={40} />
              </div>
              <h3 className={styles.cardTitle}>Planting</h3>
            </div>
          </div>

          {/* Center Heading */}
          <div style={{ flex: 1, maxWidth: "512px", textAlign: "center" }}>
            <h1 className={styles.heading}>Transform Lives Together</h1>
            <p className={styles.description}>
              Join our mission to create positive change in communities through
              collaborative social initiatives
            </p>
          </div>

          {/* Right Card - Teaching */}
          <div className={`${styles.floatingCard} ${styles.delayed}`}>
            <div className={`${styles.card} ${styles.cardBlue}`}>
              <div className={styles.iconCircle}>
                <BookOpen size={40} />
              </div>
              <h3 className={styles.cardTitle}>Teaching</h3>
            </div>
          </div>
        </div>

        {/* Bottom Row: 2 Cards */}
        <div className={styles.bottomCards}>
          {/* Bottom Left Card - Saving */}
          <div
            className={`${styles.card} ${styles.cardAmber} ${styles.bottomCard}`}
          >
            <div className={styles.iconCircle}>
              <PiggyBank size={40} />
            </div>
            <h3 className={styles.cardTitle}>Saving</h3>
          </div>

          {/* Bottom Right Card - Animals */}
          <div
            className={`${styles.card} ${styles.cardRed} ${styles.bottomCard}`}
          >
            <div className={styles.iconCircle}>
              <Footprints size={40} />
            </div>
            <h3 className={styles.cardTitle}>Animals</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
