import React from 'react'
import About_Us_Content from '../components/About_Us_Content'
import AnimatePage from '../components/AnimatePage';

export const metadata = {
	title: "About | Nas Tech Engineering",
	description:
		"NAS Tech Engineering offers CAD/CAM, CNC, CAE and DFM-focused training and engineering solutions with 10+ years of hands-on industry expertise",
	
};

const page = () => {
  return (
    <AnimatePage>

      <About_Us_Content/>
    </AnimatePage>
  )
}

export default page