import React, {Fragment, useState} from 'react';
import s from "../styles/BlogsList.module.css";

const Blog = () => {
    const initial = [
        {
            id: 1,
            image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
            title: 'The best blog in our village',
            website: 'https://www.youtube.com/',
            text: 'text',
            date: '2022-11-19'
        },
        {
            id: 2,
            image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
            title: 'Warriors',
            website: 'https://www.youtube.com/',
            text: 'text',
            date: '2022-11-19'
        },
        {
            id: 3,
            image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
            title: 'Audience Platform',
            website: 'https://www.youtube.com/',
            text: 'text',
            date: '2022-11-19'
        },
        {
            id: 4,
            image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
            title: 'Audience Platform',
            website: 'https://www.youtube.com/',
            text: 'text',
            date: '2022-11-19'
        },
    ]
    const [tasks, setTask] = useState(initial)
    // const image= { backgroundImage:`url(${tasks.image})`}
    return (
        <Fragment>
            {tasks.map( b => {
                    return (
                        <div key={b.id} className={s.blog_item}>
                            <div className={s.image_blog}
                                style={{backgroundImage:`url(${b.image})`}}
                            ></div>
                            <div className={s.text_container}>
                                <h2> {b.title}</h2>
                                <h5>Website:
                                    <a href={`${b.website}`}>{b.website}</a>
                                </h5>
                                <p>{b.text}</p>
                            </div>

                        </div>
                    )
                }
            )
            }
        </Fragment>

    );
};

export default Blog;
