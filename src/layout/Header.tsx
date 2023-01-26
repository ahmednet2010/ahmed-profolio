import React from 'react'
import { motion } from "framer-motion" 
import { StaticImage } from "gatsby-plugin-image"

const skills = ["front end", "react", "discord bot", "mobile app", "data entery", "excel vba"]
export default function () {
    return (
        <header className="py-3">
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <motion.h1 initial={{x:"100vh"}} animate={{x:0}} transition={{duration:0.5,type:"spring", stiffness:100}}>My Name is <i>ahmed</i></motion.h1>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,ease:"linear"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur suscipit odio rem, repudiandae vero nemo tempore non illo, accusantium rerum corporis maxime odit ratione? Obcaecati minima molestias cupiditate sapiente repellendus.</motion.p>
                        <motion.button className="hire-me tage" type="button" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,ease:"easeIn"}}>hire me</motion.button>
                    </div>
                </div>
                <div className='row'>
                    <motion.h2 className='section-title' initial={{x:"100vh"}} animate={{x:0}} transition={{duration:0.5,type:"spring", stiffness:100}}>skills</motion.h2>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className="tages d-flex flex-row flex-wrap justify-content-around">
                            {skills.map((skill,i) => (
                                <motion.h6 className="tage" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i/2,duration:0.5,ease:"easeIn"}}>{skill}</motion.h6>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
