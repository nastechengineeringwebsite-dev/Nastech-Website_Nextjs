import React from "react"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Flex from "./Flex"
import Link from "next/link"

const SocialMediaIcons = ({className}) => {
	return (
		<Flex className={`items-center gap-3 flex ${className}`}>
			<Link href={"https://www.facebook.com/info.aasb"} target='_blank'>
				<FaFacebookSquare className={" h-7 w-7"} />
			</Link>
			<Link href={"https://www.instagram.com/aiaa_aust/"} target='_blank'>
				<FaInstagramSquare className={"h-7 w-7"} />
			</Link>
			<Link
				href={"https://www.linkedin.com/company/aiaa-aust-student-branch/mycompany/"}
				target='_blank'
			>
				<FaLinkedin className={"h-7 w-7"} />
			</Link>
		</Flex>
	)
}

export default SocialMediaIcons
