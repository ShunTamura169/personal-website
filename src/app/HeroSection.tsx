import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  { src: '/Alps.png', alt: 'Alps mountain range' },
  { src: '/Bathy_reef.png', alt: 'Underwater reef' },
  { src: '/Bathy_river.png', alt: 'River landscape' },
  { src: '/Bathy_trench.png', alt: 'Ocean trench' },
];

interface HeroSectionProps {
  language: 'en' | 'ja';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5秒ごとに画像を変更

    return () => clearInterval(interval);
  }, []);

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

  return (
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
        <h2 className="text-6xl font-bold mb-4 font-orbitron">
          {language === 'en' ? 'Exploring Worlds with Intelligence' : '知能で世界を探索する'}
        </h2>
        <p className="text-xl mb-8 font-roboto">
          {language === 'en' ? 'Creating beautiful and functional web experiences' : '美しく機能的なウェブ体験を創造する'}
        </p>
        <motion.a 
          href="#contact" 
          className="bg-blue-500 text-gray-100 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition duration-300 inline-block z-20 relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={smoothScroll}
        >
          {language === 'en' ? 'Get in touch' : 'お問い合わせ'}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;