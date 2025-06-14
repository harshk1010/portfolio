import React from 'react'
import dottedBorder from '../assets/ExperienceVector.png'
import ExperienceCard from './ExperienceCard'
import {experience} from '../data/Experience'
const ExperienceSection = () => {
  return (
    <div className='w-full min-h-full h-fit bg-primary pt-10'>
      <div className='max-w-maxContent mx-auto bg-richgray-700 p-6 rounded-xl relative'>
        <h1 className='text-3xl font-bold text-center text-white mt-6'>Experience</h1>
        <img src={dottedBorder} alt='dotted border for experience section' className='absolute bottom-6 left-6 w-20 md:w-fit md:max-w-fit'/>
        <img src={dottedBorder} alt='dotted border for experience section' className='absolute top-6 right-6 -rotate-180 w-20 md:w-fit md:max-w-fit'/>
        <div className='my-10'>
            {
                experience.map((item, index) => (
                    <ExperienceCard {...item} index={index}/>
                ))
            }
        </div>

      </div>
    </div>
  )
}

export default ExperienceSection
