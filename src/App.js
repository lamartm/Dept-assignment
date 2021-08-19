import React from "react";
import Banner from "./components/Banner/Banner";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Work />
      <Brands />
      <Footer />
    </React.Fragment>
  );
};

export default App;
