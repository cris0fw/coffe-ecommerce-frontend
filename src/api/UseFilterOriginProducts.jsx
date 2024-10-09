const { useState, useEffect } = require("react");

const getFilterOrigin = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const filterOriginProduct = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      setResult(json.data);
      setLoading(false);
    } catch (error) {
      setError(erorr);
      setLoading(false);
    }
  };

  useEffect(() => {
    filterOriginProduct();
  }, [url]);

  return { result, error, loading };
};

export default getFilterOrigin;
