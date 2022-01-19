import React from 'react'

function Main() {
    return (
        <>
             <div className="lg:flex justify-start">
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></div>
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></div>
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl "></div>
                 <div className="hidden lg:block relative w-1/12 h-44 border border-r-black border-t-black border-l-transparent border-b-transparent rounded-r-full ml-2 mt-20 -rotate-35">
                    <div className="lg:absolute bottom-1 right-5 text-3xl rotate-45">▼</div>
                 </div>
            </div>
            <div className="lg:flex justify-end">
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl"></div>
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl"></div>
                 <div className="md:w-auto lg:w-3/12 h-60 border border-black m-5 rounded-3xl"></div>
            </div>  
        </>
    )
}

export default Main