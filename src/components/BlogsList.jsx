import React, {useState} from 'react';
import s  from '../styles/BlogsList.module.css'
import Blog from "./Blog";
import SuperModal from "./SuperModal";
const BlogsList = ({tasks}) => {
    const [modal, setModal]=useState(false)
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <Blog tasks={tasks}/>
                </div>
                <SuperModal visible={modal} setVisible={setModal}></SuperModal>
            </div>

        </div>
    );
};

export default BlogsList;
