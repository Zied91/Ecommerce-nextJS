import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="w-screen bg-white">
      <div className="mt-10">
        <div className="flex justify-evenly">
          <div className="w-1/3">
            <h6>
              <Logo /> <span>E</span>-Shop
            </h6>
            <p className="font-thin text-gray-600">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
          </div>

          <div className="w-1/3 flex justify-around">
            <ul>
              <li className="font-bold">Shopping online</li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Information</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Contact</li>
              <li>
                <a href="#">store@uikit.com</a>
              </li>
              <li>
                <a href="#">Hotline: +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-screen mt-16">
        <div className="text-center text-gray-600 font-thin">
          <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
