import React from "react";

import { withRouter } from "react-router-dom";

const HomepageMenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div
      className={size ? `${size} menu-item` : `menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(HomepageMenuItem);
