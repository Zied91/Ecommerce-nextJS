import Image from "next/image";
import Link from "next/link";
const productItem = ({
  id,
  name,
  price,
  color,
  discount,
  currentPrice,
  images,
}) => {
  return (
    <div className="h-50 w-50">
      <Link href={`/product/${id}`}>
        <Image src={images[0]} width={300} height={300} alt="" />
        <h2 className="text-2xl">{name}</h2>
        <h4>${currentPrice}</h4>

        {discount && <span>${price}</span>}
      </Link>
    </div>
  );
};

export default productItem;
