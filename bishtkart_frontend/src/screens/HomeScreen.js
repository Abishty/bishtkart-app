import React from "react";
import Product from "../components/Product";
import DATA from "../data";

export default function HomeScreen() {
  return (
      <div className="row center">
        {DATA.products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
  );
}
