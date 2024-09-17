import './Card.css'
import React, {useState} from 'react'
const Cards = ({cards,callBackFunction}) =>{
    const [selectedCard,setSelectedCard] = useState(0);
    const handleCardClick = (index,name) =>{
        if(callBackFunction){
            callBackFunction(index,name)
        }
        setSelectedCard(index);
    }
    return (
        <div className="card-grid-container" >
            <div className="card-grid" >
            {cards.map((card,index)=>(
                <div 
                name={card.name}
                className={`card  ${selectedCard === index?'selected': ''}`}
                key={index} 
                onClick={() => handleCardClick(index,card.name)}
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