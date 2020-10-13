import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {profileUser} from '../../redux/actions/user_action'
import { Container,Row,Col,Form } from 'react-bootstrap';
import './DashProfile.css'
const DashProfile = (props)=>{
    const [profile, setProfile] = useState(props.profile)
  
      useEffect(()=>{
          props.fetch(props.id)
          
          setProfile(props.profile)
        },[])
      return (
              <Container>
              <Row>
              <Col>
              <div className="myprofile">
              <h1>My Profile</h1>
              </div>
              {console.log("PROFILE_+_+_+_+_+", profile, props.profile)}
              {console.log("user_+_+_+_+_+", props.id)}
  
              {props.profile && props.profile.message&&<>
              <Form className="form"> 
              <Form.Group as={Row} className="input">
              <Form.Label>
              Business Name  :
              </Form.Label>
              <br/>
              <br/>
              <Form.Control className="input"
              type="text" 
              defaultValue={props.profile.message.bname}/>
              </Form.Group>
              <br/>
              <br/>
              <Form.Group as={Row} className="input">
              <Form.Label >
              Email Address :  
              </Form.Label>
              <br/>
              <br/>
               <Form.Control className="input"
               type="email" 
               defaultValue={props.profile.message.email} />
              </Form.Group>
              <br/>
              <br/>
              <Form.Group as={Row} className="input">
              <Form.Label>
                Subscription Tier :  
                </Form.Label>
                <br/>
              <br/> 
              <Form.Control className="input"
              type="text" 
              defaultValue={props.profile.message.stripeDetails.plan} />
              </Form.Group>
                  </Form></>}
              
             

              </Col>
              
         </Row>
        
          </Container>
      )
      }
    
  
  const mapStateToProps=(state)=>{
      return{
        profile: state.userProfile,
        id:state.user.id
      }
    }
    const mapDispatchToProps=(dispatch)=>{
      return{
        fetch: (id)=>dispatch(profileUser(id))
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(DashProfile);
    
