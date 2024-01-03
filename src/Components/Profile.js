import React, { useState } from "react";
import "./Profile.css";
import Nav from "./Nav";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const ProfileForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [cvupload, setCvupload] = useState(null);
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [clgDuration, setClgDuration] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workDuration, setWorkDuration] = useState("");
  const [currentCTC, setCurrentCTC] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [certifications, setCertifications] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSkillSelect = (e) => {
    const newlocations = technicalSkills.filter((locs) => {
      return locs !== e.target.value;
    });
    //   setLocation([newlocations]);
    setTechnicalSkills([...newlocations, e.target.value]);
  };

  const deleteSkill = (loc) => {
    const newlocations = technicalSkills.filter((locs) => {
      return locs !== loc;
    });
    setTechnicalSkills(newlocations);
  };

  // const handleCheckboxChange = (language) => {
  //   const updatedLanguages = [...programmingLanguages];
  //   const index = updatedLanguages.indexOf(language);
  //   if (index === -1) {
  //     updatedLanguages.push(language);
  //   } else {
  //     updatedLanguages.splice(index, 1);
  //   }
  //   setProgrammingLanguages(updatedLanguages);
  // };

  const handleSubmit = async (e) => {

    const formData = {
      fullName,
      email,
      contactNo,
      CV: cvupload,
      education: {
        college,
        degree,
        specialization,
        clgDuration,
      },
      workExperience: {
        companyName,
        jobTitle,
        workDuration,
        currentCTC,
      },
      currentLocation,
      technicalSkills,
      certifications,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data.message);
      setSuccessMessage("Data successfully submitted");
    } catch (error) {
      console.error("Error:", error);
    }
  };

   const navigate = useNavigate();
  const linkToVideo = ()=>{
    navigate('/recordvideo');
  }

  return (
    <div>
      <Nav></Nav>
      <TextField
        id="standard-basic"
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Phone Number"
        variant="outlined"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
      />
      <label>CV Upload:</label>
      <input
        type="file"
        name="CV"
        // value={cvupload}
        onChange={(e) => setCvupload(e.target.files[0])}
      />
      <label>Education:</label>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-college"
            select
            label="Select"
            defaultValue="EUR"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            helperText="Please select your college"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-degree"
            select
            label="Select"
            defaultValue="EUR"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            helperText="Please select your degree"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-specialization"
            select
            label="Select"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            defaultValue="EUR"
            helperText="Please select your specialization"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-duration"
            select
            label="Select"
            defaultValue="EUR"
            value={clgDuration}
            onChange={(e) => setClgDuration(e.target.value)}
            helperText="Please select your duration"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <label>Work Experience:</label>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-company"
            select
            label="Select"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            defaultValue="EUR"
            helperText="Please select your company"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-job-title"
            select
            label="Select"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            defaultValue="EUR"
            helperText="Please select your job-title"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-duration"
            select
            label="Select"
            value={workDuration}
            onChange={(e) => setWorkDuration(e.target.value)}
            defaultValue="EUR"
            helperText="Please select your duration"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <label>
        Current CTC:
        <input
          type="number"
          name="cctc"
          value={currentCTC}
          onChange={(e) => setCurrentCTC(e.target.value)}
        />
      </label>
      <label>
        Current Location:
        <input
          type="text"
          name="clocation"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
        />
      </label>
      <label>
        Certifications:
        <input
          type="file"
          name="certifications"
          onChange={(e) => setCertifications(e.target.files[0])}
        />
      </label>
      <label htmlFor="">Technical Skills:</label>
      <select className="drop-down" onChange={handleSkillSelect}>
        <option value="" disabled selected>
          Select
        </option>
        <option value="C">C</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
      <div>
        {technicalSkills.map((skill) => {
          return (
            <span className="location">
              <span onClick={() => deleteSkill(skill)}>
                <CloseIcon />
              </span>
              {skill}
            </span>
          );
        })}
      </div>
      <div>
          <button onClick={linkToVideo} style={{ width: "150px", margin: "20px" }}>Record Video</button>
        
        <button style={{ width: "150px", margin: "20px" }}>Update</button>
        <button style={{ width: "150px", margin: "20px" }}>Feedback</button>
        <button
          style={{ width: "150px", margin: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
