import React from "react";
import About from "./About";
import Category from "./Category";
import Services from "./Services";
import Colors from "./Colors";
import Join from "./Join";
import Blog from "./Blog";

const Container = ({ data }) => {
  return (
    <div>
      <div className="sideBorder"></div>
      <div className="container mx-auto">
        <About data={data} />
        <Category data={data} />
        <Services data={data} />
        <Colors data={data} />
        <Join data={data} />
        <Blog data={data} />
      </div>
    </div>
  );
};

export default Container;
