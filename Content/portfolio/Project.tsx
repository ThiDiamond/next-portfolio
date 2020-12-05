import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBView,
} from 'mdbreact';
import Image from 'next/image';
import React, { FC } from 'react';

export type Props = {
  image: string;
  link?: string;
  title?: string;
  description?: string;
  codeLink?: string;
  docLink?: string;
  siteLink?: string;
  iconName: string;
  iconColor?: string;
  fab?: boolean;
};

const Project: FC<Props> = ({
  image,
  link,
  title,
  description,
  codeLink,
  docLink,
  siteLink,
  iconName,
  iconColor,
  fab,
}) => {
  return (
    <MDBCol md="6" xl="5" className="mb-4">
      <MDBView className="overlay rounded z-depth-2 mx-4" waves>
        <Image
          height={250}
          width={400}
          src={image}
          alt={link}
          className="img-fluid"
        />
        <a href={link}>
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">
        <a href={link} className="slate-gray-text">
          <h5 className="font-weight-bold mt-2 mb-3 slate-gray-text">
            <MDBIcon
              fab={fab}
              icon={iconName}
              className="pr-2"
              style={{ color: iconColor }}
            />
            {title}
          </h5>
        </a>
        <p>{description}</p>
        <div>
          {!!codeLink && (
            <MDBBtn href={codeLink} color="primary" rounded>
              <MDBIcon fab icon="github" className="pr-2" />
              Source code
            </MDBBtn>
          )}
          {!!docLink && (
            <MDBBtn href={docLink} color="primary" rounded>
              <MDBIcon icon="book" className="pr-2" />
              Documentation
            </MDBBtn>
          )}
          {!!siteLink && (
            <MDBBtn href={siteLink} color="primary" rounded>
              <MDBIcon icon="home" className="pr-2" />
              Website
            </MDBBtn>
          )}
        </div>
      </MDBCardBody>
    </MDBCol>
  );
};

export default Project;
