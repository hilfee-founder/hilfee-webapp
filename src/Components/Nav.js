import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import {url} from '../Components/Constant.js';
import "./Assets/Styles/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Menu, MenuItem, Select } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Nav = () => {
  const navigate=useNavigate();

  
  const checkToken = async () => {
    try{
      const response = await fetch(`${url}/verifyuser/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
    }
    catch(e){
      console.log(e);
    }
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

 const [anchorEl, setAnchorEl] = useState(null);

 const LinkToProfile=()=>{
  navigate('/profile')
 }

  const isMenuOpen = Boolean(anchorEl);



  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);

  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={LinkToProfile} >Profile</MenuItem>
      <MenuItem >Applied Jobs</MenuItem>
      <MenuItem >Log Out</MenuItem>
    </Menu>
  );

  


  return (
    <div className="nav-bar">
      <span className="logo-name">Hilfee</span>
      <input type="search" name="" value="search" style={{width:"40%",margin:"0.5em"}}/>
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
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        {renderMenu}
      </div>
    </div>
  );
};

export default Nav;
