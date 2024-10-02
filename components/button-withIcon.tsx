import { Button } from './ui/button'

export default function ButtonWithIcon({
	icon,
	children,
	variant = 'ghost',
	isActive = false,
	...props
}) {
	return (
		<Button
			variant={variant}
			{...props}
			className={isActive ? 'bg-light-purple text-purple' : ''}
		>
			<span className="flex items-center gap-3">
				{icon}
				{children}
			</span>
		</Button>
	)
}
