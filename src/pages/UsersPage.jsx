import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SuperButton from "../components/SuperButton";

import {SiApostrophe,SiMicrodotblog, SiPostman} from "react-icons/si";
import Menu from "../components/Menu";
import SuperInput from "../components/SuperInput";
import {AiOutlineClear} from "react-icons/ai";
import CircleTimerCount from "../components/CircleTimerCount";




const UsersPage = () => {
    const [ seconds, setSeconds ] = React.useState(20);
    const [ timerActive, setTimerActive ] = React.useState(false);
    const [modalActive, setModalActive]=React.useState(false);

    React.useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 100, seconds - 1);
        } else {
            setTimerActive(false);
        }
    }, [ seconds, timerActive ]);


    const [valueTerm, setValueTerm]= useState('')
    const [bodyTerm, setBodyTerm]= useState('')
    const items=[
        {value:'Home', link:'/', icon:<SiApostrophe/>},
        {value:'Blogs', link:'/blogger', icon:<SiMicrodotblog/>},
        {value:'Posts', link:'/posts', icon:<SiPostman/>},

    ]
    const [menuActive,setMenuActive]=useState(false)
    const [active, setActive] = useState(0)
    const title = ['blogs', 'posts',' details']
    const handleOnClick = (index) => {
        setActive(index)

    }
    // add new post
    const addNewPost=(e)=>{
        e.preventDefault()
        setValueTerm(valueTerm)
        setBodyTerm(bodyTerm)
        setModalActive(!modalActive)
        // const newPost={
        //     id: Date.now(),
        //     valueTerm,
        //     bodyTerm
        // }
        // setPosts([...posts, newPost])
        console.log('valueTerm',valueTerm)
    }
    const deleteNewPost=(e)=>{
        e.preventDefault()
        setValueTerm('')
        setBodyTerm('')
        setModalActive(!modalActive)
        // const newPost={
        //     id: Date.now(),
        //     valueTerm,
        //     bodyTerm
        // }
        // setPosts([...posts, newPost])
        console.log('valueTerm',valueTerm)
    }
    return (
        <div className={s.mainn}>
            <form className={s.form}>
                <div className={s.input_block}>
                    <SuperInput
                        value={valueTerm}
                        onChange={e=> setValueTerm(e.target.value)}
                        type="text"
                        placeholder={"Search"}
                    />
                    {valueTerm &&(
                        <span className={s.clear}>
                            <AiOutlineClear onClick={()=>setValueTerm('')}/>
                        </span>
                    )
                    }

                </div>
                <div className={s.input_block}>
                    <SuperInput
                        value={bodyTerm}
                        onChange={e=> setBodyTerm(e.target.value)}
                        type="text"
                        placeholder={"Details"}
                    />
                    {bodyTerm &&(
                        <span className={s.clear}>
                            <AiOutlineClear onClick={()=>setBodyTerm('')}/>
                        </span>
                    )
                    }

                </div>
                <div>
                    <button onClick={addNewPost}>send</button>
                </div>
                <div>
                    <button onClick={()=>setBodyTerm('')}>delete</button>
                </div>
                {/*<SuperButton onClick={addNewPost}> send</SuperButton>*/}
                {/*<SuperButton> cancel</SuperButton>*/}
            </form>
            {modalActive ?( <div className={s.form_modal}>
                <div className={s.circle}>
                    <CircleTimerCount/>
                </div>
                <div>The {valueTerm} will be delete</div>
                <button onClick={deleteNewPost}>cancel</button>
            </div>):<div></div>}
            {/*{valueTerm}*/}
            {/*<br/>*/}
            {/*{bodyTerm}*/}
            {/*<div>*/}
            {/*    {seconds*/}
            {/*        ? <React.Fragment>*/}
            {/*            <button onClick={() => setTimerActive(!timerActive)}>*/}
            {/*                {timerActive ? 'stop' : 'start'}*/}
            {/*            </button>*/}
            {/*            <div>*/}
            {/*                {seconds}*/}
            {/*                <CircleTimerCount/>*/}
            {/*            </div>*/}
            {/*        </React.Fragment>*/}
            {/*        : <button onClick={() => setSeconds(15)}>ещё раз</button>*/}
            {/*    }*/}
            {/*</div>*/}

            {/*<CircleTimerCount/>*/}

            {/*<div>*/}
            {/*    <button className={s.main_btn} onClick={()=>setMenuActive(!menuActive)}>x</button>*/}
            {/*</div>*/}

            {/*<Menu items={items} header={'Menu'}  active={menuActive} setActive={setMenuActive}/>*/}


        </div>
    );
};

export default UsersPage;
