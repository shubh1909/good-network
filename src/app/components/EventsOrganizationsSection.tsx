// components/EventsOrganizationsSection.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";
import styles from "./styles/EventsOrganizationsSection.module.css";

const EventsOrganizationsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Events Card */}
          <Link href="/Events" className={styles.link}>
            <div className={`${styles.card} ${styles.cardGreen}`}>
              <div className={styles.icon}>
                <Calendar size={48} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Events</h3>
                <p className={styles.cardDescription}>
                  Enable autonomous workflow activity and user interaction.
                </p>
                <span className={styles.detailsLink}>
                  Details <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          {/* Organizations Card */}
          <Link href="/Organizations" className={styles.link}>
            <div className={`${styles.card} ${styles.cardGray}`}>
              <div className={styles.icon}>
                <Users size={48} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>Organizations</h3>
                <p className={styles.cardDescription}>
                  Leverage the power of AI in your most important workflows.
                </p>
                <span className={styles.detailsLink}>
                  Details <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsOrganizationsSection;
