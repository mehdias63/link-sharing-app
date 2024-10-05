import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import IconArrowRight from './icons/icon-arrow-right'

export default function PreviewLinkItem({
	icon,
	iconAlt,
	children,
	className = '',
}) {
	const colorPossibilities = [
		'bg-github',
		'bg-twitter',
		'bg-linkedin',
		'bg-youtube',
	]

	return (
		<Button
			variant="ghost"
			className={cn(
				'flex text-white p-4 min-w-[13.2rem] gap-2 rounded-lg items-center hover:text-white',
				className,
			)}
		>
			{icon}
			{children}
			<span className="ml-auto">
				<IconArrowRight />
			</span>
		</Button>
	)
}
