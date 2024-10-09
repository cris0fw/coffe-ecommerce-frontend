import CusatomBrn from "@/components/CusatomBrn";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Acerca = () => {
  return (
    <div className="md:flex md:flex-col md:justify-between md:h-screen">
      <Navbar />

      <section className="w-full h-auto xl:mt-20">
        <h2 className="subtitle px-5 py-4 text-center">Sobre nosotros</h2>
        <div className="px-3 py-5 flex flex-col gap-3 md:w-max-[1440px] md:w-[90%] md:mx-auto lg:flex-row ">
          <div className="flex flex-col gap-3 items-start lg:w-[80%]">
            <h2 className="text-[21px] md:text-[25px]">Distribución de café</h2>
            <p className="text-sm tracking-[0.5px] leading-4 md:text-[18px] md:leading-6">
              tiene una distribución de letras más o menos normal, en lugar de
              usar "Contenido aquí, contenido aquí", lo que hace que parezca un
              inglés legible. Muchos paquetes de autoedición y editores de
              páginas web tienen una distribución más o menos normal de letras,
              en lugar de usar "Contenido aquí, contenido aquí", lo que hace que
              parezca un inglés legible. Muchos paquetes de autoedición y editor
              de páginas web.
            </p>

            <CusatomBrn
              title="Leer más"
              containerStyles="border-solid border-[1px] border-marron px-3 py-2 border-lg md:px-4 md:py-3"
              textStyles="text-marron font-semibold md:text-lg"
            />
          </div>

          <div className="relative w-full h-[290px] md:h-[342px] xl:w-[70%]">
            <Image
              src="/about.png"
              fill
              alt="about img"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Acerca;
