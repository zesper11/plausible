import Blog from "./components/Blog";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";
import Whyus from "./components/Whyus";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Whyus />
      <Blog />
      <Subscription />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
