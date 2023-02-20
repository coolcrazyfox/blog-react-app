import React from 'react';
import s from '../styles/Hero.module.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { ThemeProvider } from 'styled-components';

export const LightTheme={
    pageBackGround: 'black',
    titleColor: '#ff9900',
    tagLineColor: 'black'
}
export const DarkTheme={
    pageBackGround: 'black',
    titleColor: 'white',
    tagLineColor: 'lavender'
}
 export const themes={
    light: LightTheme,
    dark: DarkTheme,
}

const Hero = () => {
    //navBar
    const [isActive, setIsActive] = useState(false)  
    //theme
    const [theme, setTheme] = React.useState('light')
    return (
        <div className={theme==='light'? s.main_container: s.main_container_dark}>
            <ThemeProvider theme={themes[theme]}>
                <Header theme={theme} setTheme={setTheme}/>
            </ThemeProvider>            
            <NavBar theme={theme}  isActive={isActive} setIsActive= {setIsActive}/>
        </div>
    );
};

export default Hero;
