import React from 'react';

const Card = ({ordersPrice}) => {
    return (
        <div>
            <p><b>Total Price:</b></p><p>{ordersPrice}</p>
        </div>
    )
}

export default Card;
