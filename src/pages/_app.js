import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

// import withReduxStore from 'utils/with-redux-store';
// import { appWithTranslation } from 'utils/with-i18next';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';
import { withTRPC } from '@trpc/next';

import { AppRouter } from '../server/routers/_app';

function getBaseUrl() {
  if (process.browser) return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    );
  }
}

// export default appWithTranslation(withReduxStore(Srr));
export default withTRPC <
  AppRouter >
  {
    config() {
      const url = `${getBaseUrl()}/api/trpc`;
      return {
        url,
      };
    },
    ssr: true,
  }(Srr);
