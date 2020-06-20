import React, { useState } from 'react';


const Review = () => {
    const reviews = {
        0: {
            client: 'Ashley Smith',
            review: 'Loved the party they helped me plan!'
        },
        1: {
            client: 'Jane Doe',
            review: 'Such a special baby shower!'
        },
        2: {
            client: 'John Doe',
            review: 'everyone loved the birthday party!'
        },
        3: {
            client: 'Ann Taylor',
            review: 'Such great planners!'
        }
    }

    const [current, setCurrent] = useState(reviews[0]);

    const [active, setActive] = useState(0)
    
    const handleSetClick = (event) => {
        setCurrent(reviews[event.target.getAttribute('data-review')])
    }

    return (
        <div className='reviewScroll'>
            <h3>What Our Clients Have to Say</h3>
            <p>{current.review}</p>
            <p>{current.client}</p>
            <div className='reviewScroll2'>
                {Object.keys(reviews).map(index => (
                    <span 
                    onClick={event => handleSetClick(event)}
                    data-review={index}
                    key={index} 
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Review