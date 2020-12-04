import React from 'react';
import { MDBBtn } from 'mdbreact';
import { useLanguage } from '../contexts/Language';
import Image from 'next/image';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const getClassname = (lang: string) => (lang === language ? '' : 'inactive');
  return (
    <div className="d-flex justify-content-center">
      <MDBBtn
        className={getClassname('pt')}
        size="sm"
        onClick={() => setLanguage('pt')}
      >
        <Image src="/brazil.svg" width={40} height={40} />
      </MDBBtn>
      <MDBBtn
        className={getClassname('en')}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        <Image src="/usa.svg" width={40} height={40} />
      </MDBBtn>
    </div>
  );
};

export default LanguageSwitch;
