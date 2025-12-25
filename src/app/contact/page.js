import React from 'react'
import ContactCard from '../components/ContactCard'
import AnimatePage from '../components/AnimatePage';

export const metadata = {
	title: "Contact Us | Nas Tech Engineering",
	description:
		"Reach us for any queries or suggestions. We are here to help you with your engineering needs.",
	
};

const page = () => {
  return (
    <AnimatePage>

      <ContactCard/>
    </AnimatePage>
  )
}

export default page