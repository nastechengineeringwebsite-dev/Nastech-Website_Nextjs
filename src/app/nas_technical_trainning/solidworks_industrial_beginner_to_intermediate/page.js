import Container from '@/app/components/Container'
import Flex from '@/app/components/Flex'
import Title from '@/app/components/Title'
import React from 'react'

const page = () => {
  return (
    <Container>
        <Title className={"lg:mt-10 mt-32"} title={"Solidworks Industrial Beginner to Intermediate"} primaryTitle = {true}></Title>
        <Flex className={"flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"}>
            <p>
            This course is designed for engineers and designers who are new to SOLIDWORKS or have basic experience. Participants will learn core modeling techniques, assembly creation, and 2D/3D drawing essentials, building a strong foundation in industrial design. By the end of the course, learners will be able to create accurate, production-ready models and understand best practices for efficient design workflows.
            </p>
        </Flex>
    </Container>
  )
}

export default page