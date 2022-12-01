import React from "react";
import Hero from "../components/Hero";
import SourceBar from "../components/SourceBar";

function Home() {
  return (
    <div className="container-fluid">
      <SourceBar />
      <Hero />
    </div>
  );
}

export default Home;
