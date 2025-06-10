export default function Problems() {
  return (
    <section id="problems" className="problems">
      <div className="container">
        <div className="section-header">
          <h2>The Problem with LLM Document Analysis</h2>
          <p>
            While LLMs are revolutionary, they face significant challenges when
            applied to real-world document processing at enterprise scale.
            Here are the critical limitations affecting businesses today.
          </p>
        </div>
        <div className="problem-cards">
          <div className="problem-card fade-in-up">
            <div className="problem-icon">
              <i className="fas fa-hourglass-half"></i>
            </div>
            <h3>Slow at Scale</h3>
            <p>
              Processing large volumes of documents becomes increasingly slow
              as batch sizes grow, creating bottlenecks in enterprise workflows
              and limiting real-time processing capabilities.
            </p>
          </div>
          <div className="problem-card fade-in-up delay-1">
            <div className="problem-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Expensive to Run</h3>
            <p>
              High computational costs and API fees for large-scale document
              processing make LLM solutions financially unsustainable for
              many organizations, especially with complex documents.
            </p>
          </div>
          <div className="problem-card fade-in-up delay-2">
            <div className="problem-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Inconsistent Results</h3>
            <p>
              Variable output quality and accuracy across different document
              types and formats, making it difficult to rely on for
              mission-critical business processes and decisions.
            </p>
          </div>
        </div>

        <div className="problem-stats">
          <div className="stat-item">
            <span className="stat-number">10x</span>
            <span className="stat-label">Slower Processing</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$1000+</span>
            <span className="stat-label">Monthly API Costs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40%</span>
            <span className="stat-label">Accuracy Variance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">85%</span>
            <span className="stat-label">Need Manual Review</span>
          </div>
        </div>
      </div>
    </section>
  )
} 