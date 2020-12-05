import { MDBRow } from 'mdbreact';
import { FC } from 'react';
import CardContainer from '../../components/CardContainer';
import {
  bootstrapDescription,
  cssDescription,
  gitDescription,
  htmlDescription,
  nodeDescription,
  pythonDescription,
  reactDescription,
  skillsTitle,
  sqlDescription,
  wordpressDescription,
} from './content';
import Skill from './Skill';
import { useLanguage } from '../../contexts/Language';

const SkillsList: FC = () => {
  const { language } = useLanguage();

  return (
    <CardContainer>
      <h2 className="h1-responsive font-weight-bold my-5">
        {skillsTitle[language]}
      </h2>

      <MDBRow className="mb-5">
        <Skill
          fab
          iconName="react"
          color="#00d8ff"
          title="React JS"
          description={reactDescription[language]}
        />
        <Skill
          fab
          iconName="bootstrap"
          color="#563d7c"
          title="Bootstrap"
          description={bootstrapDescription[language]}
        />
        <Skill
          fab
          iconName="node-js"
          color="#639a58"
          title="Node JS"
          description={nodeDescription[language]}
        />
        <Skill
          fab
          iconName="html5"
          color="#f06529"
          title="HTML5"
          description={htmlDescription[language]}
        />
        <Skill
          fab
          iconName="css3"
          color="#29a9df"
          title="CSS3"
          description={cssDescription[language]}
        />
        <Skill
          fab
          iconName="git-alt"
          color="#f05133"
          title="GIT"
          description={gitDescription[language]}
        />

        <Skill
          fab
          iconName="git-alt"
          color="#f05133"
          title="GIT"
          description={gitDescription[language]}
        />

        <Skill
          iconName="database"
          color="#000"
          title="SQL - NoSQL"
          description={sqlDescription[language]}
        />

        <Skill
          fab
          iconName="python"
          color="#a2ce24"
          title="Python"
          description={pythonDescription[language]}
        />
        <Skill
          fab
          iconName="wordpress"
          color="#21759b"
          title="Wordpress"
          description={wordpressDescription[language]}
        />
      </MDBRow>
    </CardContainer>
  );
};

export default SkillsList;
