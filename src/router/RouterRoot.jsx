import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "../pages/Hero";
import UsersPage from "../pages/UsersPage";
import RegistrationPage from "../pages/RegistrationPage";
import Blogs from "../pages/Blogs";
import Posts from "../pages/Posts";

export const PATH ={
    USERS:'/users',
    HERO: '/',
    REGISTRATION:'/registration',
    BLOGS: '/blogs',
    POSTS: '/posts'
}
const RouterRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/blogs'} element={<Blogs/>}/>
                <Route path={'/posts'} element={<Posts/>}/>

            </Routes>

        </div>
    );
};

export default RouterRoot;
