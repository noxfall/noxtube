import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/global.css';
import Topbar from '../components/Topbar'
import type { AppProps } from 'next/app';
import { wrapper } from '../utils/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <title>NoxTube</title>
      </Head>
      <main className="app w-full h-full flex flex-col justify-center items-center"> 
        <Topbar />
        <Component {...pageProps} />
      </main>
    </Fragment>

  );
};

export default wrapper.withRedux(App);
