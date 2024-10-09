"use client";
import { getFilteredProductCategory } from "@/api/UseFilterCategoryProducts";
import CardCafe from "@/components/CardCafe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormatPrice from "@/utils/FormatPrice";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import FilterConteiner from "../components/FilterOrigin";
import FilterType from "../components/FilterType";
import FilterTaste from "../components/FilterTaste";
import useCart from "@/hooks/useCart";

const Tienda = () => {
  const [invisible, setInvisible] = useState(true);
  const params = useParams();
  const { slugcategory } = params;
  const { result, error, loading } = getFilteredProductCategory(slugcategory);
  const { addItem } = useCart();

  const [filterOrigin, setFilterOrigin] = useState("");
  const [filterTaste, setFilterTaste] = useState("");

  const getFilteredProducts = () => {
    if (result === null || loading) {
      return result;
    }

    return result.filter((product) => {
      const matchesOrigin =
        filterOrigin === "" || product.attributes.origin === filterOrigin;
      const matchesTaste =
        filterTaste === "" || product.attributes.taste === filterTaste;
      return matchesOrigin && matchesTaste;
    });
  };

  const filteredProductNow = getFilteredProducts();

  const handleClick = () => {
    setInvisible((prev) => !prev);
  };

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div>
      <Navbar />

      <section className="w-full h-auto justify-center lg:mt-20 py-5 lg:flex lg:gap-3">
        {/* CATEGORIAS */}
        <article className="w-full flex-col items-center lg:w-[20%] px-10">
          <div className="flex items-center gap-2">
            <h1 className="text-[25px] lg:text-[20px] font-semibold">
              Categorias
            </h1>
            <div
              onClick={handleClick}
              className="relative w-[30px] h-[30px] lg:w-[25px] lg:h-[25px] cursor-pointer"
            >
              <Image
                src="/menu.png"
                alt="image icon menu"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div
            className={`w-full h-auto lg:mt-3 ${
              invisible ? "block" : "hidden"
            }`}
          >
            {/* ORIGEN */}
            <FilterConteiner setFilterOrigin={setFilterOrigin} />

            {/* TIPO */}
            <FilterType />

            {/* GUSTOS */}
            <FilterTaste setFilterTaste={setFilterTaste} />
          </div>
        </article>
        <article className="lg:w-[80%] px-10 py-3 mt-3">
          <h1 className="text-[25px] lg:text-[20px] font-semibold">
            {params === "" ? "Resultados" : "Resultados " + slugcategory}
          </h1>

          <div className="w-full h-auto flex flex-col gap-5 lg:flex-row lg:justify-start lg:gap-2 lg:flex-wrap">
            {loading ? (
              <div>Loading...</div>
            ) : (
              filteredProductNow !== undefined &&
              filteredProductNow.map((coffee) => {
                return (
                  <CardCafe
                    key={coffee.attributes.slug}
                    title={coffee.attributes.productName}
                    image={`${url}${coffee.attributes.imageProduct.data.attributes.url}`}
                    category={coffee.attributes.taste}
                    country={coffee.attributes.origin}
                    price={FormatPrice(coffee.attributes.price)}
                    button={true}
                    categoryStyles="card-cafe-category-country bg-black"
                    countryStyles="card-cafe-category-country bg-marron"
                    textStyles="text-[20px] font-bold"
                    imageStyles="relative w-full h-[250px]"
                    containerStyle="w-full h-auto shadow-lg flex flex-col gap-3 md:w-[45%] lg:w-[43%] xl:w-[300px]"
                    link={coffee.attributes.slug}
                    handleClick={() => addItem(coffee)}
                  />
                );
              })
            )}
          </div>

          <div>
            <h2>Paginacion</h2>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Tienda;
