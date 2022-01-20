import React from 'react'
import { ContainerBlock } from '../components'

function Creators() {
    return (
        <>
            <ContainerBlock>
                <div className='w-auto text-center text-5xl text-white lg:text-7xl font-[Helvetica]'>
                Meet The Creators
                </div>
                 <div className='py-20 text-center text-white lg:flex flex-row justify-around'>
                    <div className='widthprofile bg-purple-300 text-4xl border rounded-2xl'>
                        <img src='./Deepak_pfp.png' className='h-1/3 mx-auto rounded-full my-10 shadow-lg shadow-blue-500'></img>
                        <div className='text-xl lg:text-2xl'>
                        Deepak Singh<br></br>
                        Class: 12<br></br>
                        Army Public School Delhi Cantt
                        </div>
                        <div className='text-xl lg:text-2xl pt-20'>
                            Developer | Hacker | Speaker | Writer
                        </div>
                    </div>
                    <div className='widthprofile bg-purple-300  text-4xl border rounded-2xl'>
                        <img src='./Siddharth_pfp.png' className='h-1/3 mx-auto rounded-full my-10 shadow-lg shadow-blue-500'></img>
                        <div className='text-xl lg:text-2xl'>
                        Siddharth Sharma<br></br>
                        Class: 10<br></br>
                        Army Public School Delhi Cantt
                        </div>
                        <div className='text-xl lg:text-2xl pt-20'>
                            Developer | Designer | Speaker | Writer
                        </div>
                    </div>
                 </div>
            </ContainerBlock>
        </>
    )
}

export default Creators