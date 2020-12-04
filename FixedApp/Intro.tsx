import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from 'mdbreact';
import React, { FC } from 'react';
import { introButton, introDescription } from './content';
import LanguageSwitch from '../components/LanguageSwitch';
import { useLanguage } from '../contexts/Language';

const Intro: FC = () => {
  const { language } = useLanguage();
  return (
    <>
      <MDBView src="galaxy.jpg">
        <MDBMask className="rgba-black-strong d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">
                  Thiago
                  {`\n`}
                  <span className="light-steel-text font-weight-bold">
                    Santana
                  </span>
                </h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-3 pb-md-5 pb-sm-3 pb-3 white-text font-weight-bold">
                  {introDescription[language]}
                </h5>
                <MDBBtn
                  social="li"
                  className=""
                  size="lg"
                  href="https://www.linkedin.com/in/thiago-santana-956653178/"
                  target="_blank"
                >
                  <MDBIcon fab icon="linkedin" className="mr-1" />{' '}
                  {introButton[language]}
                </MDBBtn>

                <LanguageSwitch />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>

      <div id="intro-end" />
    </>
  );
};

export default Intro;
