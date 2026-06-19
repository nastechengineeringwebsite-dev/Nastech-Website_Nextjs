import React from 'react'
import Container from './Container'
import Image from 'next/image'
import AnimatePage from './AnimatePage'

const Banner = () => {
  return (
    <div className='md:bg-[#C2CCCB] bg-none w-full'>
    <Container>
      <AnimatePage>
        <Image
        className='rounded-3xl md:rounded-none md:mt-0 mt-40 w-full'
            src={'/images/Banner.jpg'}
            alt={'Banner'}
            width={1920}
            height={500}
            loading="eager"
            fetchPriority={"high"}
          ></Image>
          </AnimatePage>
    </Container>
    </div>
  )
}

export default Banner