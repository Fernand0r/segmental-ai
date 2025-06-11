import type { Metadata } from 'next'
import './globals.css'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export const metadata: Metadata = {
	title: `${brand.charAt(0).toUpperCase() + brand.slice(1)} AI | Universal Data Indexing Engine`,
	icons: {
		icon: `/favicon-${brand}.png`,
	},
	description:
		'Transform your organization with powerful AI-driven solutions for document indexing, knowledge management, and intelligent search. Experience the future of data processing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
			</head>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	)
}
