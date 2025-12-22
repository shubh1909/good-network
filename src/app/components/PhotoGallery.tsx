// components/PhotoGallery.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import styles from "./styles/PhotoGallery.module.css";

interface GalleryItem {
  src: string;
  alt: string;
  large?: boolean;
}

const PhotoGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { src: "/img11.jpeg", alt: "Featured event highlight", large: true },
    { src: "/img5.jpeg", alt: "Tree plantation drive" },
    { src: "/img3.jpeg", alt: "Education workshop" },
    { src: "/img4.jpeg", alt: "Health camp activity" },
    { src: "/img2.jpeg", alt: "Food distribution program" },
    { src: "/img7.jpeg", alt: "Cleanup drive initiative" },
    { src: "/img9.jpeg", alt: "Volunteer training" },
    { src: "/img10.jpeg", alt: "Achievement ceremony" },
    { src: "/img1.jpeg", alt: "Community gathering" },
    { src: "/img12.jpeg", alt: "Special event" },
    { src: "/img13.jpeg", alt: "Team collaboration" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Photo Gallery</h2>
          <p className={styles.description}>
            Capturing moments from our community initiatives and events
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.galleryItem} ${
                item.large ? styles.large : ""
              }`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes={
                    item.large
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  }
                />
              </div>
              <div className={styles.overlay}>
                <Search size={48} className={styles.searchIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
