import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import { LoadingComponent } from "../../app/layout/LoadingComponent";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingComponent message="Loading Products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

// const addProduct = () => {
//   setProducts((prevState) => [
//     ...prevState,
//     {
//       id: prevState.length + 101,
//       name: "product" + (prevState.length + 1),
//       price: prevState.length * 100 + 100,
//       brand: "some brand",
//       description: "some description",
//       pictureUrl: "http://picsum.photos/200",
//     },
//   ]);
// };
