import React, {useState} from 'react';
import s from '../styles/Header.module.css'
import {SiApplemusic} from "react-icons/si";
import {TbMusicOff} from "react-icons/tb";
import useSound from "use-sound";
import sound from '../assets/message-to-bears-mountains.mp3'
const Header = () => {
    const [isActive, setIsActive]=useState(false)
    const [play, {stop}]=useSound(sound)
    const handlePlayMusic=()=>{
        play()
        setIsActive(true)
    }
    const handleStopMusic=()=>{
        stop()
        setIsActive(false)
    }
    return (
        <div className={s.header}>
            <div className={s.title}>
                <h4>Blogger Platform</h4>
                <div className={s.music_box }>
                    <SiApplemusic onClick={handlePlayMusic}  className={!isActive ? s.music: s.music_active}/>
                    <TbMusicOff onClick={handleStopMusic } />
                    {/*<button onClick={()=>stop() }>stop</button>*/}
                </div>
            </div>
        </div>
    );
};

export default Header;
