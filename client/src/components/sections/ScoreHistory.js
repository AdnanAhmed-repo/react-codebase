import React from "react"
import Modal from "react-modal"
import {Line} from "react-chartjs-2"
import "./ScoreHistory.css"

Modal.setAppElement('#root')

const chartData=(arr)=>{
    let labels = ['day1']
    let points = [100]
    for(let i=0;i < arr.length;i++){
        labels.push(`day${i+2}`)
        points.push(arr[i])
    }
    return [labels, points]
}

const App=(props)=>{
    const [labels, points] = chartData(props.chartValues)
    const data = {
        labels: labels,
        datasets:[
            {
                label: 'Risk Score',
                data: points,
                borderColor: 'rgba(0, 125, 228, 0.4)',
                backgroundColor: 'rgba(143, 204, 255, 0.068)',
                pointBackgroundColor: 'rgb(52, 248, 255)',
                pointBorderColor: 'rgba(191, 52, 255, 0.726)'
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Risk Score History'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min: 0,
                        max: 100,
                        stepSize: 10
                    }
                }
            ]
        }
    }
    return(
            <Modal  isOpen={props.open} onRequestClose={()=>props.setModal(false)}>
                <button className="modal_close" onClick={()=>props.setModal(false)}>x</button>
                <div className="graph_container" onClick={()=>props.setModal(false)}>
                    <div className="chart">
                        <Line data={data} options={options}/>
                    </div> 
                </div>
            </Modal>    
    )
}

export default App