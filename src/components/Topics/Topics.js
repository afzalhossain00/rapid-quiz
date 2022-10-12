import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetails from '../TopicDetails/TopicDetails';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <div className='bg-gray-100 w-11/12 mx-auto rounded'>
                <div className='class="container flex flex-col items-center px-4 py-16 pb-20 mx-auto text-center lg:pb-32 md:py-32 md:px-10 lg:px-32 text-gray-900"'>
                    <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800'>Welcome To Rapid Quiz</h1>
                    <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>Best Online quiz test platform on Computer science and engineering. You can perform in every topics given here.</p>

                    <div className='flex flex-wrap justify-center'>
                        <a href="/quiz">
                            <button type='button' className='px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200'>Quiz</button>
                        </a>
                        <a href="/learn-more">
                            <button type='button' className='px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900'>Learn More</button>
                        </a>
                    </div>
                </div>

            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-16 w-11/12 mx-auto'>
                {
                    topics.data.map(topic => <TopicDetails
                        key={topic.id}
                        topic={topic}
                    ></TopicDetails>)
                }
            </div>
        </div>
    );
};

export default Topics;