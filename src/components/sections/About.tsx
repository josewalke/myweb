import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';
import '../../styles/sections/About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <FaCode />, number: '1+', label: 'Año de Experiencia' },
    { icon: <FaUser />, number: 'XR', label: 'Especialista' },
    { icon: <FaGraduationCap />, number: 'Unity', label: 'Expert' },
    { icon: <FaHeart />, number: '100%', label: 'Innovación' }
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
              Soy José Juan Pérez González, desarrollador web full-stack y especialista en Unity con una sólida 
              experiencia en Realidad Extendida (XR) y aplicaciones móviles. Capaz de manejar tanto el frontend como el backend del 
              desarrollo web, creando experiencias de usuario dinámicas e integradas.
            </p>
            
            <p>
              Mi pasión por Unity y XR me distingue en el campo del desarrollo de juegos, aplicaciones móviles y aplicaciones de 
              realidad virtual y aumentada. Destaco por mi capacidad para llevar los proyectos al siguiente 
              nivel, desafiando constantemente los límites tecnológicos y explorando nuevas formas de innovación.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🥽</div>
                <div>
                  <h4>Desarrollo XR</h4>
                  <p>Realidad Virtual y Aumentada con Unity</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">📱</div>
                <div>
                  <h4>Aplicaciones Móviles</h4>
                  <p>Desarrollo nativo y multiplataforma</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Innovación</h4>
                  <p>Experiencias inmersivas únicas</p>
                </div>
              </div>
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
              <div className="education-year">2021 - 2022</div>
              <div className="education-content">
                <h4>Máster en Diseño y Desarrollo de Videojuegos | Unity</h4>
                <p>EVAD, Málaga</p>
                <p>Especialización en desarrollo de videojuegos con Unity</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-year">2019 - 2020</div>
              <div className="education-content">
                <h4>Desarrollo Web Full-Stack | Front: Vue.js, Back: Node.js</h4>
                <p>Reboot Academy, Las Palmas de Gran Canaria</p>
                <p>Desarrollo web completo con tecnologías modernas</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-year">2017 - 2019</div>
              <div className="education-content">
                <h4>Grado Superior en Informática | Administración de Sistemas Informáticos en Red</h4>
                <p>ICSE, Las Palmas de Gran Canaria</p>
                <p>Formación técnica en sistemas informáticos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 