import productsTypes from "../../utils/data/products-types";
import productsSizes from "../../utils/data/products-sizes";
import productsColors from "../../utils/data/products-colors";

const ProductFilter = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="border-gray-400 font-thin border w-72 h-60 ml-10 flex flex-col">
        <h5 className="font-bold relative top-0">Product Type</h5>

        {productsTypes.map((item) => (
          <div className="mt-5" key={item.id}>
            <input
              className="mr-4 ml-2 h-5 w-5"
              type="checkbox"
              id={item.id}
              name={item.name}
              
            />
            <label for={item.id}>{item.name}</label>
          </div>
        ))}
      </div>

      <div className="border-gray-400 font-thin border w-72 h-30 ml-10 mt-6">
        <h5 className="font-bold relative top-0">Price</h5>
        <input
          className="w-full bg-black"
          type="range"
          id="price"
          name="price"
          min="0"
          max="100"
        />
      </div>

      <div className="border-gray-400 font-thin border w-72 h-30 ml-10 mt-6 flex flex-row">
        <h5 className="font-bold relative top-0">Size</h5>

        {productsSizes.map((item) => (
          <div className="mt-10" key={item.id}>
            <input
              className="mr-4 h-5 w-5 border-2"
              type="checkbox"
              id={item.id}
              name={item.label}
            />
            <label for={item.id}>{item.label}</label>
          </div>
        ))}
      </div>

      <div className="border-gray-400 font-thin border w-72 h-30 ml-10 mt-6 flex flex-row">
        <h5 className="font-bold relative top-0">Color</h5>

        {productsColors.map((item) => (
          <div className="mt-10" key={item.id}>
            <input
              className="mr-4 w-5 h-5 border-2"
              type="checkbox"
              id={item.id}
              name={item.label}
            />
            <label>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
