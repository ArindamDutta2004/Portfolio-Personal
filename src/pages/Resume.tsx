import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real application, this would download a PDF version of the resume
    alert('In a real application, this would download a PDF version of the resume.');
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'} min-h-screen`}>
      {/* Print-only styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #resume-content, #resume-content * {
              visibility: visible;
            }
            #resume-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Header with actions */}
      <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md py-4 sticky top-0 z-10 no-print`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/about">
            <motion.button 
              className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5 mr-1" /> Back to About
            </motion.button>
          </Link>
          <div className="flex space-x-4">
            <motion.button
              onClick={handlePrint}
              className={`flex items-center ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} px-4 py-2 rounded-md transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Printer className="h-5 w-5 mr-2" /> Print
            </motion.button>
            <motion.button
              onClick={handleDownload}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5 mr-2" /> Download PDF
            </motion.button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          ref={resumeRef}
          id="resume-content"
          className={`${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-lg rounded-lg overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Resume Header */}
          <div className={`${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-600'} text-white p-8`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold">Alex Johnson</h1>
                <p className="text-xl mt-1">Full-Stack Developer</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p>contact@example.com</p>
                <p>(123) 456-7890</p>
                <p>San Francisco, CA</p>
                <p>github.com/alexjohnson</p>
              </div>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-8">
            {/* About Me */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>About Me</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Passionate and detail-oriented Full-Stack Developer with over 5 years of experience building responsive and user-friendly web applications. Proficient in modern JavaScript frameworks, with expertise in React, Node.js, and database technologies. Strong problem-solving skills and a commitment to writing clean, maintainable code. Seeking to leverage my technical expertise and creative problem-solving skills to contribute to innovative projects in a collaborative environment.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Education</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">B.S. in Computer Science</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2012 - 2016</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>University of California, Berkeley</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>GPA: 3.8/4.0</li>
                    <li>Dean's List: 2013-2016</li>
                    <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering</li>
                    <li>Senior Project: Developed a real-time collaborative code editor with WebSockets</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">High School Diploma</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2008 - 2012</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>Lincoln High School, San Francisco, CA</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Valedictorian</li>
                    <li>President of Computer Science Club</li>
                    <li>Organized annual coding competition for local high schools</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Skills */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Technical Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>React, Redux, Next.js</li>
                    <li>TypeScript, JavaScript (ES6+)</li>
                    <li>HTML5, CSS3, Sass</li>
                    <li>Tailwind CSS, Material UI</li>
                    <li>Jest, React Testing Library</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Node.js, Express</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>GraphQL, REST APIs</li>
                    <li>Firebase, AWS</li>
                    <li>Docker, CI/CD</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tools & Methodologies</h3>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Git, GitHub, GitLab</li>
                    <li>Agile/Scrum</li>
                    <li>Jira, Trello</li>
                    <li>Figma, Adobe XD</li>
                    <li>VS Code, WebStorm</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Communication</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Projects */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Projects</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">E-commerce Platform</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2022</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>React, Node.js, MongoDB, Stripe</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Developed a full-featured online store with payment processing and inventory management</li>
                    <li>Implemented user authentication, product search, and filtering functionality</li>
                    <li>Created an admin dashboard for managing products, orders, and customer data</li>
                    <li>Integrated with Stripe for secure payment processing</li>
                    <li>Deployed on AWS with CI/CD pipeline for automated testing and deployment</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Task Management App</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2021</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>Next.js, Firebase, Tailwind CSS</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Built a collaborative task management tool with real-time updates and team features</li>
                    <li>Implemented drag-and-drop functionality for task organization</li>
                    <li>Created a notification system for task assignments and deadlines</li>
                    <li>Designed responsive UI for seamless experience across devices</li>
                    <li>Integrated with Google Calendar for event synchronization</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Financial Dashboard</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2020</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>React, D3.js, Express, PostgreSQL</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Developed an interactive dashboard for tracking investments and financial metrics</li>
                    <li>Created data visualizations for portfolio performance and market trends</li>
                    <li>Implemented user authentication and data encryption for security</li>
                    <li>Built RESTful API for data retrieval and manipulation</li>
                    <li>Designed responsive UI with dark/light mode toggle</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Internships/Work Experience */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Work Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2020 - Present</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>TechCorp Inc., San Francisco, CA</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Lead a team of 5 frontend developers in building and maintaining a complex SaaS platform</li>
                    <li>Implemented modern React architecture with TypeScript, resulting in a 40% improvement in application performance</li>
                    <li>Collaborated with UX designers to create intuitive user interfaces and seamless user experiences</li>
                    <li>Introduced automated testing practices, increasing code coverage from 45% to 85%</li>
                    <li>Mentored junior developers through code reviews and pair programming sessions</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2018 - 2020</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>WebSolutions Agency, San Francisco, CA</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Developed and deployed over 15 client websites and web applications using JavaScript, Node.js, and MongoDB</li>
                    <li>Collaborated with designers and project managers to deliver projects on time and within budget</li>
                    <li>Implemented responsive designs ensuring compatibility across all devices and browsers</li>
                    <li>Optimized database queries, reducing load times by 30%</li>
                    <li>Created and maintained documentation for client projects</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Web Development Intern</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Summer 2016</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-2`}>Tech Innovators, San Francisco, CA</p>
                  <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                    <li>Assisted in the development of a mobile-first web application</li>
                    <li>Implemented responsive designs based on wireframes and mockups</li>
                    <li>Fixed bugs and implemented minor features in existing applications</li>
                    <li>Participated in daily stand-ups and sprint planning meetings</li>
                    <li>Gained experience with version control and collaborative development workflows</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Participation Events */}
            <section className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Events & Activities</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h3 className="text-xl font-bold">Hackathon Organizer & Mentor</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2019 - Present</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-1`}>SF Code Camp</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Organize annual hackathons for aspiring developers. Mentor participants and judge submissions.</p>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h3 className="text-xl font-bold">Conference Speaker</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2021</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-1`}>ReactConf</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Presented "Building Accessible React Applications" to an audience of 500+ developers.</p>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h3 className="text-xl font-bold">Open Source Contributor</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2018 - Present</p>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium mb-1`}>Various Projects</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Active contributor to several open-source projects including React, Node.js, and various developer tools.</p>
                </div>
              </div>
            </section>
            
            {/* Certificates */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} pb-2`}>Certifications</h2>
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-lg font-semibold">AWS Certified Developer - Associate</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2021</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-lg font-semibold">Professional React Developer Certification</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2020</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-lg font-semibold">MongoDB Certified Developer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2019</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-lg font-semibold">Full-Stack Web Development Nanodegree</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>2018</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;