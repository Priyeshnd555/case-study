import { AddCircleRounded } from "@material-ui/icons";
import {
  Autocomplete,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Modals from "../kavitha/Modals";
import "./Upload.css";
function UploadQuestion() {
  const [UploadData, setUploadData] = useState({
    CandidateName: "",
    Department: "",
    ClientName: "",
    InterviewLevel: "",
    Technology: "",
    Question: "",
    Answer: "",
  });
  const [questions, setQuestions] = useState([
    {
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    },
  ]);
  //Destructuring
  // const {CandidateName,Department,ClientName,InterviewLevel,Technology}=UploadData
  //Data to be shown in dropdown
  const DepartmentOptions = ["HR", "IT"];
  const InterviewLevelOptions = ["Easy", "Intermediate", "Expert"];
  const TechnologyOptions = ["React JS", "Angular", "Vue JS", "Java"];
  //Data is entered into the UserData
  const handleChange = (event) => {
    console.log("in handle change");
    // const a={[event.target.name]:event.target.value}
    setUploadData({
      ...UploadData,
      CandidateName: event.target.value,
      // [event.target.name]:event.target.value
      // [event.target.name]:a
    });
  };

  return (
    <div>
      <Paper>
        <Container>
          <h1>Upload your Questions</h1>

          <Grid container spacing={2}>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Candidate Name"
                name={UploadData.CandidateName}
                value={UploadData.CandidateName}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id="combo-box-demo"
                options={DepartmentOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" />
                )}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Client Name"
                name={UploadData.ClientName}
                value={UploadData.ClientName}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id="combo-box-demo"
                options={TechnologyOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Technology" />
                )}
              />
            </Grid>
          </Grid>

          {/* Question and Answer Section */}
          <Grid container mt={2} spacing={2}>
            <Grid item lg={8}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Question"
              />
            </Grid>

            <Grid item>
              <Autocomplete
                id="combo-box-demo"
                options={InterviewLevelOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Interview Level" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container mt={2}>
            <Grid item lg={8}>
              <TextField
                id="outlined-multiline-static"
                fullWidth
                label="Answer"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item lg={4}>
              <Box>
                {" "}
                <Button variant="contained" startIcon={<AddCircleRounded />}>
                  Add New
                </Button>
              </Box>
            </Grid>

            <Grid item justifyContent="center">
              <Box mt={2}>
              <Modals />
              </Box>
            </Grid>
          </Grid>

          {/* { console.log('candidateName',UploadData.CandidateName)} */}
        </Container>
      </Paper>
    </div>
  );
}

export default UploadQuestion;
