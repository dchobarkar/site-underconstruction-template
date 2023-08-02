import React from "react";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <React.Fragment>
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

      {props.children}
    </React.Fragment>
  );
};

export default Layout;
