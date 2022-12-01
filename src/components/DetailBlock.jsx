import React, {useState} from 'react';
import s from "../styles/DetailBlock.module.css";
import {initialTasks} from "./Blog";


const DetailBlock = () => {
    const [isOpen, setIsOpen]= useState(false)
    const [selected, setSelected]=useState(0)
    const [detail, setDetail] = useState(initialTasks)
    const card = initialTasks[0]
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    {isOpen &&(
                        <div className={s.item_card}>
                            <div className={s.main_icon_box}>
                                <div className={s.main_icon}
                                     style={{backgroundImage:`url(${card.image})`}}>
                                </div>
                            </div>
                            <div className={s.main_blog_box}>
                                <div className={s.main_blog_box_img}>
                                    <div className={s.main_blog_box_icon}style={{backgroundImage:`url(${card.image})`}}>img</div>
                                </div>
                                <div className={s.main_blog_form}>
                                    <div className={s.main_blog_title}>{card.title}</div>
                                    <div className={s.main_blog_date}>Blog creation date: &nbsp;&nbsp;{card.date}</div>
                                    <div className={s.main_blog_web}> Website:
                                        <a href={`${card.website}`}>{card.website}</a>
                                    </div>
                                    <div className={s.main_blog_text}>{card.text}</div>
                                </div>


                            </div>

                        </div>
                        )
                    }
                    <section className={s.blogs_list}>
                        {detail.map(d => {
                                return (
                                    <article key={d.id} className={s.blogs_list_column} onClick={()=>setSelected(d.id)}>
                                        <div className={s.blog_box_img} onClick={()=>setIsOpen(!isOpen)}>
                                            <div className={s.blog_cad_img}
                                                          style={{backgroundImage:`url(${d.image})`}}>

                                            </div>
                                        </div>
                                        <div className={s.blog_title}>{d.title}</div>
                                        <div className={s.blog_text}>{d.text}</div>
                                        <div className={s.blog_date}>{d.date}</div>
                                    </article>
                                )
                            }
                        )
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DetailBlock;
