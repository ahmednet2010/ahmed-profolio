import React from 'react'
import { motion } from "framer-motion" 

const skills = ["تصميم المواقع", "تسويق الكتروني", "برمجه بوت", "مدخل بيانات", "اداره صفحات التواصل الاجتماعي"]
export default function () {
    return (
        <header className="py-3">
            <div className='container'>
                <div className="row">
                    <div className="col-md-8 col-12 ps-4">
                        <motion.h1 initial={{x:"100vh"}} animate={{x:0}} transition={{duration:0.5,type:"spring", stiffness:100}}>اسمي
                        &nbsp;<i>احمد سمير</i></motion.h1>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,ease:"linear"}}>لكن يجب أن أشرح لك منا يقوم بتمارين بدنية شاقة ، إلا للحصول على بعض المزايا منها؟ ولكن من له الحق في أن يخطئ في رجل يختار أن يستمتع بسرور ليس له عواقب مزعجة ، أو من يتجنب الألم الذي لا ينتج عنه متعة؟</motion.p>
                        <motion.button className="hire-me tage" type="button" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,ease:"easeIn"}}>hire me</motion.button>
                    </div>
                </div>
                <div className='row ps-4'>
                    <motion.h2 className='section-title' initial={{x:"100vh"}} animate={{x:0}} transition={{duration:0.5,type:"spring", stiffness:100}}>skills</motion.h2>
                    <div className='col-12 col-md-8'>
                        <div className="tages d-flex flex-row flex-wrap justify-content-around">
                            {skills.map((skill,i) => (
                                <motion.h6 className="tage mx-1" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i/2,duration:0.5,ease:"easeIn"}} key={i}>{skill}</motion.h6>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
