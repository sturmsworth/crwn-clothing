import React from "react";

const HomepageContainer = ({ children }) => {
  return (
    <div className="homepage">
      <div className="directory-menu">{children}</div>
    </div>
  );
};

export default HomepageContainer;
