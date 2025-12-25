import React from 'react'
import ContactCard from '../components/ContactCard'
import AnimatePage from '../components/AnimatePage';

export const metadata = {
	title: "Contact Us | Nas Tech Engineering",
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

      <ContactCard/>
    </AnimatePage>
  )
}

export default page