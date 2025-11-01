import React, { useState, useEffect } from 'react'
import '../styles/Resume.css'

const Resume = () => {
    const [resumeType, setResumeType] = useState('general')
    const [previewVisible, setPreviewVisible] = useState(false)

    const resumeTypes = {
        'general': {
            file: 'resume_general.pdf',
            label: 'General Full Stack',
            downloadName: 'Darshan-Rajopadhye-Resume-General.pdf'
        },
        'ml': {
            file: 'resume_ml.pdf',
            label: 'Machine Learning',
            downloadName: 'Darshan-Rajopadhye-Resume-ML.pdf'
        },
        'ai': {
            file: 'resume_ai.pdf',
            label: 'AI Specialist',
            downloadName: 'Darshan-Rajopadhye-Resume-AI.pdf'
        },
        'backend': {
            file: 'resume_backend.pdf',
            label: 'Backend Developer',
            downloadName: 'Darshan-Rajopadhye-Resume-Backend.pdf'
        }
    }

    const currentResume = resumeTypes[resumeType] || resumeTypes.general

    const togglePreview = () => {
        setPreviewVisible(!previewVisible)
    }

    const updateResume = (type) => {
        setResumeType(type)
    }

    return (
        <div className="container">
            <div className="section">
                <h1>Resume</h1>
                
                <div className="download-section">
                    <p style={{ color: '#cccccc', marginBottom: '1.5rem' }}>
                        Select your area of interest and download my specialized resume.
                    </p>
                    
                    {/* Domain Selector */}
                    <div className="domain-selector">
                        <label 
                            htmlFor="resumeType" 
                            style={{ color: '#00f5ff', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}
                        >
                            Choose Resume Type:
                        </label>
                        <select 
                            id="resumeType" 
                            className="domain-select" 
                            value={resumeType}
                            onChange={(e) => updateResume(e.target.value)}
                        >
                            <option value="general">General Full Stack</option>
                            <option value="ml">Machine Learning Engineer</option>
                            <option value="ai">AI/ML Specialist</option>
                            <option value="backend">Backend Developer</option>
                        </select>
                    </div>
                    
                    <div className="action-buttons">
                        <a 
                            href={`/static/${currentResume.file}`} 
                            download={currentResume.downloadName}
                            className="download-btn"
                        >
                            📄 Download {currentResume.label} Resume
                        </a>
                        
                        <button 
                            className="preview-btn" 
                            onClick={togglePreview}
                        >
                            {previewVisible ? '🙈 Hide Preview' : `👁️ Preview ${currentResume.label} Resume`}
                        </button>
                    </div>
                </div>

                {previewVisible && (
                    <div className="pdf-container" id="pdfContainer">
                        <h2 style={{ color: '#00f5ff', marginBottom: '1.5rem', textAlign: 'center' }}>
                            {currentResume.label} Resume Preview
                        </h2>
                        
                        {/* PDF Viewer */}
                        <div id="pdfViewer">
                            <iframe 
                                src={`/static/${currentResume.file}?t=${new Date().getTime()}`}
                                className="pdf-viewer" 
                                id="pdfFrame"
                                title="Resume Preview"
                            />
                        </div>
                        
                        {/* Fallback content when PDF is not available */}
                        <div className="pdf-fallback" id="pdfFallback" style={{ display: 'none' }}>
                            <h3>📄 PDF Not Available</h3>
                            <p>The {currentResume.label.toLowerCase()} resume PDF will appear here once you upload it.</p>
                            <p style={{ marginTop: '1rem' }}>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById('pdfFrame').src = `/static/${currentResume.file}?t=${new Date().getTime()}`
                                    }}
                                    style={{ color: '#00f5ff', textDecoration: 'underline' }}
                                >
                                    🔄 Try to load PDF again
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Resume

