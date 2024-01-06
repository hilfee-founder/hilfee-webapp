import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Assets/Styles/profile1.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Select from "react-select";




const MyForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [eduStartDate, setEduStartDate] = useState("");
  const [eduEndDate, setEduEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");
  const [location, setLocation] = useState("");
  const [certification, setCertification] = useState("");
  const [videoResume, setVideoResume] = useState("");

  const technicalSkillsOptions = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'java', label: 'Java' },
  ];
  
  // Options for CTC
  const ctcOptions = [
    { value: '0-5', label: '0-5 LPA' },
    { value: '5-10', label: '5-10 LPA' },
    { value: '10-15', label: '10-15 LPA' },
  ];
  
  // Options for Location
  const locationOptions = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
  ];
  
  // Options for Certification
  const certificationOptions = [
    { value: 'aws', label: 'AWS Certified' },
    { value: 'java-se', label: 'Java SE Certification' },
    { value: 'python', label: 'Python Certification' },
  ];
  const [certificationValues, setCertificationValues] = useState([
    "Certification 1",
  ]);
  // Set to true or false based on your logic

  const handleCertificationChange = (e) => {
    setCertificationValues(
      Array.from(e.target.selectedOptions, (option) => option.value)
    );
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSaveClick = () => {
    // Your logic for handling the save action
    console.log("Save button clicked!");
  };
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  const navigate = useNavigate();
  const linkToVideo = () => {
    navigate("/recordvideo");
  };
  return (
    <Container>
      <i
        className="bi bi-pencil-square edit-form-icon"
        onClick={handleEditClick}
        disabled={isEditMode}
      ></i>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          {/* Add other personal information fields here */}
        </Row>

        {/* Education Information */}
        <Row>
          <Col>
            <Form.Group controlId="college">
              <Form.Label>College</Form.Label>
              <Form.Control
                as="select"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                disabled={!isEditMode}
              >
                <option value="">Select College</option>
                <option value="College 1">College 1</option>
                <option value="College 2">College 2</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="degree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                as="select"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                disabled={!isEditMode}
              >
                <option value="">Select Degree</option>
                <option value="Degree 1">Degree 1</option>
                <option value="Degree 2">Degree 2</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="specialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                as="select"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                disabled={!isEditMode}
              >
                <option value="">Select Specialization</option>
                <option value="Specialization 1">Specialization 1</option>
                <option value="Specialization 2">Specialization 2</option>
                {/* Add more specializations as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="eduStartDate">
              <Form.Label>Education Start Date</Form.Label>
              <Form.Control
                type="date"
                value={eduStartDate}
                onChange={(e) => setEduStartDate(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="eduEndDate">
              <Form.Label>Education End Date</Form.Label>
              <Form.Control
                type="date"
                value={eduEndDate}
                onChange={(e) => setEduEndDate(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Work Experience */}
        <Row>
          <Col>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                as="select"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={!isEditMode}
              >
                <option value="">Select Company</option>
                <option value="Company 1">Company 1</option>
                <option value="Company 2">Company 2</option>
                {/* Add more companies as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="workStartDate">
              <Form.Label>Work Start Date</Form.Label>
              <Form.Control
                type="date"
                value={workStartDate}
                onChange={(e) => setWorkStartDate(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="workEndDate">
              <Form.Label>Work End Date</Form.Label>
              <Form.Control
                type="date"
                value={workEndDate}
                onChange={(e) => setWorkEndDate(e.target.value)}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Skills and Certifications */}
        <Row>
  <Col>
    <Form.Group controlId="technicalSkills">
      <Form.Label>Technical Skills:</Form.Label>
      <Select
        defaultValue={[technicalSkillsOptions[0]]}
        isMulti
        name="technicalSkills"
        options={technicalSkillsOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        isDisabled={!isEditMode}
      />
    </Form.Group>
  </Col>
  <Col>
    <Form.Group controlId="ctc">
      <Form.Label>CTC:</Form.Label>
      <Select
        defaultValue={[ctcOptions[0]]}
        isMulti
        name="ctc"
        options={ctcOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        isDisabled={!isEditMode}
      />
    </Form.Group>
  </Col>
  <Col>
    <Form.Group controlId="location">
      <Form.Label>Location:</Form.Label>
      <Select
        defaultValue={[locationOptions[0]]}
        isMulti
        name="location"
        options={locationOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        isDisabled={!isEditMode}
      />
    </Form.Group>
  </Col>
  <Col>
    <Form.Group controlId="certification">
      <Form.Label>Certification:</Form.Label>
      <Select
        defaultValue={[certificationOptions[0]]}
        isMulti
        name="certification"
        options={certificationOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        isDisabled={!isEditMode}
      />
    </Form.Group>
  </Col>
</Row>


        {/* Actions */}
        <Container fluid className="mt-3">
          <div className="button-container">
            <button onClick={linkToVideo}>Record Video</button>
            <Button variant="primary" type="submit">
              Submit/Update
            </Button>
            <Button variant="info">Feedback</Button>
          </div>
        </Container>

        {/* Save and Cancel Buttons */}
        <Container fluid className="mt-3">
          <Row className="justify-content-start">
            <Col
              md={6}
              className="d-flex align-items-end justify-content-start"
            >
              <div className="button-container">
                <Button
                  type="submit"
                  variant="primary"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancelClick}>
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
};

export default MyForm;
