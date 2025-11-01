import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.card, .section');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, []);

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>Darshan Rajopadhye</h1>
                    <p>Python | AI/ML & MLOps | Cloud & Scalable ML Systems</p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn">View My Work</Link>
                        <Link to="/about" className="btn btn-secondary">About Me</Link>
                        <a 
                            href="/static/resume.pdf" 
                            download="Darshan-Rajopadhye-Resume.pdf" 
                            className="btn btn-resume"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <div className="container">
                    <h2>What I Do</h2>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon">🧠</div>
                            <h3>AI & ML</h3>
                            <p>Model Development, Scikit-learn, PyTorch, NLP, Explainability (SHAP, LIME), Responsible AI</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🐍</div>
                            <h3>Python Engineering</h3>
                            <p>Clean Code, API Design, FastAPI, Flask, Data Pipelines, Automation, Testing & Packaging</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🚀</div>
                            <h3>MLOps & DevOps</h3>
                            <p>Docker, DVC, CI/CD, Model Deployment, AWS, Kubernetes, Monitoring & Versioning</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🗄️</div>
                            <h3>Databases</h3>
                            <p>PostgreSQL, MongoDB, Redis, Pinecone, Query Optimization, Data Modeling</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

