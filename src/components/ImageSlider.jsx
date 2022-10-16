import React from "react";
import { Button } from "@mui/material";
import { MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/material/Icon";
import KeyboardArrowRight from "@mui/material/Icon";
import { useTheme } from "@mui/material";
// import Button from "@material-ui/core/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const ImageSlider = (imgs) => {
  const CollectionSize = imgs.imgList.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(index);

  return (
    <div
      style={{
        maxWidth: 400,
        flexGrow: 1,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={imgs.imgList[index]}
          style={{
            height: "40vh",
            width: "60vw",
            display: "block",
            overflow: "hidden",
          }}
          alt=""
        />
      </div>

      <MobileStepper
        variant="text"
        position="static"
        steps={CollectionSize}
        activeStep={index}
        nextButton={
          <Button
            size="small"
            onClick={goToNextPicture}
            disabled={index === CollectionSize - 1}
          >
            Next
            {theme.direction !== "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={goToPrevPicture} disabled={index === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default ImageSlider;
