'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>
            Ready to transform your data management? Contact us to discuss how
            our AI indexing solution can work for your organization
          </p>
        </div>

        <div className="contact-cards">
          <div className="contact-card fade-in-up">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p><a href="tel:+14155550123">(415) 555-0123</a></p>
            <p>Available 24/7 for support</p>
          </div>
          <div className="contact-card fade-in-up delay-1">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p><a href="mailto:info@indexer.ai">info@indexer.ai</a></p>
            <p>Response within 24 hours</p>
          </div>
          <div className="contact-card fade-in-up delay-2">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visit Us</h3>
            <p>1234 Innovation Drive<br />San Francisco, CA 94103</p>
          </div>
          <div className="contact-card fade-in-up delay-3">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Business Hours</h3>
            <p>Mon - Fri: 9AM - 6PM<br />Weekends: Closed</p>
          </div>
        </div>

        <div className="contact-main">
          <div className="contact-info-container fade-in-up">
            <h3>Why Choose Our Platform?</h3>
            <div className="contact-detail">
              <i className="fas fa-rocket"></i>
              <div className="contact-detail-text">
                <h4>Rapid Implementation</h4>
                <p>
                  Get up and running in days, not months, with our streamlined
                  onboarding process.
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fas fa-users"></i>
              <div className="contact-detail-text">
                <h4>Expert Support</h4>
                <p>
                  Dedicated team of AI specialists and engineers available
                  around the clock.
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fas fa-award"></i>
              <div className="contact-detail-text">
                <h4>Proven Results</h4>
                <p>
                  Join 500+ enterprise clients who&apos;ve transformed their data
                  workflows.
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fas fa-lock"></i>
              <div className="contact-detail-text">
                <h4>Security First</h4>
                <p>
                  SOC 2, GDPR compliant with enterprise-grade security measures.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-up delay-1">
            <h3>Start Your Journey</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell us about your needs</label>
                <textarea id="message" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 