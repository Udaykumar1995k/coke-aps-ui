import Cards from "../../components/common/card/Card";
import './ActionDashboard.css'
const ActionDashboard =()=>{
    const cardData =[{title:"High LT Variation", description:"Materials - Supplier - Plant"},{title:"Medium LT Variation"},{title:"Low LT Variation"}]
    return(
        <div className="container">
            <Cards cards={cardData} maxWidth="1050px"/>
        </div>
    )
}

export default ActionDashboard;