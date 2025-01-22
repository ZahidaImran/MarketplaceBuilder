import Image from "next/image"
import background from "/public/background.png"
import Men from "/public/men.png"
import women from "/public/women.png";
import accessories from "/public/accessories.png";
import kids from "/public/kids.png"
import picture1 from "/public/product-cover-1.jpg"
import pic2 from "/public/product-cover-2.jpg" 
import pic3 from "/public/product-cover-3.jpg" 
import pic4 from "/public/product-cover-4.jpg" 
import pic5 from "/public/product-cover-5.jpg" 
import pic6 from "/public/product-cover-6.jpg" 
import pic7 from "/public/product-cover-7.jpg" 
import pic8 from "/public/product-cover-8.jpg" 
import greenman from "/public/greenMan.png";
import winterClothes from "/public/asian-winter-clothes.png";
import Road from "/public/road.jpeg";
import Car from "/public/car.png";
import Umbrella from "/public/umbrella.png";
import CardText from "./component/cards-text";
import type { StaticImageData } from 'next/image';
import HomeHeader from "./component/homeheader"; 
import HomeNavbar from "./component/LoginNavbar"

function ProductCardItem({ image, altText }: { image: StaticImageData; altText: string }) {
  return (
    <div className="w-[238px] h-[615px] mx-auto">
      <figure className="w-full h-full">
        <Image src={image} alt={altText} width={239} height={427} />
        <figcaption>
          <CardText />
        </figcaption>
      </figure>
    </div>
  );
}




export default function Home() {
  const images = [picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Road,
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Car,
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: Umbrella,
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];


  return (
    <div>
      <HomeHeader/>
      <HomeNavbar/>
      <div className="bg-white">
      {/* New Collection */}
<div className="relative w-full h-auto bg-white">
  <div className="relative w-full">
    <Image src={background} alt="women" className="w-full h-auto object-cover" />
  </div>

  {/* Content Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 px-4 sm:px-8 lg:px-16 text-white z-10">
    <h5 className="font-Montserrat font-semibold text-sm sm:text-base">
      SUMMER 2020
    </h5>
    <h1 className="font-Montserrat font-semibold text-2xl sm:text-4xl lg:text-5xl max-w-[600px] leading-snug">
      NEW COLLECTION
    </h1>
    <h4 className="font-Montserrat font-normal text-sm sm:text-lg max-w-[500px]">
      We know how large objects will act, but things on a small scale.
    </h4>
    <button className="w-auto px-8 py-3 bg-[#2DC071] text-sm sm:text-lg font-Montserrat rounded-md">
      SHOP NOW
    </button>
  </div>
</div>

{/* Editor's Pick */}
<div className="w-full py-10 bg-[#f5f5f5]">
  <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
    {/* Title Section */}
    <div className="text-center">
      <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
        EDITOR&apos;S PICK
      </h3>
      <p className="text-gray-500 font-Montserrat text-sm">
        Problems trying to resolve the conflict between
      </p>
    </div>
    
    {/* Image Section */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Men Image */}
      <div className="relative col-span-2">
        <Image
          src={Men}
          alt="Men"
          className="object-cover rounded-md w-full h-full"
        />
        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md text-[#252B42] font-bold">
          MEN
        </button>
      </div>

      {/* Women Image */}
      <div className="relative">
        <Image
          src={women}
          alt="Women"
          className="object-cover rounded-md w-full h-full"
        />
        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md text-[#252B42] font-bold">
          WOMEN
        </button>
      </div>

      {/* Accessories Image */}
      <div className="relative">
        <Image
          src={accessories}
          alt="Accessories"
          className="object-cover rounded-md w-full h-full"
        />
        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md text-[#252B42] font-bold">
          ACCESSORIES
        </button>
      </div>

      {/* Kids Image */}
      <div className="relative">
        <Image
          src={kids}
          alt="Kids"
          className="object-cover rounded-md w-full h-full"
        />
        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md text-[#252B42] font-bold">
          KIDS
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Product Card */}
      <div className="w-full py-10">
        <div className="max-w-[1124px] mx-auto text-center space-y-4">
          <h4 className="text-[16px] font-Montserrat text-[#737373]">Featured Products</h4>
          <h3 className="text-[24px] font-Montserrat font-bold text-[#252B42]">BESTSELLER PRODUCTS</h3>
          <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
          {images.map((image, index) => (
            <ProductCardItem key={index} image={image} altText={`Product ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Green Disc */}
<div className="w-full bg-[#23856D] py-10 px-4 lg:px-16 text-white">
  <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1440px] mx-auto">
    {/* Text Section */}
    <div className="lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
      <h4 className="text-sm sm:text-base">SUMMER 2020</h4>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
        Vita Classic Product
      </h1>
      <p className="text-sm sm:text-base max-w-[341px] mx-auto lg:mx-0">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="flex justify-center lg:justify-start gap-4">
        <h3 className="text-lg sm:text-2xl">$16.48</h3>
        <button className="px-6 py-3 bg-[#2DC071] rounded-md text-sm">
          ADD TO CART
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2">
      <Image src={greenman} alt="picman" className="w-full h-auto object-contain" />
    </div>
  </div>
</div>

      {/* White Disc */}
<div className="w-full py-10 px-4 lg:px-16">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-[1440px] mx-auto">
    {/* Image Section */}
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src={winterClothes}
        alt="couple"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Text Section */}
    <div className="lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
      <h5 className="text-sm sm:text-base font-bold text-gray-400">SUMMER 2020</h5>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
        Part of the Neural Universe
      </h2>
      <h4 className="text-sm sm:text-lg text-gray-500">
        We know how large objects will act, but things on a small scale.
      </h4>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-8 py-3 bg-[#2DC071] rounded-md text-white">
          BUY NOW
        </button>
        <button className="px-8 py-3 border border-[#2DC071] rounded-md text-[#2DC071]">
          READ MORE
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Featured Posts */}
      <div className="bg-white py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
          <p className="text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
              <Image src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm mt-2 text-gray-600">{post.description}</p>
                <div className="flex justify-between text-xs mt-4 text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.comments} comments</span>
                </div>
                <a href="#" className="text-blue-500 text-xs mt-4 inline-block hover:underline">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}