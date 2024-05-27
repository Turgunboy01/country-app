import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setGetAllProduct(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(getAllProduct, "context");

  return (
    <ProductsContext.Provider value={{ getAllProduct, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
