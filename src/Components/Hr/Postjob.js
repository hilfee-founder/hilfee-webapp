import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Assets/Styles/hrpostjob.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Yup from 'yup';

const JobApplicationForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };
  const technicalToolsOptions = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'java', label: 'Java' },
  ];


  const initialValues = {
    industry: "",
    experience: "",
    role: "",
    category: "",
    location: "",
    department: "",
    experience2: "",
    ctcRange: "",
    jobTitle: "",
    technicalTools: "",
    overallExperience: "",
    jdFile: null,
  };
  const validationSchema = Yup.object({
    // Define your validation schema here
    industry: Yup.string().required('Required'),
    experience1: Yup.string().required('Required'),
    jobRole: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    experience2: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    department: Yup.string().required('Required'),
    experience3: Yup.string().required('Required'),
    ctcRange: Yup.string().required('Required'),
    jobTitle: Yup.string().required('Required'),
    technicalTools: Yup.string().required('Required'),
    overallExperience: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Container className="mt-5">
    <div>
      <i
        className="bi bi-pencil-square edit-form-icon"
        onClick={handleEditClick}
        disabled={isEditMode}
      ></i>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Row>
            <Col className="form-field-container" md={4}>
              <label htmlFor="industry">Industry</label>
              <Field
                as="select"
                className="form-control"
                id="industry"
                name="industry"
                disabled={!isEditMode}
              >
                <option value="" label="Select an industry" />
                <option value="IT" label="Information Technology" />
                <option value="Finance" label="Finance" />
                <option value="Healthcare" label="Healthcare" />
              </Field>
              <ErrorMessage
                name="industry"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="experience">Experience (in years)</label>
              <Field
                type="text"
                className="form-control"
                id="experience"
                name="experience"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="experience"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="role">Role</label>
              <Field
                as="select"
                className="form-control"
                id="role"
                name="role"
                disabled={!isEditMode}
              >
                <option value="" label="Select a role" />
                <option value="Manager" label="Manager" />
                <option value="Developer" label="Developer" />
                <option value="Analyst" label="Analyst" />
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>

          <Row>
            <Col className="form-field-container" md={4}>
              <label htmlFor="category">Category</label>
              <Field
                as="select"
                className="form-control"
                id="category"
                name="category"
                disabled={!isEditMode}
              >
                <option value="" label="Select a category" />
                <option value="Technical" label="Technical" />
                <option value="Administrative" label="Administrative" />
                <option value="Management" label="Management" />
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="experience2">Experience (in years)</label>
              <Field
                type="text"
                className="form-control"
                id="experience2"
                name="experience2"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="experience2"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="location">Location</label>
              <Field
                as="select"
                className="form-control"
                id="location"
                name="location"
                disabled={!isEditMode}
              >
                <option value="" label="Select a location" />
                <option value="New York" label="New York" />
                <option value="San Francisco" label="San Francisco" />
                <option value="London" label="London" />
              </Field>
              <ErrorMessage
                name="location"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>

          <Row>
          <Col className="form-field-container" md={4}>
              <label htmlFor="department">Department</label>
              <Field
                as="select"
                className="form-control"
                id="department"
                name="department"
                disabled={!isEditMode}
              >
                <option value="" label="Select a department" />
                <option value="Engineering" label="Engineering" />
                <option value="Human Resources" label="Human Resources" />
                <option value="Marketing" label="Marketing" />
              </Field>
              <ErrorMessage
                name="department"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="experience3">Experience (in years)</label>
              <Field
                type="text"
                className="form-control"
                id="experience3"
                name="experience3"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="experience3"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="ctcRange">CTC Range</label>
              <Field
                type="text"
                className="form-control"
                id="ctcRange"
                name="ctcRange"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="ctcRange"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>

          <Row>
            <Col className="form-field-container" md={4}>
              <label htmlFor="jobTitle">Job Title</label>
              <Field
                as="select"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                disabled={!isEditMode}
              >
                <option value="" label="Select a job title" />
                <option value="Software Engineer" label="Software Engineer" />
                <option value="Project Manager" label="Project Manager" />
                <option value="Data Analyst" label="Data Analyst" />
              </Field>
              <ErrorMessage
                name="jobTitle"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col className="form-field-container" md={4}>
              <label htmlFor="technicalSkills">Technical Skills</label>
              <Field
                as="select"
                className="form-control"
                id="technicalSkills"
                name="technicalSkills"
                disabled={!isEditMode}
              >
                <option value="" label="Select technical skills" />
                <option value="JavaScript" label="JavaScript" />
                <option value="React" label="React" />
                <option value="Python" label="Python" />
              </Field>
              <ErrorMessage
                name="technicalSkills"
                component="div"
                className="text-danger"
              />
            </Col>
         
            <Col className="form-field-container" md={4}>
              <label htmlFor="overallExperience">Overall Experience</label>
              <Field
                type="text"
                className="form-control"
                id="overallExperience"
                name="overallExperience"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="overallExperience"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <label htmlFor="jdFile">Upload JD (template)</label>
              <Field
                type="file"
                className="form-control-file"
                id="jdFile"
                name="jdFile"
                disabled={!isEditMode}
              />
              <ErrorMessage
                name="jdFile"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Button type="submit" variant="primary">
                Save
              </Button>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Button variant="secondary" onClick={handleCancelClick}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
};

export default JobApplicationForm;
