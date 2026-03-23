"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const AnimatePage = ({ children }) => {
	const [isClient, setIsClient] = useState(false)

	const animations = {
		initial: { opacity: 0, x: "30%" },
		animate: { opacity: 1, x: "0%" },
		exit: { opacity: 0, x: "-30%" },
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
		<div className={"relative overflow-x-hidden"}>

		<motion.div
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.8 }}
			
		>
			{children}
		</motion.div>
		</div>
	)
}

export default AnimatePage
