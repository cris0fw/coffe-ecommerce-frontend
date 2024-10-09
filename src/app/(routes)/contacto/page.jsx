import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contacto = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <section className="w-full h-auto md:self-start">
        <div className="py-4 px-5 xl:mt-20 md:flex md:flex-col md:items-center">
          <h2 className="subtitle text-center">Ponte en contacto</h2>

          <form className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                className="shadow bg-gris appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Tu email"
                className="shadow bg-gris appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mt-4">
              <input
                type="tel"
                placeholder="Tu numero de telefono"
                className="shadow bg-gris appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mt-4">
              <textarea
                className="shadow bg-gris appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Tu mensaje"
                rows="5"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-marron hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
