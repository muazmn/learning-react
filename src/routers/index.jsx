/* eslint-disable no-unused-vars */
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages';

export const router = createBrowserRouter([
    // below is the list of routing system, the the url just "/", so we will redirect to home
    {
        path: '/',
        element:<Home/>
    }
])