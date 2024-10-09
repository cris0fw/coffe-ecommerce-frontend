"use client";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SuccessCoffe = () => {
  const { removeAll } = useCart();

  const router = useRouter();

  const inicio = () => {
    router.push("/");
  };

  useEffect(() => {
    removeAll();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <div
        onClick={inicio}
        className="absolute top-4 left-4 w-[30px] h-[30px] cursor-pointer"
      >
        <Image
          src="/back.png"
          layout="fill"
          className="object-contain"
          sizes="50px"
          alt="Back"
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gracias por su compra!</h1>
        <div className="relative w-full lg:w-[300px] h-[150px] mx-auto">
          <Image
            src="/gracias.jpg"
            layout="fill"
            className="object-contain"
            sizes="300px"
            alt="Gracias"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessCoffe;
