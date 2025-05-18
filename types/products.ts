interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

interface RelatedProduct {
  slug: string;
  name: string;
  image: ImageSet;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: RelatedProduct[];
}
