import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { IProduct } from '@/app/types/types';
import AddtoCartButton from '@/app/component/button';
import { client } from '@/sanity/lib/client';

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product: IProduct | null = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      price,
      "slug": slug.current,
      tags,
      description,
      "productImage": productImage.asset->url,
      discountPercentage,
      isNew
    }`,
    { slug }
  );

  if (!product) {
    return notFound();
  }

  const formattedProduct = {
    _id: product._id,
    title: product.title,
    price: product.price,
    productImage: product.productImage,
    tags: product.tags,
    description: product.description,
    quantity: product.quantity,
    discountPercentage: product.dicountPercentage,
    isNew: product.isNew,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative bg-gray-100">
          {product.productImage && (
            <Image
              src={product.productImage}
              alt={product.title}
              width={600}
              height={600}
              className="object-cover w-full h-full rounded-lg"
            />
          )}
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            {product.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New
              </span>
            )}
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-2xl text-blue-700 font-bold">
              ${product.price}{' '}
              {product.dicountPercentage && (
                <span className="text-sm text-red-500 line-through">
                  ${(product.price * (1 + product.dicountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </p>
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed">{product.description}</p>

          {product.tags && product.tags.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold text-gray-700">Tags:</p>
              <div className="flex flex-wrap mt-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <AddtoCartButton product={formattedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
