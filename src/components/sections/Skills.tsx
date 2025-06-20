import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaGitAlt, FaDocker, FaAws, FaFigma 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';
import '../../styles/sections/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#ff003c' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#ff1744' },
        { name: 'JavaScript', icon: <FaJs />, level: 95, color: '#ff5252' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#ff8a80' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#ffcdd2' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 88, color: '#d32f2f' },
        { name: 'Python', icon: <FaPython />, level: 80, color: '#c62828' },
        { name: 'Database', icon: <FaDatabase />, level: 75, color: '#b71c1c' }
      ]
    },
    {
      name: 'Base de Datos',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#ff1744' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: '#ff5252' },
        { name: 'Firebase', icon: <SiFirebase />, level: 75, color: '#ff8a80' }
      ]
    },
    {
      name: 'Herramientas',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f44336' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: '#e53935' },
        { name: 'AWS', icon: <FaAws />, level: 75, color: '#d32f2f' },
        { name: 'Figma', icon: <FaFigma />, level: 65, color: '#c62828' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Habilidades Técnicas</h2>
          <p>Dominio de las tecnologías más demandadas en el desarrollo de software</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Metodologías y Prácticas</h3>
          <div className="methodologies">
            <div className="methodology-item">
              <div className="methodology-icon">🔄</div>
              <div>
                <h4>Desarrollo Ágil</h4>
                <p>Scrum, Kanban, Sprint Planning</p>
              </div>
            </div>
            
            <div className="methodology-item">
              <div className="methodology-icon">🧪</div>
              <div>
                <h4>Testing</h4>
                <p>Jest, Cypress, Unit Testing</p>
              </div>
            </div>
            
            <div className="methodology-item">
              <div className="methodology-icon">📦</div>
              <div>
                <h4>CI/CD</h4>
                <p>GitHub Actions, Jenkins, Docker</p>
              </div>
            </div>
            
            <div className="methodology-item">
              <div className="methodology-icon">🔒</div>
              <div>
                <h4>Seguridad</h4>
                <p>OWASP, JWT, HTTPS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 