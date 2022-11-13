import React from 'react';
import s  from '../styles/BlogsList.module.css'
const BlogsList = () => {
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <div className={s.blog_item}>
                        <div className={s.image_blog}>
                            {/*<img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" alt="img"/>*/}
                        </div>

                        <div className={s.text_container}>
                            <h2> The best blog in our village</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus et, eveniet odio porro quod rem sequi vel. Ad aut culpa deleniti eum ex illo iusto, odit provident repudiandae unde veniam!</p>
                        </div>

                    </div>
                    <div className={s.blog_item}>
                        <div className={s.image_blog}>
                            {/*<img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" alt="img"/>*/}
                        </div>

                        <div className={s.text_container}>
                            <h2> The best blog in our village</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus et, eveniet odio porro quod rem sequi vel. Ad aut culpa deleniti eum ex illo iusto, odit provident repudiandae unde veniam!</p>
                        </div>

                    </div>
                    <div className={s.blog_item}>
                        <div className={s.image_blog}>
                            {/*<img src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg" alt="img"/>*/}
                        </div>

                        <div className={s.text_container}>
                            <h2> The best blog in our village</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus et, eveniet odio porro quod rem sequi vel. Ad aut culpa deleniti eum ex illo iusto, odit provident repudiandae unde veniam!</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlogsList;
