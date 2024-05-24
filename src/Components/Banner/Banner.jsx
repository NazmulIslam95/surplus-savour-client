import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            className="max-h-[618px]"
            // className="max-h-svh"
            src="https://i.ibb.co/b1N71gs/Banner-2.jpg"
          />
        </div>
        <div>
          <img
            className="max-h-[618px]"
            // className="max-h-svh"
            src="https://i.ibb.co/SRLM3Wt/Banner-1.png"
          />
        </div>
        <div>
          <img
            className="max-h-[618px]"
            // className="max-h-svh"
            src="https://i.ibb.co/VqWQKBz/Banner-3.jpg"
          />
        </div>
        <div>
          <img
            className="max-h-[618px]"
            // className="max-h-svh"
            src="https://i.ibb.co/8PCWpMf/Banner-4.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
