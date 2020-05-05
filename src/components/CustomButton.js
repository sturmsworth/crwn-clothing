import React from "react";

import "../styles/CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;

// remember that children are what is passed in between component tags e.g. <CustomButton>This-is-a-child</CustomButton>
