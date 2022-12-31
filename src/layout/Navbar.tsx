import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion" 
import NavList from '../components/NavList'
import NavbarToggler from "../components/NavbarToggler"
import Socialsicon from '../components/Socialsicon'
interface Props {
  navbar:{link:string,name:string}[]
}
export default function ({navbar}:Props) {
  const [show,setshow] = useState(false)
  const onClick = ()=> {
    setshow(!show)
  }
  return (
    <nav>
      <div className='container'>
      <div className='navbar d-none d-md-block'>
          <NavList navbar={navbar}/>
      </div>
      <div className='d-md-none'>
      <NavbarToggler expanded={show} onClick={onClick} icon="fa-solid fa-bars-staggered"/>
    <AnimatePresence>
      {show  && (
      <motion.div className='navbar-mobile' initial={{scaleY:0, transformOrigin:"top"}} animate={{scaleY:1, transition:{type:"spring", stiffness:250}}} exit={{scaleY:0}} transition={{duration:0.5}}  id="navbarSupportedContent">
        <div className='container'>
          <NavbarToggler expanded={show} onClick={onClick} icon="fa-solid fa-xmark"/>
          <NavList navbar={navbar}/>
          <Socialsicon/>
          </div>
      </motion.div>
      )}
      </AnimatePresence>
      </div>
      </div>
    </nav>
  )
}
