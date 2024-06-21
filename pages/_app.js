import React, { Fragment } from "react";
import Router from "next/router";
import { wrapper } from "../store/store";

// global styles
import "../app/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);
