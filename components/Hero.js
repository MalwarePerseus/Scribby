import React from 'react'

function Hero() {
    return (
        <>
            <div className="flex flex-row my-0 text-slate-600  dark:text-gray-300 pt-5 pb-10">
                <div className="flex flex-row w-1/2 flex-wrap px-10">
                    <div className="m-2 overflow-hidden">
                        <img src='./heroImg_2.png' alt='Stats Team' className='w-64 h-52 rounded-3xl'/>
                    </div>
                    <div className="w-52 h-52 rounded-full border border-black m-2 overflow-hidden bg-black shadow-lg shadow-red-400">
                        <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" alt="Netflix Logo" className='pt-7'/>
                    </div>
                    <div className="w-52 h-52 rounded-full ml-5 m-2 overflow-hidden shadow-lg shadow-blue-500">
                        <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png" className='' alt="Amazon Logo" />
                    </div>
                    <div className="m-2 overflow-hidden">
                        <img src="./heroImg_1.png" alt="Family watches Television" className='w-64 h-56' />
                    </div>
                </div>
                <div className='w-1/2 py-10'>
                    <h1 className="font-[Helvetica] font-light text-8xl mr-9 py-0">
                        One Click Is <br/>All It Takes!
                    </h1>
                    <h2 className="font-light text-4xl mt-2 mb-9 tracking-wide">
                    To endless savings!
                    </h2>
                    <p className="text-2xl mb-0">
                        Scriber is an all in one application which helps 
                        you to connect and monitor all your Rentals 
                        and Subscriptions. 
                        Never waste a penny over unused 
                        subscriptions and pay for those which you love.
                    </p>
                </div>
            </div>  
        </>
    )
}

export default Hero
