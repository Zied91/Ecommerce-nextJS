import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, setCount } from "../../../store/reducers/cart";
const Item = ({ thumb, name, id, color, size, count, price }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      })
    );
  };

  const setProductCount = (count) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: {
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      },
      count,
    };

    dispatch(setCount(payload));
  };

  return (
    <tr>
      <td>
        <div>
          <div>
            <Image
              src={thumb}
              alt=""
              className="rounded-full"
              width={80}
              height={50}
            />
          </div>

          <div>
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td data-label="Color">{color}</td>
      <td data-label="Size">{size}</td>
      <td>
        <div className="rounded-2xl border-2 w-20 text-center flex justify-evenly">
          <button type="button" onClick={() => setProductCount(count - 1)}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={() => setProductCount(count + 1)}>
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <button onClick={() => removeFromCart()}>X</button>
      </td>
    </tr>
  );
};

export default Item;
