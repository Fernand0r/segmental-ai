export default function Problems() {
  return (
    <section id="problems" className="problems">
      <div className="container">
        <div className="section-header">
          <h2>Common Data Challenges</h2>
          <p>
            Organizations face significant challenges processing and analyzing
            complex documents and data structures. Our research shows these
            critical pain points affecting businesses worldwide.
          </p>
        </div>
        <div className="problem-cards">
          <div className="problem-card fade-in-up">
            <div className="problem-icon">
              <i className="fas fa-file-contract"></i>
            </div>
            <h3>Complex Document Processing</h3>
            <p>
              Difficulty extracting valuable information from statements,
              contracts, and legal documents requiring specialized knowledge and
              domain expertise.
            </p>
          </div>
          <div className="problem-card fade-in-up delay-1">
            <div className="problem-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Knowledge Management</h3>
            <p>
              Challenges in creating structured knowledge from unstructured data
              and maintaining relationships between disparate information
              sources.
            </p>
          </div>
          <div className="problem-card fade-in-up delay-2">
            <div className="problem-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Model Management</h3>
            <p>
              Difficulties in deploying, fine-tuning, and benchmarking AI models
              for specific document processing tasks at enterprise scale.
            </p>
          </div>
          <div className="problem-card fade-in-up delay-3">
            <div className="problem-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud Infrastructure</h3>
            <p>
              Complexity in setting up and managing scalable cloud services for
              AI-powered document processing pipelines and data workflows.
            </p>
          </div>
        </div>

        <div className="problem-stats">
          <div className="stat-item">
            <span className="stat-number">85%</span>
            <span className="stat-label">Time Wasted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">60%</span>
            <span className="stat-label">Accuracy Loss</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3x</span>
            <span className="stat-label">Higher Costs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">70%</span>
            <span className="stat-label">Manual Work</span>
          </div>
        </div>
      </div>
    </section>
  )
} 