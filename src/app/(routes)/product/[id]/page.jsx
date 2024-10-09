"use client";
import getUniqueProduct from "@/api/UseUniqueIdProduct";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useCart from "@/hooks/useCart";
import FormatPrice from "@/utils/FormatPrice";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const SingleProduct = () => {
  const params = useParams();
  const { id } = params;
  const { addItem } = useCart();

  const { result, error, loading } = getUniqueProduct(id);

  const urlServer = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!result) {
    return <div>No product found</div>;
  }

  const { attributes } = result;

  return (
    <div>
      <Navbar />

      <section className="w-full h-auto">
        <div className="w-[90%] max-w-[1440px] py-10 mx-auto lg:flex lg:justify-evenly lg:mt-20">
          {/* IMAGE */}
          <article>
            <div className="relative w-full h-[300px] lg:w-[450px] lg:h-[400px]">
              <Image
                src={`${urlServer}${result.attributes.imageProduct.data.attributes.formats.thumbnail.url}`}
                alt="image icon menu"
                fill
                className="object-contain"
              />
            </div>
          </article>
          {/* DESCRIPCION */}
          <article className="px-5">
            <div className="lg:flex lg:items-center lg:gap-2">
              <h1 className="subtitle">{attributes.productName}</h1>

              <div className="flex gap-2">
                <p className="card-cafe-category-country bg-marron">
                  {attributes.taste}
                </p>
                <p className="card-cafe-category-country bg-black">
                  {attributes.origin}
                </p>
              </div>
            </div>

            <p className="mt-4 lg:text-[18px] max-w-[700px] lg:mt-2">
              {attributes.description}
            </p>

            <h2 className="font-semibold mt-8 text-[20px]">
              {FormatPrice(attributes.price)}
            </h2>

            <button
              onClick={() => addItem(result)}
              className="w-full mt-3 py-3 lg:w-[300px] text-center lg:py-2 px-3 bg-marron text-white font-semibold lg:mt-10"
            >
              Comprar
            </button>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SingleProduct;
