import Image from 'next/image';
import AddtoCartButton from './button';

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    price: number;
    productImage: string;
    tags: string[];
    slug: string,
    description: string;
    isNew: boolean;
    dicountPercentage: number;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative bg-gray-100">
          <Image
            src={product.productImage}
            alt={product.title}
            width={800}
            height={800}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="p-10">
          {product.isNew && (
            <p className="bg-green-500 text-white text-sm px-3 py-1 rounded-full mb-4">
              New Arrival
            </p>
          )}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-3xl text-blue-600 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <AddtoCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
