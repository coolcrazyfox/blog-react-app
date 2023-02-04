import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { ThemeProvider } from 'styled-components';

const LightTheme={
    pageBackGround: 'white',
    titleColor: '#dc658b',
    tagLineColor: 'black'
}
const DarkTheme={
    pageBackGround: '#282c36',
    titleColor: 'white',
    tagLineColor: 'lavender'
}
const themes={
    light: LightTheme,
    dark: DarkTheme,
}

const Hero = () => {
    const [theme, setTheme] = React.useState('light')
    return (
        <div className={s.main_container}>
            <ThemeProvider theme={themes[theme]}>
                <Header theme={theme} setTheme={setTheme}/>
            </ThemeProvider>            
            <NavBar/>
        </div>
    );
};

export default Hero;
