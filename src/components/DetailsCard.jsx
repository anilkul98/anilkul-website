/* eslint-disable react/prop-types */
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
// import MuiImageSlider from "mui-image-slider";
import ImageSlider from "./ImageSlider";

const style = {
  m: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function DetailsCard({
  info,
  requiredList,
  closeButtonClicked,
}) {
  const close = () => {
    closeButtonClicked(true); // Update parent
  };

  console.log(requiredList);
  return (
    <Paper
      sx={{
        m: 1,
        height: "80vh",
        overflow: "auto",
      }}
    >
      <Box sx={style}>
        <Typography variant="h4">{info.title}</Typography>
      </Box>

      <Box sx={style}>
        <Grid container direction="column">
          <div style={{ display: "flex", justifyContent: "center" }}>
            {requiredList && <ImageSlider imgList={requiredList} />}
          </div>

          <Typography
            sx={{
              m: 1,
            }}
            variant="body1"
          >
            {info.summary}
          </Typography>
        </Grid>
      </Box>

      <Button
        onClick={() => {
          close();
        }}
      >
        Close
      </Button>
    </Paper>
  );
}
