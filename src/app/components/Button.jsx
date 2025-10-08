"use client"

import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import Link from "next/link"
import { ClipLoader  } from "react-spinners"

const Button = ({
	children,
	className,
	invert,
	link,
	onClick,
	newPage,
	disabled,
	loading = false,
}) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return disabled ? (
		<button
			className={` lg:py-2 py-1 px-4 lg:px-8 overflow-hidden ${
				invert
					? "bg-button_yellow text-text-primary border-button_yellow "
					: "bg-button_yellow text-text_tertiary border-button_yellow"
			} rounded-lg inline-block lg:text-[17px] text-[14px] border-2 ${
				!loading
					? invert
						? "hover:bg-darknest_blue hover:text-button_yellow duration-150 hover:cursor-pointer"
						: "hover:bg-whitew hover:text-font-color duration-150 hover:cursor-pointer"
					: "after:absolute after:w-full after:h-full after:bg-black/10 after:top-0 after:left-0 after:scale-110 cursor-default"
			} ${className}`}
			disabled
		>
			<Flex className={"flex relative w-full"}>
				<Flex className={"relative -left-[26px] top-1/2 -translate-y-1/2 z-10"}>
					{isClient && (
						<ClipLoader 
							color={invert ? "#EAF3FF" : "#00000"}
							loading={loading}
							size={20}
						/>
					)}
				</Flex>
				<span className='font-medium '>{children}</span>
			</Flex>
		</button>
	) : link ? (
		<Link href={link} target={newPage ? "_blank" : ""}>
			<button
				className={` lg:py-2 py-1 px-4 lg:px-8 overflow-hidden relative ${
					invert
						? "bg-button_yellow text-font-color border-button_yellow"
						: "bg-button_yellow text-text_tertiary border-button_yellow"
				} rounded-full inline-block lg:text-[17px] text-[14px] border-2 ${
					!loading
						? invert
							? "hover:bg-darknest_blue hover:text-button_yellow duration-150 hover:cursor-pointer"
							: "hover:bg-button_hover_yellow hover:text-font-color duration-150 hover:cursor-pointer"
						: " cursor-default"
				} ${className}`}
				onClick={
					!loading
						? onClick
						: (e) => {
								e.preventDefault()
						  }
				}
			>
				<Flex className={"absolute left-1 top-1/2 -translate-y-1/2 z-10"}>
					{isClient && (
						<ClipLoader 
						color={invert ? "#EAF3FF" : "#00000"}
						loading={loading}
						size={17}
					/>
					)}
				</Flex>
				<Flex className={"flex relative w-full justify-center"}>
					<span className=' font-medium'>{children}</span>
				</Flex>
			</button>
		</Link>
	) : (
		<button
			className={` lg:py-2 py-1 px-4 lg:px-8 overflow-hidden relative ${
				invert
					? "bg-button_yellow text-text_tertiary border-button_yellow"
					: "bg-button_yellow text-text_tertiary border-button_yellow"
			} rounded-full inline-block lg:text-[17px] text-[14px] border-2 ${
				!loading
					? invert
						? "hover:bg-white hover:text-button_yellow duration-150 hover:cursor-pointer"
						: "hover:bg-white hover:text-font-color duration-150 hover:cursor-pointer"
					: " cursor-default"
			} ${className}`}
			onClick={
				!loading
					? onClick
					: (e) => {
							e.preventDefault()
					  }
			}
		>
			<Flex className={"absolute left-1 top-1/2 -translate-y-1/2 z-10"}>
				{isClient && (
					<ClipLoader 
					color={invert ? "#EAF3FF" : "#00000"}
					loading={loading}
					size={20}
				/>
				)}
			</Flex>
			<Flex className={"flex relative w-full justify-center"}>
				<span className=' font-medium'>{children}</span>
			</Flex>
		</button>
	)
}

export default Button
