import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Assuming you are using React Router for navigation
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const settings = ['Profile', 'Job Posting', 'Logout'];

function Hrprofile() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', {
      industry,
      exp1,
      role,
      category,
      exp2,
      location,
      department,
      exp3,
      ctcRange,
      overallExp,
      technicalTools,
    });
  };

  const [industry, setIndustry] = useState('');
  const [exp1, setExp1] = useState('');
  const [role, setRole] = useState('');
  const [category, setCategory] = useState('');
  const [exp2, setExp2] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [exp3, setExp3] = useState('');
  const [ctcRange, setCtcRange] = useState('');
  const [overallExp, setOverallExp] = useState('');
  const [technicalTools, setTechnicalTools] = useState('');

  return (
    <div>
     <AppBar position="static">
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1 }} />

      {/* Add the "Post a Job" link in the middle */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </Typography>
        <Link to="/post-job" color="inherit" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Post a Job</Button>
        </Link>
      </Box>

      {/* User menu */}
      <Box sx={{ ml: 2 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </Container>
</AppBar>


      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Industry:</label>
              <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            </div>
            <div>
              <label>Experience:</label>
              <input type="text" value={exp1} onChange={(e) => setExp1(e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Role:</label>
              <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label>Category:</label>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div   style={{ marginRight: '10px' }}>
              <label>Experience:</label>
              <input type="text" value={exp2} onChange={(e) => setExp2(e.target.value)} />
            </div>
            <div>
              <label>Location:</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Department:</label>
              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label>Experience:</label>
              <input type="text" value={exp3} onChange={(e) => setExp3(e.target.value)} />
            </div>
            <div>
              <label>Ctc Range:</label>
              <input type="text" value={ctcRange} onChange={(e) => setCtcRange(e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Overall Experience:</label>
              <input type="text" value={overallExp} onChange={(e) => setOverallExp(e.target.value)} />
            </div>
            <div>
              <label>Technical Tools:</label>
              <input type="text" value={technicalTools} onChange={(e) => setTechnicalTools(e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div>
              <label>Upload CV:</label>
              <input type="file" />
            </div>
            <div style={{ float: 'right', marginBottom: '10px' }}>
            <button type="submit">Submit</button>
          </div>
          </div>

          
        </form>
      </Container>
    </div>
  );
}

export default Hrprofile;
