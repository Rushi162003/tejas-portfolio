
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Tejas Raju Jagdale</h3>
            <p className="text-gray-400">Frontend Developer (React)</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="font-semibold mb-3 text-theme-light-blue">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-theme-light-blue">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:rushijagdale1605@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    rushijagdale1605@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919607319433" className="text-gray-400 hover:text-white transition-colors">
                    +91 9607319433
                  </a>
                </li>
                <li className="text-gray-400">Ch. Sambhajinagar Maharashtra</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-theme-light-blue">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Rushi162003"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-theme-blue p-3 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/tejas-full-stack-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-theme-blue p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rushijagdale1605@gmail.com"
                className="bg-gray-800 hover:bg-theme-blue p-3 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tejas Raju Jagdale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
