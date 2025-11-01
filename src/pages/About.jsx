import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.css'

const About = () => {
    return (
        <div className="container">
            <div className="section">
                <h1>About Me</h1>
                
                <div className="about-content">
                    <div className="about-text">
                        <p>Hello! I'm an enthusiastic Python engineer with a strong interest in AI, machine learning, and data science. I enjoy building meaningful software—from intelligent systems to robust data pipelines—that solves real-world problems and adds lasting value.</p> 
                        
                        <p>My experience spans the full development lifecycle, with a focus on clean architecture, scalability, and explainability. Whether it's deploying models, designing backend systems, or exploring new ML frameworks, I love diving deep into technical challenges and delivering well-engineered solutions.</p> 
                        
                        <p>Outside of core development, I actively follow advancements in AI research, contribute to open source, and enjoy breaking down complex topics through technical writing and experimentation. I'm a firm believer in continuous learning, collaboration, and building tools that empower others.</p>

                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/projects" className="btn" style={{ marginRight: '1rem' }}>
                                View My Projects
                            </Link>
                            <a 
                                href="/static/resume.pdf" 
                                download="Darshan-Rajopadhye-Resume.pdf" 
                                className="btn btn-resume"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                    
                    <div className="about-image">
                        <div className="profile-pic">
                            <img src="/static/profile.jpg" alt="Darshan Rajopadhye" className="profile-image" />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>AI & ML</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">NumPy</span>
                                <span className="skill-tag">Scikit-learn</span>
                                <span className="skill-tag">TensorFlow</span>
                                <span className="skill-tag">PyTorch</span>
                                <span className="skill-tag">Langchain</span>
                                <span className="skill-tag">Open-CV</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Backend Development</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Flask</span>
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">FastAPI</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">MongoDB</span>
                            </div>
                        </div>
                    
                        <div className="skill-category">
                            <h3>MLOps & DevOps</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">Kubernetes</span>
                                <span className="skill-tag">Kubeflow</span>
                                <span className="skill-tag">MLflow</span>
                                <span className="skill-tag">DVC</span>
                                <span className="skill-tag">Airflow</span>
                                <span className="skill-tag">Katib</span>
                                <span className="skill-tag">Kserve</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-section">
                    <h2>Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2023 - 2025</div>
                                <div className="timeline-title">Master of Science</div>
                                <div className="timeline-company">Northeastern University</div>
                                <div className="timeline-description">
                                    Took courses like Machine Learning, Deep Learning, Computer Vision, Data Mining, Information Retrieval. Worked on implementing end-to-end ML systems. Served as a Teaching Assistant for undergraduate Machine Learning course.
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2021 - 2022</div>
                                <div className="timeline-title">Data Engineer</div>
                                <div className="timeline-company">Larsen and Toubro Infotech</div>
                                <div className="timeline-description">
                                    Worked on the Data Migration team for a banking client. Developed ingestion pipelines using Python and Apache Spark. Implemented data quality checks and optimized ETL processes. Maintained adhoc data transformation script jobs.
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2017 - 2021</div>
                                <div className="timeline-title">Bachelor of Engineering</div>
                                <div className="timeline-company">Savitribai Phule Pune University</div>
                                <div className="timeline-description">
                                    Completed my undergraduate degree in Computer Engineering. Focused on software development, algorithms, and data structures. Participated in various coding competitions and hackathons.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-section">
                    <h2>Let's Connect</h2>
                    <p style={{ color: '#cccccc', marginBottom: '2rem' }}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:rajopadhye.d@northeastern.edu" className="contact-link">
                            Email
                        </a>
                        <a href="https://linkedin.com/in/darshanrr" target="_blank" rel="noopener noreferrer" className="contact-link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/therrshan" target="_blank" rel="noopener noreferrer" className="contact-link">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

