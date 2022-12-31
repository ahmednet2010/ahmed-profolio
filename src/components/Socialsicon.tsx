import React from 'react'
import { motion } from "framer-motion"

const socialsMedia = [{icon:"fa-brands fa-xl fa-facebook",name:"facebook",link:"#"},
      {icon:"fa-brands fa-xl fa-twitter",name:"twitter",link:"#"},
      {icon:"fa-brands fa-xl fa-linkedin",name:"linkedin",link:"#"}]

export default function () {
    
  return (
    <div className='social-icons d-block'>
        {socialsMedia.map((media,i)=>(
            <motion.div className='social-icon'
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:0.5,delay:i*0.3}}}
            whileHover={{scale:1.3,transition:{duration:0.5,type:"spring",stiffness:500}}}
            key={i}>
                <a className='social-icon-link' href={media.link} aria-label={media.name} target='_blank'>
                <i className={media.icon}></i>
                </a>
            </motion.div>
        ))}
    </div>
    
  )
}
