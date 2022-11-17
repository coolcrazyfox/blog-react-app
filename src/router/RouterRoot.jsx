import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "../pages/Hero";
import UsersPage from "../pages/UsersPage";
import RegistrationPage from "../pages/RegistrationPage";
import Blogger from "../pages/Blogger";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";

export const PATH ={
    USERS:'/users',
    HERO: '/',
    REGISTRATION:'/registration',
    BLOGGER: '/blogger',
    POSTS: '/posts',
    SETTINGS: '/settings'
}
const RouterRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/blogger'} element={<Blogger/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>

        </div>
    );
};

export default RouterRoot;
