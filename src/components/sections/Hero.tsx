import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../../styles/sections/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.h1 
          className="hero-title glitch"
          data-text="JOSÉ JUAN PÉREZ GONZÁLEZ"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          JOSÉ JUAN PÉREZ GONZÁLEZ
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full-Stack Developer & XR Specialist
        </motion.p>

        <motion.div 
          className="code-window"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="code-header">
            <span className="code-title">developer.js</span>
          </div>
          <div className="code-content">
            <div className="code-line">
              const developer = {'{'}
            </div>
            <div className="code-line">
              &nbsp;&nbsp;name: "José Juan Pérez González",
            </div>
            <div className="code-line">
              &nbsp;&nbsp;role: "Full-Stack Developer & XR Specialist",
            </div>
            <div className="code-line">
              &nbsp;&nbsp;skills: ["Unity", "C#", "Vue.js", "Node.js", "XR", "Mobile Apps"],
            </div>
            <div className="code-line">
              &nbsp;&nbsp;experience: "1 years in Web & XR Development",
            </div>
            <div className="code-line">
              &nbsp;&nbsp;passion: "Creating immersive experiences & mobile solutions"
            </div>
           
            <div className="code-line">
              console.log("Ready to innovate!");
            </div>
            <div className="code-output code-success">Ready to innovate!</div>
          </div>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Desarrollador web full-stack y especialista en Unity con experiencia en Realidad Extendida (XR) y aplicaciones móviles. 
          Apasionado por crear experiencias inmersivas, aplicaciones web innovadoras y soluciones móviles que desafían los límites tecnológicos.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button 
            className="hero-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Proyectos
          </motion.button>
          <motion.button 
            className="hero-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.button>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="stat-item">
            <div className="stat-value">1</div>
            <div className="stat-label">Año de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">XR</div>
            <div className="stat-label">Especialista</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">Unity</div>
            <div className="stat-label">Expert</div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/jose-juan-perez-gonzalez/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:joseperezglz01@gmail.com"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            href="tel:+34651034652"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhone />
          </motion.a>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator"></div>
    </section>
  );
};

export default Hero; 