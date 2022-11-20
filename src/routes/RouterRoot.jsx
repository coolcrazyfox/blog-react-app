import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "../pages/Hero";
import UsersPage from "../pages/UsersPage";
import RegistrationPage from "../pages/RegistrationPage";
import Blogger from "../pages/Blogger";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";
import Error404 from "../pages/Error404";
import DetailsBlog from "../pages/DetailsBlog";

export const PATH ={
    USERS:'/users',
    HERO: '/',
    REGISTRATION:'/registration',
    BLOGGER: '/blogger',
    POSTS: '/posts',
    DETAILS: '/detblog',
    SETTINGS: '/settings'
}
const RouterRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.HERO} element={<Hero/>}/>
                <Route path={PATH.USERS} element={<UsersPage/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
                <Route path={PATH.BLOGGER} element={<Blogger/>}/>
                <Route path={PATH.POSTS} element={<Posts/>}/>
                <Route path={PATH.DETAILS} element={<DetailsBlog/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>

        </div>
    );
};

export default RouterRoot;
