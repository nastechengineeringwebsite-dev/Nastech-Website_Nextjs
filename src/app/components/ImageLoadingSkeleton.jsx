import React from "react"
import { FaImage } from "react-icons/fa"
const ImageLoadingSkeleton = () => {
	return (
		<div className=' w-full h-full bg-slate-200 flex items-center justify-center'>
            <div className=' w-full h-full bg-slate-300 flex items-center justify-center animate-pulse'><FaImage className='h-10 w-10 text-slate-500' /></div>
			
		</div>
	)
}

export default ImageLoadingSkeleton
