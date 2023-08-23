import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import '../index.css'
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import '../App.scss'
import Projects from '../components/Projects/Projects';



export const router= createBrowserRouter([
    {
        path: "/",
        element: (
                <Layout/>
        ),
        children:[
            {
                path: "",
                element: <Home/>,

            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/projects",
                element: <Projects/>
            }
        ]
    }
]);
