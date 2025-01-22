import { client } from '@/sanity/lib/client';
import ProductDetails from '@/app/component/productDetails';

interface ProductPageProps {
  params: { slug: string }; 
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      price,
      title,
      tags,
      discountPercentage,
      isNew,
      description,
      "slug": slug.current,
      "productImage": productImage.asset->url
    }`,
    { slug }
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await client.fetch(`*[_type == "product"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}
