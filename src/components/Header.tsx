import LogoWithTexts from './LogoWithTexts'

export default function Header() {
	return (
		<header>
			<div className="container">
				<nav className="nav">
					<LogoWithTexts />
					<div className="nav-links">
						<a href="#problems">Problems</a>
						<a href="#solution">Solution</a>
						<a href="#contact">Contact</a>
					</div>
				</nav>
			</div>
		</header>
	)
}
