import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'particles';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  variant = 'default' 
}) => {
  const { theme } = useTheme();
  
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  if (variant === 'particles') {
    return (
      <div className={`relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              theme === 'dark' 
                ? 'bg-indigo-900 bg-opacity-20' 
                : 'bg-indigo-300 bg-opacity-20'
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-indigo-900' 
          : 'bg-gradient-to-br from-indigo-50 to-purple-100'
      }`}>
        {/* Animated gradient orbs */}
        <motion.div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
            theme === 'dark' ? 'bg-purple-800' : 'bg-purple-300'
          } mix-blend-multiply filter blur-3xl opacity-30`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
            theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-300'
          } mix-blend-multiply filter blur-3xl opacity-30`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl ${
            theme === 'dark' ? 'bg-purple-900 opacity-20' : 'bg-purple-300 opacity-20'
          }`}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl ${
            theme === 'dark' ? 'bg-yellow-900 opacity-20' : 'bg-yellow-300 opacity-20'
          }`}
          animate={{
            y: [0, 50, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <motion.div
          className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl ${
            theme === 'dark' ? 'bg-indigo-900 opacity-20' : 'bg-indigo-300 opacity-20'
          }`}
          animate={{
            y: [0, 30, 0],
            x: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;