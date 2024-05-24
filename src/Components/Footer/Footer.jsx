import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#D6F1BC] footer footer-center p-10 text-black">
        <aside>
          <Link>
            <img src={logo} alt="" className="w-16" />
          </Link>
          <p className="font-bold">
            Surplus Savour <br />{" "}
            <span className="font-normal">
              Trusted Surplus Sharing Platform since 1992
            </span>
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <Link>
              <FaSquareXTwitter></FaSquareXTwitter>
            </Link>
            <Link>
              <FaFacebookF></FaFacebookF>
            </Link>
            <Link>
              <AiFillYoutube></AiFillYoutube>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
