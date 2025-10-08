import React from 'react'

const Title = ({title, className, primaryTitle = false}) => {
  return (
    <div>
      {primaryTitle ?
        <h1 className={`${className} mx-auto text-text_primary font-bold text-xl lg:text-2xl text-center mb-12`}>{title}</h1>
        :
        <h2 className={`${className} mx-auto text-text_primary font-bold text-xl lg:text-2xl text-center mb-12`}>{title}</h2>
        }
        
    </div>
  )
}

export default Title