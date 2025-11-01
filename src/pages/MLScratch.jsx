import React, { useEffect } from 'react'
import '../styles/MLScratch.css'

const MLScratch = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.ml-card')
        cards.forEach((card, index) => {
            card.style.opacity = '0'
            card.style.transform = 'translateY(20px)'
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease'
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
            }, index * 50)
        })
    }, [])

    const handleCardClick = (e) => {
        const ripple = document.createElement('div')
        const rect = e.currentTarget.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        
        ripple.style.width = ripple.style.height = size + 'px'
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        ripple.style.position = 'absolute'
        ripple.style.borderRadius = '50%'
        ripple.style.background = 'rgba(0, 245, 255, 0.3)'
        ripple.style.transform = 'scale(0)'
        ripple.style.animation = 'ripple 0.6s linear'
        ripple.style.pointerEvents = 'none'
        
        e.currentTarget.style.position = 'relative'
        e.currentTarget.style.overflow = 'hidden'
        e.currentTarget.appendChild(ripple)
        
        setTimeout(() => {
            ripple.remove()
        }, 600)
    }

    return (
        <div className="container">
            <div className="section">
                <h1>ML from Scratch</h1>
                
                <div className="ml-description">
                    <p>Explore my collection of machine learning and AI implementations built from scratch using pure Python and NumPy.
                    These projects demonstrate deep understanding of core algorithms without relying on high-level libraries (Except for visualization and evaluation).</p>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <h3 style={{ color: '#00f5ff', marginBottom: '1rem' }}>Implementation Statistics</h3>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">19+</span>
                            <div className="stat-label">Algorithms Implemented</div>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <div className="stat-label">Papers Implemented</div>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <div className="stat-label">From Scratch</div>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Python</span>
                            <div className="stat-label">& NumPy Only</div>
                        </div>
                    </div>
                </div>

                {/* Machine Learning Models */}
                <div className="ml-category">
                    <h2 className="category-title">Machine Learning Models</h2>
                    <div className="ml-grid">
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/linear_regression.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Linear Regression</div>
                            <div className="ml-card-description">Linear Regression using gradient descent with methods for training, prediction, scoring (R²), and cost visualization.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/logistic_regression.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Logistic Regression</div>
                            <div className="ml-card-description">Binary logistic regression implemented from scratch using gradient descent with prediction, scoring, and 2D decision boundary plotting.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/multimodal_logistic_regression.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Multimodal Logistic Regression</div>
                            <div className="ml-card-description">Advanced logistic regression handling multiple data modalities with early, late, and intermediate fusion using gradient descent.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/knn_classifier.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">K-Nearest Neighbors (KNN)</div>
                            <div className="ml-card-description">K-Nearest Neighbors classifier implemented from scratch with multiple distance metrics, cross-validation for k selection, and decision boundary visualization.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/kmeans.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">K-Means Clustering</div>
                            <div className="ml-card-description">K‑Means clustering from scratch with random or k‑means++ initialization plus inertia, silhouette, elbow diagnostics, and rich visualization utilities.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/dbscan.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">DBSCAN</div>
                            <div className="ml-card-description">Density-Based Spatial Clustering of Applications with Noise implemented from scratch with batch processing, visualization, and parameter optimization.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/neural_network.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Neural Network</div>
                            <div className="ml-card-description">Multi-layer neural network implemented from scratch with customizable architectures, activation functions, regularization, and comprehensive visualization capabilities.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/naive_bayes.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Naive Bayes</div>
                            <div className="ml-card-description">Gaussian and Multinomial Naive Bayes classifiers implemented from scratch with visualization capabilities for feature distributions and decision boundaries.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/decision_tree.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Decision Tree</div>
                            <div className="ml-card-description">Decision Tree classifier implemented from scratch with support for Gini/Entropy splitting, feature importances, visualization, and boundary plotting.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/svm.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Support Vector Machine</div>
                            <div className="ml-card-description">Support Vector Machine implemented from scratch using Sequential Minimal Optimization with multiple kernel functions and visualization capabilities.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/random_forest.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Random Forest</div>
                            <div className="ml-card-description">Random Forest classifier implemented from scratch with bootstrap sampling, feature importance analysis, and visualization capabilities.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/gradient_boosting_regressor.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Gradient Boosting Regressor</div>
                            <div className="ml-card-description">Gradient Boosting Regressor implemented from scratch using decision trees as weak learners and mean initialization.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/xg_boost.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">XGBoost</div>
                            <div className="ml-card-description">Extreme gradient boosting implementation from scratch with gradient boosting, regularization, subsampling, early stopping, and feature importance analysis.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/adaboost.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">AdaBoost</div>
                            <div className="ml-card-description">Adaptive boosting algorithm that combines weak learners with adaptive sample weighting.</div>
                        </a>
                    </div>
                </div>

                {/* Paper Implementations */}
                <div className="ml-category">
                    <h2 className="category-title">Paper Implementations</h2>
                    <div className="ml-grid">
                        <a 
                            href="https://github.com/therrshan/ssl-confidence" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">FixMatch</div>
                            <div className="ml-card-description">Semi-supervised learning algorithm combining consistency regularization and pseudo-labeling with weak and strong augmentations.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/paper-implementations/tree/main/alexnet_cifar10" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">AlexNet</div>
                            <div className="ml-card-description">Deep convolutional neural network that revolutionized computer vision with ReLU activations and dropout regularization.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/paper-implementations/tree/main/transformer_implementation" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Attention Is All You Need</div>
                            <div className="ml-card-description">Complete transformer architecture with multi-head self-attention, positional encoding, and encoder-decoder structure.</div>
                        </a> 

                        <a 
                            href="https://github.com/therrshan/mini-diffusion" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">DDPM - Diffusion Models</div>
                            <div className="ml-card-description">Implementation of DDPM with forward diffusion process, reverse denoising network, and sampling procedures for high-quality image generation.</div>
                        </a>
                        
                        <a 
                            href="https://github.com/therrshan/mini-vae" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Auto-Encoding Variational Bayes</div>
                            <div className="ml-card-description">Variational autoencoder with encoder-decoder architecture, reparameterization trick, and KL divergence regularization for latent space learning.</div>
                        </a>
                    </div>
                </div>

                {/* Core Components & Utils */}
                <div className="ml-category">
                    <h2 className="category-title">Core Components & Optimizers</h2>
                    <div className="ml-grid">
                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/pca.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Principal Component Analysis</div>
                            <div className="ml-card-description">PCA implemented from scratch with variance analysis, visualization, and compression/decompression demonstrations.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/scripts/tsne.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">t-Distributed Stochastic Neighbor Embedding</div>
                            <div className="ml-card-description">t-SNE implemented from scratch with Barnes-Hut approximation, perplexity optimization, and visualization tools.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/optimizers/sgd.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Stochastic Gradient Descent</div>
                            <div className="ml-card-description">SGD optimizer implemented from scratch with momentum, learning rate decay, and gradient clipping options.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/optimizers/adam.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Adaptive Moment Estimation</div>
                            <div className="ml-card-description">Adam optimizer from scratch with bias correction, exponential moving averages, and convergence monitoring.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/optimizers/rmsprop.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Root Mean Square Propagation</div>
                            <div className="ml-card-description">RMSProp implementation from scratch featuring moving average of squared gradients and step-size control.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/optimizers/adamw.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">AdamW Optimizer</div>
                            <div className="ml-card-description">AdamW optimizer implemented from scratch with decoupled weight decay and improved generalization capabilities.</div>
                        </a>

                        <a 
                            href="https://github.com/therrshan/ml-scratch/blob/main/optimizers/adagrad.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-card"
                            onClick={handleCardClick}
                        >
                            <div className="ml-card-title">Adaptive Gradient Algorithm</div>
                            <div className="ml-card-description">Adagrad implementation from scratch with per-parameter learning rate adaptation and sparse feature support.</div>
                        </a>
                    </div>
                </div>

                {/* Coming Soon Banner */}
                <div className="coming-soon-banner">
                    More implementations coming soon! Including Computer Vision models, Reinforcement Learning algorithms, and Advanced Optimizers.
                </div>
            </div>
        </div>
    )
}

export default MLScratch

