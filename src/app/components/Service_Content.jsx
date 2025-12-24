"use client"

import React, { useEffect, useRef, useState } from "react"
import { HiArrowSmLeft } from "react-icons/hi"
import Image from "next/image"
import Link from "next/link"
import Flex from "./Flex"
import ImageSlider from "./ImageSlider"
import ImageLoadingSkeleton from "./ImageLoadingSkeletion"



const Service_Content = ({
	cover_image,
	heading,
	content,
	videoHeading,
	video,
	videoType,
	folder,
	ImageHeading,
	imageContent,
	listContent = false,
	embededLink = false,
	embededLinkHeading = [],
	downloadLink = [],
}) => {
	let paras = content.split(/\r?\n|\r|\n/g)

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	const [imageLoaded, setImageLoaded] = useState(false)

	return (
		<div className=' mb-28'>
			<Flex
				className={
					"flex mt-36 md:mt-32 lg:mt-10 items-center  font-bold text-darker_blue text-[14px] gap-1"
				}
			>
                
				<Link href={"/nas_360_engineering_solutions"}>
					<HiArrowSmLeft className='h-8 w-8 p-1 bg-[#d2deeb] rounded-full ' />
				</Link>
			</Flex>
			
				<Flex className='flex rounded-xl overflow-hidden flex-col items-center mt-10 md:mt-0'>
                    <div className="lg:w-[60%] w-[80%]">
					{!imageLoaded && <ImageLoadingSkeleton/>}
					<Image
						src={`/images/360 Engineering Solutions/${folder}/${cover_image}`}
						className=" w-full"
						width={550}
						height={400}
						alt={`${heading} image`}
						onLoad={() => setImageLoaded(true)}
						priority
						loading = "eager"
					></Image>
                    </div>
				</Flex>

                <h1 className='font-bold text-text_primary md:text-[26px] text-xl text-center mt-10'>
					{heading}
				</h1>
			
			
			<div className=' lg:mt-16 mt-10 text-lg leading-8 text-text_tertiary font-medium text-justify'>
				{paras.map((para, index) => (para ? <p key = {index}>{para}</p> : <br key = {index}></br>))}
                <p className = {"mt-10"}><span><Link href="/contact" className=" text-text_secondary font-bold">Contact us</Link></span> for your {heading}.</p>
			</div>
			
			{videoHeading && video ? (
				<div>
					<h3 className=' mt-11  font-bold text-light-blue lg:text-[26px] text-xl mb-11'>
						{videoHeading}
					</h3>
					<video className='md:w-[80%] w-full mx-auto' controls controlsList="nodownload" >
						<source src={`/videos/${video}`} type={`video/${videoType}`} />
					</video>
				</div>
			) : (
				""
			)}
			{imageContent && (
				<div>
					<h3 className=' mt-16  font-bold text-light-blue lg:text-[26px] text-xl mb-7'>
						{ImageHeading}
					</h3>

					<ImageSlider images={imageContent} folder={folder} image_names={"Nas Tech Enigeering 360 Solutions"}></ImageSlider>
				</div>
			)}
		</div>
	)
}

export default Service_Content
