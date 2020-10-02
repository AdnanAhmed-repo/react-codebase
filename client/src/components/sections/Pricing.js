import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Pricing extends React.Component {

  state = {
    priceChangerValue: "0",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["$", "99", "/month"],
        1: ["$", "1000", "/year"]
      },
      plan2: {
        0: ["$", "199", "/month"],
        1: ["$", "2000", "/year"]
      },
      plan3: {
        0: ["$", "249", "/month"],
        1: ["$", "2500", "/year"]
      }
    }
  }

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
      this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  }

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  }

  getPricingData = (values, set) => {
    return set !== undefined ? values[this.state.priceChangerValue][set] : values[this.state.priceChangerValue];
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
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: '3 different tiers to fit your security needs!'
       
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {pricingSwitcher &&
              <div className="pricing-switcher center-content">
                <Switch
                  checked={this.state.priceChangerValue === '1' ? true : false}
                  onChange={this.handlePricingSwitch}
                  rightLabel="Billed Annually">
                  Billed Monthly
                </Switch>
              </div>
            }
            {pricingSlider &&
              <div className="pricing-slider center-content">
                <label className="form-slider">
                  <span className="mb-16">How many users do you have?</span>
                  <input
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceChangerValue}
                    onChange={this.handlePricingSlide}
                  />
                </label>
                <div ref={this.sliderValue} className="pricing-slider-value">
                  {this.getPricingData(this.state.priceInput)}
                </div>
              </div>
            }
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan1, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan1, 1)}
                        </span>
                        <span className="pricing-item-price-after text-xs">
                          {this.getPricingData(this.state.priceOutput.plan1, 2)}
                        </span>
                      </div>
                      <div className="text-xs text-color-low">
                        Lite
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Security Risk Score™</li>
                        <li className="is-checked">Basic Scan Analysis</li>
                        <li className="is-checked">Limited Testing Tools</li>
                        <li className="is-checked">16-Day Vulnerability Patch Up Guarantee</li>
                        <li>Endpoint Security</li>
                        <li>Access to third-party apps</li>
                        <li>24hr Support</li>
                        <li>Exposed information discoverey</li>
                        <li>IT Hygiene</li>
              
                       






                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup">Get Started</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan2, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan2, 1)}
                        </span>
                        <span className="pricing-item-price-after text-xs">
                          {this.getPricingData(this.state.priceOutput.plan2, 2)}
                        </span>
                      </div>
                      <div className="text-xs text-color-low">
                        Basic
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                      <li className="is-checked">Security Risk Score™</li>
                        <li className="is-checked">Full Scan Analysis</li>
                        <li className="is-checked">Unimited Testing Tools</li>
                        <li className="is-checked">10-Day Vulnerability Patch Up Guarantee</li>
                        <li className="is-checked" >Endpoint Security</li>
                        <li className="is-checked">Limited Access to third-party apps</li> 
                        <li>24hr Support</li>
                        <li>Exposed information discoverey</li>
                        <li>IT Hygiene</li>
                       
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup">Get Started</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-24 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span>
                        <span className="pricing-item-price-after text-xs">
                          {this.getPricingData(this.state.priceOutput.plan3, 2)}
                        </span>
                      </div>
                      <div className="text-xs text-color-low">
                        Complete
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        What’s included
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                      <li className="is-checked">Security Risk Score™</li>
                        <li className="is-checked">Premium Scan Analysis</li>
                        <li className="is-checked">Unimited Testing Tools</li>
                        <li className="is-checked">5-Day Vulnerability Patch Up Guarantee</li>
                        <li className="is-checked" >Endpoint Security</li>
                        <li className="is-checked">Limited Access to third-party apps</li> 
                        <li className="is-checked">24hr Support</li>
                        <li className="is-checked">Exposed information discoverey</li>
                        <li className="is-checked">IT Hygiene</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup">Get Started</Button>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;