'use client'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function Contact() {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-header">
					<h2>Get in Touch</h2>
					<p>Ready to transform your data management? Contact us to discuss how our AI indexing solution can work for your organization</p>
				</div>

				<div className="contact-cards">
					<div className="contact-card fade-in-up">
						<div className="contact-icon">
							<i className="fas fa-envelope"></i>
						</div>

						<h3>Email Us</h3>

						<div className="contact-email">
							<a href={`mailto:${brand === 'segmental' ? 'sales@segmental.ai' : 'info@codifii.ai'}`}>
								{brand === 'segmental' ? 'sales@segmental.ai' : 'info@codifii.ai'}
							</a>
						</div>

						<p className="response-time">Response within 24 hours</p>

						<div className="contact-services">
							<p>• Product demos • Technical support • Custom solutions • Pricing inquiries</p>
						</div>

						<div className="availability-info">
							<p>
								<strong>Mon-Fri, 9 AM - 6 PM PST</strong>
							</p>
						</div>

						<div className="contact-button">
							<a href="mailto:sales@segmental.ai" className="email-button">
								<i className="fas fa-paper-plane"></i>
								<span>Send Message</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
