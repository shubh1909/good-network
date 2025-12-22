// components/ServiceCards.tsx
"use client";
import React from "react";
import styles from "./styles/ServiceCards.module.css";

const ServiceCards: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Storyboard Card */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Storyboard</h3>
              <p className={styles.cardSubtitle}>
                Flexible, intuitive workflow builder
              </p>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <i className="fas fa-project-diagram"></i>
                </div>

                <div className={styles.cardText}>
                  <h4 className={styles.cardSubheading}>Lorem Workflow</h4>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <button className={styles.detailsButton}>
                  <span>Details</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.workflowBox}>
                  <div className={styles.workflowContent}>
                    <div className={styles.workflowStep}>
                      <div className={styles.stepIcon}>
                        <i className="fas fa-bell"></i>
                      </div>
                      <span className={styles.stepText}>
                        Webhook Incident alert
                      </span>
                    </div>
                    <div className={styles.arrowDown}>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className={styles.workflowStep}>
                      <div className={styles.stepIcon}>
                        <i className="fas fa-robot"></i>
                      </div>
                      <span className={styles.stepText}>
                        AI Agent Summarize
                      </span>
                    </div>
                    <div className={styles.arrowDown}>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className={styles.workflowStep}>
                      <div className={styles.stepIcon}>
                        <i className="fas fa-exclamation"></i>
                      </div>
                      <span className={styles.stepText}>
                        Trigger Is critical?
                      </span>
                    </div>
                    <div className={styles.arrowDown}>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className={styles.workflowStep}>
                      <div className={styles.stepIcon}>
                        <i className="fas fa-comment"></i>
                      </div>
                      <span className={styles.stepText}>
                        Slack Notify admin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workbench Card */}
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Workbench</h3>
              <p className={styles.cardSubtitle}>
                Universal, Tines-powered AI copilot
              </p>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <i className="fas fa-brain"></i>
                </div>

                <div className={styles.cardText}>
                  <h4 className={styles.cardSubheading}>Lorem AI Assistant</h4>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse.
                  </p>
                </div>

                <button className={styles.detailsButton}>
                  <span>Details</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.chatBox}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                      height: "100%",
                    }}
                  >
                    <div
                      className={styles.chatMessage}
                      style={{
                        marginLeft: "1rem",
                        background: "rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      Hey, case #10922 has a suspicious phishing email attached.
                    </div>
                    <div
                      className={styles.chatMessage}
                      style={{ marginRight: "1rem" }}
                    >
                      Sure! In order to do so, I will need to firstly retrieve
                      the case details with the Get case details function.
                    </div>
                    <div
                      className={styles.chatMessage}
                      style={{ marginRight: "1rem" }}
                    >
                      <strong>Get case details</strong>
                      <br />
                      <small>Tines - Running...</small>
                    </div>
                    <input
                      type="text"
                      className={styles.chatInput}
                      placeholder="Type a message..."
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cases Card */}
          <div className={`${styles.card} ${styles.cardViolet}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Cases</h3>
              <p className={styles.cardSubtitle}>
                Intuitive case and incident management
              </p>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <i className="fas fa-shield-alt"></i>
                </div>

                <div className={styles.cardText}>
                  <h4 className={styles.cardSubheading}>Lorem Security</h4>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa.
                  </p>
                </div>

                <button className={styles.detailsButton}>
                  <span>Details</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.caseBox}>
                  <div className={styles.caseHeader}>
                    Security / Cases / Critical alert
                  </div>
                  <div className={styles.caseItem}>
                    <span className={styles.caseDate}>May 24 - 92.23</span>
                    <span className={styles.caseSeverity}>High</span>
                  </div>
                  <div className={styles.caseItem}>
                    <span className={styles.caseDate}>May 23 - 92.23</span>
                    <span className={styles.caseSeverity}>Critical</span>
                  </div>
                  <div className={styles.caseItem}>
                    <span className={styles.caseDate}>May 23 - 92.23</span>
                    <span className={styles.caseSeverity}>Medium</span>
                  </div>
                  <div className={styles.caseTags}>
                    <span className={styles.caseTag}>Crowdstrike</span>
                    <span className={styles.caseTag}>Incidents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
