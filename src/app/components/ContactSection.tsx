"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import styles from "./styles/ContactSection.module.css";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactSection: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    { icon: <Phone size={24} />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <Mail size={24} />, label: "Email", value: "hello@goodwork.org" },
    {
      icon: <MapPin size={24} />,
      label: "Address",
      value: "123 Community St, City, State 12345",
    },
    {
      icon: <Clock size={24} />,
      label: "Hours",
      value: "Mon - Fri: 9AM - 6PM",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Get in Touch</h2>
          <p className={styles.cardDescription}>
            Ready to make a difference? Connect with us and join our mission to
            create positive change in the community.
          </p>

          <div className={styles.contactList}>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.contactItem}>
                <div className={styles.iconCircle}>{item.icon}</div>
                <div>
                  <div className={styles.contactLabel}>{item.label}</div>
                  <div className={styles.contactValue}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Send us a Message</h3>
          <p className={styles.cardDescription}>
            We will love to hear from you. Fill out the form below and we will
            get back to you soon.
          </p>

          <form onSubmit={handleFormSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.formInput}
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
