import React from 'react'

const SuperTextarea = ({...props}) => {
  return (
    <div className={s.form_textarea}>
        <textarea className={s.textarea} {...props}></textarea>
      
    </div>
  )
}

export default SuperTextarea
