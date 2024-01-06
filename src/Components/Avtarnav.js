import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you're using React Router
import "../Components/Assets/Styles/avtar.css";

const BasicExample = () => {
  return (
    <Dropdown className="ml-auto">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="bi bi-person-circle" style={{ fontSize: '30px', color: 'black' }}></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/action-1">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action-2">Job Posting</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
