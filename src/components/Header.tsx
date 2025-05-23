import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Image
              width={100}
              height={40}
              src="/images/logo.svg"
              alt="GenII"
            />
          </div>
          <div className="nav-links">
            <a href="#problems">Problems</a>
            <a href="#solution">Solution</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn">Get Started</a>
        </nav>
      </div>
    </header>
  )
} 