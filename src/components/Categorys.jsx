"use client";
import React from "react";
import Image from "next/image";
import { useGetCategory } from "@/api/UseCategoryProducts";
import Link from "next/link";

const Categorys = () => {
  const { result, error, loading } = useGetCategory();
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div className="flex flex-col flex-wrap gap-3 py-3 px-6 mt-5">
      <h2 className="subtitle py-4 text-center">Categorias</h2>

      <div className="md:flex md:gap-2 lg:flex lg:justify-center lg:gap-6 xl:justify-evenly xl:gap-0">
        {!loading &&
          result !== undefined &&
          result.map((coffie) => {
            const imageUrl =
              coffie.attributes.categoryImage.data.attributes.formats.thumbnail
                .url;
            return (
              <div
                key={coffie.attributes.slug}
                className="relative mt-3 w-full h-[310px] group md:h-[200px] xl:w-[350px] xl:h-[300px] xl:mt-0"
              >
                <Image
                  src={`${url}${imageUrl}`}
                  alt="image category cafe 1"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity">
                  <h1 className="text-white font-bold uppercase text-[20px] opacity-0 group-hover:opacity-100 transition-opacity">
                    {coffie.attributes.categoryName}
                  </h1>
                  <Link
                    href={`/tienda/${coffie.attributes.slug}`}
                    className="border-[1px] border-solid px-6 py-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Ver
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Categorys;
