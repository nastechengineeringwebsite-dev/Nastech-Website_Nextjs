
import React, { useState } from "react"

const SelectionBox = ({
	className,
	mandetory = true,
	placeholder,
	onChange,
	options = [],
	value,
	...props
}) => {
	return (
		<div
			className={`w-full ${className} relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-slate-300 after:absolute after:w-[0%] after:h-[2px] after:bg-darknest_blue after:bottom-0 after:left-0 focus-within:after:w-full after:duration-500  text-[15px] lg:text-base`}
		>
			<select className={`w-full pl-2 py-3 focus:outline-none  ${value == 'N/A' ? "placeholder:text-slate-500 font-regular" : "placeholder:text-slate-500 font-medium"} placeholder:text-slate-500`} onChange={onChange} value={value} {...props}>
				<option className="placeholder:text-slate-500" defaultValue value={"N/A"}>{`${placeholder} ${mandetory ? " *" : ""}`}</option>
				{options.map((option, index) => {
					return (
						<option key={index} value={option}>
							{option}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SelectionBox
