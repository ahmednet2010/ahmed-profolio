import React from 'react'
import { motion } from "framer-motion" 
import {Link} from "gatsby"
interface Props {
    navbar:{link:string,name:string}[]
  }
export default function ({navbar}:Props) {
  return (
    <ul className="navbar-nav d-flex flex-column flex-nowrap flex-md-row">
    {navbar.map((navitem,i)=>(
        <motion.li className="nav-item" key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i/2, duration:0.5}}>
        <Link className="nav-link text-capitalize bold" to={navitem.link}>{navitem.name}</Link>
        </motion.li>
    ))}
    </ul>
  )
}
