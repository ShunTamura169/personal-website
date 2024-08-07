import React from 'react';

const AboutSection: React.FC = () => {
  return (
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
  );
};

export default AboutSection;