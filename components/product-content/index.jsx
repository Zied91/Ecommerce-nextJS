import useSwr from "swr";
import ProductItem from "../product-item/index";
import Header from "../header/index";
const ProductContent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/products", fetcher);

  if (error) return <div>Failed to load users</div>;

  return (
    <>
      {data && (
        <div className="flex flex-wrap justify-center">
          {data.map((item) => (
            <div key={item.id} className="mr-14">
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                color={item.color}
                currentPrice={item.currentPrice}
                images={item.images}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductContent;
