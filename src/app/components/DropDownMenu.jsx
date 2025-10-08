import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import Link from "next/link"

const DropDownMenu = ({ label, link, listComponent, navbarState, showMenu }) => {
	let [open, setOpen] = useState(false)
	let [largeDevice, setLargeDevice] = useState(true)

	let listValues = Object.keys(listComponent)

	let handleShowMenu = (click, state) => {
		if (click && !largeDevice) {
			setOpen(state)
		} else if (!click && largeDevice) {
			setOpen(state)
		}
	}

	useEffect(() => {
		function checkWindowSize() {
			if (window.innerWidth < 1024) {
				setLargeDevice(false)
			} else {
				setLargeDevice(true)
			}
		}
		checkWindowSize()
		window.addEventListener("resize", checkWindowSize)

        if (!showMenu && !largeDevice){
            setOpen(false)
        }
	},[])

	return (
		<div
			className='relative'
			onMouseEnter={() => {
				handleShowMenu(false, true)
			}}
			onMouseLeave={() => {
				handleShowMenu(false, false)
			}}
		>
			<Flex
				className={`flex text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
        after:bottom-[-13px] ${
				open ? "lg:after:scale-x-110" : "lg:after:scale-x-0"
			} lg:after:duration-150 lg:py-0 py-2 items-center justify-between hover:cursor-pointer lg:cursor-default`}
				onClick={() => {
					open && showMenu ? handleShowMenu(true, false) : handleShowMenu(true, true)
				}}
			>
				<Link href={link}>{label}</Link>
				{!open ? (
					<FaPlus className=' lg:hidden'></FaPlus>
				) : (
					<FaMinus className='lg:hidden'></FaMinus>
				)}
			</Flex>

			<Flex
				className={`flex flex-col lg:absolute lg:-translate-x-1/2 lg:left-1/2 ${
					open
						? "opacity-100 z-10 lg:top-12 max-h-[400px]"
						: "opacity-0 z-[-1] lg:top-16 max-h-0"
				} lg:ease-in-out duration-300 origin-top`}
			>
				<div className='lg:absolute w-40 h-10 left-1/2 -translate-x-1/2 -top-2 -translate-y-1/2 bg-transparent lg:block hidden'></div>
				<div className='lg:absolute w-3 h-3 left-1/2 top-0 -translate-x-1/2  -translate-y-1/2 bg-bg_secondary rotate-45 lg:block hidden'></div>
				<List
					className={`lg:bg-bg_secondary flex flex-col w-full lg:w-fit lg:px-6 pl-4 lg:rounded-md mt-5 lg:mt-0 lg:shadow-around-small ${
						open && showMenu ? "lg:border-none border-b-[1px] border-[#92A2B8]" : ""
					}`}
				>
					{listValues.map((value, index) => (
						<ListItem
							className={`lg:font-medium font-semibold lg:text-light-blue py-4 lg:text-[15px] text-[13px] lg:border-t-0 text-text_primary lg:text-white ${
								!(index == listValues.length - 1) ? "border-b-[1px] " : ""
							} border-[#92A2B8]  lg:text-nowrap`}
							onClick={navbarState}

							key={`dropdown-${value}`}
						>
							<Link
								href={`${listComponent[value]}`}
								onClick={() => {
									setOpen(false)
								}}
							>
								{value}
							</Link>
						</ListItem>
					))}
				</List>
			</Flex>
		</div>
	)
}

export default DropDownMenu
