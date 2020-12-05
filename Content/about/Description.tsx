import React, { FC, useContext } from 'react';
import CardContainer from '../../components/CardContainer';
import { aboutDescription } from './content';
import LanguageContext from '../../contexts/Language';
import Image from 'next/image';

const Description: FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <CardContainer>
      <Image
        width={200}
        height={200}
        src="/thiago.jpeg"
        className="z-depth-1 rounded-circle"
        alt="Thiago Santana"
      />
      <h2 className="h2-responsive font-weight-bold my-5">Thiago Santana</h2>
      {aboutDescription[language].map((paragraph, idx) => (
        <p
          key={idx}
          className="lead black-text text-justify w-responsive mx-auto"
        >
          {paragraph}
        </p>
      ))}
    </CardContainer>
  );
};

export default Description;
