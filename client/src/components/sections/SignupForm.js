import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { signupUser  } from '../../redux/actions/user_action'
//import Cards from 'react-credit-cards';

import { connect } from 'react-redux';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class SignupForm extends React.Component {

  constructor(props){
    super(props);
    this.state ={ bname :"Busines Name" ,
                  email :"Email address",
                  password : "Password",
                  name: 'Name on Card',
                  number:'Card Number',
                  expiry: 'Date of Expiration',
                  cvc: 'CVC(3 Digits)',
                  zipcode:'Zipcode',
    
                }
  }

handlechangeall = (event) =>{
  this.setState( { [event.target.name] : event.target.value })
}

  handlesubmit = (event) =>{
    this.props.signup(this.state)
    //alert( JSON.stringify(this.state));
    console.log( JSON.stringify(this.state));
    event.preventDefault();
  }
  
render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Welcome. We exist to make cybersecurity easier.',
    };
   
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form onSubmit = {this.handlesubmit}>
                    <fieldset>
                      <div className="mb-12">
                        <Input
                          label="Business name"
                          type="text"
                          name = "bname"
                          value={this.state.bname}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="email"
                          name="email"
                          label="Email"
                          value={this.state.email}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="password"
                          name="password"
                          label="Password"
                          value={this.state.password}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                          <div className="signin-bottom has-top-divider">
                    <div className="pt-32 text-xs center-content text-color-low">
                      Select Subscription tier (to select, use up & down arrow keys):
                    </div>
                  </div>
                      </div>
                     < div className="radio">
                    <label>
                   <input type="radio" value="option1" checked={true} />
                      ($49/month)
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                    <input type="radio" value="option2" />
                     Basic ($99/month)
                     </label>
                    </div>
                    <div className="radio">
                    <label>
                    <input type="radio" value="option3" />
                    Complete ($249/month)
                   </label>
                    </div>
                    <div className="signin-bottom has-top-divider">
                    <div className="pt-32 text-xs center-content text-color-low">
                      Enter Card Details Here!
                      <div className="mb-12">
                        <Input
                          label="Name on the card"
                          type="text"
                          name = "name"
                          value={this.state.name}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          label="Card Number"
                          name="number"
                          type="text"
                           value={this.state.number}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          label="Date of Expiration"
                          type="text"
                          name = "expiry"
                          value={this.state.expiry}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          label="cvc"
                          type="text"
                          name = "cvc"
                          value={this.state.cvc}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          label="zipcode"
                          type="text"
                          name = "zipcode"
                          value={this.state.zipcode}
                          onChange={this.handlechangeall}
                          labelHidden
                          required />
                      </div>

                      
                    </div>
                  </div>


                      <div className="mt-24 mb-32">
                        <Button color="primary" wide>Register</Button>
                      </div>
                    </fieldset>
                  </form>
                  <div className="signin-bottom has-top-divider">
                    <div className="pt-32 text-xs center-content text-color-low">
                      Already have an account? <Link to="/login/" className="func-link">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  }
SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>{
 return{ signup:(data)=>dispatch(signupUser(data))};
  
}


export default connect(mapStateToProps,mapDispatchToProps)(SignupForm)



