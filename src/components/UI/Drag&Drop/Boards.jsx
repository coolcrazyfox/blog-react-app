import React from 'react'


const Boards = () => {
    const [boards, setBoards]= useState([
        {id: 1, title: 'To do', items: [{id: 1, title: 'Go to shop'}, {id: 2, title: 'Buy a SSD'}] },
        {id: 2, title: 'Check on', items: [{id: 3, title: 'Go to shop'}, {id: 4, title: 'Buy a SSD'}]},
        {id: 3, title: 'Made', items: [{id: 5, title: 'Go to shop'}, {id: 6, title: 'Buy a SSD'}]}
    ])

    const dragOverHandler=(e, board, item)=>{

    }
  return (
    <div className='board_form'>
    {boards.map(board =>(
        <div className='board'>
            <div className='board_title'> {board.title}</div> 
            {board.items.map(item =>(
                <div 
                    onDragOver = {(e) => dragOverHandler(e, board, item)}
                    onDragStart = {(e) => dragStartHandler(e, board)}
                    onDragLeave = {(e) => dragLeaveHandler(e)}
                    onDragEnd = {(e) => dragEndHandler(e)}                    
                    onDrop = {(e) => dropHandler(e, board)}
                    draggable = {true}
                    className='item'
                >
                    {items.title}
                </div>
            ))}

        </div>
    ))}
      
    </div>
  )
}

export default Boards
