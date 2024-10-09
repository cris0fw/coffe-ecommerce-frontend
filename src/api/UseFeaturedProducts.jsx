import { useState, useEffect } from "react";

export function useFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);

  const getProducst = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      setResults(json.data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducst();
  }, [url]);

  return { loading, error, results };
}
