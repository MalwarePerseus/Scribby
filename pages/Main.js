import React from 'react'
import { ContainerBlock } from '../components'
import Link from 'next/link'

function main() {
    return (
        <>
            <ContainerBlock>
                <div className='pb-24'>
                    <div className="lg:flex justify-start">
                        <Link href='/subscription/netflix'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                        <Link href='/subscription/hulu'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                        <Link href='/subscription/primevideo'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                        <div className="hidden lg:block relative w-1/12 h-44 border border-r-black border-t-black border-l-transparent border-b-transparent rounded-r-full ml-2 mt-20 -rotate-35">
                            <div className="lg:absolute bottom-1 right-5 text-3xl rotate-45">▼</div>
                        </div>
                    </div>
                    <div className="lg:flex justify-end">
                    <Link href='/subscription/gamepass'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                        <Link href='/subscription/hotstar'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                        <Link href='/subscription/spotify'>
                            <button className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></button>
                        </Link>
                    </div>
                </div>  
            </ContainerBlock>
        </>
    )
}

export default main