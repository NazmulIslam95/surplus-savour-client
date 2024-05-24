import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

const ColorButton = styled(Button)(() => ({
  backgroundColor: green[400],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export default function ShowAllButton() {
  return (
    <>
      <ColorButton className="w-72 h-12" variant="contained">
        Show All
      </ColorButton>
    </>
  );
}
