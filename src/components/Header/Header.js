import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/quizes'>Quiz</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;