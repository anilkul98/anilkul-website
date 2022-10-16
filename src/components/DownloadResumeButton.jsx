import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { TEXT_COLOR } from "../shared/constants";

export default function DownloadButton() {
  const downloadFile = () => {
    fetch("AK_Resume_2022.pdf").then((response) => {
      console.log(response);
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "AnilKul_Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <IconButton color="inherit" size="small" onClick={downloadFile}>
      <Typography
        variant="body"
        color={TEXT_COLOR}
        sx={{
          fontFamily: "sans-serif",
        }}
      >
        Download Resume
      </Typography>
    </IconButton>
  );
}
