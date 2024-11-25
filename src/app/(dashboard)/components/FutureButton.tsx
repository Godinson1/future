import React from "react";
import { AppLoader } from "src/app/components/ui/Loader";
import Button from "@mui/material/Button";

interface IFutureButton {
  title: string;
  loading?: boolean;
  bgColor?: string;
  fullWidth?: boolean;
  variant?: "text" | "contained" | "outlined";
  handleOnClick: () => void;
}

const FutureButton = ({ title, loading, bgColor = "#7c66da", handleOnClick, variant = "contained", fullWidth = true }: IFutureButton) => {
  return (
    <Button className='mt-2 mb-2' variant={variant} onClick={handleOnClick} disabled={loading} style={{ backgroundColor: bgColor }} sx={{ height: 35 }} fullWidth={fullWidth}>
      {loading ? <AppLoader /> : title}
    </Button>
  );
};

export default FutureButton;
