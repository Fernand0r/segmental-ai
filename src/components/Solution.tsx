import Image from 'next/image'

export default function Solution() {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="section-header">
          <h2>Our Intelligent Solution</h2>
          <p>
            A comprehensive, AI-powered data indexing and management platform
            with multi-layered architecture that transforms how you process and
            manage documents.
          </p>
        </div>

        <div className="solution-cards">
          <div className="solution-card fade-in-up">
            <div className="solution-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Specialized AI Agents</h3>
            <p>
              Purpose-built agents including Statement Review, Contract
              Extraction, LPA Review, and PCAP Review to handle specific
              document processing tasks with precision.
            </p>
          </div>
          <div className="solution-card fade-in-up delay-1">
            <div className="solution-icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <h3>Data Exchange Layer</h3>
            <p>
              Comprehensive document ingestion, system integration, regression
              evaluation, and MCP server components for seamless data processing
              workflows.
            </p>
          </div>
          <div className="solution-card fade-in-up delay-2">
            <div className="solution-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>Knowledge Foundation</h3>
            <p>
              Advanced knowledge graph, vector database, and ontology builder to
              create contextualized information structures and relationships.
            </p>
          </div>
          <div className="solution-card fade-in-up delay-3">
            <div className="solution-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI Foundation</h3>
            <p>
              Sophisticated model management, fine-tuning capabilities, and
              benchmarking tools for optimal AI performance and accuracy.
            </p>
          </div>
          <div className="solution-card fade-in-up delay-4">
            <div className="solution-icon">
              <i className="fab fa-microsoft"></i>
            </div>
            <h3>Azure Integration</h3>
            <p>
              Leveraging Azure Storage, Azure OpenAI, Azure Kubernetes, and
              Azure Document for enterprise-grade scalability and security.
            </p>
          </div>
          <div className="solution-card fade-in-up delay-5">
            <div className="solution-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Security & Compliance</h3>
            <p>
              Enterprise-grade security with SOC 2, GDPR compliance, end-to-end
              encryption, and comprehensive audit trails for sensitive data.
            </p>
          </div>
        </div>

        <div className="solution-showcase fade-in-up">
          <div className="solution-main-content">
            <h3>End-to-End AI Data Management</h3>
            <p>
              Our platform integrates specialized AI agents, data exchange
              capabilities, knowledge foundation, and AI models to create a
              unified intelligent system powered by Azure cloud services.
            </p>

            <div className="solution-features">
              <div className="solution-feature">
                <i className="fas fa-bolt"></i>
                <div className="solution-feature-text">
                  <h4>Real-time Processing</h4>
                  <p>
                    Process documents instantly with sub-second response times
                  </p>
                </div>
              </div>
              <div className="solution-feature">
                <i className="fas fa-chart-line"></i>
                <div className="solution-feature-text">
                  <h4>Analytics Dashboard</h4>
                  <p>Comprehensive insights and performance metrics</p>
                </div>
              </div>
              <div className="solution-feature">
                <i className="fas fa-code"></i>
                <div className="solution-feature-text">
                  <h4>RESTful APIs</h4>
                  <p>Easy integration with existing systems and workflows</p>
                </div>
              </div>
              <div className="solution-feature">
                <i className="fas fa-users"></i>
                <div className="solution-feature-text">
                  <h4>Multi-tenant Support</h4>
                  <p>Secure isolation for multiple organizations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="solution-image-container">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1740&auto=format&fit=crop"
              alt="AI Document Analysis Dashboard"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="solution-metrics">
          <div className="solution-metric">
            <span className="solution-metric-number">99.5%</span>
            <span className="solution-metric-label">Uptime</span>
          </div>
          <div className="solution-metric">
            <span className="solution-metric-number">10M+</span>
            <span className="solution-metric-label">Documents Processed</span>
          </div>
          <div className="solution-metric">
            <span className="solution-metric-number">500+</span>
            <span className="solution-metric-label">Enterprise Clients</span>
          </div>
          <div className="solution-metric">
            <span className="solution-metric-number">24/7</span>
            <span className="solution-metric-label">Support</span>
          </div>
        </div>
      </div>
    </section>
  )
} 