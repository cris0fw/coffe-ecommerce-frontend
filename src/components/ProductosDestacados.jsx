"use client";
import useCart from "@/hooks/useCart";
import CardCafe from "./CardCafe";
import { useFeaturedProducts } from "@/api/UseFeaturedProducts";

const ProductosDestacados = () => {
  const { results, loading } = useFeaturedProducts();
  const { addItem, items } = useCart();

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  console.log(items);

  return (
    <section className="w-full h-auto">
      <div className="flex flex-col flex-wrap gap-3 py-3 px-6 mt-5">
        <h2 className="subtitle py-4 text-center">Productos Destacados</h2>

        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center xl:flex-row ">
          {loading && <span className="loader"></span>}

          {results !== null &&
            results.map((card) => {
              return (
                <CardCafe
                  key={card.attributes.slug}
                  title={card.attributes.productName}
                  price={card.attributes.price}
                  category={card.attributes.taste}
                  country={card.attributes.origin}
                  image={`${url}${card.attributes.imageProduct.data.attributes.formats.thumbnail.url}`}
                  containerStyle="w-full h-auto shadow-lg flex flex-col gap-3 md:w-[45%] lg:w-[43%] xl:w-[300px]"
                  button={true}
                  textStyles="text-[20px] font-bold"
                  countryStyles="card-cafe-category-country bg-marron"
                  categoryStyles="card-cafe-category-country bg-black"
                  imageStyles="relative w-full h-[280px] lg:h-[170px] xl:h-[200px]"
                  link={card.attributes.slug}
                  handleClick={() => addItem(card)}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
