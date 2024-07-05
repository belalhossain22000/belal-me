import React from 'react'

const ButtonPrimary = ({children}:{children:string}) => {
  return (
    <button className='py-[10px] px-8 bg-primary text-white text-[21px] font-semibold rounded-md'  >{children}</button>
  )
}

export default ButtonPrimary