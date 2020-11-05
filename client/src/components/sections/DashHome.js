import React, {useState, useEffect} from "react";
import MeterGauge from "./MeterGauge"
import ScoreHistory from "./ScoreHistory"
import ResultsDetail from "./ResultsDetail"
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckIcon from '@material-ui/icons/Check';
// import { Link } from "react-router-dom";
import "./DashHome.css"
import { fetchAllRisk, fetchExposedPasswords } from "../../redux/actions/user_action";
import { connect } from "react-redux";


function DashHome(props) {
	const [bname, setBname] = useState('loading')
	const [risk, setRisk] = useState(0)
	const [passwords, setPasswords] = useState(0)
	const [historyChart, setChart] = useState([])
	const [modal, setModal] = useState(false)
	const [resultsModal, setResultsModal] = useState(false)

	useEffect(()=>{

		setRisk(props.riskValue)
		setPasswords(props.exposedPasswords)
		setChart(props.historyChart)
		if(localStorage.getItem('user')){
			let id=JSON.parse(localStorage.getItem('user')).id
			props.passwords(id)
			props.risk(id)
			setBname(JSON.parse(localStorage.getItem('user')).bname)
		}
	},[localStorage.getItem('user'), props.riskValue, props.exposedPasswords])

	return (
			<div className="dashboard">
			<ScoreHistory chartValues={historyChart} open={modal} setModal={setModal}/>
			<ResultsDetail data={""} open={resultsModal} setModal={setResultsModal}/>
			{console.log("USER IN DASHBOARD_____", bname, "RISSKKK", risk)}
				<div className="welcome_section">
					<div className="welcome_bname">
						<p>Welcome Back,</p>
						<p className="bname">{bname}</p>
						<button onClick={()=>setModal(true)}>Score History</button>
					</div>
					<div className="risk_section">
						<MeterGauge risk={risk}/>
						<p className="risk_value">{risk}</p>
						<div className="risk_legend">
							<p className="high_risk_value">0-40<span>High</span></p>
							<p className="medium_risk_value">40-80<span>Medium</span></p>
							<p className="low_risk_value">80-100<span>Low</span></p>
						</div>
					</div>
				</div>

				<div className="section2">
					<div className="exposed_data sub_section">
						<p>Data and Information Exposed</p>
						<div className="exposed_items">
							<div className="exp_item">
								<h1>00</h1>
								<p>files exposed</p>
							</div>
							<div className="exp_item">
								<h1>00</h1>
								<p>folders exposed</p>
							</div>
							<div className="exp_item">
								<h1 style={{color:`${passwords==="00"?"rgb(31, 230, 31)":"red"}`}}>{passwords}</h1>
								<p>passwords exposed</p>
							</div>
							{/* {console.log("HISTROY in components>>>>", historyChart)} */}
							{/* {console.log("PASswrod in components>>>>", passwords)} */}
							{/* {console.log("RIsks in components>>>>", risk)} */}
						</div>
						<div className="button_div">
							<button className="exposed_button">View Exposed Data</button>
						</div>
					</div>

					{/* results sub section */}
					<div className="results_detail sub_section">
						<p>Vulnerability Scanning and Patch-Ups</p>
						
						<div className="results_body">
							<div className="body_left">
								<div className="res_icon">
									<AutorenewIcon fontSize="large"/>
								</div>
								<div className="inprogress">
									<h1>23</h1>
									<p>Patch-ups in progress</p>
								</div>
							</div>
							<div className="body_right">
								<div className="res_icon">
									<CheckIcon fontSize="large"/>
								</div>
								<div className="patched">
									<h1>13</h1>
									<p>Vulnerabilities patched</p>
								</div>
							</div>
						</div>

						<div className="button_div">
							<button onClick={()=>setResultsModal(true)} className="results_button">See Results Detail</button>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div className="section3">
					<div className="live_monitoring sub_section"></div>
					<div className="security_tools sub_section"></div>
				</div>

				{/* section 4 */}
				<div className="section4">
					<div className="live_monitoring sub_section"></div>
					<div className="security_tools sub_section"></div>
				</div>
			</div>
	);
}

const mapStateToProps=(state)=>{
	return {
		riskValue: state.risk,
		exposedPasswords: state.passwords,
		historyChart: state.scoreHistory
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		risk: (id)=>dispatch(fetchAllRisk(id)),
		passwords: (id)=>dispatch(fetchExposedPasswords(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(DashHome);
