import * as React from 'react'
import { Input } from './input'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
export default function InputWithIcon({
	icon = '',
	className = '',
	error = '',
	label = '',
	id,
	...props
}) {
	return (
		<>
			{label && (
				<Label
					className={cn('text-xs', error ? 'text-red' : '')}
					htmlFor={id}
				>
					{label}
				</Label>
			)}
			<div className="grid *:col-start-1 *:row-start-1 items-center mt-1">
				<Input
					className={cn(
						'py-3',
						icon ? 'px-10' : 'px-4',
						error ? 'text-red border-red' : '',
						className,
					)}
					id={id}
					name={id}
					{...props}
				/>
				{error && (
					<p className="text-red text-body-s justify-self-end pr-4 z-10">
						{error}
					</p>
				)}
				{icon && (
					<Image src={icon} className="ml-4 z-10" alt="icon" />
				)}
			</div>
		</>
	)
}
