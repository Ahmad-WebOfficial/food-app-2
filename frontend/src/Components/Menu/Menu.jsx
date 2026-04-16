import React from "react";
import Deal from "./Deal";
import Hero from "./Hero";
import Pizza from "./Pizza";
import Burger from "./Burger";
import Roll from "./Roll";
import Treat from "./Treat";
import Pasta from "./Pasta";
import Sandwich from "./Sandwich";

const Menu = () => {
  return (
    <div>
      <Hero />

      <Deal />

      <div id="Pizza">
        <Pizza />
      </div>

      <div id="Burger">
        <Burger />
      </div>

      <div id="Sandwiches">
        <Sandwich />
      </div>

      <div id="Roll Wrap">
        <Roll />
      </div>

      <div id="Local Treats">
        <Treat />
      </div>

      <div id="Pasta">
        <Pasta />
      </div>
    </div>
  );
};

export default Menu;
