"use client";

import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlogSlider from './BlogSlider';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const targetId = target.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const toggleLanguage = (lang: 'en' | 'ja') => {
    setLanguage(lang);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll as unknown as EventListener);
    });
  
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll as unknown as EventListener);
      });
    };
  }, []);

  const renderNavItems = () => (
    ['About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
      <li key={item} className="py-2 md:py-0">
        <a
          href={`#${item.toLowerCase()}`}
          className="text-gray-600 hover:text-blue-500 transition duration-300 block md:inline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {language === 'en' ? item : {
            'About': '概要',
            'Experience': '経歴',
            'Skills': 'スキル',
            'Projects': 'プロジェクト',
            'Blog': 'ブログ',
            'Contact': '連絡先'
          }[item]}
        </a>
      </li>
    ))
  );

  return (
    <>
      <Head>
        <title>Shun Tamura - Engineer & Researcher Portfolio</title>
        <meta name="description" content="Portfolio of Shun Tamura, an Engineer and Researcher specializing in digital twin and AI/virtualization technologies at SoftBank." />
        <meta name="keywords" content="Shun Tamura, Engineer, Researcher, Digital Twin, AI, Virtualization, SoftBank, Portfolio" />
        <meta name="author" content="Shun Tamura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.shun-tamura.com" />
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="py-4 px-4 sm:px-6 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-transparent">
              Shun Tamura
            </h1>
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-600 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
                <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
                  {renderNavItems()}
                </ul>
              </nav>
              <div className="text-sm">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`mr-2 ${language === 'ja' ? 'underline' : ''} text-gray-600 hover:text-blue-500 transition duration-300`}
                >
                  EN
                </button>
                /
                <button
                  onClick={() => toggleLanguage('ja')}
                  className={`ml-2 ${language === 'en' ? 'underline' : ''} text-gray-600 hover:text-blue-500 transition duration-300`}
                >
                  JP
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16">
          <HeroSection language={language} />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <section id="blog" className="bg-white py-20">
            <BlogSlider />
          </section>
          <ContactSection />
        </main>

        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Shun Tamura. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}