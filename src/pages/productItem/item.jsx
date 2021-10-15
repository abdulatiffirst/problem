import React from "react";
import { useParams } from "react-router";
import {products} from "../productPage/homework";

function ProductItem() {
  const { productIndex } = useParams();
  const product = products[productIndex];
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
