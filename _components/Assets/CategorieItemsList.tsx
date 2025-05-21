"use client";
import { useEffect, useState } from "react";
import CategorieItem from "./CategorieItem";
import { Cat } from "@/types/cat";

const CategorieItemsList = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cats")
      .then((res) => res.json())
      .then((json) => {
        setCats(json.data as Cat[]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-dark-100/80 font-bold mx-auto w-fit">Loading...</p>;
  if (!cats) return <p>Something went wrong! Reload the page please!</p>;
  if (cats.length === 0) return <p>No categories found</p>;
  return (
    <>
      {cats.map((cat: Cat) => (
        <CategorieItem key={cat.id} cat={cat} />
      ))}
    </>
  );
};

export default CategorieItemsList;
