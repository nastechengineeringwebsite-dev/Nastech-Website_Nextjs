import React from "react"

const InputBox = ({ className, inputClassName, mandetory = true, placeholder, ...props }) => {
	return (
		<div className={`w-full ${className} relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-slate-300 after:absolute after:w-[0%] after:h-[2px] after:bg-bg_secondary after:bottom-0 after:left-0 focus-within:after:w-full after:duration-500`}>
			<input
				className={`w-full ${inputClassName} font-medium md:text-base text-[14px] text-[#464646] pl-2 py-3 focus:outline-none placeholder:text-slate-500 placeholder:text-wrap placeholder:font-regular placeholder:break-words`}
        placeholder={`${placeholder} ${mandetory ? " *" : ""}`}
				{...props}
			></input>
		</div>
	)
}

export default InputBox
