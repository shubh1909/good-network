// components/Footer.tsx
"use client";
import React from "react";
import {
  Sprout,
  BookOpen,
  Heart,
  Footprints,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import styles from "./styles/Footer.module.css";

interface Program {
  icon: React.ReactNode;
  text: string;
}

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const Footer: React.FC = () => {
  const programs: Program[] = [
    { icon: <Sprout size={16} />, text: "Environmental" },
    { icon: <BookOpen size={16} />, text: "Education" },
    { icon: <Heart size={16} />, text: "Healthcare" },
    { icon: <Footprints size={16} />, text: "Animal Welfare" },
    { icon: <Users size={16} />, text: "Community" },
  ];

  const contactItems: ContactItem[] = [
    {
      icon: <MapPin size={16} />,
      text: "123 GoodWork Street, City 12345",
      href: "#",
    },
    {
      icon: <Phone size={16} />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <Mail size={16} />,
      text: "contact@goodwork.org",
      href: "mailto:contact@goodwork.org",
    },
    {
      icon: <Clock size={16} />,
      text: "Mon - Fri: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  const quickLinks: string[] = [
    "About Us",
    "Our Events",
    "Organizations",
    "Get Involved",
    "Volunteer",
  ];

  const socialIcons = [
    <Facebook key="facebook" size={20} />,
    <Twitter key="twitter" size={20} />,
    <Instagram key="instagram" size={20} />,
    <Linkedin key="linkedin" size={20} />,
  ];

  const footerLinks: string[] = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>GoodWork</h4>
          <p className={styles.description}>
            Making a positive impact in communities through collaborative social
            initiatives and sustainable development programs.
          </p>
          <div className={styles.socialLinks}>
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className={styles.socialLink}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <div className={styles.links}>
            {quickLinks.map((link, index) => (
              <a key={index} href="#" className={styles.link}>
                <ChevronRight size={16} className={styles.linkIcon} />
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Programs</h4>
          <div className={styles.links}>
            {programs.map((program, index) => (
              <a key={index} href="#" className={styles.link}>
                <span className={styles.linkIcon}>{program.icon}</span>
                {program.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contact Info</h4>
          <div className={styles.links}>
            {contactItems.map((contact, index) => (
              <a key={index} href={contact.href} className={styles.link}>
                <span className={styles.linkIcon}>{contact.icon}</span>
                {contact.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider}>
        <div className={styles.copyright}>
          © 2025 GoodWork Platform. All rights reserved.
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((link, index) => (
            <a key={index} href="#" className={styles.footerLink}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
