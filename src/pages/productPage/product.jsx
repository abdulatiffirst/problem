import React from "react";
import { Link } from "react-router-dom";
import { products } from "./homework";
import { ProductPageWrapper } from "./styles";
function ProductPage() {
  return (
    <ProductPageWrapper>
      <table>
        {products.map((value,index) => (
          <Link to={"/product/"+index} key={index}>
            <td>
              <p>{value.title}</p>
            </td>
          </Link>
        ))}
      </table>
    </ProductPageWrapper>
  );
}

export default ProductPage;
