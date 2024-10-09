import { useEffect, useState } from "react";

export const useGetCategory = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCategoryNow = async () => {
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
    getCategoryNow();
  }, [url]);

  return { result, loading, error };
};
