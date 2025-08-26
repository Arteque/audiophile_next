import { Metadata } from "next";
import Button from "@/_components/Assets/Button";
import Container from "@/_components/Assets/Container";
import Section from "@/_components/Assets/Section";
import Image from "next/image";
import Subhead from "@/_components/Assets/Subhead";
import Currency from "@/Tools/Currency";
import Paragraph from "@/_components/Assets/Paragraph";
import AddAndDelItemBtns from "@/_components/Assets/Cart/AddAndDelItemBtns";
import { getProductBySlug, getAllProducts, Product } from "@/lib/data";
import Features from "@/_components/shared/Product/Features";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image.desktop],
    },
  };
}

const SingleProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Section>
        <Container>
          <Button
            href={`/products/${product.category}`}
            variant="default"
            text="Go Back"
            className="block my-[1rem_24px]"
          />

          <div className="product-view-container lg:flex lg:gap-[125px] lg:items-center">
            <div className="product-view__media lg:flex-1">
              <Image
                src={product.image.desktop}
                alt={product.name}
                width={540}
                height={560}
                className="w-full rounded-lg"
                priority
              />
            </div>
            <div className="product-view__text lg:flex-1 lg:pl-[32px]">
              <h2>
                {product.new && (
                  <Subhead className="text-prime-100 mt-[32px] block">
                    New Product
                  </Subhead>
                )}
                <span className="heading__3 my-[24px] block">
                  {product.name}
                </span>
              </h2>
              <Paragraph className="font-medium opacity-50">
                {product.description}
              </Paragraph>
              <p className="mb-[31px] font-bold text-[18px] tracking-[1.29px]">
                {Currency(product.price, "USD")}
              </p>
              <div className="buy-container flex items-start gap-[1rem]">
                <AddAndDelItemBtns stock={product.stock} />
                <Button variant="call" text="Add to cart" href="/" />
              </div>
            </div>
          </div>
          
           <Features product={product} />     

          <div className="product-images-container mt-[88px]">
            <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-[20px] mb-[20px]">
              <Image
                src={product.gallery.first.desktop}
                alt={`${product.name} gallery image 1`}
                width={445}
                height={280}
                className="w-full h-full object-cover rounded-lg md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1"
              />
              <Image
                src={product.gallery.second.desktop}
                alt={`${product.name} gallery image 2`}
                width={445}
                height={280}
                className="w-full h-full object-cover rounded-lg md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-1"
              />
               <Image
              src={product.gallery.third.desktop}
              alt={`${product.name} gallery image 3`}
              width={635}
              height={592}
              className="w-full h-full object-cover rounded-lg md:row-start-1 md:row-end-3 md:col-start-2"
            />
            </div>
           
          </div>

          <div className="you-may-also-like mt-[120px]">
            <h3 className="heading__4 text-center mb-[40px] uppercase">
              You may also like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[56px]">
              {product.others.map((otherProduct, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={otherProduct.image.desktop}
                    alt={otherProduct.name}
                    width={350}
                    height={318}
                    className="w-full rounded-lg mb-[32px]"
                  />
                  <h4 className="heading__5 mb-[32px]">{otherProduct.name}</h4>
                  <Button
                    variant="call"
                    text="See Product"
                    href={`/singleproduct/${otherProduct.slug}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SingleProductPage;
