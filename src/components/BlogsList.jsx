import React, {useState} from 'react';
import s  from '../styles/BlogsList.module.css'
import Blog from "./Blog";
import SuperModal from "./SuperModal";
import SuperButton from "./SuperButton";
import SuperInput from "./SuperInput";
const BlogsList = ({tasks, modal,  setModal}) => {
    // const [modal, setModal]=useState(false)

    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <SuperButton ><span onClick={()=>setModal(true)}>Create a new blog</span></SuperButton>
                    <Blog tasks={tasks}/>
                </div>
                {/*<SuperModal visible={modal} setVisible={setModal}>*/}
                {/*    <form action="#">*/}
                {/*        <SuperInput/>*/}
                {/*        <SuperInput/>*/}
                {/*        <SuperInput/>*/}
                {/*        <SuperInput/>*/}
                {/*        <SuperButton>Add</SuperButton>*/}
                {/*    </form>*/}
                {/*</SuperModal>*/}
            </div>

        </div>
    );
};

export default BlogsList;
