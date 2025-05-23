export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <i className="fas fa-database"></i>Indexer
            </div>
            <p>
              Transforming data management with AI-powered indexing and
              intelligent retrieval solutions.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Document Management</a></li>
              <li><a href="#">Knowledge Graphs</a></li>
              <li><a href="#">AI Agents</a></li>
              <li><a href="#">Enterprise Search</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Indexer AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 