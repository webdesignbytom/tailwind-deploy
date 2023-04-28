import React from "react";
// Components
import Navbar from "../../components/navigation/Navbar";
import HomePageHeader from "../../components/home/HomePageHeader";
import Goals from "../../components/goals/Goals";
import Funding from "../../components/funding/Funding";

function HomePage() {
  return (
    <div className="grid min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100">
      <section className="grid h-screen grid-rows-reg">
        <Navbar />
        <HomePageHeader />
      </section>
      <section>
        <Goals />
        <Funding />
      </section>
    </div>
  );
}

export default HomePage;
