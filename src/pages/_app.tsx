import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultLayout } from '@layout';
import { store } from '@store';

type NextPageWithLayout = NextPage & {
  Layout?: React.FunctionComponent;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutCustom = Component.Layout ?? DefaultLayout;

  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ToastContainer />
        <LayoutCustom>
          <Component {...pageProps} />
        </LayoutCustom>
      </Provider>
    </>
  );
}

export default MyApp;
