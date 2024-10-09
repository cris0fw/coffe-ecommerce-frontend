import CardCafe from "@/components/CardCafe";
import Categorys from "@/components/Categorys";
import CusatomBrn from "@/components/CusatomBrn";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductosDestacados from "@/components/ProductosDestacados";
import { articleThree } from "@/utils/article";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* PRESENTACION */}
      <section className=" relative w-full h-full xl:mt-20">
        <div className=" w-[90%] w-max-[1440px] mx-auto py-5 px-2 md:flex md:py-7 lg:h-[460px] lg:items-center xl:h-[600px]">
          <div className="relative z-10 flex flex-col gap-2 items-start md:w-[50%] lg:px-10">
            <h1 className="title">Outstanding</h1>
            <h2 className="subtitle text-marron">Coffee Shop</h2>
            <p className="parrafo">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour,
            </p>
            <CusatomBrn
              title="Comenzar"
              textStyles="font-semibold text-sm  lg:text-[17px] "
              containerStyles="px-4 py-2 text-white bg-marron rounded-md mt-2 transition duration-500 hover:border-[1px] hover:border-solid hover:border-marron hover:bg-white hover:text-marron lg:px-7 lg:py-[10px]"
            />
          </div>
          <div className="relative w-full h-[230px] z-10 mt-5 md:w-[50%] md:h-[250px] xl:h-[360px]">
            <Image
              src="/principal.png"
              alt="image principal"
              fill
              sizes="300px"
              className="object-contain"
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
          }}
          className="hidden md:block lg:block"
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
            className="md:w-[670px] xl:w-[1200px]"
          >
            <path
              d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z"
              style={{ stroke: "none", fill: "#5A2918" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="w-full h-auto">
        <Categorys />
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <ProductosDestacados />
      {/* Seccion descuento  */}
      <section className="w-full h-auto py-5 mt-5">
        <div
          style={{
            backgroundImage: 'url("/descuento.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "280px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col gap-3 bg-white z-10 px-2 py-2 rounded-lg xl:px-4">
            <h1 className="font-semibold xl:text-[18px]">
              Consigue hasta un -20%
            </h1>
            <p className="font-semibold xl:text-[16px]">
              -20% al gastar 7$ usa el codigo de ChocoLate
            </p>
            <div className="flex justify-center gap-2">
              <CusatomBrn
                title="Comprar"
                containerStyles="px-6 py-2 bg-black"
                textStyles="text-white font-semibold"
              />
              <CusatomBrn
                title="Mas informacion"
                containerStyles="px-6 py-2 bg-white"
                textStyles="text-black font-semibold"
              />
            </div>
          </div>
        </div>
      </section>
      {/* TIPOS DE CAFE */}
      <section className="w-full h-auto">
        <h2 className="subtitle py-4 text-center">Tipo de cafe populares</h2>

        <div className="px-6 mt-5 md:max-w-[1440px] md:w-[90%] md:mx-auto md:flex md:flex-wrap md:justify-center lg:justify-center">
          {articleThree.map((type) => {
            return (
              <CardCafe
                key={type.title}
                containerStyle="w-full h-auto px-3 py-3 shadow-lg flex flex-col gap-1  md:w-[210px] xl:w-[270px]"
                image={type.image}
                title={type.title}
                button={false}
                textStyles="text-[20px] font-bold text-center"
                imageStyles="relative w-full h-[200px]"
              />
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
