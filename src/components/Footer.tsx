import Image from 'next/image'

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
						<Image width={120} height={60} src="/images/logo.svg" alt="Indexer AI" />
					</div>
					<div className="footer-copyright">
						<p>&copy; Segmental AI Inc, 2025. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
