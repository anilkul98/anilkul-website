import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { PRIMARY_COLOR, TEXT_COLOR } from "../shared/constants";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../components/DownloadResumeButton";
import HomeIcon from "@mui/icons-material/Home";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: PRIMARY_COLOR }} position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" flexGrow={1} alignItems="center">
            <IconButton color="inherit" size="small" onClick={handleGoHome}>
              <HomeIcon style={{ color: TEXT_COLOR, fontSize: "30" }} />
              <Typography
                variant="h5"
                color={TEXT_COLOR}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Anıl Kul
              </Typography>
            </IconButton>
          </Box>

          <div>
            <DownloadButton />
          </div>
          <div>
            <IconButton color="inherit" size="small" onClick={handleContact}>
              <Typography
                variant="body"
                color={TEXT_COLOR}
                sx={{
                  fontFamily: "sans-serif",
                }}
              >
                Contact
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
