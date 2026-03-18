import React from 'react'
import Container from '../../../components/Container';
import Flex from '../../../components/Flex';
import OrderSuccessInfo from '../../../components/OrderSuccessInfo';
import AnimatePage from '@/app/components/AnimatePage';

const page = async ({params}) => {
    const {oid} = await params
    
  return (
    <Container>
        <AnimatePage>

        <Flex >
            <OrderSuccessInfo oid = {oid}/>
            
        </Flex>
        </AnimatePage>
    </Container>
  )
}

export default page