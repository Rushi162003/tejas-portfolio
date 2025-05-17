
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-theme-blue px-4 py-2 rounded-full mb-4">
            <User size={18} />
            <span className="font-medium">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Who I Am
          </h2>
          <div className="h-1 w-20 bg-theme-blue mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-xl bg-blue-50 p-5">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-theme-blue/20 rounded-full"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-theme-blue/10 rounded-full"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Info</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold min-w-24">Name:</span> 
                    <span>Tejas Raju Jagdale</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold min-w-24">Location:</span> 
                    <span>Ch. Sambhajinagar Maharashtra</span>
                  </p>
                  <p className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold min-w-24">Email:</span> 
                    <span className="break-all">rushijagdale1605@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold min-w-24">Phone:</span> 
                    <span>+91 9607319433</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold min-w-24">GitHub:</span> 
                    <span>Rushi162003</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold min-w-24">LinkedIn:</span> 
                    <span>tejas-full-stack-developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Frontend Developer with a passion for creating responsive web applications
            </h3>
            <div className="text-gray-600 space-y-4">
              <p>
                I'm a Frontend Developer specializing in React.js with a strong foundation in modern web technologies.
                Currently working at WTVision Solutions Pvt. Ltd., I develop and maintain responsive web applications
                with a focus on performance optimization and seamless user experience.
              </p>
              <p>
                My journey in full stack development began with my education at Masai School and has been reinforced
                through hands-on experience building e-commerce platforms and collaborative projects. I'm skilled in
                translating project requirements into effective user interfaces and integrating frontend components
                with server-side APIs.
              </p>
              <p>
                I enjoy problem solving and continuously learning new technologies. My adaptability, teamwork, and
                time management skills complement my technical abilities, making me an effective contributor to any
                development team.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-bold text-theme-blue mb-2">Education</h4>
                <p className="text-gray-700">Full Stack Development from Masai School</p>
                <p className="text-gray-700">BSc from Dr. Babasaheb Ambedkar Marathwada University</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-bold text-theme-blue mb-2">Interests</h4>
                <p className="text-gray-700">Exploring new technologies</p>
                <p className="text-gray-700">Sports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
