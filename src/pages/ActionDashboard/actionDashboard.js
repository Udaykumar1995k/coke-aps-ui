import Cards from "../../components/common/card/Card";
const ActionDashboard =()=>{
    const cardData =[{title:"High LT Variation"},{title:"Medium LT Variation"},{title:"Low LT Variation"}]
    return(
        <div>
            <Cards cards={cardData} maxWidth="1050px"/>
        </div>
    )
}

export default ActionDashboard;