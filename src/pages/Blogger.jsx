import React, {useState} from 'react';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import BlogInputForm from "../components/BlogInputForm";
import SuperInput from "../components/UI/SuperInput/SuperInput";
import SuperButton from "../components/UI/SuperButton/SuperButton";

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
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [website, setWebsite] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const handleSearchChange = (text) => {
        setText(text)
    }
        //add new blog
    const addNewBlog = (event) => {
        event.preventDefault()
    }
    return (
        <div className={s.main_container}>

            <Header text={text}/>
            <NavBar
                // onClick={handleTitleChange}
            />
            <Search onChange={handleSearchChange}/>
            <BlogsList tasks={tasks} setModal={setModal} modal={modal}/>
            <SuperModal visible={modal} setVisible={setModal}>
                <form >
                    <SuperInput
                        type={'text'}
                        placeholder={"Image link"}
                        value={image}
                        onCnange={e=> setImage(e.target.value)}
                    />
                    <SuperInput
                        type={'text'}
                        placeholder={"Title"}
                        value={title}
                        onCnange={e=> setTitle(e.target.value)}
                    />
                    <SuperInput
                        type={'text'}
                        placeholder={"Text"}
                        value={text}
                        onCnange={e=> setText(e.target.value)}
                    />
                    <SuperInput
                        type={'text'}
                        placeholder={"Website"}
                        value={website}
                        onCnange={e=> setWebsite(e.target.value)}
                    />
                    <SuperInput
                        type={'text'}
                        placeholder={"yyyy-mm-dd"}
                        value={date}
                        onCnange={e=> setDate(e.target.value)}
                    />
                    <SuperButton onClick={addNewBlog}>Add</SuperButton>
                </form>
                {/*<BlogInputForm*/}
                {/*    image={image}*/}
                {/*    setImage={setImage}*/}
                {/*    title={title}*/}
                {/*    setTitle={setTitle}*/}
                {/*    text={text}*/}
                {/*    setText={setText}*/}
                {/*    website={website}*/}
                {/*    setWebsite={setWebsite}*/}
                {/*    date={date}*/}
                {/*    setDate={setDate}*/}
                {/*/>*/}
            </SuperModal>

            <Footer/>
        </div>
    );
};

export default Blogger;
