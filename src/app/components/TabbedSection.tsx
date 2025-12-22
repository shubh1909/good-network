// components/TabbedSection.tsx
"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  Sprout,
  BookOpen,
  Heart,
  Utensils,
  Recycle,
  Globe,
  Handshake,
  Stethoscope,
  Baby,
  ChevronRight,
} from "lucide-react";
import styles from "./styles/TabbedSection.module.css";

interface Event {
  icon: React.ReactNode;
  title: string;
  date: string;
  desc: string;
  category: string;
}

interface Organization {
  icon: React.ReactNode;
  title: string;
  desc: string;
  category: string;
}

type TabType = "events" | "organizations";

const TabbedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("events");

  const switchTab = (tabName: TabType): void => {
    setActiveTab(tabName);
  };

  const events: Event[] = [
    {
      icon: <Sprout size={24} />,
      title: "Tree Plantation Drive",
      date: "Nov 15",
      desc: "Join us for a community tree plantation drive in the local park. Help make our environment greener!",
      category: "Environment",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Education Workshop",
      date: "Nov 20",
      desc: "Free education workshop for underprivileged children in our community center.",
      category: "Education",
    },
    {
      icon: <Heart size={24} />,
      title: "Health Camp",
      date: "Nov 25",
      desc: "Free health checkup camp for elderly people and families in need.",
      category: "Healthcare",
    },
    {
      icon: <Utensils size={24} />,
      title: "Food Distribution",
      date: "Dec 01",
      desc: "Monthly food distribution program for homeless and needy families.",
      category: "Food Aid",
    },
    {
      icon: <Recycle size={24} />,
      title: "Cleanup Drive",
      date: "Dec 05",
      desc: "Beach cleanup and recycling awareness program for environmental protection.",
      category: "Environment",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Literacy Program",
      date: "Dec 10",
      desc: "Adult literacy program to help community members learn basic reading and writing.",
      category: "Education",
    },
  ];

  const organizations: Organization[] = [
    {
      icon: <Globe size={24} />,
      title: "Green Earth Foundation",
      desc: "Environmental conservation organization working on climate change and sustainability projects.",
      category: "Environment",
    },
    {
      icon: <Handshake size={24} />,
      title: "Hope for Tomorrow",
      desc: "Community development organization focusing on education and skill development programs.",
      category: "Development",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Health First Initiative",
      desc: "Healthcare organization providing medical services and health awareness programs.",
      category: "Healthcare",
    },
    {
      icon: <Baby size={24} />,
      title: "Children's Future Society",
      desc: "Dedicated to child welfare, education, and protection of children's rights.",
      category: "Child Welfare",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Explore More</h2>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "events"
                  ? styles.tabButtonActive
                  : styles.tabButtonInactive
              }`}
              onClick={() => switchTab("events")}
            >
              <Calendar size={24} />
              Our Events
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "organizations"
                  ? styles.tabButtonActive
                  : styles.tabButtonInactive
              }`}
              onClick={() => switchTab("organizations")}
            >
              <Users size={24} />
              Our Organizations
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {/* Events Tab Content */}
          {activeTab === "events" && (
            <div>
              <div className={styles.tabHeader}>
                <h3 className={styles.tabTitle}>Upcoming Events</h3>
                <span className={styles.tabCount}>12 events</span>
              </div>

              <div className={styles.tabGrid}>
                {events.map((event, index) => (
                  <div key={index} className={styles.eventCard}>
                    <div className={styles.cardHeader}>
                      <div
                        className={styles.cardIcon}
                        style={{
                          background:
                            "linear-gradient(to bottom right, #22c55e, #16a34a)",
                        }}
                      >
                        {event.icon}
                      </div>
                      <h4 className={styles.cardTitle}>{event.title}</h4>
                      <span className={styles.cardMeta}>{event.date}</span>
                    </div>
                    <p className={styles.cardDescription}>{event.desc}</p>
                    <div className={styles.cardFooter}>
                      <span
                        className={`${styles.cardCategory} ${styles.eventCardCategory}`}
                      >
                        {event.category}
                      </span>
                      <ChevronRight size={18} className={styles.cardChevron} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Organizations Tab Content */}
          {activeTab === "organizations" && (
            <div>
              <div className={styles.tabHeader}>
                <h3 className={styles.tabTitle}>Partner Organizations</h3>
                <span className={styles.tabCount}>8 partners</span>
              </div>

              <div className={styles.tabGrid}>
                {organizations.map((org, index) => (
                  <div key={index} className={styles.orgCard}>
                    <div className={styles.cardHeader}>
                      <div
                        className={styles.cardIcon}
                        style={{
                          background:
                            "linear-gradient(to bottom right, #a78bfa, #7c3aed)",
                        }}
                      >
                        {org.icon}
                      </div>
                      <h4 className={styles.cardTitle}>{org.title}</h4>
                      <span className={styles.cardMeta}>Partner</span>
                    </div>
                    <p className={styles.cardDescription}>{org.desc}</p>
                    <div className={styles.cardFooter}>
                      <span
                        className={`${styles.cardCategory} ${styles.orgCardCategory}`}
                      >
                        {org.category}
                      </span>
                      <ChevronRight size={18} className={styles.cardChevron} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
