import React from 'react';

const TopicDetails = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div className='border rounded bg-slate-200 text-center mb-10'>
            <img className='h-64 mx-auto w-10/12 mt-2' src={logo} alt="" />
            <h2 className='text-xl my-2 font-bold'>{name}</h2>
            <p className='mt-2'><small>Total Question: {total}</small></p>
            <button className='bg-slate-500 hover:bg-slate-600 rounded-md p-2 my-4 text-white font-semibold'>Start Practice</button>
        </div>
    );
};

export default TopicDetails;