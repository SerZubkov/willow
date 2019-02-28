import React, { Fragment } from 'react';
import Router from 'next/router';
import ErrorPage from 'next/error';
import App, { Container } from 'next/app';
// @ts-ignore
import { withMobx } from 'next-mobx-wrapper';
import { configure } from 'mobx';
import NProgress from 'nprogress';
import { Provider, useStaticRendering } from 'mobx-react';

import * as getStores from '../stores';

import Header from '../core/Header/Header';
import Sidebar from '../core/Sidebar/Sidebar';
import { GlobalStyle } from '../styles/globalStyle';
import AppStyle from '../features/App/App';
import Footer from '../core/Footer/Footer';

const isServer = !process.browser;

configure({ enforceActions: 'observed' });
useStaticRendering(isServer); // NOT `true` value

Router.onRouteChangeStart = NProgress.start;
Router.onRouteChangeComplete = NProgress.done;
Router.onRouteChangeError = NProgress.done;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (typeof Component.getInitialProps === 'function') {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const { statusCode } = pageProps;

    if (statusCode && statusCode >= 400) {
      return <ErrorPage statusCode={statusCode} />;
    }

    return (
      <Container>
        <GlobalStyle />
        <Provider {...store}>
          <Sidebar>
            <AppStyle>
              <Fragment>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </Fragment>
            </AppStyle>
          </Sidebar>
        </Provider>
      </Container>
    );
  }
}

export default withMobx(getStores)(MyApp);
