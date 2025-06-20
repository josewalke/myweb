import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/sections/Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      location: 'Madrid, España',
      description: 'Lideré el desarrollo de aplicaciones web empresariales utilizando React, Node.js y AWS. Implementé arquitecturas escalables y optimicé el rendimiento de las aplicaciones.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      achievements: [
        'Reduje el tiempo de carga en un 40%',
        'Implementé CI/CD con GitHub Actions',
        'Mentoré a 3 desarrolladores junior'
      ]
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Barcelona, España',
      description: 'Desarrollé aplicaciones web completas y APIs RESTful. Trabajé en equipo usando metodologías ágiles y participé en code reviews.',
      technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Django', 'Vue.js'],
      achievements: [
        'Desarrollé 5 aplicaciones web completas',
        'Implementé autenticación JWT',
        'Optimicé consultas de base de datos'
      ]
    },
    {
      company: 'StartUpTech',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Valencia, España',
      description: 'Me especialicé en el desarrollo frontend con React y TypeScript. Creé interfaces de usuario intuitivas y responsivas.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Git', 'Figma'],
      achievements: [
        'Creé 10 componentes reutilizables',
        'Mejoré la accesibilidad web',
        'Implementé PWA features'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Experiencia Laboral</h2>
          <p>Mi trayectoria profesional en el desarrollo de software</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                </div>
                
                <div className="timeline-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-technologies">
                  <h5>Tecnologías:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="timeline-achievements">
                  <h5>Logros Principales:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
export {} 