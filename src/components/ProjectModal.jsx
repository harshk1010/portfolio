import React from 'react'
import {motion} from 'framer-motion'
const ProjectModal = ({
    name,
    link,
    githubLink, 
    thumbnail, 
    skills, 
    description, 
    setModalOpen
}) => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className='w-screen h-screen z-50 fixed backdrop-blur-lg top-0 left-0'>
        <div className='flex w-full h-full justify-center items-center'>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.5}} className='md:max-w-maxContent w-10/12 h-fit mx-auto relative bg-richgray-700 rounded-xl'>
            <div onClick={()=>setModalOpen(false)} className='cursor-pointer text-secondary-50 absolute top-2 right-6 md:top-6 md:right-10'>
                <span className='w-[2px] md:w-1 h-4 md:h-8 absolute rotate-45 bg-secondary-50 '></span>
                <span className='w-[2px] md:w-1 h-4 md:h-8 absolute -rotate-45 bg-secondary-50'></span>
            </div>
            <div className='p-4 mt-4 md:p-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
              <div className='h-1/2 md:h-full'>
                <img src={thumbnail} alt={name} className='md:w-[400px] rounded-xl h-full object-contain'/>
              </div>
              <div className='flex flex-col h-1/2 md:h-fit gap-2 md:gap-4'>
                <h1 className='font-semibold text-xl md:text-3xl font-mont text-secondary-50'>{name}</h1>
                <p className='font-normal w-full text-sm md:text-base text-secondary-50 opacity-80 font-inter line-clamp-3'>{description}</p>
                <div className='flex flex-row flex-wrap gap-3'>
                  {
                    skills.map((item, index)=>(
                      <div key={index} className='px-3 md:px-5 py-1 flex justify-center items-center
                       md:py-2 border-[1px] border-richblue rounded-full w-fit'>
                        <span className='text-richblue text-xs md:text-lg'>{item}</span>
                      </div>
                    ))
                  }
                </div>
                <div className='h-fit flex justify-normal gap-3 md:gap-3'>
                  <a 
                    href={link} 
                    target='_blank' 
                    rel='noreferrer'
                    className='px-5 py-2 border-[1px] border-richblue text-xs md:text-base text-secondary-50 bg-richblue font-semibold rounded-full w-fit'
                  >View Project</a>
                  <a 
                    href={githubLink} 
                    target='_blank' 
                    rel='noreferrer' 
                    className='px-5 py-2 border-[1px] border-richblue text-xs md:text-base text-secondary-50 bg-richblue font-semibold rounded-full w-fit'
                  >View Code</a>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      
    </motion.div>
  )
}

export default ProjectModal
