import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoaddingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {/* {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
