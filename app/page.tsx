import React from "react";
import Wallet from "./Components/Wallet";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">Panaverse Wallet Assignment</h1>
      <Wallet />
    </div>
  );
};

export default Home;
