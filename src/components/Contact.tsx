
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="text-theme-blue" size={20} />,
      title: "Email",
      value: "rushijagdale1605@gmail.com",
      link: "mailto:rushijagdale1605@gmail.com"
    },
    {
      icon: <Phone className="text-theme-blue" size={20} />,
      title: "Phone",
      value: "+91 9607319433",
      link: "tel:+919607319433"
    },
    {
      icon: <MapPin className="text-theme-blue" size={20} />,
      title: "Location",
      value: "Ch. Sambhajinagar Maharashtra",
      link: "#"
    },
    {
      icon: <Linkedin className="text-theme-blue" size={20} />,
      title: "LinkedIn",
      value: "tejas-full-stack-developer",
      link: "https://linkedin.com/in/tejas-full-stack-developer"
    },
    {
      icon: <Github className="text-theme-blue" size={20} />,
      title: "GitHub",
      value: "Rushi162003",
      link: "https://github.com/Rushi162003"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-theme-blue px-4 py-2 rounded-full mb-4">
            <Mail size={18} />
            <span className="font-medium">Contact Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-theme-blue mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={info.title} 
                  href={info.link}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="p-3 bg-blue-100 rounded-full">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-32"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-theme-blue hover:bg-theme-dark-blue text-white px-6 py-3 rounded-md flex items-center gap-2 w-full justify-center mt-4"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
