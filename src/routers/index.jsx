/* eslint-disable no-unused-vars */
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages';
import About from '../pages/About';
import RootLayout from '../layouts/RootLayout';
import Blog from '../pages/blogs';
import SinglePost from '../pages/blogs/_id';

export const router = createBrowserRouter([
    // below is the list of routing system, the the url just "/", so we will redirect to home
    {
        path: '/',
        // implement layout like navbar or other here, the purpose is, this layout wouldn't reloaded when navigate to other page
        element:<RootLayout />,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                // the :id is come from _id.jsx in the in api route
                path: '/blog/:id',
                element: <SinglePost/>
            },
        ]
    }

    
])