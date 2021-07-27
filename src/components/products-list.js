import { useState } from "react";
import { useFetchProducts } from "../hooks/use-fetch-products";
import { ProductCard } from "./product-card";

export const ProductsList = ({ product }) => {
  const [prod, setProd] = useState([]);
  const { products, productsPerPage, loading } = useFetchProducts(
    product,
    setProd
  );
  const [sortBy, setSortBy] = useState("desc");
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const calculateCurrentProducts = (currentPage, productsPerPage, products) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const handleClick = (event) => {
    const currentProducts = calculateCurrentProducts(
      event.target.id,
      productsPerPage,
      products
    );
    setProd(currentProducts);
  };

  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <label>Ordenar por precio:&nbsp;</label>
      <select onChange={handleChangeSort}>
        <option value='desc'>De mayor a menor</option>
        <option value='asc'>De menor a mayor</option>
      </select>
      &nbsp;&nbsp;
      <label>Filtrar por condición:&nbsp;</label>
      <select onChange={handleChangeSort}>
        <option value='new'>Nuevo</option>
        <option value='used'>Usado</option>
      </select>
      <h3 className='animate__animated animate__fadeIn'> {product} </h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>
        {sortBy === "desc"
          ? [...prod]
              .sort((b, a) =>
                a["price"] > b["price"] ? 1 : a["price"] < b["price"] ? -1 : 0
              )
              .map((product) => <ProductCard key={product.id} {...product} />)
          : null}
        {sortBy === "asc"
          ? [...prod]
              .sort((a, b) =>
                a["price"] > b["price"] ? 1 : a["price"] < b["price"] ? -1 : 0
              )
              .map((product) => <ProductCard key={product.id} {...product} />)
          : null}
        {sortBy === "new"
          ? [...prod]
              .filter((product) => product.condition === "new")
              .map((product) => <ProductCard key={product.id} {...product} />)
          : null}
        {sortBy === "used"
          ? [...prod]
              .filter((product) => product.condition === "used")
              .map((product) => <ProductCard key={product.id} {...product} />)
          : null}
      </div>
      <div>
        <ul className='page-numbers'>
          {products.length !== 0
            ? pageNumbers.map((number) => (
                <li
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className='pagination'
                >
                  {number}
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};
