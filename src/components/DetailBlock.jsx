import React, {useState} from 'react';
import s from "../styles/DetailBlock.module.css";
import {initialTasks} from "./Blog";
import Zoom from 'react-reveal/Zoom';
import {AiTwotoneEdit} from "react-icons/ai";



const DetailBlock = ({onClickListItem, details, sortDetails}) => {
    const [isOpen, setIsOpen]= useState(true)

    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    {isOpen &&(
                        <div className={s.item_card}>
                            <div className={s.main_icon_box}>
                                <Zoom>
                                    <div className={s.main_icon}
                                         style={{backgroundImage:`url(${sortDetails.image})`}}>
                                    </div>
                                </Zoom>
                            </div>
                            <Zoom>
                                <div className={s.main_blog_box}>
                                    <div className={s.main_blog_box_img}>
                                        <div className={s.main_blog_box_icon} style={{backgroundImage:`url(${sortDetails.image})`}}></div>
                                    </div>
                                    <div className={s.main_blog_form}>
                                        <div className={s.main_blog_title}>{sortDetails.title}
                                            <span
                                                // onClick={()=>onClickListItem(i)}
                                            >
                                                        <AiTwotoneEdit/>
                                            </span>
                                        </div>
                                        <div className={s.main_blog_date}>Blog creation date: &nbsp;&nbsp;{sortDetails.date}</div>
                                        <div className={s.main_blog_web}> Website:
                                            <a href={`${sortDetails.website}`}>{sortDetails.website}</a>
                                        </div>
                                        <div className={s.main_blog_text}>{sortDetails.text}</div>
                                    </div>
                                </div>
                            </Zoom>


                        </div>
                        )
                    }
                    <section className={s.blogs_list}>
                        {details.map((d, i) => {
                                return (
                                    <Zoom>
                                        <article key={d.id} className={s.blogs_list_column} onClick={()=>onClickListItem(i)}>
                                            <div className={s.blog_box_img} onClick={()=>setIsOpen(isOpen)}>
                                                <div className={s.blog_cad_img}
                                                     style={{backgroundImage:`url(${d.image})`}}>

                                                </div>
                                            </div>
                                            <div className={s.blog_title}>{d.title}</div>
                                            <div className={s.blog_text}>{d.text}</div>
                                            <div className={s.blog_date}>{d.date}</div>
                                        </article>
                                    </Zoom>

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
