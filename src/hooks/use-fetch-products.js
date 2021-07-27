import { useState, useEffect } from "react";
import { getProducts } from "../helpers/get-products";

export const useFetchProducts = (query, setProd) => {
  const [state, setState] = useState({
    products: [],
    loading: true,
  });
  useEffect(() => {
    getProducts(query).then((products) => {
      const indexOfLastProduct = 1 * 30;
      const indexOfFirstProduct = indexOfLastProduct - 30;
      setState({
        products,
        productsPerPage: 30,
        loading: false,
      });
      setProd(products.slice(indexOfFirstProduct, indexOfLastProduct));
    });
  }, [query, setProd]);
  return state;
};
