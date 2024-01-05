import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import {url} from '../Components/Constant.js';
import "./Assets/Styles/Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const checkToken = async () => {
    const response = await fetch(`${url}/verifyuser/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
    });
  
    const data = await response.json();
    console.log(data);
  }
  

  console.log('Token in localStorage:', localStorage.getItem('token'));

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      } else {
        await checkToken();
      }
    };
  
    fetchData();
  }, [navigate]);
  return (
    <div className="nav-bar">
      <span className="logo-name">Hilfee</span>
      <div className="navigate">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Nav;
