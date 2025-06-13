import Image from 'next/image'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div
					className="footer-content"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						height: '60px',
						padding: '10px 0',
					}}
				>
					<div className="footer-logo" style={{ marginBottom: '5px' }}>
						<Image width={150} height={150} src={`/images/logo-${brand}.svg`} alt={brand} />
					</div>
					<div className="footer-copyright">
						<p>&copy; {brand.charAt(0).toUpperCase() + brand.slice(1)} AI Inc, 2025. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
