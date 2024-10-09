import { useEffect, useState } from "react";

export const getFilteredProductCategory = (slug) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCategoryProducts = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      setResult(json.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  }, [url]);

  return { result, error, loading };
};
