import React from 'react'

function Hero() {
    return (
        <>
            <div className="flex flex-row my-0 text-slate-600 ">
                <div className="flex flex-row w-1/2 flex-wrap px-10">
                    <div className="w-52 h-56 border border-black ml-5 m-2"></div>
                    <div className="w-52 h-52 rounded-full border border-black m-2"></div>
                    <div className="w-52 h-52 rounded-full border border-black ml-5 m-2"></div>
                    <div className="w-52 h-56 border border-black m-2"></div>
                </div>
                <div className='w-1/2 py-10'>
                    <h1 className="font-[Helvetica] font-light text-8xl mr-9 py-0">
                        One Click Is All It Takes!
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
