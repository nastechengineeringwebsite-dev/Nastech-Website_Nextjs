import React from "react"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Flex from "./Flex"
import Link from "next/link"

const SocialMediaIcons = ({className}) => {
	return (
		<Flex className={`items-center gap-3 flex ${className}`}>
			<Link href={"https://www.facebook.com/profile.php?id=61559288997726"} target='_blank'>
				<FaFacebookSquare className={" h-7 w-7"} />
			</Link>
			<Link href={"https://www.instagram.com/_nastech_engineering_/"} target='_blank'>
				<FaInstagramSquare className={"h-7 w-7"} />
			</Link>
			<Link
				href={"https://www.linkedin.com/company/nas-tech-engineering/posts/?feedView=all"}
				target='_blank'
			>
				<FaLinkedin className={"h-7 w-7"} />
			</Link>
		</Flex>
	)
}

export default SocialMediaIcons
