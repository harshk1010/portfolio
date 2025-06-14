import React from 'react'

const ProjectCard = ({
    title,
    description,
    thumbnail,
    link,
    skills,
    gitHub,
    setModalOpen,
    handleClick
}) => {
  return (
    <div onClick={() => handleClick(title, description, thumbnail, skills, link, gitHub)} className='cursor-pointer'>
        <div className='group p-4 pb-6 rounded-xl bg-richgray-700 flex flex-col gap-2 hover:scale-95 transition-all duration-200'>
            <img 
              src={thumbnail} 
              alt={title} 
              className='w-full h-[220px] bg-slate-600 opacity-60 group-hover:opacity-100 transition-all duration-200'
            />
            <h1 className='font-semibold font-inter text-xl md:text-3xl text-secondary-50'>{title}</h1>
            <p className='font-normal text-sm md:text-base text-secondary-50 opacity-80 font-inter line-clamp-3'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
