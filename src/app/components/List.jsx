import React from 'react'


const List = ({className, children, ...props}) => {
  return (
    <ul className={`lg:flex ${className}`} {...props}>
        {children}
    </ul>
  )
}

export default List