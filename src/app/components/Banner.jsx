import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='bg-[#C2CCCB] w-full'>
    <Container>
        <Image
        className='w-full'
            src={'/images/Banner.jpg'}
            alt={'Banner'}
            width={1920}
            height={500}
            loading="eager"
            fetchPriority={"high"}
        ></Image>
    </Container>
    </div>
  )
}

export default Banner