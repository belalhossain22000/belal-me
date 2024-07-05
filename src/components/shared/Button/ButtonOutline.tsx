import React from 'react'

const ButtonOutline = ({children}:{children:string}) => {
  return (
    <button className='py-[10px] px-8 bg-[#FFF5EF]  text-[21px] font-semibold rounded-md border-2 border-primary text-primary'  >{children}</button>
  )
}

export default ButtonOutline