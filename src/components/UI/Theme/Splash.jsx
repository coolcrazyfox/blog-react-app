import React from 'react'
import {CgSun} from 'react-icons/cg'
import {HiMoon} from 'react-icons/hi'
import styled from "styled-components";

const Toggle = styled.button`
    cursor: pointer;
    height: 22px;
    width: 22px;   
    position: fixed;
    top: 0;
    left: 0;
    margin: 5px 10px;
    border-radius: 50%;    
    border: none;
    background: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackGround};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 8px, rgba(0, 0, 0, 0.22) 0px 5px 2px;

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
    const icon = props.theme === 'light' ? <CgSun size= {12}/>: <HiMoon size={12}/>
  return (
    <>
        <Toggle onClick={changeTheme}> 
            {icon}
        </Toggle>
      
    </>
  )
}

export default Splash
