
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-theme-blue px-4 py-2 rounded-full mb-4">
            <Briefcase size={18} />
            <span className="font-medium">Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Professional Journey
          </h2>
          <div className="h-1 w-20 bg-theme-blue mt-6 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-theme-blue pl-8 pb-12">
            <div className="absolute w-4 h-4 bg-theme-blue rounded-full -left-[9px] top-0"></div>

            <div className="mb-10 animate-fade-in">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Software Developer</h3>
                <div className="inline-flex items-center bg-blue-100 text-theme-blue px-3 py-1 rounded-full text-sm">
                  Dec 2024 - Present
                </div>
              </div>
              <h4 className="text-lg font-semibold text-theme-blue mb-2">WTVision Solutions Pvt. Ltd.</h4>
              <div className="text-gray-600">
                <h5 className="font-medium mb-2">Job Responsibilities:</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained the frontend of a cricket application using Next.js, ensuring responsive designs and optimal performance.</li>
                  <li>Collaborated with designers and backend developers to translate project requirements into effective user interfaces.</li>
                  <li>Optimized the application for speed and performance, ensuring cross-browser compatibility and exceptional user experience.</li>
                  <li>Integrated frontend components with server-side APIs and conducted thorough testing and debugging.</li>
                </ul>
              </div>
            </div>

            <div className="mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Full Stack Development Student</h3>
                <div className="inline-flex items-center bg-blue-100 text-theme-blue px-3 py-1 rounded-full text-sm">
                  July 2024 - Dec 2024
                </div>
              </div>
              <h4 className="text-lg font-semibold text-theme-blue mb-2">Masai School</h4>
              <div className="text-gray-600">
                <p>Intensive training program focused on full stack web development, including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Frontend technologies: React, TypeScript, JavaScript, HTML5, CSS3</li>
                  <li>Backend technologies: Node.js, Express.js, MongoDB, RESTful APIs</li>
                  <li>Software development methodologies and coding best practices</li>
                </ul>
              </div>
            </div>

            <div className="absolute w-4 h-4 bg-theme-blue rounded-full -left-[9px] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
