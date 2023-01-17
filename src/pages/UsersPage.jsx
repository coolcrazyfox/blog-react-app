import React, {useState} from 'react';
import s from '../styles/UsersPage.module.css'
import SuperButton from "../components/UI/SuperButton/SuperButton";
import {SiApostrophe,SiMicrodotblog, SiPostman} from "react-icons/si";
import Menu from "../components/Menu";
import SuperInput from "../components/UI/SuperInput/SuperInput";
import {AiOutlineClear} from "react-icons/ai";
import SuperMessageModal from "../components/UI/SuperMessageModal/SuperMessageModal";
import BooksList from "../components/UI/Books/BooksList";




const UsersPage = () => {
    const [tasks, setTasks]=useState([{text:'1'}])
    const onClickAdd=()=>{
        const text=prompt('Text task')
        setTasks([...tasks, {text}])
    }
    const onClickEdit = (index)=>{
        const text=prompt('New text task')
        setTasks(tasks.map((obj, i)=> {
            if (index===i){
                // obj.text=text
                return {...obj, text: text}
            }
            return obj
        }))
    }
    const onClickRemove =(index)=>{
        setTasks(tasks.filter((_,i)=>i!==index))
    }



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

    const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);
    React.useEffect(() => {
        setTimeout(() => {
            setCountInTimeout(count); // count is 0 here
        }, 3000);
        setCount(5); // Update count to be 5 after timeout is scheduled
    }, []);
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('This will run after 1 second!')
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);

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
            <SuperButton link={'/'}>
                back
            </SuperButton>
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
            {modalActive ?
                ( <SuperMessageModal
                    onClick={deleteNewPost}
                    valueTerm={valueTerm}>
                        delete
                </SuperMessageModal> )
                :<></>
            }
            {/*<div>*/}
            {/*    Count: {count}*/}
            {/*    <br />*/}
            {/*    setTimeout Count: {countInTimeout}*/}
            {/*</div>*/}
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

            <ul>
                {tasks.map((task,i)=>(
                    <li key={i}>
                        {task.text}
                        <button onClick={()=>onClickEdit(i)}>edit</button>
                        <button onClick={()=>onClickRemove(i)}>x</button>

                    </li>
                ))}
            </ul>
            <button onClick={onClickAdd}>Add</button>
            <BooksList/>


        </div>
    );
};

export default UsersPage;
