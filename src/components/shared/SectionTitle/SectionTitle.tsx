import React from 'react'
import { FaRegCircle } from 'react-icons/fa6'

const SectionTitle = ({text}:{text:string}) => {
  return (
    <p className='flex items-center gap-3 section-title'><span><FaRegCircle color='orange'/></span> {text}</p>
  )
}

export default SectionTitle