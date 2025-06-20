import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../../styles/sections/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/tu-usuario/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, notificaciones y colaboración en tiempo real.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/tu-usuario/task-app',
      live: 'https://task-app-demo.com',
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con gráficos interactivos y pronósticos detallados por ubicación.',
      image: 'https://via.placeholder.com/400x250/61DAFB/ffffff?text=Weather+App',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com/tu-usuario/weather-app',
      live: 'https://weather-demo.com',
      category: 'Frontend'
    },
    {
      title: 'API REST Service',
      description: 'Servicio REST API robusto con autenticación JWT, documentación automática y testing completo.',
      image: 'https://via.placeholder.com/400x250/339933/ffffff?text=API+Service',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger', 'Jest'],
      github: 'https://github.com/tu-usuario/api-service',
      live: 'https://api-docs-demo.com',
      category: 'Backend'
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web personal responsive con animaciones modernas y diseño profesional.',
      image: 'https://via.placeholder.com/400x250/F7DF1E/ffffff?text=Portfolio',
      technologies: ['React', 'Framer Motion', 'TypeScript', 'CSS3'],
      github: 'https://github.com/tu-usuario/portfolio',
      live: 'https://portfolio-demo.com',
      category: 'Frontend'
    },
    {
      title: 'Chat Application',
      description: 'Aplicación de chat en tiempo real con salas, mensajes privados y notificaciones push.',
      image: 'https://via.placeholder.com/400x250/E34F26/ffffff?text=Chat+App',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/tu-usuario/chat-app',
      live: 'https://chat-demo.com',
      category: 'Real-time'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Proyectos Destacados</h2>
          <p>Una muestra de mi trabajo y habilidades técnicas</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>¿Te gusta mi trabajo?</h3>
          <p>Estoy disponible para nuevos proyectos y colaboraciones</p>
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contáctame
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 