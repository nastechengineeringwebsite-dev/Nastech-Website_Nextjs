"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const AnimatePage = ({ children }) => {
	const [isClient, setIsClient] = useState(false)

	const animations = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	}

	useEffect(() => {
		setIsClient(true)
	}, [])

	// return isClient ? (
	// 	<motion.div
	// 		variants={animations}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit = "exit"
	// 		transition={{ duration: 0.9 }}
	// 	>

	// 		{children}

	// 	</motion.div>
	// ) : (
	// 	<div>{children}</div>
	// )

	return (
		<motion.div
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	)
}

export default AnimatePage
