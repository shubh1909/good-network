/* eslint-disable @next/next/no-page-custom-font */
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

interface Event {
    icon: string;
    title: string;
    date: string;
    desc: string;
    category: string;
}

interface Organization {
    icon: string;
    title: string;
    desc: string;
    category: string;
}

interface GalleryItem {
    src: string;
    alt: string;
    large?: boolean;
}

interface ContactInfo {
    icon: string;
    label: string;
    value: string;
}

interface Program {
    icon: string;
    text: string;
}

interface ContactItem {
    icon: string;
    text: string;
    href: string;
}

type TabType = 'events' | 'organizations';

const GoodWorkPlatform: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('events');

    const switchTab = (tabName: TabType): void => {
        setActiveTab(tabName);
    };

    const events: Event[] = [
        {
            icon: 'seedling',
            title: 'Tree Plantation Drive',
            date: 'Nov 15',
            desc: 'Join us for a community tree plantation drive in the local park. Help make our environment greener!',
            category: 'Environment'
        },
        {
            icon: 'graduation-cap',
            title: 'Education Workshop',
            date: 'Nov 20',
            desc: 'Free education workshop for underprivileged children in our community center.',
            category: 'Education'
        },
        {
            icon: 'heart',
            title: 'Health Camp',
            date: 'Nov 25',
            desc: 'Free health checkup camp for elderly people and families in need.',
            category: 'Healthcare'
        },
        {
            icon: 'utensils',
            title: 'Food Distribution',
            date: 'Dec 01',
            desc: 'Monthly food distribution program for homeless and needy families.',
            category: 'Food Aid'
        },
        {
            icon: 'recycle',
            title: 'Cleanup Drive',
            date: 'Dec 05',
            desc: 'Beach cleanup and recycling awareness program for environmental protection.',
            category: 'Environment'
        },
        {
            icon: 'book',
            title: 'Literacy Program',
            date: 'Dec 10',
            desc: 'Adult literacy program to help community members learn basic reading and writing.',
            category: 'Education'
        }
    ];

    const organizations: Organization[] = [
        {
            icon: 'globe',
            title: 'Green Earth Foundation',
            desc: 'Environmental conservation organization working on climate change and sustainability projects.',
            category: 'Environment'
        },
        {
            icon: 'hands-helping',
            title: 'Hope for Tomorrow',
            desc: 'Community development organization focusing on education and skill development programs.',
            category: 'Development'
        },
        {
            icon: 'medkit',
            title: 'Health First Initiative',
            desc: 'Healthcare organization providing medical services and health awareness programs.',
            category: 'Healthcare'
        },
        {
            icon: 'child',
            title: 'Children\'s Future Society',
            desc: 'Dedicated to child welfare, education, and protection of children\'s rights.',
            category: 'Child Welfare'
        }
    ];

    // Gallery items with actual image paths from public folder
    const galleryItems: GalleryItem[] = [
        { src: '/img11.jpeg', alt: 'Featured event highlight', large: true },
        { src: '/img5.jpeg', alt: 'Tree plantation drive' },
        { src: '/img3.jpeg', alt: 'Education workshop' },
        { src: '/img4.jpeg', alt: 'Health camp activity' },
        { src: '/img2.jpeg', alt: 'Food distribution program' },
        { src: '/img7.jpeg', alt: 'Cleanup drive initiative' },
        { src: '/img9.jpeg', alt: 'Volunteer training' },
        { src: '/img10.jpeg', alt: 'Achievement ceremony' },
        { src: '/img1.jpeg', alt: 'Community gathering' },
        { src: '/img12.jpeg', alt: 'Special event' },
        { src: '/img13.jpeg', alt: 'Team collaboration' }
    ];

    const contactInfo: ContactInfo[] = [
        { icon: 'phone', label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: 'envelope', label: 'Email', value: 'hello@goodwork.org' },
        { icon: 'map-marker-alt', label: 'Address', value: '123 Community St, City, State 12345' },
        { icon: 'clock', label: 'Hours', value: 'Mon - Fri: 9AM - 6PM' }
    ];

    const programs: Program[] = [
        { icon: 'seedling', text: 'Environmental' },
        { icon: 'graduation-cap', text: 'Education' },
        { icon: 'heart', text: 'Healthcare' },
        { icon: 'paw', text: 'Animal Welfare' },
        { icon: 'users', text: 'Community' }
    ];

    const contactItems: ContactItem[] = [
        { icon: 'map-marker-alt', text: '123 GoodWork Street, City 12345', href: '#' },
        { icon: 'phone', text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: 'envelope', text: 'contact@goodwork.org', href: 'mailto:contact@goodwork.org' },
        { icon: 'clock', text: 'Mon - Fri: 9:00 AM - 6:00 PM', href: '#' }
    ];

    const quickLinks: string[] = ['About Us', 'Our Events', 'Organizations', 'Get Involved', 'Volunteer'];
    const socialLinks: string[] = ['facebook-f', 'twitter', 'instagram', 'linkedin-in'];
    const footerLinks: string[] = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <>
            <Head>
                <title>GoodWork Platform</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>

            <div className="min-h-screen bg-[#FCF9F5] font-inter">
                {/* Enhanced Header with Glass Effect */}
                <header className="fixed top-0 left-0 right-0 p-4 md:px-6 z-50 flex items-center justify-between bg-white/10 backdrop-blur-[20px] border-b border-white/20 transition-all duration-300 hover:bg-white/15">
                    <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        GoodWork
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <span className="hidden md:block text-gray-600 text-sm font-medium">Organization</span>
                        <div className="flex gap-2 md:gap-3">
                            <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 backdrop-blur-[10px] border-2 border-transparent bg-white/10 text-gray-700 border-white/30 hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg">
                                Login
                            </button>
                            <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 text-white border-none shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(34,197,94,0.4)]">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </header>

                {/* HERO SECTION WITH CHECK PATTERN BACKGROUND - As Per Original Design */}
                <section className="relative min-h-screen flex items-center justify-center px-5 md:px-10 pt-32 pb-20 overflow-hidden">
                    {/* Original check pattern background exactly as in HTML */}
                    <div
                        className="absolute inset-0 -z-10 pointer-events-none"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
                            backgroundSize: '120px 120px'
                        }}
                    ></div>

                    <div className="relative z-[3] max-w-6xl w-full flex flex-col items-center text-center">
                        {/* Top Row: Left Card - Heading - Right Card - EXACT ORIGINAL LAYOUT */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-15 mb-12 lg:mb-15 w-full max-w-5xl">
                            {/* Left Card - Planting */}
                            <div className="flex-shrink-0 animate-[floatCard_3s_ease-in-out_infinite]">
                                <div className="bg-white/90 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer border-2 overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-lg backdrop-blur-[10px] hover:-translate-y-2 hover:shadow-xl border-green-500 bg-gradient-to-br from-green-50/90 to-green-100/90 hover:shadow-green-500/20">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl text-white animate-[iconPulse_2s_ease-in-out_infinite] bg-gradient-to-br from-green-500 to-green-600">
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-green-600">Planting</h3>
                                </div>
                            </div>

                            {/* Center Heading - ORIGINAL STYLING */}
                            <div className="flex-1 max-w-2xl text-center animate-[fadeInUp_1s_ease-out]">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#456491] mb-6 leading-tight animate-[textGlow_2s_ease-in-out_infinite_alternate]">
                                    Transform Lives Together
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed animate-[fadeIn_1.5s_ease-out]">
                                    Join our mission to create positive change in communities through collaborative social initiatives
                                </p>
                            </div>

                            {/* Right Card - Teaching */}
                            <div className="flex-shrink-0 animate-[floatCard_3s_ease-in-out_infinite] [animation-delay:1s]">
                                <div className="bg-white/90 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer border-2 overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-lg backdrop-blur-[10px] hover:-translate-y-2 hover:shadow-xl border-blue-500 bg-gradient-to-br from-blue-50/90 to-blue-100/90 hover:shadow-blue-500/20">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl text-white animate-[iconPulse_2s_ease-in-out_infinite] bg-gradient-to-br from-blue-500 to-blue-600">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-600">Teaching</h3>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: 2 Cards - ORIGINAL SPACING */}
                        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-72 w-full">
                            {/* Bottom Left Card - Saving */}
                            <div className="bg-white/90 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer border-2 overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-lg backdrop-blur-[10px] animate-[cardAppear_0.8s_ease-out] hover:-translate-y-2 hover:shadow-xl border-amber-500 bg-gradient-to-br from-amber-50/90 to-amber-100/90 hover:shadow-amber-500/20">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl text-white animate-[iconPulse_2s_ease-in-out_infinite] bg-gradient-to-br from-amber-500 to-amber-600">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-amber-600">Saving</h3>
                            </div>

                            {/* Bottom Right Card - Animals */}
                            <div className="bg-white/90 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer border-2 overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-lg backdrop-blur-[10px] animate-[cardAppear_0.8s_ease-out] hover:-translate-y-2 hover:shadow-xl border-red-500 bg-gradient-to-br from-red-50/90 to-red-100/90 hover:shadow-red-500/20">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl text-white animate-[iconPulse_2s_ease-in-out_infinite] bg-gradient-to-br from-red-500 to-red-600">
                                    <i className="fas fa-paw"></i>
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-red-600">Animals</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CARDS SECTION */}
                <section className="py-20 relative z-[2]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-20 px-5">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full min-h-[500px]">
                            {/* Storyboard Card */}
                            <div className="rounded-[20px] p-6 relative transition-all duration-300 cursor-pointer overflow-hidden h-full border-2 flex flex-col bg-white/90 backdrop-blur-[10px] hover:-translate-y-1 hover:shadow-xl bg-orange-50/90 border-orange-400 text-orange-800">
                                <div className="mb-5 flex-shrink-0">
                                    <h3 className="text-3xl font-semibold mb-1.5">Storyboard</h3>
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">Flexible, intuitive workflow builder</p>
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row justify-between items-stretch gap-6 min-h-0">
                                    <div className="flex-1 flex flex-col gap-4 min-w-0">
                                        <div className="w-15 h-15 rounded-[10px] flex items-center justify-center text-2xl mb-4 border-2 border-white/40 bg-white/20 flex-shrink-0 text-orange-400 bg-orange-400/10 border-orange-400/30">
                                            <i className="fas fa-project-diagram"></i>
                                        </div>

                                        <div>
                                            <h4 className="text-base font-semibold mb-2">Lorem Workflow</h4>
                                            <p className="text-sm leading-relaxed opacity-80 mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>

                                        <button className="bg-none border-none font-medium cursor-pointer flex items-center gap-1.5 mt-auto pt-4 transition-all duration-300 flex-shrink-0 text-sm hover:gap-2.5">
                                            <span>Details</span>
                                            <i className="fas fa-arrow-right transition-transform duration-300 text-xs hover:translate-x-0.5"></i>
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-44 flex-shrink-0 flex flex-col">
                                        <div className="bg-white/40 rounded-xl p-4 border border-white/50 flex-1 flex flex-col">
                                            <div className="flex flex-col gap-2 items-center h-full justify-between">
                                                {/* Workflow Steps */}
                                                <div className="bg-white/70 rounded-md p-2 flex items-center gap-2 w-full border border-orange-400/30 text-xs">
                                                    <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                                                        <i className="fas fa-bell"></i>
                                                    </div>
                                                    <span className="text-[10px] font-medium">Webhook Incident alert</span>
                                                </div>
                                                <div className="opacity-60 text-xs">
                                                    <i className="fas fa-arrow-down"></i>
                                                </div>
                                                <div className="bg-white/70 rounded-md p-2 flex items-center gap-2 w-full border border-orange-400/30 text-xs">
                                                    <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                                                        <i className="fas fa-robot"></i>
                                                    </div>
                                                    <span className="text-[10px] font-medium">AI Agent Summarize</span>
                                                </div>
                                                <div className="opacity-60 text-xs">
                                                    <i className="fas fa-arrow-down"></i>
                                                </div>
                                                <div className="bg-white/70 rounded-md p-2 flex items-center gap-2 w-full border border-orange-400/30 text-xs">
                                                    <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                                                        <i className="fas fa-exclamation"></i>
                                                    </div>
                                                    <span className="text-[10px] font-medium">Trigger Is critical?</span>
                                                </div>
                                                <div className="opacity-60 text-xs">
                                                    <i className="fas fa-arrow-down"></i>
                                                </div>
                                                <div className="bg-white/70 rounded-md p-2 flex items-center gap-2 w-full border border-orange-400/30 text-xs">
                                                    <div className="w-5 h-5 rounded bg-orange-400 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                                                        <i className="fas fa-comment"></i>
                                                    </div>
                                                    <span className="text-[10px] font-medium">Slack Notify admin</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Workbench Card */}
                            <div className="rounded-[20px] p-6 relative transition-all duration-300 cursor-pointer overflow-hidden h-full border-2 flex flex-col bg-white/90 backdrop-blur-[10px] hover:-translate-y-1 hover:shadow-xl bg-green-50/90 border-green-500 text-green-800">
                                <div className="mb-5 flex-shrink-0">
                                    <h3 className="text-3xl font-semibold mb-1.5">Workbench</h3>
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">Universal, Tines-powered AI copilot</p>
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row justify-between items-stretch gap-6 min-h-0">
                                    <div className="flex-1 flex flex-col gap-4 min-w-0">
                                        <div className="w-15 h-15 rounded-[10px] flex items-center justify-center text-2xl mb-4 border-2 border-white/40 bg-white/20 flex-shrink-0 text-green-500 bg-green-500/10 border-green-500/30">
                                            <i className="fas fa-brain"></i>
                                        </div>

                                        <div>
                                            <h4 className="text-base font-semibold mb-2">Lorem AI Assistant</h4>
                                            <p className="text-sm leading-relaxed opacity-80 mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                            </p>
                                        </div>

                                        <button className="bg-none border-none font-medium cursor-pointer flex items-center gap-1.5 mt-auto pt-4 transition-all duration-300 flex-shrink-0 text-sm hover:gap-2.5">
                                            <span>Details</span>
                                            <i className="fas fa-arrow-right transition-transform duration-300 text-xs hover:translate-x-0.5"></i>
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-44 flex-shrink-0 flex flex-col">
                                        <div className="bg-white/40 rounded-xl p-4 border border-white/50 flex-1 flex flex-col">
                                            <div className="flex flex-col gap-1.5 h-full">
                                                <div className="bg-white/70 rounded-[10px] p-2 text-[10px] leading-tight border border-green-500/30 ml-4 bg-green-500/20">
                                                    Hey, case #10922 has a suspicious phishing email attached.
                                                </div>
                                                <div className="bg-white/70 rounded-[10px] p-2 text-[10px] leading-tight border border-green-500/30 mr-4">
                                                    Sure! In order to do so, I will need to firstly retrieve the case details with the Get case details function.
                                                </div>
                                                <div className="bg-white/70 rounded-[10px] p-2 text-[10px] leading-tight border border-green-500/30 mr-4">
                                                    <strong>Get case details</strong><br />
                                                    <small>Tines - Running...</small>
                                                </div>
                                                <input type="text" className="bg-white/80 border border-green-500/40 rounded-2xl p-2 text-[10px] opacity-70 mt-auto" placeholder="Type a message..." readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cases Card */}
                            <div className="rounded-[20px] p-6 relative transition-all duration-300 cursor-pointer overflow-hidden h-full border border-violet-400 bg-violet-50/90 text-violet-700 flex flex-col bg-white/90 backdrop-blur-[10px] hover:-translate-y-1 hover:shadow-xl">
                                <div className="mb-5 flex-shrink-0">
                                    <h3 className="text-3xl font-semibold mb-1.5">Cases</h3>
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">Intuitive case and incident management</p>
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row justify-between items-stretch gap-6 min-h-0">
                                    <div className="flex-1 flex flex-col gap-4 min-w-0">
                                        <div className="w-15 h-15 rounded-[10px] flex items-center justify-center text-2xl mb-4 border-2 border-white/40 bg-white/20 flex-shrink-0 text-violet-500 bg-violet-500/10 border-violet-500/30">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>

                                        <div>
                                            <h4 className="text-base font-semibold mb-2">Lorem Security</h4>
                                            <p className="text-sm leading-relaxed opacity-80 mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                                            </p>
                                        </div>

                                        <button className="bg-none border-none font-medium cursor-pointer flex items-center gap-1.5 mt-auto pt-4 transition-all duration-300 flex-shrink-0 text-sm hover:gap-2.5">
                                            <span>Details</span>
                                            <i className="fas fa-arrow-right transition-transform duration-300 text-xs hover:translate-x-0.5"></i>
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-44 flex-shrink-0 flex flex-col">
                                        <div className="bg-white/40 rounded-xl p-4 border border-white/50 flex-1 flex flex-col">
                                            <div className="flex flex-col gap-2 h-full">
                                                <div className="text-xs font-semibold mb-2 text-center">Security / Cases / Critical alert</div>
                                                <div className="bg-white/70 rounded-md p-2 flex justify-between items-center border border-violet-500/30">
                                                    <span className="text-[9px] opacity-80">May 24 - 92.23</span>
                                                    <span className="text-[8px] px-1 rounded bg-violet-500/20 font-medium">High</span>
                                                </div>
                                                <div className="bg-white/70 rounded-md p-2 flex justify-between items-center border border-violet-500/30">
                                                    <span className="text-[9px] opacity-80">May 23 - 92.23</span>
                                                    <span className="text-[8px] px-1 rounded bg-violet-500/20 font-medium">Critical</span>
                                                </div>
                                                <div className="bg-white/70 rounded-md p-2 flex justify-between items-center border border-violet-500/30">
                                                    <span className="text-[9px] opacity-80">May 23 - 92.23</span>
                                                    <span className="text-[8px] px-1 rounded bg-violet-500/20 font-medium">Medium</span>
                                                </div>
                                                <div className="flex gap-1.5 mt-auto justify-center">
                                                    <span className="text-[8px] px-1.5 py-0.5 rounded-[10px] bg-violet-500/30 font-medium">Crowdstrike</span>
                                                    <span className="text-[8px] px-1.5 py-0.5 rounded-[10px] bg-violet-500/30 font-medium">Incidents</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Events and Organization Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">

                            {/* Events Card */}
                            <Link href="/Events" className="no-underline">
                                <div className="flex flex-col lg:flex-row items-center gap-8 p-10 rounded-[20px] transition-all duration-300 cursor-pointer min-h-[180px] relative overflow-hidden bg-white/95 backdrop-blur-[15px] border border-green-500/10 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/30 bg-gradient-to-br from-green-50/95 to-green-100/95 text-green-800 border-l-4 border-l-green-500 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:shadow-green-500/20">
                                    <div className="w-30 h-30 rounded-full flex items-center justify-center text-5xl flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_10px_25px_rgba(34,197,94,0.4)] border-3 border-white/90">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="flex-1 text-center lg:text-left">
                                        <h3 className="text-4xl font-semibold mb-3">Events</h3>
                                        <p className="text-lg font-medium leading-relaxed mb-6 opacity-90">
                                            Enable autonomous workflow activity and user interaction.
                                        </p>
                                        <span className="inline-flex items-center gap-2 font-semibold">
                                            Details <i className="fas fa-arrow-right text-sm"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* Organizations Card */}
                            <Link href="/Organizations" className="no-underline">
                                <div className="flex flex-col lg:flex-row items-center gap-8 p-10 rounded-[20px] transition-all duration-300 cursor-pointer min-h-[180px] relative overflow-hidden bg-white/95 backdrop-blur-[15px] border border-green-500/10 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/30 bg-gradient-to-br from-gray-50/95 to-gray-100/95 text-gray-600 border-l-4 border-l-gray-500">
                                    <div className="w-30 h-30 rounded-full flex items-center justify-center text-5xl flex-shrink-0 bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-[0_10px_25px_rgba(100,116,139,0.3)] border-3 border-white/90">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="flex-1 text-center lg:text-left">
                                        <h3 className="text-4xl font-semibold mb-3">Organizations</h3>
                                        <p className="text-lg font-medium leading-relaxed mb-6 opacity-90">
                                            Leverage the power of AI in your most important workflows.
                                        </p>
                                        <span className="inline-flex items-center gap-2 font-semibold">
                                            Details <i className="fas fa-arrow-right text-sm"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

                {/* Tabbed Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 min-h-[600px] px-5">
                        <div className="p-8 backdrop-blur-[10px]">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore More</h2>
                            <div className="flex flex-col gap-4">
                                <button
                                    className={`bg-none border-2 p-5 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 text-left flex items-center gap-3 ${activeTab === 'events'
                                            ? 'bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500 text-green-600'
                                            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50/50'
                                        }`}
                                    onClick={() => switchTab('events')}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    Our Events
                                </button>
                                <button
                                    className={`bg-none border-2 p-5 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 text-left flex items-center gap-3 ${activeTab === 'organizations'
                                            ? 'bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500 text-green-600'
                                            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50/50'
                                        }`}
                                    onClick={() => switchTab('organizations')}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    Our Organizations
                                </button>
                            </div>
                        </div>

                        <div className="rounded-[20px] p-8 backdrop-blur-[10px] shadow-lg border border-green-500/20 relative overflow-hidden">
                            {/* Events Tab Content */}
                            {activeTab === 'events' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
                                        <h3 className="text-2xl font-bold text-gray-800">Upcoming Events</h3>
                                        <span className="text-sm text-gray-600 bg-green-200/10 px-3 py-1 rounded-xl font-medium">12 events</span>
                                    </div>

                                    <div className="h-[480px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5 pr-2">
                                        {events.map((event, index) => (
                                            <div key={index} className="bg-gradient-to-br from-green-50/90 to-green-100/90 rounded-xl p-6 border border-green-500/20 transition-all duration-300 cursor-pointer backdrop-blur-[5px] hover:-translate-y-1 hover:shadow-lg hover:border-green-500/30 border-l-3 border-l-green-500 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 hover:shadow-green-500/15">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg text-white bg-gradient-to-br from-green-500 to-green-600">
                                                        <i className={`fas fa-${event.icon}`}></i>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-gray-800 flex-1">{event.title}</h4>
                                                    <span className="text-xs text-gray-600 bg-gray-700/10 px-2 py-0.5 rounded-md">{event.date}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{event.desc}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-green-500/10 text-green-600">{event.category}</span>
                                                    <i className="fas fa-chevron-right text-gray-400 text-sm transition-all duration-300 hover:text-green-500 hover:translate-x-0.5"></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Organizations Tab Content */}
                            {activeTab === 'organizations' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
                                        <h3 className="text-2xl font-bold text-gray-800">Partner Organizations</h3>
                                        <span className="text-sm text-gray-600 bg-green-200/10 px-3 py-1 rounded-xl font-medium">8 partners</span>
                                    </div>

                                    <div className="h-[480px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5 pr-2">
                                        {organizations.map((org, index) => (
                                            <div key={index} className="bg-white/90 rounded-xl p-6 border border-gray-300/50 transition-all duration-300 cursor-pointer backdrop-blur-[5px] hover:-translate-y-1 hover:shadow-lg hover:border-green-500/30">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg text-white bg-gradient-to-br from-violet-500 to-violet-600">
                                                        <i className={`fas fa-${org.icon}`}></i>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-gray-800 flex-1">{org.title}</h4>
                                                    <span className="text-xs text-gray-600 bg-gray-700/10 px-2 py-0.5 rounded-md">Partner</span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{org.desc}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-violet-500/10 text-violet-600">{org.category}</span>
                                                    <i className="fas fa-chevron-right text-gray-400 text-sm transition-all duration-300 hover:text-green-500 hover:translate-x-0.5"></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery Section - WITH ACTUAL IMAGES FROM PUBLIC FOLDER */}
                <section className="py-20 relative z-[2]">
                    <div className="max-w-7xl mx-auto text-center px-5">
                        <div className="mb-15">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Capturing moments from our community initiatives and events
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {galleryItems.map((item, index) => (
                                <div key={index} className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white/90 backdrop-blur-[10px] shadow-lg border-2 border-green-500/20 hover:-translate-y-2 hover:shadow-xl hover:border-green-500/40 ${item.large ? 'md:row-span-2' : ''}`}>
                                    <div className={`relative ${item.large ? 'h-[520px]' : 'h-[250px]'}`}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover rounded-[14px] m-2"
                                            sizes={item.large ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-green-600/80 flex items-center justify-center opacity-0 transition-all duration-300 rounded-[14px] m-2 hover:opacity-100">
                                        <i className="fas fa-search-plus text-white text-4xl"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 relative z-[2]">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-start px-5">
                        <div className="bg-white/90 rounded-[20px] p-12 backdrop-blur-[10px] shadow-lg border border-green-500/20">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Ready to make a difference? Connect with us and join our mission to create positive change in the community.
                            </p>

                            <div className="flex flex-col gap-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 transition-all duration-300 hover:bg-green-500/10">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 text-white text-xl">
                                            <i className={`fas fa-${item.icon}`}></i>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-green-500 mb-1">{item.label}</div>
                                            <div className="text-base text-gray-700 font-medium">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/90 rounded-[20px] p-12 backdrop-blur-[10px] shadow-lg border border-green-500/20">
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h3>
                            <p className="text-base text-gray-600 mb-8">
                                We will love to hear from you. Fill out the form below and we will get back to you soon.
                            </p>

                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full p-4 border border-gray-400 rounded-lg text-base bg-white/80 transition-all duration-300 focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]" placeholder="Enter your full name" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full p-4 border border-gray-400 rounded-lg text-base bg-white/80 transition-all duration-300 focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]" placeholder="Enter your email address" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" className="w-full p-4 border border-gray-400 rounded-lg text-base bg-white/80 transition-all duration-300 focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]" placeholder="What's this about?" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" className="w-full p-4 border border-gray-400 rounded-lg text-base bg-white/80 transition-all duration-300 h-30 resize-y focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]" placeholder="Tell us how we can help you..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-br from-green-500 to-green-600 text-white border-none p-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(34,197,94,0.3)]">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 py-15 px-5 relative z-[2] backdrop-blur-[10px]">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white mb-2">GoodWork</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Making a positive impact in communities through collaborative social initiatives and sustainable development programs.
                            </p>
                            <div className="flex gap-4 mt-4">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-lg no-underline transition-all duration-300 hover:bg-green-500 hover:text-white hover:-translate-y-0.5">
                                        <i className={`fab fa-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white mb-2">Quick Links</h4>
                            <div className="flex flex-col gap-3">
                                {quickLinks.map((link, index) => (
                                    <a key={index} href="#" className="text-gray-300 no-underline text-sm transition-all duration-300 flex items-center gap-2 hover:text-green-500">
                                        <i className="fas fa-chevron-right"></i>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white mb-2">Programs</h4>
                            <div className="flex flex-col gap-3">
                                {programs.map((program, index) => (
                                    <a key={index} href="#" className="text-gray-300 no-underline text-sm transition-colors duration-300 flex items-center gap-2 hover:text-green-500">
                                        <i className={`fas fa-${program.icon}`}></i>
                                        {program.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white mb-2">Contact Info</h4>
                            <div className="flex flex-col gap-3">
                                {contactItems.map((contact, index) => (
                                    <a key={index} href={contact.href} className="text-gray-300 no-underline text-sm transition-colors duration-300 flex items-center gap-2 hover:text-green-500">
                                        <i className={`fas fa-${contact.icon}`}></i>
                                        {contact.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-5 border-t border-gray-600/50 flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © 2025 GoodWork Platform. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            {footerLinks.map((link, index) => (
                                <a key={index} href="#" className="text-gray-300 no-underline text-sm transition-colors duration-300 hover:text-green-500">{link}</a>
                            ))}
                        </div>
                    </div>
                </footer>

                <style jsx>{`
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
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

          @keyframes textGlow {
            from { filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.3)); }
            to { filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.6)); }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
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

          @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
            </div>
        </>
    );
};

export default GoodWorkPlatform;