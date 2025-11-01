import React, { useState, useEffect } from 'react'
import { processProjects, getAllDomains, DOMAIN_COLORS } from '../utils/projects'
import '../styles/Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [domains, setDomains] = useState([])
    const [selectedDomain, setSelectedDomain] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const processed = processProjects(data)
                const allDomains = getAllDomains(processed)
                
                setProjects(processed)
                setDomains(allDomains)
                setFilteredProjects(processed)
            })
            .catch(err => {
                console.error('Error loading projects:', err)
                setProjects([])
                setDomains([])
                setFilteredProjects([])
            })
    }, [])

    useEffect(() => {
        if (selectedDomain === 'all') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(
                projects.filter(project => 
                    project.domains?.includes(selectedDomain)
                )
            )
        }
    }, [selectedDomain, projects])

    useEffect(() => {
        const cards = document.querySelectorAll('.project-card')
        cards.forEach((card, index) => {
            card.style.opacity = '0'
            card.style.transform = 'translateY(30px)'
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease'
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
            }, index * 150)
        })
    }, [filteredProjects])

    return (
        <div className="container">
            <div className="section">
                <h1>My Projects</h1>
                
                {/* Filter Section */}
                <div className="filter-section">
                    <h3>🔍 Filter by Domain</h3>
                    <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
                        Click on a domain to filter projects by technology area
                    </p>
                    <div className="filter-buttons">
                        <button 
                            className={`filter-btn ${selectedDomain === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedDomain('all')}
                        >
                            All Projects
                        </button>
                        {domains.map(domain => (
                            <button
                                key={domain}
                                className={`filter-btn ${selectedDomain === domain ? 'active' : ''}`}
                                onClick={() => setSelectedDomain(domain)}
                                style={{
                                    borderColor: DOMAIN_COLORS[domain] || '#666'
                                }}
                            >
                                {domain}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Container */}
                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <div className="project-date">{project.duration}</div>
                                </div>
                                
                                {/* Domain Badges */}
                                {project.domains && project.domains.length > 0 && (
                                    <div className="domain-badges">
                                        {project.domains.map((domain, idx) => (
                                            <span
                                                key={idx}
                                                className="domain-badge"
                                                style={{
                                                    backgroundColor: DOMAIN_COLORS[domain] || '#666'
                                                }}
                                            >
                                                {domain}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Technology Tags */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="project-description">
                                    {project.description && project.description.length > 0 && (
                                        <p>{project.description[0]}</p>
                                    )}
                                </div>
                                
                                <div className="project-links">
                                    {project.link && (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.live_demo && (
                                        <a 
                                            href={project.live_demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="project-card no-projects">
                            <h3>📝 No Projects Found</h3>
                            <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
                                {selectedDomain !== 'all' 
                                    ? `No projects found in the ${selectedDomain} domain.`
                                    : 'No projects available.'
                                }
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects

