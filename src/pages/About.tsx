
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years of experience in IT solutions and digital transformation."
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      description: "Expert in cloud architecture and enterprise solutions."
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Innovation",
      description: "Specialist in emerging technologies and AI implementations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At TechCorp, we're driven by a singular purpose: to empower businesses through innovative technology solutions. 
              We believe in creating digital experiences that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={24} />,
                title: "Client-Centric",
                description: "We put our clients first, ensuring their success through dedicated support and tailored solutions."
              },
              {
                icon: <Target size={24} />,
                title: "Innovation",
                description: "We continuously explore and implement cutting-edge technologies to solve complex challenges."
              },
              {
                icon: <Award size={24} />,
                title: "Excellence",
                description: "We maintain the highest standards in every project, delivering quality solutions that exceed expectations."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
