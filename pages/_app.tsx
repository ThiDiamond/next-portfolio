import React, { FC } from 'react';
import Footer from '../FixedApp/Footer';
import NavRoutes from '../FixedApp/NavRoutes';
import { LanguageProvider } from '../contexts/Language';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Header from '../components/Header';
import { MDBContainer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/styles.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <LanguageProvider>
      <NavRoutes>
        <MDBContainer>
          <Component {...pageProps} />
        </MDBContainer>
      </NavRoutes>
      <Footer />
    </LanguageProvider>
  </>
);

export default App;
