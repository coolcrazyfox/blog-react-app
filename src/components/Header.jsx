import React, {useState} from 'react';
import s from '../styles/Header.module.css'
import {SiApplemusic} from "react-icons/si";
import {TbMusicOff} from "react-icons/tb";
import useSound from "use-sound";
import sound from '../assets/message-to-bears-mountains.mp3'
import Modal from "./Modal";


const Header = () => {
    const [modalActive, setModalActive]= useState(true)
    const [isActive, setIsActive]=useState(false)
    const [play, {stop}]=useSound(sound)
    const handlePlayMusic=()=>{
        play()
        setIsActive(true)
        setModalActive(true)
    }
    const handleStopMusic=()=>{
        stop()
        setIsActive(false)
        setModalActive(false)
    }
    return (
        <div className={s.header}>
            <div className={s.title}>
                <h4>Blogger Platform</h4>
                <div className={s.music_box }>
                    <div className={s.play_icon}>
                        <SiApplemusic onClick={handlePlayMusic}  className={!isActive ? s.music: s.music_active}/>
                        <span className={s.span}>Play music</span>

                    </div>
                    <div className={s.stop_icon}>
                        <TbMusicOff onClick={handleStopMusic } />
                        <span className={s.span_second}>Stop music</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;
