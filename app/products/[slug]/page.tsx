import { Params } from "next/dist/server/request/params";
import { notFound } from "next/navigation";

type productPageProps = {
  params:{
    slug:string
  }
}

const productPage = async ({params}:productPageProps) => {
  
  const  slug = params.slug
  console.log(slug)

  const URL = `/api/navigation`;

  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    console.log("the data is :",data);
  } catch (err) {
    console.log(err);
  }

  return <h1>{slug}</h1>;
};

export default productPage;
