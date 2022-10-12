import React from 'react';

const TopicDetails = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div className='border rounded'>
            <h2 className='text-xl my-4'>Name: {name}</h2>
            <img className='h-64 mx-auto w-full' src={logo} alt="" />
            <p className='mt-4'>Question: {total}</p>
            <button className='bg-slate-500 hover:bg-slate-600 rounded-md p-2 my-4 text-white font-bold'>Start Quiz</button>
        </div>
    );
};

export default TopicDetails;