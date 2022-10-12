import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizes = useLoaderData()
    const quizData = quizes.data.questions;
    ;
    console.log(quizes);

    return (
        <div>
            <h1 className='text-3xl font-bold'>Quiz Topic: {quizes.data.name} </h1>
            {
                quizData.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;