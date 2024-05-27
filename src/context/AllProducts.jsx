import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [getAllProduct, setGetAllProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
    //   console.log(data);
      setGetAllProduct(data);
    };
    fetchData();
  }, []);

  console.log(getAllProduct, "context");

  return (
    <ProductsContext.Provider value={{ getAllProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
