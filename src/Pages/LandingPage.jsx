import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Clients_Logos from "../Components/Clients_Logos";
import Sarigraffia_Textile from "../Components/Sarigraffia_Textile";
import SubNav from "../Components/SubNav";

const LandingPage = () => {
  return (
    <>
      <SubNav />
      <Header />
      <Sarigraffia_Textile />
      <Clients_Logos />
      <Footer />
    </>
  );
};

export default LandingPage;
