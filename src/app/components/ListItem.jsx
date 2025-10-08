import React from 'react'

const ListItem = ({children, className, ...props}) => {
  return (
    <li className={`flex ${className}`} {...props}>
        {children}
    </li>
  )
}

export default ListItem