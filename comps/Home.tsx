"use client";
import { useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortOrder, setSortOrder] = useState<string>("default");

  const sortProducts = (products: ProductsTypes[], order: string) => {
    if (order === "low-to-high") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const sortedProducts = sortProducts(products, sortOrder);

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className="mb-8 flex items-center flex-col">
        <h1
          className=" headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>
        
        {/* === ENHANCED SORT FILTER  */}
        <div className="mt-6 mb-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center justify-center gap-4">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Sort by Price:
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-700 font-medium min-w-[160px]"
            >
              <option value="default">All Products</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section className="px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* === MAP PRODUCTS  */}
          {sortedProducts?.map((products: ProductsTypes) => {
            return <Products key={products._id} products={products} />;
          })}
        </div>
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
