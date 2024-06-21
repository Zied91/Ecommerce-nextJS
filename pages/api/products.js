// fake data
import products from "../../utils/data/products";

export default function handler(req, res) {
  console.log(req);

  // fake loading time
  setTimeout(() => {
    res.status(200).json(products);
  }, 500);
}
