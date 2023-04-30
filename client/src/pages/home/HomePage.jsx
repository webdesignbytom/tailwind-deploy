import React from "react";
// Components
import Navbar from "../../components/navigation/Navbar";
import HomePageHeader from "../../components/home/HomePageHeader";
import Funding from "../../components/funding/Funding";
import GoalsContainer from '../../components/home/GoalsContainer';
import FundRaisingHomePage from '../../components/home/FundRaisingHomePage';

function HomePage() {
  return (
    <div className="grid min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100">
      <section className="grid h-screen lg:max-h-screen grid-rows-reg">
        <Navbar />
        <HomePageHeader />
      </section>
      <section>
        <GoalsContainer />
        <FundRaisingHomePage />
        <Funding />
      </section>
    </div>
  );
}

export default HomePage;
