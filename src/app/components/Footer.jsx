import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import SocialMediaIcons from "./SocialMediaIcons"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<>
			<div className='w-full bg-bg_tertiary md:px-6 lg:px-0'>
				<Container>
					<Flex
						className={
							"gap-4 pt-24 pb-20 flex flex-wrap lg:flex-nowrap lg:items-start justify-evenly"
						}
					>
						<div className='lg:w-[25%] md:w-[80%] w-[60%]'>
							<Link href={"/"}>
								<Image
									src={"/images/Logo.jpg"}
                                    alt={"Nas Tech Logo"}
									className='lg:w-[70%] md:w-[40%] w-[70%]  mx-auto lg:mx-0 lg:mb-0 mb-6'
									width={584}
									height={468}
									loading="eager"
									fetchPriority={"high"}
								></Image>
							</Link>
						</div>
						<div className='lg:w-[25%] md:w-[30%] w-[45%]'>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/"}>Home</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/about"}>About Us</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/committee"}>Our Services</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/activites"}>Our Courses</Link>
								</ListItem>
							</List>
						</div>

						<div className='lg:w-[25%] md:w-[30%] w-[45%]'>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/"}>3D Printing</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/about"}>3D Scanning</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/committee"}>Mold Design</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/activites"}>Product Prototyping</Link>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Link href={"/contact"}>Contact Us</Link>
								</ListItem>
							</List>
						</div>
						
						<div className='lg:w-[25%] md:w-[30%] w-[60%] md:mt-0 mt-6 '>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={" font-medium text-xl text-white"}>
									Get In Touch
								</ListItem>
								<ListItem>
									<SocialMediaIcons className={"text-white"}></SocialMediaIcons>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Flex className={"gap-3 items-center flex"}>
										<a href='mailto: info.aasb@aust.edu' target={"_blank"}>
											<IoMdMail className={" h-6 w-6"} />
										</a>
										<span>okmahin2@gmail.com</span>
									</Flex>
								</ListItem>
								<ListItem className={" font-medium text-lg text-white"}>
									<Flex className={"gap-3 items-center flex"}>
										<FaPhoneAlt className={"text-white h-5 w-6"} />
										<span>+880 1111111111</span>
									</Flex>
								</ListItem>
								<ListItem className={" font-medium text-[16px] text-white"}>
									<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales.
									</p>
								</ListItem>
							</List>
						</div>
					</Flex>
				</Container>
			</div>
			<div className=' bg-bg_primary py-3 w-full'>
				<Flex className={"flex items-center justify-center text-text_primary text-center font-medium"}>
					<h3>
						&copy; 2025 Nas Tech Engineering. All Rights Reserved.&nbsp;
						<span>
							<Link className='border-b-[2px] border-text_primary' href={"/credits"}>
								Credits
							</Link>
						</span>
					</h3>
				</Flex>
			</div>
		</>
	)
}

export default Footer
