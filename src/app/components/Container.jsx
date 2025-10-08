import React from 'react'

const Container = ({children, className, ...props}) => {
  return (
    <div className={`max-w-container mx-auto md:px-3 px-5 ${className}`} {...props}>{children}</div>
  )
}

export default Container