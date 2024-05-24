import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

const ColorButton = styled(Button)(() => ({
  backgroundColor: green[400],
  "&:hover": {
    backgroundColor: green[700],
  },
}));
const RequestButton = () => {
  return (
    <div>
      <ColorButton className="w-full h-10" variant="contained">
        Request Food
      </ColorButton>
    </div>
  );
};

export default RequestButton;
