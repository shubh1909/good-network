"use client";
import Head from "next/head";

import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import EventsOrganizationsSection from "./components/EventsOrganizationsSection";
import TabbedSection from "./components/TabbedSection";
import PhotoGallery from "./components/PhotoGallery";

import Footer from "./components/Footer";
import Header from "./components/header";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCF9F5] font-inter">
      <Head>
        <title>GoodWork Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <HeroSection />
      <ServiceCards />
      <EventsOrganizationsSection />
      <TabbedSection />
      <PhotoGallery />

      <Footer />

      <style jsx>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  return <LandingPage />;
}
