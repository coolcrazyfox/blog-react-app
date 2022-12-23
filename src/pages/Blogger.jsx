import React, {useMemo, useState} from 'react';
// import { uuid } from 'uuidv4';
import s from "../styles/Blogger.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import BlogsList from "../components/BlogsList";
import Footer from "../components/Footer";
import SuperModal from "../components/UI/SuperModal/SuperModal";
import BlogForm from "../components/BlogForm";


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
    //select
    const selectValue = [
        {value: 'image', name: 'New blogs first'},
        {value: 'text', name: 'Old blogs first'},
        {value: 'title', name: 'From A to Z'},
        {value: 'website', name: 'From Z to A'},

    ]
    const [selectedSort, setSelectedSort] = useState('')
    const arOptions = ['New blogs first', 'Old blogs first', 'From A to Z', 'From Z to A'];
    const defaultSelectValue = arOptions[0]
    //search
    const [searchQuery, setSearchQuery] = useState('')

    const handlerEnterSearch = (e) => {
        setSearchQuery(e.target.value)

    }
    const [text, setText] = useState('')


    const handleSearchChange = (text) => {
        text.preventDefault()
        setText(text)
    }
    // add new blog
    const createNewBlog = (newBlog) => {
        setTasks([...tasks, newBlog])
    }
    //remove blog
    const removeBlog = (blog) => {
        setTasks(tasks.filter(b => b.id !== blog.id))
    }
    //sort blogs by select values

    const sortedBlogs = useMemo(()=>{
        if (selectedSort) {
            return [...tasks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return tasks
    }, [selectedSort, tasks])


    const  sortedAndSearchedBlogs= useMemo(()=>{
        return sortedBlogs.filter(blog=> blog.title.toLowerCase().includes(searchQuery) )
    }, [searchQuery, sortedBlogs])

    const sortBlogs = (sort) => {
        setSelectedSort(sort)
        // setTasks([...tasks].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }

    return (
        <div className={s.main_container}>

            <Header/>
            <NavBar/>
            <Search
                onChangeSearch={handlerEnterSearch}
                searchQuery={searchQuery}
                onChange={sortBlogs}
                value={selectedSort}
                setSearchQuery={setSearchQuery}
                // defaultValue={defaultSelectValue}
                options={selectValue}

            />
            <BlogsList
                tasks={sortedAndSearchedBlogs}
                // tasks={sortedBlogs}
                remove={removeBlog}
                setModal={setModal}
                modal={modal}
            />
            <SuperModal visible={modal} setVisible={setModal}>
                <BlogForm create={createNewBlog}/>

            </SuperModal>

            <Footer/>
        </div>
    );
};

export default Blogger;
