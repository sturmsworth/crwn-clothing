import React from "react";

import HomepageContainer from "../components/HomepageContainer";
import HomepageMenuItem from "../components/HomepageMenuItem";

import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <HomepageContainer>
      <HomepageMenuItem title="HATS" subtitle="SHOP NOW" />
      <HomepageMenuItem title="JACKETS" subtitle="SHOP NOW" />
      <HomepageMenuItem title="SNEAKERS" subtitle="SHOP NOW" />
      <HomepageMenuItem title="MEN" subtitle="SHOP NOW" />
      <HomepageMenuItem title="WOMEN" subtitle="SHOP NOW" />
    </HomepageContainer>
  );
};

export default Homepage;
