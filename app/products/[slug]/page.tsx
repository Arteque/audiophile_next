"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/productlisting?id=${id}`);
        const data = await response.json();
        setProducts(data.elements || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products in Category</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.translated?.name || "Unnamed Product"}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
