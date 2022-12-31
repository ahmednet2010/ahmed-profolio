import React, { useState } from 'react'
import { motion } from "framer-motion"
import AsideInfo from '../components/AsideInfo'
import Socialsicon from '../components/Socialsicon'

export default function () {
  const [open, setopen] = useState(false)
  const openAside = () => {
    setopen(!open)
  }
  return (
    <motion.aside 
    className={`d-none d-md-block p-2 ${open? "open":""}`}
    initial={{x:"-50vw",right:"90%"}} 
    animate={open? "open":"close"}
    variants={{open:{x:0,right:0},close:{x:0,right:"90%"}}}
    transition={{type:"spring", stiffness:130, duration:1}}>
      <div className='container'>
          <button onClick={openAside} type='button'>
            <i className="fa-solid fa-bars-staggered fa-2x"></i>
          </button>
          {open && <AsideInfo/>}
        <div className='aside-icons'>
          <Socialsicon/>
        </div>
      </div>
    </motion.aside>
  )
}
