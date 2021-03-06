import React, { FC } from 'react';
import { MDBRow } from 'mdbreact';
import ContentSingle from './ContentSingle';

const ContentList: FC = () => {
  return (
    <div className="text-center my-5">
      <MDBRow className="d-flex justify-content-center">
        <ContentSingle
          image="/galaxy.jpg"
          alt="Galaxy image"
          title="Photo by Jeremy Thomas on Unsplash"
          link="https://unsplash.com/photos/4dpAqfTbvKA"
        />
        <ContentSingle
          image="/python.jpg"
          alt="Snake image"
          title="Photo by David Clode on Unsplash"
          link="https://unsplash.com/photos/cxMJYcuCLEA"
        />
        <ContentSingle
          image="/code.jpg"
          alt="Programming image"
          title="Photo by Luca Bravo on Unsplash"
          link="https://unsplash.com/photos/XJXWbfSo2f0"
        />
        <ContentSingle
          image="/house.jpg"
          alt="House image"
          title="Photo by Jacques Bopp on Unsplash"
          link="https://unsplash.com/photos/Hh18POSx5qk"
        />
        <ContentSingle
          image="/lock.jpg"
          alt="Lock image"
          title="Photo by iMattSmart on Unsplash"
          link="https://unsplash.com/photos/Vp3oWLsPOss"
        />
      </MDBRow>
    </div>
  );
};
export default ContentList;
