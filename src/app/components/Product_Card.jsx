"use client"

import React, { useState } from "react"
import Flex from "./Flex"
import { FaBookOpen } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import ImageLoadingSkeleton from "./ImageLoadingSkeleton"
import Button from "./Button"

const Product_Card = ({
	cardImage,
	heading,
	pageLink,
	shortDis,
    courseFee = false,
    courseDuration = false,
	}) => {
        const [loadingImage, setLoadingImage] = useState(false)

        return (
            <Flex className = {"flex flex-col"}>
                {courseDuration && <div className=' bg-bg_tertiary text-white lg:px-3 lg:py-2 px-2 py-1 rounded-t-2xl text-[12px] lg:text-sm z-40 w-fit'><span>Course Duration: {courseDuration}</span></div>}
            <Flex
                className={
                    "flex flex-col justify-center w-[300px] lg:w-[450px] mx-auto relative after:absolute after:h-[3px] after:w-[30%] after:bg-bg_tertiary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[60%] after:duration-300 group rounded-xl rounded-tl-none overflow-hidden shadow-around_small"
                }
            >   
            
                <Link href={`/activites/${pageLink}`}>
                
                    <div
                        className={
                            "relative h-[200px] lg:h-[270px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden block"
                        }
                    >	
                    

                    {!loadingImage && <ImageLoadingSkeleton />}
                        <Image
                            src={`/images/${cardImage}`}
                            alt={"Nas Tech Engineering Card Image"}
                            width={1200}
                            height={800}
                            onLoad={() => setLoadingImage(true)}
                            className={
                                "absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-auto w-full lg:h-[100%] group-hover:scale-105 duration-500"
                            }
                            priority
                            
                        ></Image>
                    </div>
    
                    <div
                        className={
                            "pt-4 pb-10 px-4 border-[1px] border-gray-300 border-t-0 rounded-xl rounded-t-none h-full"
                        }
                    >
                        <Flex className={"flex flex-col items-center"}>
                        <h2 className={" font-bold h-12 lg:text-[16px] text-text_secondary lg:h-10 text-center"}>
                            {heading}
                        </h2>
    
                        <p
                            className={
                                " font-medium text-[14px] lg:text-[15px] text-text_tertiary mt-10 lg:mt-4 h-[100px] truncate text-wrap text-justify"
                            }
                        >
                            {shortDis.length > 150 ? shortDis.slice(0, 150) + "..." : shortDis}
                        </p>
                        <Flex className={"flex flex-col lg:flex-row items-center mt-6 lg:mt-4 justify-between gap-x-10 gap-y-5"} >
                        {courseFee && <div className="w-[180px] lg:w-[200px] bg-bg_tertiary text-white lg:px-3 lg:py-3 px-2 py-2 rounded-full text-[12px] lg:text-sm text-center"><span>Course Fee: {courseFee}</span></div>}
                        <Button link={`${pageLink}`} >Learn More</Button>
                        </Flex>
                    </Flex>
                    </div>
                </Link>
            </Flex>
            </Flex>
        )
}

export default Product_Card