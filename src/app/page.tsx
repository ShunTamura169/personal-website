"use client";

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // スムーズスクロール関数
    const smoothScroll = (e: MouseEvent) => {
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
      link.addEventListener('click', smoothScroll);
    });

    // クリーンアップ関数
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []); // 空の依存配列で、このeffectをマウント時に一度だけ実行

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Fixed Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shun Tamura</h1>
          <nav>
            <ul className="flex space-x-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-800 transition duration-300">
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
            src="/Alps.png" // Ensure this path is correct
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="z-10 text-center">
            <h2 className="text-5xl font-bold mb-4">Web Developer & Designer</h2>
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
              私はクリエイティブで革新的なウェブソリューションの開発に情熱を注ぐウェブデベロッパーです。
              最新のテクノロジーを活用し、ユーザー体験を向上させる美しいインターフェースの作成に取り組んでいます。
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'].map((skill) => (
                <div key={skill} className="bg-white rounded-lg shadow-md px-4 py-3 text-center font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Project Alpha', description: 'A cutting-edge web application built with Next.js and GraphQL.' },
                { title: 'Project Beta', description: 'An innovative mobile app developed using React Native and Firebase.' },
              ].map((project, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-500 hover:underline">Learn more</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8">Let&apos;s Connect</h2>
            <div className="flex justify-center space-x-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                <a key={platform} href="#" className="bg-white text-gray-800 rounded-full px-6 py-3 font-medium hover:bg-gray-200 transition duration-300">
                  {platform}
                </a>
              ))}
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
  )
}