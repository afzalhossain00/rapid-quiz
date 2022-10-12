import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetails from '../TopicDetails/TopicDetails';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-16 w-11/12 mx-auto'>
            {
                topics.data.map(topic => <TopicDetails
                    key={topic.id}
                    topic={topic}
                ></TopicDetails>)
            }
        </div>
    );
};

export default Topics;