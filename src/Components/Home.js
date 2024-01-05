import React, { useState } from "react";
import "../Components/Assets/Landing-page.css";
import Nav from "./Nav";
import Jobs from "./Jobs";

function Home() {
  const [location, setLocation] = useState([]);
  const [AllJobs, setAllJobs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleLocationSelect = (e) => {
    const newlocations = location.filter((locs) => {
      return locs !== e.target.value;
    });
    //   setLocation([newlocations]);
    setLocation([...newlocations, e.target.value]);
  };

  const deleteLocation = (loc) => {
    const newlocations = location.filter((locs) => {
      return locs !== loc;
    });
    setLocation(newlocations);
  };

  return (
    <div className="landing">
      <Nav />
      <div className="landing-main">
        <div className="landing-sidebar">
          <div className="job-filter">
            <label htmlFor="">Industry:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Experience in This Industry:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor=""> Role Category:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Experience in This Role category:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">CTC Expectation:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Department:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Experience In This Department:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Location:</label>
            <select className="drop-down">
              <option value="" disabled selected>
                Industry
              </option>
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
          </div>
          <button className="home-btn" type="submit">
            Submit
          </button>
        </div>
        <div className="landing-jobs">
          <h3>JOB Lists</h3>
          
          <div className="all-jobs">
          {AllJobs.map((j, i) => {
            return <Jobs in={i} />;
          })}
          </div>
          
          
          <button>Apply All</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
