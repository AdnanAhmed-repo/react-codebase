import React from 'react';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:support@networkzen.co">Contact</a>
        </li>
        <li>
          <a href="https://app.termly.io/document/privacy-policy/074b8b61-03d0-48ff-9570-563d89395dab">Privacy Policy</a>
        </li>
        <li>
          <a href="https://app.termly.io/document/terms-of-use-for-saas/e7eff322-ea1d-4de4-ad30-ea911266912e">Terms of Service</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default FooterNav;