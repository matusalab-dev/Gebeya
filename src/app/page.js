import Header from "../components/Header";
import LatestCollection from "../components/LatestCollection";
import Categories from "../components/Categories";
import ImageWithText from "../components/ImageWithText";
import BrowseByCategory from "../components/BrowseByCategory";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header className="md:min-h-screen">
        <Hero />
      </Header>
      <main className="space-y-20">
        <LatestCollection />
        <Categories />
        <ImageWithText />
        <BrowseByCategory />
      </main>
      <Footer />
    </>
  );
}
