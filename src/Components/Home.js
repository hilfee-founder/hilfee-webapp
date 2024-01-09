import React, { useEffect, useState } from "react";
import "../Components/Assets/Landing-page.css";
import Nav from "./Nav";
import Jobs from "./Jobs";

function Home() {
  const [location, setLocation] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [error, setError] = useState(null);
  const [filters,setFilters]=useState({
    Industry:''
  })

  const handleFilterSelect=(e)=>{
    console.log('hii');
    console.log(e);
          // setFilters.Industry=e.target.value
  }

  // Fetching all jobs for user
  useEffect(() => { 
    const fetchJobPosts = async () => {
      try {
        // Fetch job posts specific to the logged-in HR user
        const response = await fetch(
          "http://localhost:8000/api/v1/user/getAllJobs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setAllJobs(data.data);
          setError(null);
        } else {
          setError(data.message || "Failed to fetch job posts");
        }
      } catch (error) {
        console.error("Error during job post retrieval:", error);
        setError("Failed to fetch job posts");
      }
    };
    fetchJobPosts();
  }, []);

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
            <select className="drop-down" onChange={handleFilterSelect}>
              <option value="Industry">Industry</option>
            </select>
            <label htmlFor="">Experience in This Industry:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor=""> Role Category:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Experience in This Role category:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">CTC Expectation:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Department:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Experience In This Department:</label>
            <select className="drop-down">
              <option value="Retail/B2C Sales - Field Sales">
                Retail/B2C Sales - Field Sales
              </option>
            </select>
            <label htmlFor="">Location:</label>
            <select className="drop-down">
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
            {AllJobs.map((j, index) => {
              return (
                <Jobs
                  title={j.title}
                  company={j.company}
                  location={j.location}
                  description={j.description}
                  salary={j.ctcRange}
                  exp={j.workExp}
                />
              );
            })}
          </div>

          <button className="job-btn">Apply All</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
