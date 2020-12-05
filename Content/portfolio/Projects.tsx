import { MDBRow } from 'mdbreact';
import React, { FC, useContext } from 'react';

import { projectsTitle } from './content';
import Project from './Project';
import LanguageContext from '../../contexts/Language';

const Projects: FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        {projectsTitle[language]}
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5"></p>

      <MDBRow className="d-flex justify-content-center">
        <Project
          fab
          iconName="node-js"
          iconColor="#639a58"
          title="API Challenge Bossabox"
          image="/code.jpg"
          alt="Code image"
          codeLink="https://github.com/ThiDiamond/BossaBoxBackend/"
          docLink="https://thidiamond-bossabox-api.herokuapp.com/docs"
        />
        <Project
          fab
          iconName="python"
          iconColor="#a2ce24"
          title="URI Online Judge Challenges"
          alt="Snake image"
          image="/python.jpg"
          codeLink="https://github.com/ThiDiamond/Uri"
        />
        <Project
          fab
          iconName="react"
          iconColor="#00D8FF"
          title="Real Estate Website"
          image="/house.jpg"
          alt="House image"
          codeLink="https://github.com/ThiDiamond/RealEstate/"
          siteLink="http://thidiamond.tech/"
        />

        <Project
          iconName="lock"
          iconColor="#FDAC21"
          title="JWT Auth App"
          alt="Lock image"
          image="/lock.jpg"
          codeLink="https://github.com/ThiDiamond/jwt-frontend"
          siteLink="https://thidiamond-jwt-auth.netlify.app/"
        />
        <Project
          iconName="react"
          fab
          alt="Buildbox image"
          iconColor="#00D8FF"
          title="Buildbox Web Challenge"
          image="/buildbox.jpeg"
          codeLink="https://github.com/ThiDiamond/web-developer-challenge"
          siteLink="https://thidiamond-buildbox.netlify.app/"
        />
      </MDBRow>
    </section>
  );
};

export default Projects;
