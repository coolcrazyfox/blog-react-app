import React from 'react'
import {CgSun} from 'react-icons/cg'
import {HiMoon} from 'react-icons/hi'

const Splash = (props) => {
    const changeTheme = () =>{
            if(props.theme === 'light'){
                props.setTheme('dark')
            }else{
                props.setTheme('light')
            }

    }
    const icon = props.theme === 'light' ? <HiMoon size={40}/> : <CgSun size= {40}/>
  return (
    <>
        <div onClick={changeTheme}> 
            {icon}
        </div>
      
    </>
  )
}

export default Splash
