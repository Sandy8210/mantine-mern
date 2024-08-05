import React from "react";
import "@mantine/core/styles.css";
import Form from "./component/Form";
import GlobalStyle from "./component/GlobalStyle";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
        />
      </Helmet>
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
