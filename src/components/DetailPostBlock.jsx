import React, {useState} from 'react';
import s from "../styles/DetailPostBlock.module.css";
import Bounce from 'react-reveal/Bounce';


const DetailPostBlock = ({onClickListItem, details, sortDetails}) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(0)
    const statePosts = ['for public posts', 'for private posts']
    const sortName = statePosts[selected]
    const onClickListenItem = (index) => {
        setSelected(index)
        setOpen(false)
    }
    console.log('set', setSelected)

    const rootClasses=[s.lis]
    if(open){
        rootClasses.push(s.active)
    }
    const arOptions = ['for public posts', 'for private posts']
    const [value, setValue] = useState('');
    const options = arOptions.map((text, index) => {
        return <option key={index}>{text}</option>;
    });
    const optionsValue = options.map((text, index) => {
        return <option key={index}>{text.name}</option>;
    });

    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.post_info_box}>
                        <img src={sortDetails.image} alt="img"/>
                        <p>Back-end blog</p>
                    </div>
                    <div className={s.title}>
                        <h2>
                            First day at the office
                        </h2>
                        <span onClick={() => setOpen(!open)}>({sortName})</span>
                    </div>
                    {open && (
                        <Bounce top>
                            <div className={s.select_box}>
                                <ul>
                                    {statePosts.map((name, i) => (
                                        <li
                                            key={i}
                                            onClick={() => onClickListenItem(i)}
                                            className={rootClasses.join(' ')}
                                            // className={selected === i ? s.lisActive : s.lis}
                                        >
                                            {name}
                                        </li>)
                                    )}

                                </ul>

                            </div>
                        </Bounce>
                    )
                    }

                    <div className={s.date_info}>
                        12/12/2022 at 15:46:58
                    </div>
                    <div className={s.main_img}>
                        <img src={sortDetails.image} alt="img"/>
                    </div>
                    <textarea className={s.text_form} name="" id="" cols="30" rows="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum quis repellendus sunt veritatis. Accusamus aperiam architecto blanditiis dolores harum impedit minima non quo saepe totam ullam, vel vero voluptatibus.
                    </textarea>

                </div>
            </div>


        </div>
    );
};

export default DetailPostBlock;
