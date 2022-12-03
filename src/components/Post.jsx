import React, {Fragment, useState} from 'react';
import s from "../styles/PostsList.module.css";
import {Link} from "react-router-dom";
import Loader from "./Loader";
import Flip from 'react-reveal/Flip';
import {AiTwotoneEdit, AiTwotoneDelete} from "react-icons/ai";


export const initialPostsTasks = [
    {
        id: 1,
        image: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg',
        text: 'The best blog in our village',
        title: "Let's fly into space",
        date: '2022-11-19'
    },
    {
        id: 2,
        image: 'https://st2.depositphotos.com/2001755/5443/i/600/depositphotos_54431143-stock-photo-beautiful-landscape.jpg',
        text: 'IT industry',
        title: "I'm sitting at work",
        date: '2022-11-19'
    },
    {
        id: 3,
        image: 'https://static8.depositphotos.com/1017908/938/i/450/depositphotos_9385411-stock-photo-dramatic-clouds-with-mountain-and.jpg',
        text: 'Blog of beauties',
        title: "I sell cosmetics",
        date: '2022-11-20'
    },
    {
        id: 4,
        image: 'https://st2.depositphotos.com/2001755/5967/i/450/depositphotos_59677045-stock-photo-beautiful-landscape.jpg',
        text: 'The best blog in our village',
        title: "I'm happy like a child",
        date: '2022-11-22'
    },
    {
        id: 5,
        image: 'https://picsy.ru/images/photos/1200/1/foto-na-avatarku-priroda-28098386.jpg',
        text: 'IT industry',
        title: "Cooking buns",
        date: '2022-11-22'
    },
    {
        id: 6,
        image: 'https://bipbap.ru/wp-content/uploads/2017/04/2-8.jpg',
        text: 'Blog of beauties',
        title: "First day at the office",
        date: '2022-11-23'
    },
]

const Post = () => {
    // const [loading, setLoading]=useState(true)
    const [selected, setSelected] = useState(0)
    const details = initialPostsTasks
    const sortDetails = details[selected]
    const onClickListItem = (i) => {
        setSelected(i)
    }

    // const [tasks, setTasks] = useState(initialPostsTasks)
    // const image= { backgroundImage:`url(${tasks.image})`}
    const handleOnClickEditButton=()=>{

    }
    const handleOnClickDeleteButton=()=>{
        return alert('Delete post')
    }
    return (
        <>
            <section className={s.posts_list}>
                {details.map( (b, i) => {
                        return (
                            <article key={b.id} className={s.post_item}>
                                <article className={s.main_img_box}>
                                    <Flip left>
                                        <div className={s.main_img}
                                             style={{backgroundImage:`url(${b.image})`}}>
                                        </div>
                                    </Flip>
                                </article>
                                <article>
                                    <Flip left>
                                        <div className={s.card_box }>
                                            <div className={s.image_post}
                                                 style={{backgroundImage:`url(${b.image})`}}
                                            ></div>
                                            <div className={s.text_container}>
                                                <div className={s.text_container_header}>
                                                    <Link to={'/postdetails'} >
                                                        <h2 className={s.title}> {b.title}</h2>
                                                    </Link>

                                                </div>
                                                <p>{b.text}</p>
                                                <p>{b.date}</p>
                                            </div>
                                            <div className={s.btns_box}>
                                                <Link to={'/postedit'} >
                                                    <span onClick={()=>onClickListItem(i)}>
                                                        <AiTwotoneEdit/>
                                                    </span>
                                                </Link>

                                                <span onClick={handleOnClickDeleteButton}>
                                                    <AiTwotoneDelete/>
                                                </span>
                                            </div>
                                        </div>
                                    </Flip>
                                </article>



                            </article>
                        )
                    }
                )
                }
            </section>

        </>

    );
};

export default Post;
