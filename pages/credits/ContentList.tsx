import React, { FC } from 'react';
import { MDBRow } from 'mdbreact';
import ContentSingle from './ContentSingle';

const ContentList: FC = () => {
  return (
    <div className="text-center my-5">
      <MDBRow className="d-flex justify-content-center">
        <ContentSingle
          image="/galaxy.jpg"
          title="Photo by Jeremy Thomas on Unsplash"
          link="https://unsplash.com/photos/4dpAqfTbvKA"
        />
        <ContentSingle
          image="/python.jpg"
          title="Photo by David Clode on Unsplash"
          link="https://unsplash.com/photos/cxMJYcuCLEA"
        />
        <ContentSingle
          image="/code.jpg"
          title="Photo by Luca Bravo on Unsplash"
          link="https://unsplash.com/photos/XJXWbfSo2f0"
        />
        <ContentSingle
          image="/house.jpg"
          title="Photo by Jacques Bopp on Unsplash"
          link="https://unsplash.com/photos/Hh18POSx5qk"
        />
        <ContentSingle
          image="/lock.jpg"
          title="Photo by iMattSmart on Unsplash"
          link="https://unsplash.com/photos/Vp3oWLsPOss"
        />
      </MDBRow>
    </div>
  );
};
export default ContentList;
