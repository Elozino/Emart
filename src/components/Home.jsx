import React from "react";
import Banner from "./Banner";
import Products from "./Products";

function Home() {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default Home;
