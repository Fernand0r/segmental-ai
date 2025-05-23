import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="container">
        <div className="hero-content fade-in-up">
          <h1>Intelligent Data Management & AI Indexing</h1>
          <p>
            Transform your organization with powerful AI-driven solutions for
            document indexing, knowledge management, and intelligent search.
            Experience the future of data processing.
          </p>
          <div className="hero-buttons">
            <a href="#problems" className="btn">Get Started</a>
            <a href="#solution" className="btn-secondary">Learn More</a>
          </div>
        </div>

        <div className="hero-features fade-in-up delay-1">
          <div className="hero-feature-card">
            <div className="hero-feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>
              Process thousands of documents in seconds with our optimized AI
              pipeline.
            </p>
          </div>
          <div className="hero-feature-card">
            <div className="hero-feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>
              Bank-grade security with end-to-end encryption and compliance
              certifications.
            </p>
          </div>
          <div className="hero-feature-card">
            <div className="hero-feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Smart Analytics</h3>
            <p>
              Real-time insights and performance analytics for data-driven
              decisions.
            </p>
          </div>
        </div>

        <div className="hero-showcase fade-in-up delay-2">
          <div className="hero-main-image">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop"
              alt="AI Document Processing Dashboard"
              width={800}
              height={400}
            />
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">10M+</span>
                <span className="hero-stat-label">Documents</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">99.2%</span>
                <span className="hero-stat-label">Accuracy</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">10x</span>
                <span className="hero-stat-label">Faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 