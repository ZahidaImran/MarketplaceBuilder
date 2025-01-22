import { client } from '@/sanity/lib/client';
import ProductDetails from '@/app/component/productDetails';

interface ProductPageProps {
  params: { slug: string }; // Ensure this matches Next.js params
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
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
