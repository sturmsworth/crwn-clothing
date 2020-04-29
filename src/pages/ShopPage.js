import React, { useState } from "react";

import { SHOP_DATA } from "../data/ShoppingData";

import CollectionPreview from "../components/CollectionPreview";

const ShopPage = () => {
  const [shopData] = useState(SHOP_DATA);
  console.log(shopData);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
