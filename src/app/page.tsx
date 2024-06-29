"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react'
import BlogSlider from './BlogSlider';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // スムーズスクロール関数
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
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
  
    // ナビゲーションリンクにイベントリスナーを追加
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });
  
    // クリーンアップ関数
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="py-4 px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-transparent">
            Shun Tamura
          </h1>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
              {['About', 'Experience', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item} className="py-2 md:py-0">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-800 transition duration-300 block md:inline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/Alps.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="z-10 text-center">
            <h2 className="text-5xl font-bold mb-4">Exploring Worlds with Intelligence</h2>
            <p className="text-xl mb-8">Creating beautiful and functional web experiences</p>
            <a href="#contact" className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Get in touch
            </a>
          </div>
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
        <section id="experience" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Engineer/Researcher', company: 'SoftBank', logo: '/softbank.png', date: '2022 - Present', description: 'Conducted research on digital twins and AI/virtualization technologies.' },
                { title: 'Engineer/Researcher', company: 'MONET Technologies', logo: '/monet.jpeg', date: '2022 - 2023', description: 'Worked on innovative mobility solutions.' },
                { title: 'Graduate School', company: 'École nationale des ponts et chaussées', logo: '/enpc.png', date: '2019-2022', description: 'Master of Science in Transportation Engineering' },
                { title: 'Undergraduate School', company: 'Tokyo University', logo: '/tokyo-university.jpg', date: '2015-2019', description: 'Bachelor of Engineering in Civil Engineering' },
              ].map((experience, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={64}
                    height={64}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-gray-600 mb-2">{experience.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{experience.date}</p>
                    <p className="text-gray-600">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {['Python', 'TypeScript', 'Docker', 'Kubernetes', 'Machine Learning', 'Digital Twin'].map((skill) => (
                <div key={skill} className="bg-gray-100 rounded-lg shadow-md px-4 py-3 text-center font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Project Alpha', description: 'A cutting-edge web application built with Next.js and GraphQL.' },
                { title: 'Project Beta', description: 'An innovative mobile app developed using React Native and Firebase.' },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-500 hover:underline">Learn more</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section id="blog" className="bg-white py-20">
          <BlogSlider />
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Let&apos;s Connect</h2>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mb-12">
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                <a key={platform} href="#" className="bg-white text-gray-800 rounded-full px-6 py-3 font-medium hover:bg-gray-200 transition duration-300">
                  {platform}
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block mb-1">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Shun Tamura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}