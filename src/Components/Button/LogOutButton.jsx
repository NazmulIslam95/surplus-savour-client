import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

const ColorButton = styled(Button)(() => ({
  backgroundColor: green[400],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const LogOutButton = () => {
  return (
    <div>
      <ColorButton className="w-full h-10" variant="contained">
        LogOut
      </ColorButton>
    </div>
  );
};

export default LogOutButton;
