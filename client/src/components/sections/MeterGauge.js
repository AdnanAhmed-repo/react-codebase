import React from 'react'
import "./MeterGauge.css"

const App=(props)=>{
    let deg = -90 + Number(props.risk)*1.8
    return(
        <div className="risk_container">
            <p className="meter_reading_0">0  </p>
            <div className="metergauge_container">
                <div className="metergauge"></div>
                <div className="metergauge_cover"></div>
                <div className="needle" style={{transform: `rotate(${deg}deg)`}}></div>
            </div>
            <p className="meter_reading">100</p>

        </div>
        
    )
}

export default App