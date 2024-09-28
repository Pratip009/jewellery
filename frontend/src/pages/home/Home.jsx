import Blogs from "../Blogs/Blogs";
import TrendingProducts from "../shop/TrendingProducts";
import Banner from "./Banner";
import Categories from "./Categories";
import DealsSection from "./DealsSection";

import HeroSections from "./HeroSections";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSections />
      <TrendingProducts />
      <DealsSection />
      <PromoBanner/>
      <Blogs/>
    </>
  );
};

export default Home;
