import Image from 'next/image'

const brand = process.env.NEXT_PUBLIC_BRAND ?? 'segmental'

export default function LogoWithTexts() {
	return (
		<div className="logo">
			{brand === 'segmental' ? (
				<Image width={150} height={150} src={`/images/logo-segmental.svg`} alt={brand} />
			) : (
				<div className="logo-container flex items-center gap-1">
					<Image width={40} height={40} src={`/favicon-${brand}-white.png`} alt={brand} />
					<span className="text-white text-[16px] font-bold font-jakarta tracking-wide">{brand.charAt(0).toUpperCase() + brand.slice(1)} AI</span>
				</div>
			)}
		</div>
	)
}
