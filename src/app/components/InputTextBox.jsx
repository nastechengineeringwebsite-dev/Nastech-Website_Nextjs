import React from 'react'

const InputTextBox = ({className, mandetory = true, placeholder, ...props }) => {
  return (
    <div className={`w-full ${className} relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-slate-300 after:absolute after:w-[0%] after:h-[2px] after:bg-darknest_blue after:bottom-0 after:left-0 focus-within:after:w-full after:duration-500`}>
			<textarea className='w-full font-medium lg:text-base text-[15px] text-font-color pl-2 py-3 focus:outline-none placeholder:text-slate-800 placeholder:font-regular' placeholder={`${placeholder} ${mandetory ? " *" : ""}`} {...props}></textarea>
		</div>
  )
}

export default InputTextBox