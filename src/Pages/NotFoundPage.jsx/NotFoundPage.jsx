import { Link } from "react-router-dom";
import BackToHome from "../../Components/Button/BackToHome";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-4 lg:p-16 bg-[#D6F1BC] ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="flex flex-col items-center text-center">
          <img src="https://i.ibb.co/0cMPyty/404.png" alt="" className="w-2/3" />
          <p className="my-4 text-lg font-semibold lg:text-xl">
            Sorry, we could not find this page.
          </p>
          <button className="w-3/5 mt-8">
            <Link to="/">
              <BackToHome></BackToHome>
            </Link>
          </button>
        </div>
      </div>
      <Helmet><title>Surplus Savour | 404</title></Helmet>
    </section>
  );
};

export default NotFoundPage;
