"use client"
import { useState, useEffect } from "react";
import AboutSection from "@/_components/shared/AboutSection";
import PageHero from "@/_components/shared/PageHero";
import { Product } from "@/types/products";
import { useParams } from "next/navigation";
import Button from "@/_components/Assets/Button";
import Container from "@/_components/Assets/Container";


const page =  () => {

 const {productName} = useParams() as {productName:string}
 const productNamePlaintext = decodeURI(productName)
 const [productDetails, setProductDetails] = useState<Product | null>(null)
 const [loading, setLoading] = useState<boolean>(false)



 useEffect(() => {
    if(!productName) return
    setLoading(true)
    fetch("/api/data")
    .then(res => res.json())
    .then((items:Product[]) => {
        const match = items.find((item) => item.name === productNamePlaintext)
        if(match) setProductDetails(match)
    })
    .catch(err => console.error("Error fetching product: ", err))
    .finally(()=>setLoading(false))

 }, [])

 useEffect(()=>{
    
    console.log(productDetails)
 },[productDetails])
 
  if(loading) return <p>Loading...</p>
  if(!productDetails) return <p>No product found</p>
  return <>
        <PageHero pageTitle={productNamePlaintext} />
        <Container>
            <Button variant="inline" text="Back" href="/"/>
        </Container>
        {
            <AboutSection
                title={productDetails?.name}
                img={{
                    tablet:productDetails?.image.tablet,
                    desktop:productDetails?.image.desktop,
                    mobile:productDetails?.image.mobile,
                }}
                text = {productDetails?.description}

            />
        }
  </>
};

export default page;
