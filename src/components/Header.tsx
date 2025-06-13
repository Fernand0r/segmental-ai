import Image from 'next/image'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function Header() {
	return (
		<header>
			<div className="container">
				<nav className="nav">
					<Image width={150} height={150} src={`/images/logo-${brand}.svg`} alt={brand} />
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
