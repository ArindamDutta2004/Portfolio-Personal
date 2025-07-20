import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const socialIconVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-800 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Arindam Portfolio</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-300'} mt-2`}>Building amazing web experiences</p>
          </motion.div>
          
          <div className="flex space-x-6">
            {[
              { icon: <Github className="h-6 w-6" />, url: "https://github.com/ArindamDutta2004" },
              { icon: <Linkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/arindam-dutta2004/" },
              { icon: <Twitter className="h-6 w-6" />, url: "https://x.com/Ari4002Dutta" },
              { icon: <Mail className="h-6 w-6" />, url: "mailto:arindam2004.dutta@gmail.com" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} transition-colors`}
                variants={socialIconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className={`mt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-700'} pt-8 flex flex-col md:flex-row justify-between items-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;