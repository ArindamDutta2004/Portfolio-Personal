import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05, color: '#4f46e5' }
  };

  const logoVariants = {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/">
              <motion.div 
                className="flex items-center"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Code className={`h-8 w-8 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className="ml-2 text-xl font-bold">Arindam Portfolio</span>
              </motion.div>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={({ isActive }) => 
                    isActive 
                      ? `${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} font-medium` 
                      : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} transition-colors`
                  }
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
              } focus:outline-none`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden overflow-hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={({ isActive }) => 
                  isActive 
                    ? `block px-3 py-2 rounded-md text-base font-medium ${
                        theme === 'dark' ? 'text-indigo-400 bg-gray-900' : 'text-indigo-600 bg-indigo-50'
                      }` 
                    : `block px-3 py-2 rounded-md text-base font-medium ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                      }`
                }
                onClick={toggleMenu}
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink 
              to="/resume" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                theme === 'dark' 
                  ? 'bg-indigo-700 text-white hover:bg-indigo-800' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
              onClick={toggleMenu}
            >
              Resume
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;