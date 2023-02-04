import React, {useState} from 'react';
import s from '../styles/Header.module.css'
import {SiApplemusic} from "react-icons/si";
import {TbMusicOff} from "react-icons/tb";
import useSound from "use-sound";
import sound from '../assets/message-to-bears-mountains.mp3';
import Zoom from 'react-reveal/Zoom';
import Loader from "./Loader";
import Splash from './UI/Theme/Splash';

const Header = ({title, theme, setTheme}) => {
    const headerTitle = 'Blogger Platform '
    const [modalActive, setModalActive] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [play, {stop}] = useSound(sound)
    const handlePlayMusic = () => {
        play()
        setIsActive(true)
        setModalActive(true)
    }
    const handleStopMusic = () => {
        stop()
        setIsActive(false)
        setModalActive(false)
    }
    return (
        <div className={theme ==='light' ? s.header: s.header_dark}>
            <div className={s.title}>
                <h4>{headerTitle}</h4>
                <Splash theme= {theme} setTheme= {setTheme}/>
                {/* <div className={s.logo}></div> */}
                <div className={s.music_box}>
                    <Zoom>
                        <div className={s.play_icon}>
                            <SiApplemusic onClick={handlePlayMusic} className={!isActive ? s.music : s.music_active}/>
                            <span className={s.span}>Play </span>

                        </div>
                        <div className={isActive ? s.stop_icon : `${s.stop_icon}${s.active}`}>
                            <TbMusicOff onClick={handleStopMusic}/>
                            <span className={s.span_second}>Stop </span>
                        </div>
                    </Zoom>
                </div>
            </div>
            {/*<Loader/>*/}

        </div>
    );
};

export default Header;
