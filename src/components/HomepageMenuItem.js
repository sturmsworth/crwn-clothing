import React from "react";

const HomepageMenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={size ? `${size} menu-item` : `menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default HomepageMenuItem;
