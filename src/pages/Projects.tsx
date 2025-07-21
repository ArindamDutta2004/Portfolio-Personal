import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

const Projects = () => {
  const { theme } = useTheme();
  // Sample projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "GitHub Analyzer",
      description: "A full-featured online store with payment processing, inventory management, and an admin dashboard. Supports multiple payment methods and includes analytics.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHVifGVufDB8fDB8fHww",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoUrl: "https://github-analyzer-git-master-arindam-duttas-projects-bd121fd4.vercel.app",
      githubUrl: "https://github.com/ArindamDutta2004",
      featured: true
    },
        {
      id: 2,
      title: "Kissan Helper",
      description: "Kissan Helper is a digital platform that provides farmers with expert agricultural advice, weather updates and helps farmers identify plant diseases and provides effective treatment solutions.",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Web Application",
      technologies: ["React"],
      demoUrl: "https://kissna-helper-git-master-arindam-duttas-projects-bd121fd4.vercel.app",
      githubUrl: "https://github.com/ArindamDutta2004",
      featured: true
    },
        {
      id: 3,
      title: "Weather App",
      description: "A weather application that provides current conditions and forecasts for locations worldwide. Features include interactive maps and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web App",
      technologies: ["React Native", "OpenWeatherMap API", "Redux"],
      demoUrl: "https://weather-forcasting-git-master-arindam-duttas-projects-bd121fd4.vercel.app",
      githubUrl: "https://github.com/ArindamDutta2004",
      featured: true
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team features, and progress tracking. Includes calendar integration and notification system.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Web Application",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "An interactive dashboard for tracking investments and financial metrics. Features data visualization, portfolio management, and market trend analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Data Visualization",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A fitness tracking application that allows users to log workouts, track progress, and set goals. Includes visualization of workout history and achievements.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "D3.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = categoryFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === categoryFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.95 }
  };

  return (
    <div>
      {/* Header */}
      <section className={`${theme === 'dark' ? 'bg-indigo-900 text-white' : 'bg-indigo-600 text-white'}py-10 relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between p-6 rounded-lg">

            {/* Left Side - Text Content */}
            <div className="text-white flex-1">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My Projects
              </motion.h1>
              <motion.p
                className="text-xl max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                A collection of my work, including web applications, mobile apps, and design projects.
              </motion.p>
            </div>

            {/* Right Side - Logo */}
            <motion.img
{/*               src="./src/assets/logo1-removebg-preview.png" // Replace with the actual image path */}
              alt="Logo"
              className="w-32 h-32 object-contain ml-auto" // Ensure it aligns to the right
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-indigo-800' : 'text-gray-800'}`}>
          {/* Category Filter */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-2 rounded-full ${categoryFilter === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`${theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 '
                  : 'bg-gray-100 hover:bg-gray-300'
                  } p-8 rounded-lg shadow-sm transition-all`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {project.featured && (
                    <motion.span
                      className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                    >
                      Featured
                    </motion.span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} text-xl font-bold`}>{project.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-gray-200 px-2 py-1 rounded-full text-xs"
                        whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      Code <Github className="ml-1 h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 ${theme === 'dark'
        ? 'bg-indigo-900'
        : 'bg-indigo-600'
        } text-white relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute -top-40 -right-40 w-80 h-80 ${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-500'
              } rounded-full`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className={`absolute -bottom-20 -left-40 w-80 h-80 ${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-500'
              } rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in working together?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/contact" className={`inline-flex items-center ${theme === 'dark'
              ? 'bg-indigo-800 text-white hover:bg-indigo-700'
              : 'bg-white text-indigo-600 hover:bg-gray-100'
              } px-6 py-3 rounded-lg font-medium transition-colors`}>
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
