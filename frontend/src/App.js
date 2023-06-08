import React from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Routes/AllRoutes";
const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </>
  );
};

export default App;
