import React from 'react';

const skills = [
  'Python', 'TypeScript', 'Docker', 'Kubernetes', 'Machine Learning', 
  'Digital Twin', 'Japanese - Native', 'English - Business', 'French - Business'
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md px-4 py-3 text-center font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;