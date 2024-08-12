import Cards from "../../components/common/card/Card";
import TopSection from "../TopSection";
import './ActionDashboard.css'
const ActionDashboard = () => {
    const cardData = [{ title: "High LT Variation", description: "Materials - Supplier - Plant", value: 32 }, { title: "Medium LT Variation", value: 28 }, { title: "Low LT Variation", value: 50 }]
    return (
        <div>
            <TopSection labelList={[{ title: 'Home', path: '/landing-page' }, { title: 'Dashboard'}]} />
            <div className="container">
                <Cards cards={cardData} />
            </div>
        </div>
    )
}

export default ActionDashboard;