import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections         <Testimonial />

import HeroFull from '../components/sections/HeroFull02';
//import Testimonial from '../components/sections/Testimonial';
import Team from '../components/sections/Team';
import GenericSection from '../components/sections/GenericSection';
import Roadmap from '../components/sections/Roadmap';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {  

    const genericSection01Header = {
      title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection02Header = {
      title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection03Header = {
      title: 'Modal - Lorem ipsum is placeholder text commonly used.'
    }    

    const genericSection04Header = {
      title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
    }

    return (
      <React.Fragment>
        <Team topDivider />

        
       

              

             

        <Roadmap topDivider />
        <Cta split />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default Secondary;