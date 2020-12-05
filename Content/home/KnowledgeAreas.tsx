import { MDBRow } from 'mdbreact';
import React, { FC } from 'react';
import CardContainer from '../../components/CardContainer';
import Area from './Area';
import {
  backendDescription,
  databaseDescription,
  frontendDescription,
  knowledgesDescription,
  knowledgesTitle,
} from './content';
import { useLanguage } from '../../contexts/Language';

const KnowledgeAreas: FC = () => {
  const { language } = useLanguage();

  return (
    <CardContainer>
      <h2 className="h1-responsive font-weight-bold my-5">
        {knowledgesTitle[language]}
      </h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">
        {knowledgesDescription[language]}
      </p>
      <MDBRow className="mx-md-5">
        <Area
          iconName="code"
          className="light-steel-blue-text"
          title="Back-end"
          description={backendDescription[language]}
        />
        <Area
          iconName="mobile-alt"
          className="light-steel-text"
          title="Front-end"
          description={frontendDescription[language]}
        />

        <Area
          iconName="database"
          className="slate-blue-text"
          title="Database"
          description={databaseDescription[language]}
        />
      </MDBRow>
    </CardContainer>
  );
};

export default KnowledgeAreas;
