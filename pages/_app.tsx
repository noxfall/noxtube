import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/global.css';
import Topbar from '../components/Topbar'

interface Props {
  Component: JSX.Element | any;
  pageProps: Props;
  title: string;
};

const App: React.FC<Props> = ({ Component, pageProps, title = 'NoxTube' }): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <main className="app w-full h-full flex flex-col justify-center items-center"> 
        <Topbar />
        <Component {...pageProps} />
      </main>
    </Fragment>

  );
};

export default App;
