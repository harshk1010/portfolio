// import React from 'react'
// import react from '../assets/React icon.png'
// import nodejs from '../assets/nodejs.png'
// import java from '../assets/java.png'
// import express from '../assets/expressjs.png'
// import mongodb from '../assets/mongodb.png'
// import myy from '../assets/myy.png'
// import springboot from '../assets/springboot.png'
// import HighlightText from './HighlightText'
// import {motion} from 'framer-motion';

// const SkillSection = () => {

//     const cardVariants ={
//         offscreen: {
//           y: 100
//         },
//         onscreen: {
//           y: 0,
//           transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8
//           }
//         }
//       };
//   return (
//     <div className='min-w-full w-full h-fit sm:h-96 bg-primary pt-8'>
//         <div className='max-w-maxContent h-full bgVector w-full flex flex-col justify-center items-center mx-auto p-6'>
//             <div className='flex flex-col gap-5 w-full'>
//                 <motion.h1 viewport={{ once: true}} initial={{opacity: 0, translateX:-200}} whileInView={{opacity: 1, translateX: 0}} transition={{duration: 1}} className='block sm:hidden font-robo text-2xl font-semibold text-secondary-50'>Skills</motion.h1>
//                 <motion.div  viewport={{ once: true}}  className='w-full h-full flex flex-col gap-6 sm:flex-row sm:flex-wrap items-center justify-between'>
//                     <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants} viewport={{ once: true}}  className='border-secondary-50 rounded-lg min-w-[230px] sm:min-w-[200px] min-h-[100px] flex justify-center items-center px-4 py-2 sm:w-fit h-fit bg-richgray-700 border-[3px] '>
//                         <img src={react} alt='react-icon' />
//                     </motion.div>
//                     <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants} viewport={{ once: true}} className='border-secondary-50 rounded-lg min-w-[230px] sm:min-w-[200px] min-h-[100px] flex justify-center items-center px-4 py-2 sm:w-fit h-fit bg-richgray-700 border-[3px] '>
//                         <img src={java} alt='java-icon' />
//                     </motion.div>
//                     <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants} viewport={{ once: true}} className='border-secondary-50 rounded-lg min-w-[230px] sm:min-w-[200px] min-h-[100px] flex justify-center items-center px-4 py-2 sm:w-fit h-fit bg-richgray-700 border-[3px] ' >
//                         <img src={springboot} alt='springboot-icon' />
//                     </motion.div>
//                     <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants} viewport={{ once: true}} className='border-secondary-50 rounded-lg min-w-[230px] sm:min-w-[200px] min-h-[100px] flex justify-center items-center px-4 py-2 sm:w-fit h-fit bg-richgray-700 border-[3px] '>
//                         <img src={myy} alt='myy-icon' />
//                     </motion.div>

//                 </motion.div>
//                 <div className='w-full h-fit hidden sm:flex sm:flex-row sm:flex-wrap justify-between items-center'>
//                     <div className='min-w-[200px] px-4 py-2 h-fit text-center bg-richgray-700 font-semibold text-2xl border-secondary-50 border-[3px] rounded-lg text-secondary-50'>
//                         <h1><HighlightText text={"#"} />Web</h1>
//                     </div>
//                     <div className='min-w-[200px] px-4 py-2 h-fit text-center bg-richgray-700 font-semibold text-2xl border-secondary-50 border-[3px] rounded-lg text-secondary-50'>
//                         <h1><HighlightText text={"#"} />User-friendly</h1>
//                     </div>
//                     <div className='min-w-[220px] px-4 py-2 h-fit text-center bg-richgray-700 font-semibold text-2xl border-secondary-50 border-[3px] rounded-lg text-secondary-50'>
//                         <h1><HighlightText text={"#"} />Responsive</h1>
//                     </div>
//                     <div className='min-w-[210px] px-4 py-2 h-fit text-center bg-richgray-700 font-semibold text-2xl border-secondary-50 border-[3px] rounded-lg text-secondary-50'>
//                         <h1><HighlightText text={"#"} />Accessibility</h1>
//                     </div>

//                 </div>
//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default SkillSection

import React from 'react'
import react from '../assets/React icon.png'
import java from '../assets/java.png'
import myy from '../assets/myy.png'
import springboot from '../assets/springboot.png'
import HighlightText from './HighlightText'
import {motion} from 'framer-motion';

const SkillSection = () => {
    const cardVariants = {
        offscreen: {
            y: 100
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className='min-w-full w-full h-fit sm:h-96 bg-primary pt-8'>
            <div className='max-w-maxContent h-full bgVector w-full flex flex-col justify-center items-center mx-auto p-6'>
                <div className='flex flex-col gap-5 w-full'>
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{ opacity: 0, translateX: -200 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1 }}
                        className='block sm:hidden font-robo text-2xl font-semibold text-secondary-50'
                    >
                        Skills
                    </motion.h1>
                    <motion.div
                        viewport={{ once: true }}
                        className='w-full h-full flex flex-col gap-6 sm:flex-row sm:flex-wrap items-center justify-between'
                    >
                        {[react, java, springboot, myy].map((icon, index) => (
                            <motion.div
                                key={index}
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={cardVariants}
                                viewport={{ once: true }}
                                className='border-secondary-50 rounded-lg min-w-[230px] sm:min-w-[200px] min-h-[100px] flex justify-center items-center px-4 py-2 sm:w-fit h-fit bg-richgray-700 border-[3px]'
                            >
                                <img
                                    src={icon}
                                    alt={`${icon}-icon`}
                                    style={{ width: '161px', height: '60px', objectFit: 'contain' }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className='w-full h-fit hidden sm:flex sm:flex-row sm:flex-wrap justify-between items-center'>
                        {["Web", "User-friendly", "Responsive", "Accessibility"].map((text, index) => (
                            <div
                                key={index}
                                className='min-w-[200px] px-4 py-2 h-fit text-center bg-richgray-700 font-semibold text-2xl border-secondary-50 border-[3px] rounded-lg text-secondary-50'
                            >
                                <h1><HighlightText text={"#"} />{text}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
