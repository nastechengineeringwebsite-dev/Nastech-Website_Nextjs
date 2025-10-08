"use client"

import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { BsArrowUpSquareFill } from "react-icons/bs"

const ScrollToTopButton = ({navmenu = false}) => {
	let [showButton, setShowButton] = useState(false)

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 350) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		})
	}, [])

	let sendToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<div
			className={`shadow-around shadow-black/80 h-9 w-9 fixed bottom-7 right-6 hover:cursor-pointer ${
				showButton && !navmenu ? "opacity-100" : "opacity-0"
			} duration-300 bg-white rounded-lg`}
		>
			<BsArrowUpSquareFill className='text-[#538cc5] w-full h-full' onClick={sendToTop} />
		</div>
	)
}

export default ScrollToTopButton
