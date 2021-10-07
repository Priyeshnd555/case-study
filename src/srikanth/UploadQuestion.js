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
import React, { useState,useEffect } from "react";
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
  const [questions, setquestions] = useState([
    {
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    },
  ]);

  useEffect(() => {
    
   
      console.log('useEffect',questions)
    
  }, [questions])
 
  const updateObj=(event,index)=>{
    const objCopy = {...questions[index]}
    objCopy[event.target.name] = event.target.value;
    console.log(`updated objCopy ${index}`,objCopy)
    setquestions(objCopy)

  }


  const updatenewObj=()=>{
    const objCopys =[...questions]
    objCopys.push({
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    })
    console.log(`new object updated to questions `,objCopys);
    setquestions(objCopys)


  }

  const deleteObj=(index)=>{
    const objCopy =[...questions];
    objCopy.splice(index,1)
    setquestions(objCopy)

  }
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
          <h2>Upload your Questions</h2>

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

          {
            questions.map((obj,index)=>{

              return (
                <div key={index}>
                <Grid container mt={2} spacing={2}>
            <Grid item lg={8}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Question"
                onChange={(e)=>updateObj(e,index)}
                name="Question"
                index={index}
              />
            </Grid>

            <Grid item>
              <Autocomplete
                id="combo-box-demo"
                options={InterviewLevelOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Interview Level" onChange={(e)=>updateObj(e,index)}  index={index} name="DifficultyLevel"/>
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
                onClick={(e)=>updateObj(e,index)}
                name="Answer"
                index={index}
              />
            </Grid>

          
           {index===questions.length-1? 
            <Grid item lg={4}>
              <Box>
                {" "}
                <Button variant="contained" startIcon={<AddCircleRounded />} onClick={updatenewObj}>
                  Add New
                </Button>
              </Box>
            </Grid> :
            <Grid item lg={4}>
              <Box>
                {" "}
                <Button variant="contained" startIcon={<AddCircleRounded />} onClick={()=>deleteObj(index)}>
                  Delete
                </Button>
              </Box>
            </Grid>}

            <Grid item justifyContent="center">
              <Box mt={2}>
              <Modals />
              </Box>
            </Grid>
          </Grid>
                </div>

              )
            })
          }
          

          {/* { console.log('candidateName',UploadData.CandidateName)} */}
        </Container>
      </Paper>
    </div>
  );
}

export default UploadQuestion;
