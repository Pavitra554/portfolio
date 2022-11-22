import React from 'react'

type props = {
    colors:string,
    text:string
}
const Badge:React.FC<props> = ({text,colors}) => {
  return (
    <span className={'m-1 px-2 py-1 rounded-md font-noto '+colors}>
        {text}
    </span>
  )
}

export default Badge