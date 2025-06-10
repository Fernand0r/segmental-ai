import Image from 'next/image'

export default function Hero() {
	return (
		<section className="hero">
			<div className="floating-element"></div>
			<div className="floating-element"></div>
			<div className="floating-element"></div>

			<div className="container">
				<div className="hero-content fade-in-up">
					<h1>Universal Data <br />Indexing Engine</h1>
					<p>
						Transform your data with intelligent AI-powered processing.
						Unlock insights from any document format with enterprise-grade accuracy and speed.
					</p>
				</div>

				<div className="hero-features fade-in-up delay-1">
					<div className="hero-feature-card">
						<div className="hero-feature-icon">
							<i className="fas fa-bolt"></i>
						</div>
						<h3>Lightning Fast</h3>
						<p>Process thousands of documents in seconds with our optimized AI pipeline.</p>
					</div>
					<div className="hero-feature-card">
						<div className="hero-feature-icon">
							<i className="fas fa-shield-alt"></i>
						</div>
						<h3>Enterprise Security</h3>
						<p>Bank-grade security with end-to-end encryption and compliance certifications.</p>
					</div>
					<div className="hero-feature-card">
						<div className="hero-feature-icon">
							<i className="fas fa-chart-line"></i>
						</div>
						<h3>Smart Analytics</h3>
						<p>Real-time insights and performance analytics for data-driven decisions.</p>
					</div>
				</div>

				<div className="hero-showcase fade-in-up delay-2">
					<div className="hero-main-image">
						<Image src="/images/iMac.jpg" alt="AI Document Processing Dashboard" width={900} height={800} />
						<div className="hero-stats">
							<div className="hero-stat">
								<span className="hero-stat-number">40M+</span>
								<span className="hero-stat-label">Documents</span>
							</div>
							<div className="hero-stat">
								<span className="hero-stat-number">95%+</span>
								<span className="hero-stat-label">Accuracy</span>
							</div>
							<div className="hero-stat">
								<span className="hero-stat-number">95%+</span>
								<span className="hero-stat-label">Coverage</span>
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
