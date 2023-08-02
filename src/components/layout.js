import React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/core";

import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
          }

          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h1 {
            font-family: "PT Sans", sans-serif;
          }
        `}
      />
      <Helmet>
        <title>Darshan Chobarkar</title>
        <meta
          name="description"
          content="Get ready for something amazing! Our coming soon website template will leave you excited and intrigued. Stay tuned for the big launch and experience a captivating countdown, sleek design, and customizable sections. Be among the first to witness the grand reveal!"
        />
        <meta
          name="keywords"
          content="Consulting, technology, business, darshanwebdev"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Bootstrap --> */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        {/* <!-- Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Material ui icons - google web fonts --> */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      {props.children}
    </>
  );
};

export default Layout;
