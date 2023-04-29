import React from "react";

function FundRaisingHomePage() {
  return (
    <section className="h-screen bg-blue-200 grid p-10">
      <div className="bg-orange-900 grid grid-cols-2 gap-6">
        {/* TEXT */}
        <section className="bg-red-200 grid my-10">
          <div className="bg-yellow-500 grid">
            <article>a</article>
          </div>
        </section>
        {/* DISPLAY */}
        <section className="bg-red-200">b</section>
      </div>
    </section>
  );
}

export default FundRaisingHomePage;
