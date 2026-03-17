"use client"

import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import InputBox from "./InputBox"

const Checkbox = ({ question, className, options, onChange, refresh }) => {
	const [checkedValue, setCheckedValue] = useState([])
	const [otherOption, setOtherOption] = useState(false)

	const handleCheckboxChange = (e) => {
		const checked = e.target.checked
		const value = e.target.id
		let updatedArray = []

		if (checked && !checkedValue.includes(value)) {
			updatedArray = [...checkedValue, value]
		} else if (!checked && checkedValue.includes(value)) {
			updatedArray = checkedValue.filter((prevValue) => prevValue !== value)
		}

		onChange(updatedArray, otherOption)
		setCheckedValue(updatedArray)
	}

	const handleOtherChange = (e)=>{
		const value = e.target.value
		setOtherOption(value)
		onChange(checkedValue, value)
	}

	useEffect(() => {
		setCheckedValue([])
	}, [refresh])

	return (
		<Flex className={"flex flex-col lg:flex-row justify-center md:gap-10 gap-5"}>
			{question ? (
				<span className='font-semibold text-font-color md:text-lg text-[17px] text-nowrap'>
					{question}
				</span>
			) : (
				""
			)}
			<Flex
				className={
					"flex gap-x-14 md:gap-y-10 gap-y-6 flex-wrap lg:justify-normal justify-normal items-start"
				}
			>
				{options.map((option, index) => (
					<Flex
						key={index}
						className={`flex gap-2 items-center font-regular text-slate-800 md:text-base text-[14px] ${option !== 'Other' ? className : "lg:w-[70%] w-full"}`}
					>
						<input
							type='checkbox'
							name={option}
							id={option}
							className={"w-4 h-4"}
							onChange={handleCheckboxChange}
							checked={checkedValue.includes(option)}
						></input>
						<label htmlFor={option}>{option}</label>
						{(checkedValue.includes("Other") && option == 'Other') && (
							<Flex className={"flex w-full"}>
								<InputBox
									className={"w-full after:bottom-[-10px] before:bottom-[-10px]"}
									inputClassName={"w-full h-[24px]"}
									placeholder={"Please Specify your skills"}
									onChange = {handleOtherChange}
									
								></InputBox>
							</Flex>
						)}
					</Flex>
				))}
			</Flex>
		</Flex>
	)
}

export default Checkbox
