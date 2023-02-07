import React from 'react'

const DragAndDrop = () => {
    const [cardList, setCardList] =React.useState(
        {id: 1, order: 2, text: 'card #2'},
        {id: 2, order: 1, text: 'card #1'},
        {id: 3, order: 4, text: 'card #4'},
        {id: 4, order: 3, text: 'card #3'}
        )
    const [currentCard, setCurrentCard] = React.useState(null)
        
    const dragStartHandler =(e, card)=>{

    }
    const dragLeaveHandler =(e)=>{}
    const dragEndHandler =(e)=>{}    
    const dragOverHandler =(e)=>{
        e.preventDefault()
    }    
    const dropHandler =(e, card)=>{
        e.preventDefault()
    }            
  return (
    <div className = {s.cards_container}>
        {cardList.map(card => (
            <div className = {s.card_item}                
                onDragStart = {(e) => dragStartHandler(e, card)}
                onDragLeave = {(e) => dragLeaveHandler(e)}
                onDragEnd = {(e) => dragEndHandler(e)}
                onDragOver = {(e) => dragOverHandler(e)}
                onDrop = {(e) => dropHandler(e, card)}
                draggable = {true}> 
                {card.text}
            </div>
        ))}
    </div>
  )
}

export default DragAndDrop
