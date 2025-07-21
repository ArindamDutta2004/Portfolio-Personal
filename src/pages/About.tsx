import { useTheme } from '../context/ThemeContext';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ArindamP from '../assets/ArindamP.jpg';
import c1 from '../assets/c1.pdf';
import c2 from '../assets/c2.pdf';
import c3 from '../assets/c3.pdf';
import ArindamDutta from '../assets/Arindam-Dutta-Resume.pdf';

const About = () => {
  const { theme } = useTheme();
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (percent: number) => ({
      width: `${percent}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  return (
    <div className={`min-h-screen ${'dark' === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
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
                About Me
              </motion.h1>
              <motion.p
                className="text-xl max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Learn more about my journey, experience, and the skills I've developed along the way.
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

      {/* Bio Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={ArindamP}
                alt="Arindam Dutta"
                className="w-full h-full rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-3xl font-bold mb-6`}
                variants={itemVariants}
              >
                Who I Am
              </motion.h2>
              <motion.p
                className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-4`}
                variants={itemVariants}
              >
                I'm Arindam Dutta, a passionate and innovative Computer Science (AI & ML) undergraduate at the University of Engineering & Management, Jaipur. With a solid foundation in programming and a growing interest in intelligent systems, I enjoy building impactful tech solutions—from blockchain-based product verification systems to AI-driven agriculture tools.
              </motion.p>
              <motion.p
                className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-4`}
                variants={itemVariants}
              >
                My expertise includes full-stack development with ReactJS, JavaScript, and Tailwind CSS, along with a strong eye for UI/UX design using tools like Figma and Canva. I strive to build intuitive and user-friendly interfaces that make technology accessible and effective.
              </motion.p>
              <motion.p
                className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-4`}
                variants={itemVariants}
              >
                I’ve gained hands-on experience through internships with AWS Academy and HONNOIX India, where I explored cloud-based machine learning and emerging 6G technologies. My projects showcase practical applications of my skills in Python, React, and AWS, often integrating AI, computer vision, and blockchain.
              </motion.p>
                            <motion.p
                className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-4`}
                variants={itemVariants}
              >
                I'm driven by curiosity, a love for design and development, and the challenge of solving real-world problems through technology.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Born: 2004</span>
                </div>
                <a
                  href="https://www.google.com/maps/place/West+Bengal,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>West Bengal, India</span>
                </a>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Full-Stack Developer</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>B.Tech. Computer Science</span>
                </div>
              </motion.div>

              <motion.div
                className="mt-8"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <a
                  href={ArindamDutta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" /> View My Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.h2
            className={`py-20 ${theme === 'dark' ? 'bg-gray-800 text-indigo-600' : 'bg-white text-gray-900'} 
              text-5xl font-extrabold text-center tracking-wide`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>


          <div className="space-y-12">
            {[
              {
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                period: "2020 - Present",
                description: "Lead the frontend development team in building and maintaining a complex SaaS platform. Implemented modern React architecture and improved performance by 40%.",
                skills: ["React", "TypeScript", "Redux", "GraphQL"]
              },
              {
                title: "Full-Stack Developer",
                company: "WebSolutions Agency",
                period: "2018 - 2020",
                description: "Developed and deployed over 15 client websites and web applications. Collaborated with designers and project managers to deliver projects on time and within budget.",
                skills: ["JavaScript", "Node.js", "Express", "MongoDB"]
              },
              {
                title: "Junior Web Developer",
                company: "StartUp Innovations",
                period: "2016 - 2018",
                description: "Assisted in the development of a mobile-first web application. Implemented responsive designs and contributed to the company's component library.",
                skills: ["HTML/CSS", "JavaScript", "jQuery", "PHP"]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-indigo-600">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="bg-gray-600 px-3 py-1 rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
                <GraduationCap className="h-6 w-6 mr-2 text-indigo-600" />
                Education
              </h3>

              <div className="space-y-6">
                {[
                  {
                    degree: "B.Tech in Computer Science",
                    school: "University of Engineering & Management, Jaipur",
                    period: "2022 - 2026",
                    location: "Jaipur, Rajasthan, India",
                    description: "Graduated with honors. Specialized in software engineering and web technologies."
                  },
                  {
                    degree: "Primary & High School",
                    school: "Joypur High School",
                    period: "2010 - 2022",
                    location: "Joypur, West Bengal, India", // Location is only present here
                    description: "Valedictorian. President of Computer Science Club."
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-indigo-600 text-lg font-medium">{edu.school}</p>

                    {/* Period */}
                    <div className="flex items-center text-gray-600 mt-3">
                      <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="text-base">{edu.period}</span>
                    </div>

                    {/* Conditionally Render Location if Available */}
                    {edu.location && (
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(edu.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 mt-2 hover:underline"
                      >
                        <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="text-base">{edu.location}</span>
                      </a>
                    )}


                    {/* Description */}
                    <p className="text-gray-700 mt-4 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>


            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
                <Award className="h-6 w-6 mr-2 text-indigo-600" />
                Certifications
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Python for Data Science",
                    issuer: "NPTEL",
                    link: c1,
                    year: "2024"
                  },
                  {
                    title: "Problem Solving Through Programming in C",
                    issuer: "NPTEL",
                    link: c2,
                    year: "2023"
                  },
                  {
                    title: "The Joy of Computing using Python",
                    issuer: "NPTEL",
                    link: c3,
                    year: "2023"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h4 className="text-xl font-bold text-gray-800">{cert.title}</h4>
                    <p className="text-indigo-600">{cert.issuer}</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.year}</span>
                    </div>

                    {/* Conditionally render the certificate link if it exists */}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-500 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
                <Award className="h-6 w-6 mr-2 text-indigo-600" />
                Internships
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Python for Data Science",
                    issuer: "NPTEL",
                    link: c1,
                    year: "2024"
                  },
                  {
                    title: "Problem Solving Through Programming in C",
                    issuer: "NPTEL",
                    link: c2,
                    year: "2023"
                  },
                  {
                    title: "The Joy of Computing using Python",
                    issuer: "NPTEL",
                    link: c3,
                    year: "2023"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h4 className="text-xl font-bold text-gray-800">{cert.title}</h4>
                    <p className="text-indigo-600">{cert.issuer}</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.year}</span>
                    </div>
 
                   
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-500 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
                <Award className="h-6 w-6 mr-2 text-indigo-600" />
                Hackathons
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Python for Data Science",
                    issuer: "NPTEL",
                    link: c1,
                    year: "2024"
                  },
                  {
                    title: "Problem Solving Through Programming in C",
                    issuer: "NPTEL",
                    link: c2,
                    year: "2023"
                  },
                  {
                    title: "The Joy of Computing using Python",
                    issuer: "NPTEL",
                    link: c3,
                    year: "2023"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h4 className="text-xl font-bold text-gray-800">{cert.title}</h4>
                    <p className="text-indigo-600">{cert.issuer}</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.year}</span>
                    </div>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-500 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React", percent: 95 },
                  { name: "TypeScript", percent: 90 },
                  { name: "HTML/CSS", percent: 100 },
                  { name: "Next.js", percent: 85 },
                ]
              },
              {
                category: "Backend",
                skills: [
                  { name: "Node.js", percent: 90 },
                  { name: "Express", percent: 85 },
                  { name: "MongoDB", percent: 80 },
                ]
              },
              {
                category: "Other",
                skills: [
                  { name: "Git", percent: 95 },
                  { name: "AWS", percent: 75 },
                  { name: "Testing", percent: 80 }
                ]
              }
            ].map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="bg-blue-200 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-green-600 h-2.5 rounded-full"
                          custom={skill.percent}
                          variants={skillBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
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

export default About;
