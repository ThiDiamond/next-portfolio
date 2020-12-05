import { MDBCol, MDBIcon } from 'mdbreact';
import React, { FC } from 'react';

export type Props = {
  title: string;
  description: string;
  className: string;
  iconName: string;
};
const Area: FC<Props> = ({ title, description, className, iconName }) => (
  <MDBCol md="4">
    <MDBIcon icon={iconName} size="3x" className={className} />
    <h5 className="font-weight-bold my-4">{title}</h5>
    <p className="grey-text mb-md-0 mb-5">{description}</p>
  </MDBCol>
);

export default Area;
