
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "E-Commerce Platform Revamp",
      client: "RetailTech Solutions",
      description: "Complete overhaul of an e-commerce platform serving 100,000+ monthly users.",
      technologies: ["React", "Node.js", "MongoDB"],
      outcome: "50% increase in conversion rate, 30% reduction in page load time",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Cloud Migration Project",
      client: "FinServ Global",
      description: "Migration of legacy systems to cloud infrastructure with zero downtime.",
      technologies: ["AWS", "Docker", "Kubernetes"],
      outcome: "40% reduction in operational costs, 99.99% uptime achieved",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Mobile Banking App",
      client: "Digital Banking Co",
      description: "Development of a secure mobile banking application with biometric authentication.",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      outcome: "4.8/5 star rating on app stores, 1M+ downloads",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-600">
              Showcasing our successful projects and implementations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden bg-white shadow-lg group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                  <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    <span>View Case Study</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
