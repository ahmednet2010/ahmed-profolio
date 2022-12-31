import React from 'react'
import { motion } from "framer-motion" 
export default function () {
  return (
    <div className='info' >
        <motion.div className='info-title' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
            <h1>I love making things simple, intuitive and expertly crafted!</h1>
        </motion.div>
        <motion.div className='info-text' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.3}}>
            <p className='Hfont'>Product is the vital essence of what i do, truly great product is born of meticulous planning and process. This is where i specialized!</p>
        </motion.div>
        <motion.div className='info-contact row' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.6}}>
            <div className='col'>
              <h2 className='title'>email</h2>
              <p className='text'>info@nafie.com</p>
              <p className='text'>support@nafie.com</p>
            </div>
            <div className='col'>
              <h2 className='title'>Address</h2>
              <p className='text'>941 saqrqorish Road, alandalos,grnata, wa 47122-4194</p>
            </div>
            <div className='col'>
              <h2 className='title'>Phone</h2>
              <p className='text'>(02) 966 202 290</p>
              <p className='text'>(02) 966 202 291</p>
            </div>
        </motion.div>
    </div>
  )
}
