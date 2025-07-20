import { ArrowRight, Code, Layout, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ArindamPer from '../assets/ArindamPer.jpg'; 
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const { theme } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  // Floating image animation
  const floatingImageVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className={`relative ${theme === 'dark'
        ? 'bg-gradient-to-r from-gray-900 to-indigo-900 text-white'
        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-black'
        } overflow-hidden`}>
        <AnimatedBackground variant="gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className={`${theme === 'dark' ? 'text-white' : 'text-indigo-600'} text-4xl font-bold`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    className={`${theme === 'dark' ? 'text-yellow-500' : 'text-orange-600'} text-5xl font-extrabold`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Arindam Dutta
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  A passionate full-stack developer specializing in creating beautiful, functional, and user-friendly web applications.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Link to="/projects" className={`${theme === 'dark'
                      ? 'bg-indigo-800 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-gray-100'
                      } px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors`}>
                      View My Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Link to="/contact" className={`${theme === 'dark'
                      ? 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-900 hover:text-indigo-300'
                      : 'border-2 border-red text-gray hover:bg-white hover:text-indigo-600'
                      } px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors`}>
                      Contact Me
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating Profile Image */}
              <motion.div
                className="relative hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.div
                  className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                    opacity: [0.3, 0.2, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="absolute -bottom-5 -right-5 w-32 h-32 bg-indigo-400 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -10, 0],
                    opacity: [0.3, 0.2, 0.3]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="w-80 h-100 bg-white p-1 rounded-xl shadow-5x2 flex items-center justify-center overflow-hidden"
                  variants={floatingImageVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                >
                  <img
                    src={ArindamPer}
                    alt="Arindam Dutta"
                    className="w-full h-full rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Skills Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">My Skills</h2>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Here are some technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className={`h-8 w-8 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />,
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with modern technologies.",
                skills: ["React", "TypeScript", "Tailwind CSS"]
              },
              {
                icon: <Database className={`h-8 w-8 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />,
                title: "Backend Development",
                description: "Building robust and scalable server-side applications and APIs.",
                skills: ["Node.js", "Express", "MongoDB"]
              },
              {
                icon: <Layout className={`h-8 w-8 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />,
                title: "UI/UX Design",
                description: "Designing intuitive and beautiful user experiences that people love.",
                skills: ["Figma"]
              }
            ].map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
                className={`${theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-500'
                  : 'bg-gray-100 hover:bg-gray-300'
                  } p-8 rounded-lg shadow-sm transition-all`}
              >
                <motion.div
                  className={`${theme === 'dark'
                    ? 'bg-gray-600'
                    : 'bg-indigo-100'
                    } p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, index) => (
                    <motion.span
                      key={index}
                      className={`${theme === 'dark'
                        ? 'bg-gray-600 hover:bg-gray-500'
                        : 'bg-gray-200 hover:bg-indigo-100'
                        } px-3 py-1 rounded-full text-sm`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
        <AnimatedBackground variant="particles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Some of my recent work</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  title: "GitHub Analyzer",
                  description: "A full-featured online store with payment processing and inventory management.",
                  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHVifGVufDB8fDB8fHww",
                  skills: ["React", "Node.js", "MongoDB"]
                },
                {
                  title: "Kissan Helper",
                  description: "Kissan Helper is a digital platform that provides farmers with expert agricultural advice, weather updates and helps farmers identify plant diseases and provides effective treatment solutions.",
                 image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  skills: ["Next.js", "Firebase", "Tailwind CSS"]
                },
                {
                  title: "Weather App",
                  description: "A weather application that provides current conditions and forecasts for locations worldwide. Features include interactive maps and severe weather alerts.",
                  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  skills: ["React", "D3.js", "Express"]
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md`}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          className={`${theme === 'dark'
                            ? 'bg-gray-700 hover:bg-gray-600'
                            : 'bg-gray-200 hover:bg-indigo-100'
                            } px-2 py-1 rounded-full text-xs`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link to="/projects" className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium hover:text-indigo-800 flex items-center`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/projects" className={`inline-flex items-center ${theme === 'dark'
                  ? 'bg-indigo-700 hover:bg-indigo-800'
                  : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white px-6 py-3 rounded-lg font-medium transition-colors`}>
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedBackground>
      </section>

      {/* CTA Section */}
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
            className={`absolute -bottom-40 -left-40 w-80 h-80 ${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-500'
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

export default Home;