import Head from 'next/head';
import React from 'react';

const Header = () => {
  return (
    <Head>
      <meta name="title" content="Thiago Santana" />
      <meta
        name="description"
        content="A website to show my skills, knowledge and experiences in web development"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="Thiago Santana" />
      <meta
        property="og:description"
        content="A website to show my skills, knowledge and experiences in web development"
      />
      <meta property="og:image" content="/thiago.jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="Thiago Santana" />
      <meta
        property="twitter:description"
        content="A website to show my skills, knowledge and experiences in web development"
      />
      <meta property="twitter:image" content="/thiago.jpeg" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="A website to show my skills, knowledge and experiences in web development"
      />

      <meta name="image" content="/thiago.jpeg" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>Thiago Santana</title>
    </Head>
  );
};

export default Header;
