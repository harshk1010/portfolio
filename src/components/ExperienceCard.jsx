import React from 'react'

const ExperienceCard = ({
    index,
    company,
    designation,
    location,
    duration,
    description
}) => {
  return (
    <div className='grid grid-cols-6 md:grid-cols-12'>
        <div className={`col-span-5 justify-self-end hidden md:flex items-center`}>
            {
                index%2 === 0? (
                    <div className='max-w-[350px] md:max-w-[400px] border-[1px] border-secondary-50 rounded-lg p-3 flex flex-col gap-1 md:p-6'>
                        <h1 className='font-medium text-lg md:text-2xl text-secondary-50 font-robo'>{company}</h1>
                        <div className='w-full flex justify-between font-robo text-xs md:text-base font-medium text-richgray-100'>
                            <p>{designation}</p>
                            <p>{location}</p>
                        </div>
                        <p className='text-xs md:text-base font-robo font-medium text-richgray-100'>{description}</p>
                    </div>
                ):(
                    <div className='w-full h-full flex items-center'>
                        <h1 className='font-robo font-medium text-base md:text-xl text-richgray-100'>{duration}</h1>
                    </div>
                )
            }
        </div>
        <div className=' col-span-1 md:col-span-2 relative justify-self-center'>
            <div className='h-[300px] w-[3px] bg-secondary-50'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-50 w-[30px] h-[30px] md:w-[50px] md:h-[50px]'></div>
        </div>
        <div className='col-span-5 flex items-center'>
            <div className='w-full h-full hidden md:block'>
                {
                    index%2 !== 0? (
                        <div className='max-w-[350px] md:max-w-[400px] border-[1px] border-secondary-50 rounded-lg p-3 flex flex-col gap-1 md:p-6'>
                            <h1 className='font-medium text-lg md:text-2xl text-secondary-50 font-robo'>{company}</h1>
                            <div className='w-full flex justify-between font-robo text-xs md:text-base font-medium text-richgray-100'>
                                <p>{designation}</p>
                                <p>{location}</p>
                            </div>
                            <p className='text-xs md:text-base font-robo font-medium text-richgray-100'>{description}</p>
                        </div>
                    ):(
                        <div className='w-full h-full flex items-center'>
                            <h1 className='font-robo font-medium text-base md:text-xl text-richgray-100'>{duration}</h1>
                        </div>
                    )
                }
            </div>
            <div className='block md:hidden'>
                <div className='max-w-[350px] md:max-w-[400px] border-[1px] border-secondary-50 rounded-lg p-3 flex flex-col gap-1 md:p-6'>
                    <h1 className='font-medium text-lg md:text-2xl text-secondary-50 font-robo'>{company}</h1>
                    <div className='w-full flex justify-between font-robo text-xs md:text-base font-medium text-richgray-100'>
                        <p>{designation}</p>
                        <p>{location}</p>
                    </div>
                        <p className='text-xs md:text-base font-robo font-medium text-richgray-100'>{description}</p>
                    </div>
            </div>
        </div>
                
    </div>
  )
}

export default ExperienceCard
