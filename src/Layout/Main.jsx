import MouseParticles from "react-mouse-particles";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <MouseParticles
        g={1}
        num={5}
        color={["#8FAE6B", "#D6F1BC", "#66BB6A"]}
        cull="col,image-wrapper"
      />
      <Toaster position="bottom-right"></Toaster>
    </div>
  );
};

export default Main;
