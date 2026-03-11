import React from 'react'
import AnimatePage from '../components/AnimatePage';
import Flex from '../components/Flex';

export const metadata = {
	title: "Grateful Tokens | Nas Tech Engineering",
	description:
    "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
    openGraph: {
      title: "Contact Us | Nas Tech Engineering",
      description:
        "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
      url: "https://www.nastechengineeringbd.com/contact",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Nas Tech Engineering",
      description:
        "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
      images: ["images/website_preview.webp"],
    },
	
};

const page = () => {
  return (
    <AnimatePage>
      <Flex>
        <h1 className='text-5xl font-bold mx-auto text-[#1F1F1F] py-20'>
          Grateful Tokens
        </h1>
      </Flex>
    </AnimatePage>
  )
}

export default page