
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "Git", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "CSS3", level: 90 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "RESTful APIs", level: 85 },
    { name: "Responsive Web Design", level: 90 },
    { name: "Django", level: 65 },
  ];
  
  const softSkills = [
    "Adaptability",
    "Teamwork",
    "Problem Solving",
    "Time Management",
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-theme-blue px-4 py-2 rounded-full mb-4">
            <Star size={18} />
            <span className="font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Technical Proficiency
          </h2>
          <div className="h-1 w-20 bg-theme-blue mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Soft Skills</h3>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <li key={skill} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                    <div className="w-3 h-3 bg-theme-blue rounded-full"></div>
                    <span className="font-medium text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Education</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-medium text-theme-blue">Full Stack Developer</h5>
                    <p className="text-gray-700">Masai School</p>
                    <p className="text-sm text-gray-500">July 2024 - Present</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-medium text-theme-blue">BSc</h5>
                    <p className="text-gray-700">Dr. Babasaheb Ambedkar Marathwada University</p>
                    <p className="text-sm text-gray-500">August 2020 - February 2024</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h5 className="font-medium text-theme-blue">HSC</h5>
                    <p className="text-gray-700">Dr. Babasaheb Ambedkar Marathwada University</p>
                    <p className="text-sm text-gray-500">August 2019 - March 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
