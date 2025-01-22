import { createClient } from '@sanity/client';
import ProductGrid from '../component/productGrid';
import { IProduct } from '../types/types';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
  apiVersion: '2021-08-31',
});

async function fetchProducts(): Promise<IProduct[]> {
  const query = `*[_type == "product"]{
    _id,
    price,
    title,
    tags,
    dicountPercentage,
    isNew,
    description,
    "slug": slug.current,
    "productImage": productImage.asset->url
  }`;
  return await sanityClient.fetch(query);
}

export default async function ProductsPage() {
  let products: IProduct[] = [];

  try {
    products = await fetchProducts();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error fetching products:', err.message);
    } else {
      console.error('An unexpected error occurred:', err);
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12 tracking-tight">
          Explore Our Exclusive Collection
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
