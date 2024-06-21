import Head from "next/head";
import Header from "../header/index"; // Import your Header component
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        {/* Add other meta tags, favicons, etc., as needed */}
      </Head>
      <Header />
      <main>{children}</main>
      {/* Optionally, you can add a footer or other common elements here */}
    </div>
  );
};

export default Layout;
