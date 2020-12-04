import { MDBCard, MDBCardBody, MDBContainer } from 'mdbreact';
import React, { FC } from 'react';

const CardContainer: FC = ({ children }) => {
  return (
    <MDBContainer fluid style={{ marginTop: 40 }} className="text-center px-0">
      <MDBCard className="mb-5 px-2 px-md-5 pb-5">
        <MDBCardBody>{children}</MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CardContainer;
