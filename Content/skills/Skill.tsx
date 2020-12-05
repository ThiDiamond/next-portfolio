import { MDBCol, MDBIcon } from 'mdbreact';
import React, { FC } from 'react';

export type Props = {
  fab?: boolean;
  iconName: string;
  color: string;
  title: string;
  description: string;
};

const Skill: FC<Props> = ({ fab, iconName, color, title, description }) => (
  <MDBCol md="4" className="mb-5">
    <MDBIcon fab={fab} icon={iconName} size="3x" style={{ color }} />
    <h5 className="font-weight-bold my-4">{title}</h5>
    <p className="grey-text mb-md-0 mb-5">{description}</p>
  </MDBCol>
);

export default Skill;
