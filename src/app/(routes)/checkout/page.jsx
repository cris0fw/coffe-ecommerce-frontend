"use client";
import makePaymentRequest from "@/api/Payment";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useCart from "@/hooks/useCart";
import FormatPrice from "@/utils/FormatPrice";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import React from "react";

const page = () => {
  const { items, removeItem } = useCart();
  const urlImage = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLICASABLE_KEY || ""
  );

  const prices = items.map((product) => product.attributes.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">
      <Navbar />

      <section className="w-full h-auto lg:h-[550px]">
        <div className="w-[90%] mt-5 max-w-[1440px] mx-auto lg:mt-28 lg:flex lg:flex-row lg:justify-around lg:items-center">
          <article className="lg:w-[50%] overflow-y-auto h-[400px]">
            {items.length === 0 && (
              <p className="mt-40 text-center font-bold">
                No hay productos en el carrito
              </p>
            )}
            {items.map((coffe) => {
              return (
                <div
                  key={coffe.id}
                  className="relative w-full lg:w-[450px] flex justify-evenly gap-3 py-3 px-1 bg-white"
                >
                  <div className="relative w-[95px] h-[95px] lg:w-[200px] lg:h-[150px]">
                    <Image
                      src={`${urlImage}${coffe.attributes.imageProduct.data.attributes.formats.thumbnail.url}`}
                      alt="image coffee"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                      <h2 className="lg:text-[18px] font-semibold">
                        {coffe.attributes.productName}
                      </h2>
                      <div className="flex gap-2">
                        <p className="card-cafe-category-country bg-marron">
                          {coffe.attributes.taste}
                        </p>
                        <p className="card-cafe-category-country bg-black">
                          {coffe.attributes.origin}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-[20px] font-semibold">
                      {FormatPrice(coffe.attributes.price)}
                    </h2>
                  </div>
                  <div className="absolute top-0 left-0">
                    <div
                      onClick={() => removeItem(coffe.id)}
                      className="relative w-[30px] h-[20px]"
                    >
                      <Image
                        src="/close.png"
                        fill
                        alt="close icon"
                        className="object-contain cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </article>

          <article className="lg:w-[380px] lg:px-6 lg:py-3 bg-gris2">
            <h2 className="text-[20px] font-bold">Total</h2>

            <div className="flex gap-2">
              <h2 className="text-[17px] font-semibold">Productos totales</h2>

              <h2>{FormatPrice(totalPrice)}</h2>
            </div>

            <button
              onClick={buyStripe}
              className="bg-marron text-white w-full py-2 my-3"
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

export default page;
