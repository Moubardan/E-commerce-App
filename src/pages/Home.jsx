import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
