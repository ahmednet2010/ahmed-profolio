import React from 'react'
interface Props {
    onClick:()=>void
    icon:string,
    expanded:boolean
}
export default function ({onClick,icon,expanded}:Props) {
  return (
    <button className="navbar-toggler-mobile" type="button" onClick={onClick} aria-controls="navbarSupportedContent" aria-expanded={expanded} aria-label="Toggle navigation" name="Toggle navigation">
        <i className={`${icon} fa-2x`}></i>
    </button>
  )
}
