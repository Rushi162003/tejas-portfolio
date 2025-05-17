
import { FileText, Github, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Developed an E-commerce platform with responsive design using JavaScript, HTML5, and CSS3.",
      details: [
        "Developed an eCommerce platform with responsive design using JavaScript, HTML5, and CSS3.",
        "Collaborated in a team of 5 to integrate features such as add to cart, advanced filters, and product sorting.",
        "Ensured cross-platform compatibility for a seamless shopping experience on both desktop and mobile devices.",
        "Implemented secure checkout and order tracking functionalities.",
        "Utilized Git for version control and collaborative development workflows."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "MySQL", "Git"],
      image: "https://via.placeholder.com/800x600?text=E-commerce+Project",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "E-commerce Website (React)",
      description: "Collaborated with a team to develop a responsive and visually appealing user interface using React.js.",
      details: [
        "Collaborated with a team to develop a responsive and visually appealing user interface using React.js.",
        "Developed and implemented 'Add to Cart' feature for managing shopping cart items with flexibility.",
        "Integrated secure payment gateways and a simple checkout process to enhance user trust and satisfaction.",
        "Ensured cross-device compatibility by implementing responsive designs for both desktop and mobile users.",
        "Conducted thorough testing and debugging to deliver a stable and reliable eCommerce experience to users."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "MySQL", "Git"],
      image: "https://via.placeholder.com/800x600?text=React+E-commerce+Project",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Cricket Application",
      description: "Developed and maintained the frontend of a cricket application using Next.js at WTVision Solutions.",
      details: [
        "Developed and maintained the frontend of a cricket application using Next.js.",
        "Implemented responsive designs and ensured optimal performance across devices.",
        "Collaborated with designers to create intuitive user interfaces.",
        "Integrated with backend APIs for real-time data and statistics.",
        "Applied performance optimization techniques for smooth user experience."
      ],
      technologies: ["Next.js", "React", "TypeScript", "RESTful APIs"],
      image: "https://via.placeholder.com/800x600?text=Cricket+App+Project",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-theme-blue px-4 py-2 rounded-full mb-4">
            <Code size={18} />
            <span className="font-medium">My Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Recent Work
          </h2>
          <div className="h-1 w-20 bg-theme-blue mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-50 text-theme-blue text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  {project.details.slice(0, 3).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm" className="text-theme-blue border-theme-blue hover:bg-theme-blue/10">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-theme-blue hover:bg-theme-dark-blue text-white">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Live Demo
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
