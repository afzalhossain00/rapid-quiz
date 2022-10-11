import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/quizes',
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
      ]
    },
    { path: '*', element: <div className='border rounded-md text-5xl p-20 font-bold'>404 <br /><small className='font-semibold text-3xl'>Oops! Looks like this page doesn't exist.</small></div> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
