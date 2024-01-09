import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Jobs = (props) => {
  return (
    // <div className='jobs'>
    //     {props.title} {props.company} {props.location} {props.description}
    // </div>
    <div class="card">
    <h5 class="card-header">{props.company}</h5>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      <p className='job-spanpara'>
      <p> <span className='job-span'>
        <LocationOnIcon></LocationOnIcon>
        Location:</span>{props.location}
        </p>
        <p> <span className='job-span'>
        <WorkIcon></WorkIcon>
        Work Experience:</span>{props.exp}
        </p>
        <p> <span className='job-span'>
        <CurrencyRupeeIcon></CurrencyRupeeIcon>
        CTC:</span>{props.salary}
        </p>
        
        </p>
      <a href="#" class="btn btn-primary">Details</a>
    </div>
</div>
  )
}

export default Jobs
