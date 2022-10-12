import React from 'react';

const QuizDetails = ({ quiz }) => {
    const { id, correctAnswer, options, question } = quiz;

    return (
        <div className='w-11/12 mx-auto m-14 mb-6 rounded-lg border  border-gray-200 bg-gray-200'>
            <h2 className='mt-6 text-xl font-semibold bg-slate-400 text-white p-4 rounded'>Question: {question}</h2>
            <div
                className='grid m-16 mb-6 rounded-lg border border-gray-200 shadow-sm  dark:border-gray-700 md:mb-12 md:grid-cols-2'>
                <figure
                    className='flex flex-col m-6 justify-center items-center p-4 text-center rounded-lg bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"'>
                    <blockquote
                        className='m-auto max-w-xl text-gray-500 lg: dark:text-gray-400'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{options[0]}</h3>
                        <input type="radio" name="radio-1" className="radio" checked />
                    </blockquote>
                </figure>
                <figure
                    className='flex flex-col m-6 justify-center items-center p-4 text-center rounded-lg bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"'>
                    <blockquote
                        className='m-auto max-w-xl text-gray-500 lg: dark:text-gray-400'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{options[1]}</h3>
                        <input type="radio" name="radio-1" className="radio" checked />
                    </blockquote>
                </figure>
                <figure
                    className='flex flex-col m-6 justify-center items-center p-4 text-center rounded-lg bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"'>
                    <blockquote
                        className='m-auto max-w-xl text-gray-500 lg: dark:text-gray-400'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{options[2]}</h3>
                        <input type="radio" name="radio-1" className="radio" checked />
                    </blockquote>
                </figure>
                <figure
                    className='flex flex-col m-6 justify-center items-center p-4 text-center rounded-lg bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"'>
                    <blockquote
                        className='m-auto max-w-xl text-gray-500 lg: dark:text-gray-400'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{options[3]}</h3>
                        <input type="radio" name="radio-1" className="radio" checked />
                    </blockquote>
                </figure>

            </div>
        </div>
    );
};

export default QuizDetails;