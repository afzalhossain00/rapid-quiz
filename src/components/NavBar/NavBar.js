import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-slate-500 flex justify-between px-8 h-16 items-center w-11/12 rounded-md mx-auto mb-8 text-white">
            <div>
                <a href='/home' className="btn btn-ghost normal-case text-2xl font-semibold">Rapid Quiz</a>
            </div>
            <div className="text-lg">
                <Link className='mr-4' to='/'>Home</Link>
                <Link className='mr-4' to='/statistics'>Statistics</Link>
                <Link className='mr-4' to='/blogs'>Blog</Link>
            </div>
        </div>
    );
};

export default NavBar;