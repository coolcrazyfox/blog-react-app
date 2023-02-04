import React from 'react'
import {CgSun} from 'react-icons/cg'
import {HiMoon} from 'react-icons/hi'
import styled from "styled-components";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Splash = (props) => {
    const changeTheme = () =>{
            if(props.theme === 'light'){
                props.setTheme('dark')
            }else{
                props.setTheme('light')
            }

    }
    const icon = props.theme === 'light' ? <HiMoon size={20}/> : <CgSun size= {40}/>
  return (
    <>
        <Toggle onClick={changeTheme}> 
            {icon}
        </Toggle>
      
    </>
  )
}

export default Splash
