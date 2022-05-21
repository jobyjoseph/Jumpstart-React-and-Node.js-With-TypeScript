import React from "react";
import { Container } from "./App.styled";
import Helmet from "react-helmet";

// Data
import questionsData from "./sample-data";

// Components
import Header from "./components/Header";
import QuestionWithOption from "./components/QuestionWithOption";
import Footer from "./components/Footer";

export default () => (
  <React.Fragment>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Container>
      <Header />
      {questionsData.map((question) => (
        <QuestionWithOption {...question} />
      ))}
      <Footer />
    </Container>
  </React.Fragment>
);
