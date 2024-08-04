"use client";

import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlogSlider from './BlogSlider';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ShunTamura169' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shun-tamura/' },
  { name: 'Twitter', url: 'https://twitter.com' }
]

const heroImages = [
  { src: '/Alps.png', alt: 'Alps mountain range' },
  { src: '/Bathy_reef.png', alt: 'Underwater reef' },
  { src: '/Bathy_river.png', alt: 'River landscape' },
  { src: '/Bathy_trench.png', alt: 'Ocean trench' },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  // スムーズスクロール関数
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
    // ナビゲーションリンクにイベントリスナーを追加
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll as unknown as EventListener);
    });
  
    // クリーンアップ関数
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll as unknown as EventListener);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5秒ごとに画像を変更

    return () => clearInterval(interval);
  }, []);

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
                  {['About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
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
                  ))}
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

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-white bg-gray-900 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  priority
                  className="opacity-50"
                />
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="z-10 text-center p-8 rounded-lg"
            >
              <h2 className="text-6xl font-bold mb-4 font-orbitron">Exploring Worlds <br/>with Intelligence</h2>
              <p className="text-xl mb-8 font-roboto">Creating beautiful and functional web experiences</p>
              <motion.a 
                href="#contact" 
                className="bg-blue-500 text-gray-100 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition duration-300 inline-block z-20 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={smoothScroll}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
                Hi, I am Shun Tamura, currently working as an Engineer and Researcher at SoftBank&apos;s Research Institute of Advanced Technology (RIAT).
                <br /><br />
                I specialized in traffic engineering academically and have honed my expertise in digital twins and AI/virtualization field. I have been involved in rapid prototyping of cutting-edge technologies, including 3D map development and AI RAN projects.
                <br /><br />
                In my private life, I have a deep interest in maps and travel, and I am always eager to explore new things. My long-term career goal is to leverage my experience in both digital twins and AI to contribute to innovations in the fields of autonomous driving and robotics.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <ExperienceSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Latest Blog Posts Section */}
          <section id="blog" className="bg-white py-20">
            <BlogSlider />
          </section>


          {/* Contact Section */}
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