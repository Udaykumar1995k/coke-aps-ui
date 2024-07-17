import './Card.css'
const Cards = ({cards, maxWidth, minHeight,bgColor}) =>{

    return (
        <div className="card-grid-container" style={{maxWidth:maxWidth}}>
            <div className="card-grid" >
            {cards.map((card,index)=>(
                <div className="card" key={index} style={{minHeight:minHeight, background:bgColor}}>
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