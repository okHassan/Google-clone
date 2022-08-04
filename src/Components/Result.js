import React from 'react'

const Result = ({ link, title, displayLink, snippet }) => {
    return (
        <div className='ml-[200px] mt-[40px] max-w-[600px]'>
            <div>

                <a className='pb-3 text-white' href={link} target="_blank"><span>{displayLink}</span></a>
                <br />
                <a href={link} target="_blank" className='text-[#7CB4F8] font-bold text-[17px]'>{title}</a>
                <h1 className='text-slate-400'>{snippet}</h1>
            </div>
        </div>
    )
}

export default Result