import React, {useState} from 'react';
import s from "../../../styles/PostsPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";
import {initialState} from "../../NavBar";
import {initialTasks} from "../Blogs/Blog";
import SelectPosts from "../../SelectPosts";

const PostsPanel = ({theme}) => {
    const [inform,setInform]=useState(initialState)
    const info = inform[2]
    const [detail, setDetail] = useState(initialTasks)
    const card = initialTasks[1]

    return (
        <div className={theme=== 'light' ? s.info_posts : s.info_posts_dark }>
            <div className={s.title_box}>
                <div className={s.title}>{info.title}</div>

            </div>
            <div className={s.box}>
                <SelectPosts/>
            </div>

        </div>
    );
};

export default PostsPanel;
