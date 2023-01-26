import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "../pages/Hero";
import UsersPage from "../pages/UsersPage";
import RegistrationPage from "../pages/RegistrationPage";
import Blogger from "../pages/Blogger";
import PostsPage from "../pages/PostsPage";
import Settings from "../pages/Settings";
import Error404 from "../pages/Error404";
import DetailsBlog from "../pages/DetailsBlog";
import DetailsPost from "../pages/DetailsPost";
import EditPost from "../pages/EditPost";

export const PATH ={
    USERS:'/users',
    HERO: '/',
    REGISTRATION:'/registration',
    BLOGGER: '/blogger',
    POSTS: '/posts',
    DETAILS: '/detblog',
    POST_DETAILS: '/postdetails',
    POST_EDIT: '/postedit',
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
                <Route path={PATH.POSTS} element={<PostsPage/>}/>
                <Route path={PATH.DETAILS} element={<DetailsBlog/>}/>
                <Route path={PATH.POST_DETAILS} element={<DetailsPost/>}/>
                <Route path={PATH.POST_EDIT} element={<EditPost/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>

        </div>
    );
};

export default RouterRoot;
