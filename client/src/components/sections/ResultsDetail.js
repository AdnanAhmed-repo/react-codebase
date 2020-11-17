import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckIcon from '@material-ui/icons/Check';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./ResultsDetail.css"

Modal.setAppElement('#root')


const App=(props)=>{

    return(
            <Modal  isOpen={props.open} onRequestClose={()=>props.setModal(false)}>
                {console.log('vuls in modal%%%%%%%%%%', props.data.vulPatched)}
                <button className="modal_close" onClick={()=>props.setModal(false)}>x</button>
                <Tabs>
                    <TabList >
                        <Tab>
                            <div className="body_left tab1">
								<div className="res_icon tab_icon">
									<AutorenewIcon fontSize="large"/>
								</div>
								<div className="inprogress">
									<p>Patch-ups in progress</p>
								</div>
							</div>
                        </Tab>
                        <Tab>
                            <div className="body_right tab1">
								<div className="res_icon tab_icon">
									<CheckIcon fontSize="large"/>
								</div>
								<div className="patched">								
									<p>Vulnerabilities patched</p>
								</div>
							</div>
                        </Tab>
                    </TabList>
                        
                    <TabPanel>
                        {props.data.vulInProgress&&props.data.vulInProgress.length?
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.data.vulInProgress.map(ele=><tr>
                                            <td>{ele.vulName}</td>
                                            <td>{ele.vulDesc}</td>
                                            <td>{ele.vulType}</td>
                                            <td>paid</td>
                                        </tr>)}
                                        
                                    </tbody>
                                </table>
                            </div> : <h1>No data</h1>
                        }
                        
                    </TabPanel>
                    <TabPanel>
                        {props.data.vulPatched&&props.data.vulPatched.length?
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.data.vulPatched.map(ele=><tr>
                                            <td>{ele.vulName}</td>
                                            <td>{ele.vulDesc}</td>
                                            <td>{ele.vulType}</td>
                                            <td>paid</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div> : <h1>No data</h1>
                        }
                    </TabPanel>
                </Tabs>
            </Modal>    
    )
}

export default App