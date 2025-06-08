"use client";
import { useEffect, useState } from "react";
import CategorieItem from "./CategorieItem";
import Loading from "@/Tools/Loading";

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

  if (loading) return <Loading />;
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
