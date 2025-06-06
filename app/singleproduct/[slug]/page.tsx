"use client";
import { useSearchParams, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const slug = params?.slug;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [productDetails, setProductDetails] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;
    console.log(id);
    console.log("slug", slug);
    const fetchProdutDetais = async () => {
      try {
        const resp = await fetch(`/api/single?id=${id}`);
        const data = await resp.json();
        setProductDetails(data);
      } catch (err) {
        console.log("Error :", err);
      }
    };
    fetchProdutDetais();
  }, []);

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  return <div>Single {decodeURI(String(slug))}</div>;
};

export default page;
