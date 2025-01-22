export interface IProduct {
    _id: string;
    price: number;
    title: string;
    tags: string[];
    discountPercentage: number;
    isNew: boolean;
    description: string;
    slug: string;
    productImage: string;
  }
  