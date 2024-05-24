import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import Navbar from "../../Components/Navbar/Navbar";
import { FloatButton } from "antd";
import ContactUs from "../../Components/ContactUs/ContactUs";
// import { Scrollbar } from "react-scrollbars-custom";

const Home = () => {
  return (
    // <Scrollbar></Scrollbar>
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Featured></Featured>
        <Gallery></Gallery>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
      <FloatButton.BackTop visibilityHeight={100} />
      <Helmet>
        <title>Surplus Savour | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;
