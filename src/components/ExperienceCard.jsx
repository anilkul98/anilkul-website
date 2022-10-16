/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { Card } from "@mui/material";

export default function ExperienceCard({
  type,
  title,
  subtitle,
  subtitle2,
  summary,
  stringList,
  imgPath,
  getExperienceInfo,
  detailsButtonClicked,
}) {
  if (!stringList) {
    stringList = [];
  }
  const clickDetails = () => {
    getExperienceInfo({
      title: title,
      subtitle: subtitle,
      subtitle2: subtitle2,
      summary: summary,
      stringList: stringList,
      imgPath: imgPath,
    });
    detailsButtonClicked(true); // Update parent
  };

  return (
    <Card
      sx={{
        m: 2,
      }}
    >
      <Box
        sx={{
          m: 2,
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <br />
        <Typography variant="h5">{subtitle}</Typography>
        <Typography variant="h6">{subtitle2}</Typography>
        <Typography variant="body1">{summary}</Typography>
        {stringList.map((elt, i) => {
          return (
            <Typography key={i} variant="body1">
              {elt}
            </Typography>
          );
        })}
        {type == "project" && (
          <Button
            onClick={() => {
              clickDetails();
            }}
          >
            Click for details
          </Button>
        )}
      </Box>
    </Card>
  );
}
