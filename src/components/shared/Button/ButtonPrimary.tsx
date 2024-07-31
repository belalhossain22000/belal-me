import React from 'react'

const ButtonPrimary = ({children}:{children:string}) => {
  return (
    <button className='py-[10px] md:px-8 px-4 bg-primary text-white md:text-[21px] text-lg font-semibold rounded-md'  >{children}</button>
  )
}

export default ButtonPrimary