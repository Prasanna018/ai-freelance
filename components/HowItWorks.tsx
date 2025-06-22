import React from 'react'

const HowItWorks = () => {
    return (
        <div className='w-full flex flex-col items-center mt-20 '>
            <div className="border font-bold bg-black border-gray-800 text-white font-primary flex w-fit items-center gap-2 rounded-[26463.9375rem] text-xs leading-[1.0625rem]  md:text-sm px-5 py-[0.56rem]">
                <span>Pick a MCP</span>
                <span>•</span>
                <span>Deploy a Node</span>
                <span>•</span>
                <span>Register</span>
                <span>•</span>
                <span>Run it</span>
            </div>

            <div className='font-bold text-white pt-10 text-4xl'>
                <h1 className="font-primaryFont l:text-[4rem] l:-tracking-[0.1rem] text-center text-[2.5rem] leading-[3rem] font-bold text-white md:leading-[4.2rem]">How it Works</h1>

            </div>
            <span className='text-gray-500 mt-2'>Select from the marketplace, deploy or list nodes built to run:</span>
        </div>
    )
}

export default HowItWorks
