import { useEffect, useState } from "react";

const getUniqueProduct = (id) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[slug][$eq]=${id}`;

  const uniqueProductID = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      setResult(json.data[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    uniqueProductID();
  }, [url]);

  return { result, error, loading };
};

export default getUniqueProduct;
