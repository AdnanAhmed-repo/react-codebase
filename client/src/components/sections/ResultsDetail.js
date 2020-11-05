import React, { useState } from "react"
import Modal from "react-modal"
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckIcon from '@material-ui/icons/Check';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./ResultsDetail.css"

Modal.setAppElement('#root')


const App=(props)=>{
    const [patchedData, setPatchedData] = useState(false)
    const [progressData, setProgressData] = useState(true)
  
    return(
            <Modal  isOpen={props.open} onRequestClose={()=>props.setModal(false)}>
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
                        {patchedData?
                            <div>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Payment</th>
                                    </tr>
                                    <tr>
                                        <td>samplename</td>
                                        <td>some description</td>
                                        <td>sometype</td>
                                        <td>paid</td>
                                    </tr>
                                </table>
                            </div> : <h1>No data</h1>
                        }
                        
                    </TabPanel>
                    <TabPanel>
                        {progressData?
                            <div>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Payment</th>
                                    </tr>
                                    <tr>
                                        <td>samplename</td>
                                        <td>some description</td>
                                        <td>sometype</td>
                                        <td>paid</td>
                                    </tr>
                                </table>
                            </div> : <h1>No data</h1>
                        }
                    </TabPanel>
                </Tabs>
            </Modal>    
    )
}

export default App