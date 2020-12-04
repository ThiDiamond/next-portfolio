import { MDBFooter } from 'mdbreact';
import React, { FC } from 'react';
const Footer: FC = () => {
  return (
    <MDBFooter color="primary-color">
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()}
        <a href="https://www.linkedin.com/in/thiago-santana-956653178/">
          {' '}
          By Thiago Santana{' '}
        </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
