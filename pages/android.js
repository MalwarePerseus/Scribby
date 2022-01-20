import React from 'react'
import { ContainerBlock } from '../components'
import Link from 'next/link'
function android() {
    return (
        <>
            <ContainerBlock>
                 <div className='lg:flex flex-row justify-between mx-20'>
                     <div className='mr-0 lg:w-1/2 py-20 mr-10'>
                         <div className='text-slate-600 mt-2 text-4xl lg:text-6xl my-auto whitespace-pre-line font-[cursive] mt-10 dark:text-gray-300'>Get the <span className='text-purple-600'>ease of managing</span> your Subscriptions right from your mobile.</div>
                         <Link href="https://youtu.be/dQw4w9WgXcQ" ><div className='cursor-pointer w-60 mt-20 text-l p-2 rounded-r-full rounded-l-full text-center font-semibold from-purple-500 via-teal-500 to-blue-600 bg-gradient-to-br lg:text-2xl w-80'><span className='animate-pulse'>Download!</span></div></Link>
                     </div>
                     <div className='w-auto rounded-2xl lg:w-1/2 from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-br my-5'>
                         <img src="./scribby_mobile.png" className='h-9/10'></img>
                     </div>
                 </div>
            </ContainerBlock>
        </>
    )
}

export default android