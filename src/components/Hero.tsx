
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Hi, I'm <span className="text-theme-blue">Tejas Jagdale</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">
                Frontend Developer (React)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dynamic Full Stack Developer with notable expertise in JavaScript, React.js, and modern technologies.
                Proficient in creating scalable and responsive applications through efficient code, seamless integration with APIs, and performance optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-theme-blue hover:bg-theme-dark-blue text-white px-6 py-3 rounded-md flex items-center gap-2 text-md">
                  <a href="#contact">
                    Let's Connect <ArrowRight size={18} />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-6 py-3 rounded-md text-md">
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/me.jpg"
                alt="Tejas Raju Jagdale"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
