import React from 'react'
import { ContainerBlock } from '../components'
import Link from 'next/link'

function features() {
    return (
        <>
            <ContainerBlock>
                <div className='text-[Helvetica] text-gray-600 dark:text-gray-300'>
                    <div className='flex flex-row w-9/10 mx-auto mb-32 text-[Helvetica] text-gray-600 dark:text-gray-300'>
                        <div className='w-1/2'>
                            <img src='./featureImg1.png' alt='Main Page Image' className='w-2/3 mx-auto h-80 border rounded-2xl'/>
                        </div>
                        <div className='w-1/2 text-6xl'>
                            <div className='w-1/2 mx-auto py-5'>One Stop Destination for All Services</div>
                        </div>
                    </div>
                    <div className='flex flex-row w-9/10 mx-auto my-32'>
                        <div className='w-1/2 text-6xl'>
                            <div className='w-2/3 mx-auto py-10'>A detailed graph of your preferred genres</div>
                        </div>
                        <div className='w-1/2'>
                            <img src='./featureImg2.png' alt='Main Page Image' className='w-2/3 h-80 mx-auto border rounded-2xl'/>
                        </div>
                    </div>
                    <div className='flex flex-row w-9/10 mx-auto mt-32 mb-20'>
                        <div className='w-1/2'>
                            <img src='./featureImg3.png' alt='Main Page Image' className='w-96 h-96 mx-auto border rounded-2xl'/>
                        </div>
                        <div className='w-1/2 text-6xl'>
                            <div className='text-2xl w-2/3 mx-auto py-10'>
                                <div className='text-5xl mb-24'>Detailed Usage Cycle</div>
                                Get Info About Your Monthly Usage cycle, and get an insight about how much time you spend on the service. And whether it is worth paying for or not.
                                </div>
                        </div>
                    </div> 
                    <div className='flex flex-row w-9/10 mx-auto my-32'>
                        <div className='w-1/2 text-6xl'>
                            <div className='w-2/3 mx-auto py-10'>Now available on all your devices</div>
                        </div>
                        <div className='w-1/2'>
                            <img src='./featureImg4.jpg' alt='Main Page Image' className='w-2/3 h-80 mx-auto border rounded-2xl'/>
                        </div>
                    </div>
                </div>
            </ContainerBlock>
        </>
    )
}

export default features