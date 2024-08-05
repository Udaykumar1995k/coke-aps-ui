import './Card.css'
import React, {useState} from 'react'
const Cards = ({cards, maxWidth,bgColor,callBackFunction}) =>{
    const [selectedCard,setSelectedCard] = useState(0);
    const handleCardClick = (index) =>{ 
        setSelectedCard(index);
    }
    return (
        <div className="card-grid-container" style={{maxWidth:maxWidth}}>
            <div className="card-grid" >
            {cards.map((card,index)=>(
                <div 
                className={`card  ${selectedCard === index?'selected': ''}`}
                key={index} 
                style={{ background:bgColor}}
                onClick={() => handleCardClick(index)}
                >
                    <div className="card-header">
                        <h3 >{card.title}</h3>
                    </div>
                    <div className="card-content">
                        <p className="value-number">{card.value}</p>
                       {card.description && <p className="card-description">{card.description}</p>} 
                    </div>
                </div>       
                ))}
            </div>
        </div>
    )
}
export default Cards