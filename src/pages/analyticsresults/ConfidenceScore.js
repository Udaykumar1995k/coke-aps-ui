
const ConfidenceScore = () =>{
    return (
        <div>
            <div className="analytic-results">
                <div className="result-item">
                <p>Confidence Score</p>
                <span>90%</span>
                </div>
                <div className="result-item">
                <p>Calculation Method</p>
                <span>Confidence Score= w1(N)+w2(T)+w3(R)+w3(1/(1+a))</span>
            </div>
            </div>
            <h4>Actual Calculation</h4>
            <div className="analytic-results">
                <div className="result-item">
                <p>N=80 Data Points</p>
                <p>T=300 Days</p>
                <p>R=0.85 </p>
                <p>R=2 </p>
                <p>w1=0.4 w2=0.3 w3 = 0.2 w4=0.1</p>
                <p>ConfidenceScore 90%</p>
                </div>
                <div className="result-item">
                <p>N - No of data Points</p>
                <p>Time Period Covered</p>
                <p>R - Recency Period</p>
                <p>R - Standard Deviation</p>
            </div>
            </div>
        </div>
    )
}

export default ConfidenceScore