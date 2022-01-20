import React from 'react'
import { ContainerBlock } from '../components'
import Link from 'next/link'
import { withProtected } from "../src/hook/route";

function main() {
    return (
        <>
            <ContainerBlock>
                <div className='pb-24'>
                    <div className="lg:flex justify-start">
                        <Link href='/subscription/netflix'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e6eab654362267.5958694758bbb.jpg' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-red-500'/>
                            </button>
                        </Link>
                        <Link href='/subscription/hulu'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://jewelryecomm.com/wp-content/uploads/2020/09/1.png' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-green-300'/>
                            </button>
                        </Link>
                        <Link href='/subscription/primevideo'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://www.barrettsportsmedia.com/wp-content/uploads/2021/06/Amazon_Prime_Video_tips_1.jpg' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-blue-500'/>
                            </button>
                        </Link>
                        <div className="hidden lg:block relative w-1/12 h-44 border border-r-black border-t-black border-l-transparent border-b-transparent rounded-r-full ml-2 mt-20 -rotate-35 dark:border-r-white border-t-white border-l-transparent border-b-transparent rounded-r-full">
                            <div className="lg:absolute bottom-1 right-5 text-3xl rotate-45">▼</div>
                        </div>
                    </div>
                    <div className="lg:flex justify-end">
                    <Link href='/subscription/gamepass'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://logowiki.net/wp-content/uploads/imgp/X-box-Logo-1-1127.jpg' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-green-600'/>
                            </button>
                        </Link>
                        <Link href='/subscription/hotstar'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-gray-500'/>
                            </button>
                        </Link>
                        <Link href='/subscription/spotify'>
                            <button className="md:w-auto lg:w-3/12 h-60 m-5 rounded-2xl ">
                            <img src='https://www.htxt.co.za/wp-content/uploads/2019/03/spotify-new-logo-header-1068x601.jpg' className='md:w-auto h-60 lg:h-60 rounded-2xl shadow-lg shadow-gray-600'/>
                            </button>
                        </Link>
                    </div>
                </div>  
            </ContainerBlock>
        </>
    )
}

export default withProtected(main);
