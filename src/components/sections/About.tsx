import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';
import '../../styles/sections/About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <FaCode />, number: '5+', label: 'Años de Experiencia' },
    { icon: <FaUser />, number: '50+', label: 'Proyectos Completados' },
    { icon: <FaGraduationCap />, number: '10+', label: 'Certificaciones' },
    { icon: <FaHeart />, number: '100%', label: 'Satisfacción del Cliente' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Sobre Mí</h2>
          <p>Conoce más sobre mi trayectoria profesional</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>¿Quién soy?</h3>
            <p>
              Soy un desarrollador de software apasionado con más de 5 años de experiencia 
              en el desarrollo de aplicaciones web y móviles. Me especializo en crear 
              soluciones innovadoras que combinan funcionalidad excepcional con una 
              experiencia de usuario intuitiva.
            </p>
            
            <p>
              Mi enfoque se centra en el desarrollo full-stack, utilizando las últimas 
              tecnologías y mejores prácticas de la industria. Me mantengo constantemente 
              actualizado con las nuevas tendencias y herramientas del desarrollo de software.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Desarrollo Rápido</h4>
                  <p>Metodologías ágiles y entrega continua</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Enfoque en Calidad</h4>
                  <p>Código limpio y mantenible</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Soluciones Creativas</h4>
                  <p>Enfoque innovador en cada proyecto</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-education"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Educación y Certificaciones</h3>
          <div className="education-grid">
            <div className="education-item">
              <div className="education-year">2020 - 2024</div>
              <div className="education-content">
                <h4>Ingeniería en Sistemas Computacionales</h4>
                <p>Universidad Tecnológica</p>
                <p>Especialización en Desarrollo de Software</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-year">2023</div>
              <div className="education-content">
                <h4>Certificación AWS Developer</h4>
                <p>Amazon Web Services</p>
                <p>Desarrollo de aplicaciones en la nube</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-year">2022</div>
              <div className="education-content">
                <h4>Certificación React Developer</h4>
                <p>Meta (Facebook)</p>
                <p>Desarrollo frontend con React</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 