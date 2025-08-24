import data from "@/_data/data.json";
import cats from "@/_data/cats.json";

export interface Product {
  id: number;
  stock: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }>;
}

export interface Category {
  id: number;
  name: string;
  path: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = data.find((item: Product) => item.slug === slug);
  return product || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return data.filter((item: Product) => item.category === category);
}

export async function getAllCategories(): Promise<Category[]> {
  return cats;
}

export async function getCategoryByPath(path: string): Promise<Category | null> {
  const category = cats.find((cat: Category) => cat.path === path);
  return category || null;
}

export async function getAllProducts(): Promise<Product[]> {
  return data;
}
