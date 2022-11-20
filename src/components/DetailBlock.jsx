import React, {useState} from 'react';
import s from "../styles/DetailBlock.module.css";
import {initialTasks} from "./Blog";


const DetailBlock = () => {
    const [detail, setDetail] = useState(initialTasks)
    const card = initialTasks[0]
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <div className={s.item_card}>
                        <div className={s.main_icon_box}>
                            <div className={s.main_icon}
                                 style={{backgroundImage:`url(${card.image})`}}>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div style={{backgroundImage:`url(${card.image})`}}>img</div>
                            </div>
                            <div>
                                <div>{card.title}</div>
                                <div>Blog creation date: {card.date}</div>
                                <div>
                                    <a href={`${card.website}`}>{card.website}</a>
                                </div>
                                <div>{card.text}</div>
                            </div>


                        </div>

                    </div>
                    <section className={s.blogs_list}>
                        {detail.map(d => {
                                return (
                                    <article key={d.id} className={s.blogs_list_column}>
                                        <div className={s.blog_box_img} >
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
