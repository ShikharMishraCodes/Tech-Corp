
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe, Database, Headphones } from 'lucide-react';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Code size={24} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and challenges.",
      benefits: ["Scalable architecture", "Modern tech stack", "Future-proof solutions"]
    },
    {
      icon: <Server size={24} />,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services for better scalability, security, and performance.",
      benefits: ["Cost optimization", "24/7 availability", "Automatic scaling"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      benefits: ["Cross-platform compatibility", "Offline functionality", "Push notifications"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Responsive and dynamic web applications built with cutting-edge technologies.",
      benefits: ["SEO optimization", "Fast loading times", "Mobile-first design"]
    },
    {
      icon: <Database size={24} />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights for better decision-making.",
      benefits: ["Real-time analytics", "Custom dashboards", "Predictive analysis"]
    },
    {
      icon: <Headphones size={24} />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions.",
      benefits: ["Technology roadmap", "Risk assessment", "Digital transformation"]
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
              Our Services
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
