import React from 'react';
import Image from 'next/image';

const experiences = [
  { title: 'Engineer/Researcher', company: 'SoftBank', logo: '/softbank.png', date: '2022 - Present', description: 'Conducted research on digital twins and AI/virtualization technologies.' },
  { title: 'Engineer/Researcher', company: 'MONET Technologies', logo: '/monet.jpeg', date: '2022 - 2023', description: 'Worked on innovative mobility solutions.' },
  { title: 'Graduate School', company: 'École nationale des ponts et chaussées', logo: '/enpc.png', date: '2019-2022', description: 'Master of Science in Transportation Engineering' },
  { title: 'Undergraduate School', company: 'Tokyo University', logo: '/tokyo-university.jpg', date: '2015-2019', description: 'Bachelor of Engineering in Civil Engineering' },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
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
  );
};

export default ExperienceSection;