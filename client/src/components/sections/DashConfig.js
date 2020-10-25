import React, {useState, useEffect} from "react";
import "./DashConfig.css";
import {connect} from 'react-redux'
import {fetchAllConfig, addDeviceConfig, addEmailConfig, addUrlConfig} from '../../redux/actions/user_action'
// import Modal from "../elements/Modal";
function DashConfig(props) {

	const [addUrl, setAddUrl] = useState({url:""})
	const [addDevice, setAddDevice] = useState({data:{
		deviceName:"",
		port:"",
		ipAddress:"",
		macAddress:"",
		password:""
	}})
	const [addEmail, setAddEmail] = useState({email:""})
	const [user, setUser] = useState({userId:props.userId})
	
	useEffect(()=>{
		props.fetchConfig(user);
	}, [addUrl, addDevice, addEmail])

	const inputHandler=(e)=>{
		if(e.target.name==="email"){
			setAddEmail({...addEmail, email:e.target.value})
		} else {
			setAddUrl({...addUrl, url:e.target.value})
		}
	}
	const deviceInputHandler=(e)=>{
		setAddDevice({...addDevice, data: {...addDevice.data, [e.target.name]:e.target.value}})
	}

	const handleAddSubmit=(e)=>{
		switch (e.target.name) {
			case "addUrl":
				props.addUrl({...user,url:addUrl.url})
				setAddUrl({...addUrl, url:""})
				break;
				case "addDevice":
					props.addDevice({...addDevice.data, ...user})
					setAddDevice({...addDevice, data: {...addDevice.data,deviceName:"",port:"",ipAddress:"",macAddress:"",password:"" }})
					break;
					case "addEmail":
						props.addEmail({...user,email:addEmail.email})
						setAddEmail({...addEmail, email:""})
						break;
			default:
				break;
		}
	}


	return (
		<div className="configure">
			<div className="urls_table">
				<div className="table_header">
					<h2>Urls And IP Addresses</h2>
					<button onClick={handleAddSubmit} name="addUrl">+ Add</button>
				</div>
				{props.config.userUrls&&props.config.userUrls.length?<div className="allUrls">	
					{props.config.userUrls.map(u=><p key={u.id}>{u.url}</p>)}
				</div> : <div className="allUrls">No Records Found</div>}
				
				<input className="singleInput" name="url" onChange={inputHandler} value={addUrl.url} type="text" placeholder="Enter a Url or Ip Address" />
			</div>

			{/* devices table */}
			<div className="devices_table">
				<div className="table_header">
					<h2>Devices, Appliances and Equipments</h2>
					<button onClick={handleAddSubmit} name="addDevice">+ Add</button>
				</div>
				<div className="allUrls">
					<div className="devices_headings">
						<p className="p1">Device Name & Type</p>
						<p className="p2">Ports</p>
						<p className="p3">Ip Address</p>
						<p className="p4">Mac Address</p>
						<p className="p5">Passwords</p>
					</div>
					{props.config.userDevices&&props.config.userDevices.length?	
					props.config.userDevices.map(u=>{
					return(<div key={u.id} className="devices_items">
						<p className="p1">{u.deviceName}</p>
						<p className="p2">{u.port}</p>
						<p className="p3">{u.ipAddress}</p>
						<p className="p4">{u.macAddress}</p>
						<p className="p5">{u.password}</p>
						</div>)
						}
					)
				 : <div className="allUrls">No Records Found</div>}
				</div>
				<div className="devices_items">
					<input onChange={deviceInputHandler} value={addDevice.data.deviceName} name="deviceName" type="text" placeholder="Device Name & Type" />
					<input onChange={deviceInputHandler} value={addDevice.data.port} name="port" type="text" placeholder="Enter port" />
					<input onChange={deviceInputHandler} value={addDevice.data.ipAddress} name="ipAddress" type="text" placeholder="Enter Ip Address" />
					<input onChange={deviceInputHandler} value={addDevice.data.macAddress} name="macAddress" type="text" placeholder="Enter Mac Address" />
					<input onChange={deviceInputHandler} value={addDevice.data.password} name="password" type="text" placeholder="Enter password" />
				</div>
			</div>

			{/* emails table */}
			<div className="emails_table">
				<div className="table_header">
					<h2>E-mails</h2>
					<button onClick={handleAddSubmit} name="addEmail">+ Add</button>
				</div>
				{props.config.userEmails&&props.config.userEmails.length?<div className="allUrls">	
					{props.config.userEmails.map(u=><p key={u.id}>{u.email}</p>)}
				</div> : <div className="allUrls">No Records Found</div>}
				<input className="singleInput" name="email" onChange={inputHandler} value={addEmail.email} type="text" placeholder="Enter an E-mail" />
			</div>
		</div>
	);
}
const mapStateToProps=(state)=>{
	return {
		config: state.config,
		userId: JSON.parse(localStorage.getItem('user')).id
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		fetchConfig: (id)=>dispatch(fetchAllConfig(id)),
		addUrl:(data)=>dispatch(addUrlConfig(data)),
		addDevice:(data)=>dispatch(addDeviceConfig(data)),
		addEmail:(data)=>dispatch(addEmailConfig(data)),

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(DashConfig);
