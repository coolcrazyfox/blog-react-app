import React from 'react';
import s from "../styles/BlogsList.module.css";
import {Link} from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import {MdAutoDelete} from "react-icons/md";


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

const Blog = (props) => {
    return (
        <>
            <Bounce right>
                <div className={s.blog_item}>
                    <span onClick={()=>props.remove(props.blog)}>
                        <MdAutoDelete/>
                    </span>
                    <div className={s.image_blog}
                         style={{backgroundImage: `url(${props.blog.image})`}}
                        // style={{backgroundImage:`url(${skeletonImage})`}}
                    >
                        {/*<img*/}
                        {/*    // src={b.image}*/}
                        {/*    alt={skeletonImage}*/}
                        {/*/>*/}
                    </div>
                    <div className={s.text_container} >
                        <Link to={'/detblog'}>
                            <h2 className={s.title}> {props.blog.title}</h2>
                            {/*<span>{props.blog.id}</span>*/}
                            {/*<span>{props.blog.date}</span>*/}
                        </Link>

                        <h5>Website:
                            <a href={`${props.blog.website}`}>{props.blog.website}</a>
                        </h5>
                        <p>{props.blog.text}</p>
                    </div>

                </div>
            </Bounce>
        </>

    );
};

export default Blog;
