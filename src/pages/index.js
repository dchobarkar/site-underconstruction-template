import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import Animation from "../components/animation";
import Footer from "../components/footer";
import "./styles.css";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Header />

      <Animation />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
