import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const content = document.querySelector('.main-content');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                content.style.transition = 'all 0.5s ease';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 100);
        }
    }, [location]);

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="logo">Portfolio</div>
                    <ul className="nav-links">
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === '/' ? 'active' : ''}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={location.pathname === '/about' ? 'active' : ''}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/projects" 
                                className={location.pathname === '/projects' ? 'active' : ''}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/ml-scratch" 
                                className={location.pathname === '/ml-scratch' ? 'active' : ''}
                            >
                                ML from Scratch
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="main-content">
                {children}
            </main>
        </>
    )
}

export default Layout

