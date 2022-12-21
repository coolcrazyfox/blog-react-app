import React, {useState} from 'react';
// import { uuid } from 'uuidv4';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import BlogInputForm from "../components/BlogInputForm";


export const initialTasks = [
    {
        id: 1,
        image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        title: 'The best blog in our village',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 2,
        image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
        title: 'Warriors',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 3,
        image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
        title: 'Audience Platform',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        date: '2022-11-19'
    },
    {
        id: 4,
        image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
        title: 'Audience Platform',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...sdfgsdgsd    ',
        date: '2022-11-19'
    },
]
const Blogger = () => {
    const [modal, setModal] = useState(false)
    const [tasks, setTasks] = useState(initialTasks)
    // const [title, setTitle] = useState('')
    // const [image, setImage] = useState('')
    // const [website, setWebsite] = useState('')
    const [text, setText] = useState('')
    // const [date, setDate] = useState('')
    const  [blog, setBlog]=useState({image:'', title: '', text: '', website: '', date: '' })
    const handleSearchChange = (text) => {
        text.preventDefault()
        setText(text)
    }
    //add new blog
    const addNewBlog = (event) => {
        event.preventDefault()
        // const newBlog={
        //     // id: Date.now(),
        //     id: uuid(),
        //     image,
        //     title,
        //     text,
        //     website,
        //     date
        // }
        setTasks([...tasks,{...blog, id:Date.now()}])
        setBlog({image:'', title: '', text: '', website: '', date: '' })

    }
    return (
        <div className={s.main_container}>

            <Header/>
            <NavBar
                // onClick={handleTitleChange}
            />
            <Search onChange={handleSearchChange}/>
            <BlogsList tasks={tasks} setModal={setModal} modal={modal} />
            <SuperModal visible={modal} setVisible={setModal}>
                <BlogInputForm blog={blog} setBlog={setBlog} onChange={addNewBlog}/>

            </SuperModal>

            <Footer/>
        </div>
    );
};

export default Blogger;
