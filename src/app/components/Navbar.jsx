"use client"

import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Container from "./Container"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { FaBars, FaMinus, FaPlus } from "react-icons/fa"
import { useRef } from "react"
import ScrollToTopButton from "./ScrollToTopButton"
import DropDownMenu from "./DropDownMenu"
import { toast } from "react-toastify"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
	axios.defaults.withCredentials = true

	let [state, setState] = useState(false)
	let [accountList, setAccountList] = useState(false)
	let [navShadow, setNavShadow] = useState(false)
	let [userLoggedIn, setUserLoggedIn] = useState(false)
	let [userProfileName, setUserProfileName] = useState("")
	let [fullName, setFullName] = useState("")
	let [user_profileImage, setUser_ProfileImage] = useState("N/A")
	let [refresh, setRefresh] = useState(false)
	let accountref = useRef()

	let changeState = () => {
		setState(!state)
		setNavShadow(false)
	}

	let logOutUser = () => {
		axios
			.get(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/logout`)
			.then((response) => {
				if (response.status == "200") {
					window.location.pathname = "/login"
				}
			})
			.catch((error) => {
				toast.error("An error occurred")
				console.log(error)
			})
	}

	let linkChangeState = () => {
		if (window.innerWidth < 1024) {
			setState(!state)
			setNavShadow(false)
		}
	}

	let changeAccountList = () => {
		setAccountList(!accountList)
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			function checkWindowSize() {
				if (window.innerWidth < 1024) {
					setState(false)
				} else {
					setState(false)
				}
			}
			checkWindowSize()

			window.addEventListener("resize", checkWindowSize)

			// document.addEventListener("click", (e) => {
			// 	if (accountref != null) {
			// 		if (!accountref.current.contains(e.target)) {
			// 			setAccountList(false)
			// 		}
			// 	}
			// })

			window.addEventListener("scroll", () => {
				if (window.scrollY == 0 || state) {
					setNavShadow(false)
				} else {
					setNavShadow(true)
				}
			})
		}

		// axios
		// 	.get(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/authorized`)
		// 	.then((respone) => {
		// 		if (respone.status == "200") {
		// 			const data = respone.data
		// 			console.log("Refreshed")
		// 			if (!data.authorized) {
		// 				if (userLoggedIn) {
		// 					window.location.reload()
		// 				}

		// 				setUserLoggedIn(false)

		// 				return
		// 			}

		// 			setUserLoggedIn(true)

		// 			let userData = data.data
		// 			let name = userData.user_name
		// 			let nameParts = name.split(" ")
		// 			let shortName = nameParts[0][0] + nameParts.pop()[0]

		// 			setUserProfileName(shortName)
		// 			setFullName(name)

		// 			const user_Id = userData.user_id

		// 			axios
		// 				.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/user/findMemberByUserId`, {
		// 					_id: user_Id,
		// 				})
		// 				.then((response) => {
		// 					if (respone.status == "200") {
		// 						const data = response.data
		// 						if (data.success) {
		// 							const user = data.data.user
		// 							setUser_ProfileImage(user.profileImage)
		// 						} else {
		// 							console.log(data.data.error)
		// 						}
		// 					}
		// 				})
		// 				.catch((error) => {
		// 					if (error) {
		// 						console.log(error)
		// 					}
		// 				})
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		setUserLoggedIn(false)
		// 		console.log(error)
		// 	})

		// setTimeout(() => {
		// 	setRefresh(!refresh)
		// }, import.meta.env.VITE_REFRESH_TIME || 300000)

	}, [refresh])

	return (
		<>
			<div
				className={`lg:hidden w-[100vw] h-[100vh] top-0 left-0  ${
					state ? "bg-black/50 z-40 fixed" : "bg-transparent z-[-1] absolute"
				} duration-300`}
				id={'Nav-background'}
				onClick={() => {
					setState(false)
				}}
			></div>
			<nav>
				<div
					className={`w-full lg:bg-bg_primary ${
						state ? "bg-transparent" : "bg-bg_primary"
					} top-[0%] z-50 lg:static lg:shadow-none ${
						navShadow ? "shadow-xl" : "shadow-none"
					} fixed duration-300`}
				>
					<ScrollToTopButton navmenu={state}></ScrollToTopButton>
					<Container>
						<Flex className='lg:py-4 py-5 justify-between items-center flex'>
							<Link href={"/"}>
								<Image
									src={"/images/Nas Tech Logo.png"}
									width={148}
									height={118}
									alt={"Nas Tech Engineering Logo"}
									className={"lg:w-24 md:w-20 w-16"}
									loading="eager"
									priority
								></Image>
							</Link>
							<FaBars
								className={`lg:hidden absolute top-[50%] translate-y-[-50%] right-5  hover:cursor-pointer z-20 ${
									state ? "text-transparent" : "text-text_primary"
								} duration-150 md:w-6 md:h-6 w-5 h-5`}
								onClick={changeState}
							/>
							<List
								className={`lg:flex-row flex-col lg:justify-end flex gap-8 lg:relative absolute lg:bg-bg_primary bg-bg_primary lg:w-full lg:h-full h-[100vh] top-0 lg:left-0 lg:items-center ${
									state ? "left-[0%]" : "left-[-100%]"
								} lg:duration-0 duration-500 w-[70%] max-w-[300px] lg:max-w-[1000px] lg:shadow-none shadow-2xl shadow-black/70 lg:pt-0 lg:pl-0 pt-12 px-5 overflow-scroll lg:overflow-visible scrollbar-hide`}
							>
								<IoMdCloseCircleOutline
									className='lg:hidden absolute top-4 right-4 text-text_primary w-6 h-6 hover:cursor-pointer z-50'
									onClick={changeState}
								/>
								<ListItem
									className=' text-text_primary font-semibold text-[16px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 after:rounded-full lg:py-0 py-2'
								
								key={"Home"}
								>
									<Link
										href='/'
										className='hover:font-semibold lg:hover:font-semibold'
										onClick={linkChangeState}
									>
										Home
									</Link>
								</ListItem>
								<ListItem
									className=' text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2 '
								
								key={"About"}
								>
									<Link
										href='/about'
										className='hover:font-semibold lg:hover:font-semibold'
										onClick={linkChangeState}
									>
										About Us
									</Link>
								</ListItem>
								<ListItem
									className=' text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
									key={"Technical Training"}
								>
									<Link
										href='/nas_technical_trainning'
										className='hover:font-semibold lg:hover:font-semibold'
										onClick={linkChangeState}
									>
										Technical Training
									</Link>
								</ListItem>
								
								<DropDownMenu
									label={"Provided Services"}
									link={"#"}
									listComponent={{
										
										"360 Engineering Solution ": "/nas_360_engineering_solutions",
										
									}}
									navbarState={linkChangeState}
									showMenu={state}
								></DropDownMenu>

								
								<ListItem
									className=' text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								key={"Contact Us"}
								>
									<Link
										href='/contact'
										className='hover:font-semibold lg:hover:font-semibold'
										onClick={linkChangeState}
									>
										Contact Us
									</Link>
								</ListItem>
								{/* <div ref={accountref} >
									<ListItem
										className={`flex flex-col lg:flex-row font-medium text-[15px] hover:cursor-pointer relative`}
										onClick={changeAccountList}
									>
										<Flex
											className={`lg:border-2 lg:border-white lg:py-1 py-3 duration-300 ${
												userLoggedIn ? "lg:pr-3 lg:pl-[5px]" : "lg:px-3"
											} lg:rounded-3xl text-text_primary ${
												accountList
													? "lg:text-light-blue lg:bg-white"
													: "lg:text-text_primary lg:bg-none "
											}  flex items-center w-full justify-between relative lg:after:content-none after:absolute after:w-full after:bottom-[-13px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8]`}
											
										>
											<Flex className={"flex items-center gap-2"}>
												{userLoggedIn ? (
													<div className='w-8 h-8 bg-[#aebed4] rounded-full text-center relative overflow-hidden'>
														{user_profileImage != "N/A" ? (
															<Image
																src={user_profileImage}
																alt={"User Profile Image"}
																className={
																	"absolute -translate-x-1/2 -translate-y-1/2 w-full top-1/2 left-1/2"
																}
															></Image>
														) : (
															<span className='text-black font-bold text-[14px] py-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
																{userProfileName}
															</span>
														)}
													</div>
												) : (
													""
												)}
												<h3>Account</h3>
											</Flex >
											<Flex className={'relative after:absolute after:w-full after:h-full after:top-0 after:left-0'} onClick={changeAccountList}>
												
											{!accountList ? (
												<FaPlus className=' lg:hidden' />
											) : (
												<FaMinus className='lg:hidden' ></FaMinus>
											)}
											</Flex>
										</Flex>
										<List
											className={`flex flex-col mt-[13px] lg:absolute right-0 lg:translate-y-[100%] lg:w-[180px] w-full lg:bg-[#d9e3ec] lg:rounded-md lg:shadow-xl lg:shadow-black/10 pl-4 lg:px-4 lg:border-[1px] lg:border-[#aeb1b563]
											${
												accountList
													? "max-h-[200px] lg:max-h-fit lg:bottom-[-20px] opacity-1 lg:z-20"
													: "max-h-0 lg:max-h-fit lg:bottom-[0px] opacity-0 z-[-1]"
											} duration-300 cursor-default`}
										>
											<ListItem
												className={
													" lg:font-semibold font-medium lg:text-light-blue py-4 text-[15px] border-b-[1px] border-[#92A2B8] text-text_primary pl-2 lg:pl-0"
												}
												onClick={linkChangeState}
											>
												{userLoggedIn ? (
													<Link onClick={logOutUser}>Log Out</Link>
												) : (
													<Link href={"/login"} onClick={changeAccountList}>
														Login
													</Link>
												)}
											</ListItem>
											<ListItem
												className={
													" lg:font-semibold font-medium lg:text-light-blue py-4 text-[15px] lg:border-none border-b-[1px] border-[#92A2B8] text-text_primary pl-2 lg:pl-0"
												}
												onClick={linkChangeState}
											>
												<Link
													href={userLoggedIn ? "/myaccount" : "/signup"}
													onClick={changeAccountList}
												>
													{userLoggedIn ? "My Account" : "Sign Up"}
												</Link>
											</ListItem>
										</List>
									</ListItem>
								</div> */}
							</List>
						</Flex>
					</Container>
				</div>
			</nav>
		</>
	)
}

export default Navbar