"use client";
import { useEffect, useState } from "react";
import CategorieItem from "./CategorieItem";

const CategorieItemsList = () => {
  const [cats, setCats] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const catsRep = await fetch("/api/navigation");
        const data = await catsRep.json();
        setCats(data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  if (loading)
    return (
      <p className="text-center text-dark-100/80 font-bold mx-auto w-fit">
        Loading...
      </p>
    );
  if (!cats) return <p>Something went wrong! Reload the page please!</p>;
  if (cats.length === 0) return <p>No categories found</p>;
  return (
    <>
      {cats.map((cat: any) => (
        <CategorieItem key={cat.id} cat={cat} />
      ))}
    </>
  );
};

export default CategorieItemsList;
