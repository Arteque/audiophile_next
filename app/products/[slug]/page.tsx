import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/_components/shared/PageHero";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
import Subhead from "@/_components/Assets/Subhead";
import Paragraph from "@/_components/Assets/Paragraph";
import Button from "@/_components/Assets/Button";
import { getProductsByCategory, getCategoryByPath, getAllCategories, Product } from "@/lib/data";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    slug: category.path,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryByPath(slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: category.name,
    description: `Browse our premium ${category.name.toLowerCase()} collection at Audiophile`,
  };
}

const ProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const category = await getCategoryByPath(slug);
  const products = await getProductsByCategory(slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <PageHero pageTitle={category.name} />
      <Section>
        <Container className="mt-[64px] md:mt-[120px]">
          {products.map((product: Product, index: number) => (
            <div
              key={product.id}
              className={`product mb-[120px] lg:flex lg:gap-[125px] ${
                index % 2 && "flex-row-reverse"
              }`}
            >
              <div className="media">
                <Image
                  src={product.categoryImage.desktop}
                  alt={product.name}
                  width={540}
                  height={560}
                  className="w-full lg:w-[540px] aspect-auto rounded-lg"
                  priority={index === 0}
                />
              </div>
              <div
                className="content text-center mt-[32px] flex flex-col gap-y-[24px] items-center mx-auto
                 md:mt-[52] md:max-w-[572px] lg:text-left lg:items-start
              "
              >
                <h2 className="max-w-[300px] self-start text-left lg:self-start">
                  {product.new && (
                    <Subhead className="text-prime-100">new product</Subhead>
                  )}
                  <span className="heading__3 block mt-[24px]">
                    {product.name}
                  </span>
                </h2>
                <Paragraph className="lg:text-left mb-[0_!important]">
                  {product.description}
                </Paragraph>
                <Button
                  className="lg:self-start"
                  variant="call"
                  text="See product"
                  href={`/singleproduct/${product.slug}`}
                />
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default ProductPage;
