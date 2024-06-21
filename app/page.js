import Ads from "../components/details/index";
import Footer from "../components/footer/index";
import Header from "../components/header/index";
import PageIntro from "../components/page-intro/index";
import Subscribe from "../components/subscribe/index";
import Layout from "../components/layout/index";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center bg-black justify-between">
        <PageIntro />
        <Ads />
        <Subscribe />
        <Footer />
      </main>
    </Layout>
  );
}
