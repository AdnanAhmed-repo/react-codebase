import React, {useState, useEffect} from "react";
import MeterGauge from "./MeterGauge"
// import { Link } from "react-router-dom";
import "./DashHome.css"
import { fetchAllRisk } from "../../redux/actions/user_action";
import { connect } from "react-redux";
function DashHome(props) {
	const [bname, setBname]= useState('loading')
	const [risk, setRisk] = useState(0)

	useEffect(()=>{

		setRisk(props.riskValue)

		if(localStorage.getItem('user')){
			let id=JSON.parse(localStorage.getItem('user')).id
			props.risk(id)
			setBname(JSON.parse(localStorage.getItem('user')).bname)
		}
	},[localStorage.getItem('user'), props.riskValue])

	return (
		<div className="dashboard">
		{console.log("USER IN DASHBOARD_____", bname, "RISSKKK", risk)}
			<div className="welcome_section">
				<div className="welcome_bname">
					<p>Welcome Back,</p>
					<p className="bname">{bname}</p>
					<button>Score History</button>
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
				<div className="exposed_data sub_section"></div>
				<div className="results_detail sub_section"></div>
			</div>
			<div className="section3">
				<div className="live_monitoring sub_section"></div>
				<div className="security_tools sub_section"></div>
			</div>

		</div>
	);
}

const mapStateToProps=(state)=>{
	return {
		riskValue: state.risk
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		risk: (id)=>dispatch(fetchAllRisk(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(DashHome);
