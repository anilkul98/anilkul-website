import "../App.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardMedia, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Modal } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";
import DetailsCard from "../components/DetailsCard";
// import { grey } from "@mui/material/colors";

const anilImg = require("../assets/anilImg.png");
const projectList = require("../shared/projects.json");
const educationList = require("../shared/education.json");
const workExperienceList = require("../shared/work_experience.json");
const detailImages = {
  bio_div_detection: [
    require("../assets/bio_div_detection_1.png"),
    require("../assets/bio_div_detection_2.png"),
    require("../assets/bio_div_detection_3.png"),
  ],
  change_detection: [
    require("../assets/change_detection_after.png"),
    require("../assets/change_detection_before.png"),
    require("../assets/change_detection.png"),
  ],
  dental_xray: [
    require("../assets/dental_xray_1.png"),
    require("../assets/dental_xray_2.png"),
  ],
  face_anonym: [
    require("../assets/face_anonym_1.png"),
    require("../assets/face_anonym_2.png"),
    require("../assets/face_anonym_ak_base.jpg"),
    require("../assets/face_anonym_ak.jpg"),
  ],
  face_expression: [
    require("../assets/face_expression_1.jpg"),
    require("../assets/face_expression_2.jpg"),
  ],
  MOT: [require("../assets/MOT_1.png"), require("../assets/MOT_2.png")],
  otoscope: [require("../assets/otoscope_video.png")],
};

// console.log(a);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

function HomePage() {
  const [value, setValue] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getInfo = (info) => {
    setInfo(info);
  };

  const handleDetailsButton = (bool) => {
    setIsOpen(bool);
  };

  const onDetailsButtonClicked = () => {
    handleDetailsButton(true);
  };

  const onCloseButtonClicked = () => {
    handleDetailsButton(false);
  };

  const handleCloseDetails = () => {
    handleDetailsButton(false);
  };

  console.log(isOpen);

  return (
    <div style={{ paddingTop: 100 }}>
      <Grid container direction="column">
        <Grid item>
          <Card
            sx={{
              m: 1,
            }}
          >
            <Grid container direction="column">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  sx={{ borderRadius: 50, width: "20vh", height: "20vh" }}
                  image={anilImg}
                  alt={anilImg}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CardContent>
                  <Link href="https://www.linkedin.com/in/kulanil/">
                    <LinkedInIcon fontSize="large" />
                  </Link>
                  <Link href="https://github.com/anilkul98">
                    <GitHubIcon fontSize="large" />
                  </Link>
                </CardContent>
              </div>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              m: 2,
            }}
          >
            <TabContext value={value}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Projects" value={1} />
                    <Tab label="Working Experience" value={2} />
                    <Tab label="Education" value={3} />
                  </TabList>
                </Box>
              </div>

              <TabPanel value={1}>
                {projectList.map((project, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      type="project"
                      title={project.title}
                      summary={project.summary}
                      imgPath={project.imgPath}
                      getExperienceInfo={getInfo}
                      detailsButtonClicked={onDetailsButtonClicked}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel value={2}>
                {workExperienceList.map((workExperience, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      type="work"
                      title={workExperience.title}
                      subtitle={workExperience.subtitle}
                      subtitle2={workExperience.subtitle2}
                      summary={workExperience.summary}
                      stringList={workExperience.stringList}
                      getExperienceInfo={getInfo}
                      detailsButtonClicked={onDetailsButtonClicked}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel value={3}>
                {educationList.map((education, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      type="education"
                      title={education.title}
                      subtitle={education.subtitle}
                      subtitle2={education.subtitle2}
                      summary={education.summary}
                      getExperienceInfo={getInfo}
                      detailsButtonClicked={onDetailsButtonClicked}
                    />
                  );
                })}
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
      <Modal
        open={isOpen}
        onClose={handleCloseDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyConent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>
          <DetailsCard
            info={info}
            requiredList={detailImages[info.imgPath]}
            closeButtonClicked={onCloseButtonClicked}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default HomePage;
