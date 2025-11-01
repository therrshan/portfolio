const TECH_DOMAINS = {
    'AI': ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI', 'LangChain', 'Hugging Face', 'BERT', 'GPT', 'Neural Networks', 'Deep Learning'],
    'ML': ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'KNN', 'Logistic Regression', 'Decision Trees', 'Ensemble Methods'],
    'DE': ['Apache Spark', 'Kafka', 'Airflow', 'ETL', 'Data Pipeline', 'Apache Beam', 'Snowflake', 'BigQuery', 'Data Warehouse'],
    'Mlops': ['MLflow', 'Kubeflow', 'DVC', 'Model Deployment', 'CI/CD', 'GitOps', 'Model Monitoring', 'Experiment Tracking', 'Kubernetes'],
    'Dev': ['Flask', 'Django', 'FastAPI', 'Node.js', 'Express', 'Ruby on Rails', 'Spring Boot', 'Java', 'C#', 'Go','React', 'Vue.js', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SASS', 'Bootstrap', 'Tailwind CSS']
};

export const DOMAIN_COLORS = {
    'AI': '#ff6b6b',
    'ML': '#4ecdc4',
    'DS': '#45b7d1',
    'DE': '#96ceb4',
    'Cloud': '#feca57',
    'Backend': '#ff9ff3',
    'Frontend': '#54a0ff',
    'Database': '#5f27cd',
    'DevOps': '#00d2d3'
};

function getProjectDomains(technologies) {
    const domains = new Set();
    
    for (const tech of technologies) {
        for (const [domain, domainTechs] of Object.entries(TECH_DOMAINS)) {
            if (domainTechs.some(dt => 
                tech.toLowerCase().includes(dt.toLowerCase()) || 
                dt.toLowerCase().includes(tech.toLowerCase())
            )) {
                domains.add(domain);
            }
        }
    }
    
    return Array.from(domains);
}

function extractEndDate(project) {
    const duration = project.duration || project.date || '';
    if (!duration) {
        return '1900-01';
    }
    
    let endDate = duration;
    if (duration.includes('--')) {
        endDate = duration.split('--')[1].trim();
    } else {
        endDate = duration.trim();
    }
    
    if (endDate.toLowerCase() === 'present') {
        return '9999-12';
    }
    
    const monthMapping = {
        'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04',
        'may': '05', 'jun': '06', 'jul': '07', 'aug': '08',
        'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
    };
    
    try {
        const parts = endDate.split(' ');
        if (parts.length >= 2) {
            const monthName = parts[0].toLowerCase().substring(0, 3);
            const year = parts[1];
            const monthNum = monthMapping[monthName] || '12';
            return `${year}-${monthNum}`;
        } else {
            return `${endDate}-12`;
        }
    } catch {
        return '1900-01';
    }
}

export function processProjects(projects) {
    return projects.map(project => {
        const processed = { ...project };
        
        if (processed.title && !processed.name) {
            processed.name = processed.title;
        }
        if (processed.duration && !processed.date) {
            processed.date = processed.duration;
        }
        
        processed.domains = getProjectDomains(processed.technologies || []);
        processed.language = processed.technologies?.[0] || 'Unknown';
        processed.link = processed.link || null;
        processed.github_link = processed.github_link || processed.link;
        processed.live_demo = processed.live_demo || null;
        processed.description = processed.description || [];
        processed.description_items = processed.description || [];
        
        return processed;
    }).sort((a, b) => {
        const dateA = extractEndDate(a);
        const dateB = extractEndDate(b);
        return dateB.localeCompare(dateA);
    });
}

export function getAllDomains(projects) {
    const domains = new Set();
    projects.forEach(project => {
        project.domains?.forEach(domain => domains.add(domain));
    });
    return Array.from(domains).sort();
}

