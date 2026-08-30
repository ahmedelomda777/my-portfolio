import React from 'react'

export default function Accent({children}:{
    children:React.ReactNode
}
) {
  return (
    <span className='text-accent'>{children}</span>
  )
}
