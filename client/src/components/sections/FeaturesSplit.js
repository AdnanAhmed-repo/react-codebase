import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Built for any organization',
      paragraph: '4 unique sector modules to empower you cybersecurity'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                  Quantitative
                  </h3>
                  <p className="m-0">
                  We give simple quantitative metrics to easily measure and understand the always-changing security of your data, web-apps, endpoints, and internal networks.

We do this by givng you access to uur trademark-pending Security Risk Score and historical score graph to help you better understand where your security is at.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/quant.png')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                  SecurityOps
                  </h3>
                  <p className="m-0">
                  We empower and manage your cybersecurity processes by enabling powerful security modules via your secure dashboard. These include:<br></br>

- Endpoint Security: in which we completely secure each and every endpoint and device in your infstructure. <br></br>
- IT Hygiene: where we keep running scans of your entire national and global networks to make sure the overall network is healthy and strong.<br></br>
- Exposed Information Discoverey Tool: which we use to pinpoint what exact information was stolen in the event of a breach.<br></br>
- Security Toolkit: which is a variety of tools you can delpoy to your infstructure to to specific things, such as DHCP Rogue Server Killing.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/secure.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                  Threat Analysis
                  </h3>
                  <p className="m-0">
                  We pride oursleves in the fact that we are able to include such a powerful feature as this one. Our Threat Analysis module helps empower you security by performing hourly scans of your application urls and IP addresses. In addition, we kill scanned malware. You can see all these actions take place live through a secure window.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/threat.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                  Vulnerabilty Patch-Up

                  </h3>
                  <p className="m-0">
                  Both Pre & Post-Incident Vulnerabilty patch-up is extremely important. It is an enigma why tons of our competitors do not provide it, but thankfully we do. So all you have to do is sit back and relax, while watching us neutralize the nefarious activity and breaches.
<br></br>
In addition, we also provide 24hr support from our dedicated team of information security engineers for your cyber-infastructure.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/aid.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;