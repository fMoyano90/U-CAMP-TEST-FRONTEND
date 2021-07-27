import { useState } from "react";
import { SearchProduct } from "./components/search-bar";
import { ProductsList } from "./components/products-list";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <h2>Busca un producto</h2>
      <SearchProduct setProducts={setProducts} />
      <hr />

      {products[0] !== undefined ? (
        <ol>
          <ProductsList
            key={products[0]}
            product={products[0]}
            setProducts={setProducts}
          />
        </ol>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
