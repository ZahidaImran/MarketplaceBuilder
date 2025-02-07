'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IProduct } from '../types/types';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleViewMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    if (product.slug) {
      router.push(`/productDetails/${product.slug}`); 
    } else {
      console.error('Product slug is missing:', product);
    }
  };

  return (
    <div className="group relative border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      {/* Image Section */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-50 to-gray-100 rounded-t-xl overflow-hidden">
        <Image
          src={product.productImage}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-b-xl">
        <p className="text-xs font-bold text-red-600 uppercase">{product.dicountPercentage}% Off</p>
        <h2 className="text-lg font-semibold text-gray-800 mt-2 truncate">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{product.tags?.join(', ')}</p>
        {product.isNew && (
          <p className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-lg mt-2">
            New Arrival
          </p>
        )}
        <p className="text-xl font-bold text-gray-800 mt-4">${product.price.toFixed(2)}</p>
      </div>

      {/* Button Section */}
      <div className="p-4 text-center">
        <button
          onClick={handleViewMore}
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
        >
          View More
        </button>
      </div>
    </div>
  );
}
