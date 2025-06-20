import Image from 'next/image'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function Solution() {
	return (
		<section id="solution" className="solution">
			<div className="container">
				<div className="section-header">
					<h2>Intelligent LLMs for Data Transformation</h2>
					<p>
						{brand === 'segmental' ? 'Segmental' : 'Codifii'}&apos;s De-LLM solution optimizes how you leverage large language models for unstructured data processing, delivering superior performance
						at reduced costs.
					</p>
				</div>

				<div className="solution-cards">
					<div className="solution-card fade-in-up">
						<div className="solution-icon">
							<i className="fas fa-tachometer-alt"></i>
						</div>
						<h3>Faster at scale</h3>
						<p>
							Process thousands of documents simultaneously with our distributed AI architecture. Achieve 10x faster processing speeds while maintaining
							accuracy, enabling real-time document analysis and instant insights.
						</p>
					</div>
					<div className="solution-card fade-in-up delay-1">
						<div className="solution-icon">
							<i className="fas fa-dollar-sign"></i>
						</div>
						<h3>Cheaper to run</h3>
						<p>
							Reduce operational costs by up to 80% with our optimized AI models and intelligent resource allocation. Pay only for what you use with our
							scalable infrastructure and automated cost optimization.
						</p>
					</div>
					<div className="solution-card fade-in-up delay-2">
						<div className="solution-icon">
							<i className="fas fa-chart-line"></i>
						</div>
						<h3>Predictable Results</h3>
						<p>
							Ensure consistent, reliable outcomes with our tested AI models and comprehensive quality assurance. Achieve 99.5% accuracy rates with built-in
							validation and continuous performance monitoring.
						</p>
					</div>
				</div>

				<div className="solution-cta">
					<div className="solution-card fade-in-up delay-2">
						<div className="solution-icon">
							<i className="fas fa-robot"></i>
						</div>
						<h3>An Automated Data Review Platform</h3>
						<Image src="/images/products.jpg" alt="Solution CTA" width={1000} height={600} />
					</div>
				</div>

				<div className="solution-metrics">
					<div className="solution-metric">
						<span className="solution-metric-number">2min</span>
						<span className="solution-metric-label" style={{ fontSize: '0.7rem' }}>
							Time to process one complex document
						</span>
					</div>
					<div className="solution-metric">
						<span className="solution-metric-number">80%+</span>
						<span className="solution-metric-label">Time Saved</span>
					</div>
					<div className="solution-metric">
						<span className="solution-metric-number">95%+</span>
						<span className="solution-metric-label">Accuracy Rate</span>
					</div>
					<div className="solution-metric">
						<span className="solution-metric-number">24/7</span>
						<span className="solution-metric-label">Availability</span>
					</div>
				</div>
			</div>
		</section>
	)
}
