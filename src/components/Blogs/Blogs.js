import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-2xl'>Question And Answer:</h3>
            <div className='border rounded-md my-8 p-4'>
                <h4 className='font-semibold'>1. What is the purpose of react router?</h4> <br />
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
            </div>
            <div className='border rounded-md my-8 p-4'>
                <h4 className='font-semibold'>2. How does contex API works?</h4> <br />
                <p>React just maintains a tree for you and it will do efficient diff computations on the nodes. It allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                </p>
            </div>
            <div className='border rounded-md my-8 p-4'>
                <h4 className='font-semibold'>3. Write about useRef hook? </h4> <br />
                <p>React just maintains a tree for you and it will do efficient diff computations on the nodes. It allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                </p>
            </div>
        </div>
    );
};

export default Blogs;