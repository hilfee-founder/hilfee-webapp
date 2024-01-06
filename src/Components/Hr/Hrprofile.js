import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Assets/Styles/hrprofile.css";
import {url} from '../Constant.js';

const CompanyForm = () => {
    const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    contactNumber: '',
    companyLocation: '',
    numberOfEmployees: '',
    industryType: '',
    aboutCompany: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (<>
  
    <Container className="mt-5">
      <div>
      <i
        className="bi bi-pencil-square edit-form-icon"
        onClick={handleEditClick}
        disabled={isEditMode}
      ></i>
      </div>
    
      <Form onSubmit={handleSubmit}>
        {/* 1st Row */}
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="companyName">
              <Form.Label className="text-muted">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="companyEmail">
              <Form.Label className="text-muted">Company Email</Form.Label>
              <Form.Control
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="contactNumber">
              <Form.Label className="text-muted">Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* 2nd Row */}
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="companyLocation">
              <Form.Label className="text-muted">Company Location</Form.Label>
              <Form.Control
                type="text"
                name="companyLocation"
                value={formData.companyLocation}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="industryType">
              <Form.Label className="text-muted">Industry Type</Form.Label>
              <Form.Control
                type="text"
                name="industryType"
                value={formData.industryType}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="numberOfEmployees">
              <Form.Label className="text-muted">Number of Employees</Form.Label>
              <Form.Control
                type="number"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* 3rd Row */}
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="aboutCompany">
              <Form.Label className="text-muted">About Company (Description)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* 4th Row */}
        <div className='btn'>
        
        <div className="mb-3" />
        <Row>
          <Col md={3} className="d-flex align-items-end">
            <Button type="submit" variant="primary" className="save-button">
              Save
            </Button>
          </Col>
          <Col md={3} className="d-flex align-items-end">
            <Button variant="secondary" onClick={handleCancelClick} className="cancel-button">
              Cancel
            </Button>
          </Col>
        </Row>
        </div>
      </Form>
    </Container>
    </>
  );
};

export default CompanyForm;
