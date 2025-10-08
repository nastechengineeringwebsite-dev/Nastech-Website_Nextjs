"use client"

import React, { useState } from "react"
import Flex from "./Flex"
import { FaBookOpen } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import ImageLoadingSkeleton from "./ImageLoadingSkeleton"
import Button from "./Button"

const Home_Product_Card = ({latest = false,
	cardImage,
	heading,
	pageLink,
	shortDis,
	date,
	tags}) => {
        const [loadingImage, setLoadingImage] = useState(false)

        return (
            <Flex
                className={
                    "flex flex-col justify-center w-[250px] lg:w-[350px] mx-auto relative after:absolute after:h-[3px] after:w-[30%] after:bg-bg_tertiary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[60%] after:duration-300 group rounded-xl overflow-hidden shadow-around_small"
                }
            >
                <Link href={`/${pageLink}`}>
                
                    <div
                        className={
                            "relative h-[150px] lg:h-[270px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden block"
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
                        <h2 className={" font-bold text-[15px] lg:text-[16px] text-text_secondary h-10 lg:h-14 text-center"}>
                            {heading}
                        </h2>
    
                        <p
                            className={
                                " font-medium text-[14px] lg:text-[15px] text-text_tertiary mt-6 lg:mt-4 h-[100px] truncate text-wrap text-justify"
                            }
                        >
                            {shortDis}
                        </p>
                        <Button link={`${pageLink}`} className={"mt-8"}>Read More</Button>
                    </Flex>
                    </div>
                </Link>
            </Flex>
        )
}

export default Home_Product_Card