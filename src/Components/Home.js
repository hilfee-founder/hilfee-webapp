import React, { useState } from "react";
import "../Components/Assets/Landing-page.css";
import CloseIcon from "@mui/icons-material/Close";
import Nav from "./Nav";


function Home() {
  const [location, setLocation] = useState([]);


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
    <>
    <Nav/>
    <div className="job-profile">
      <div className="jobs-section">
        <div className="job-filter">
          <select className="drop-down">
            <option value="" disabled selected>
              Industry
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              CTC Expectation
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              Experience in this Industry
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              Department
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              Role Category
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              Experience in This Department
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down">
            <option value="" disabled selected>
              Experience in This Role Category
            </option>
            <option value="Retail/B2C Sales - Field Sales">
              Retail/B2C Sales - Field Sales
            </option>
            <option value="Enterprise/B2B Sales">Enterprise/B2B Sales</option>
          </select>
          <select className="drop-down" onChange={handleLocationSelect}>
            <option value="" disabled selected>
              Location
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <div className="locations">
            {location.map((loc) => {
              return (
                <span className="location">
                  <span onClick={() => deleteLocation(loc)}>
                    <CloseIcon />
                  </span>
                  {loc}
                </span>
              );
            })}
          </div>
        </div>

        <div className="btn">
          <button>Submit</button>
        </div>

        <div className="job-lists">
          <div className="list">Company 1</div>
          <div className="list">Company 2</div>
          <div className="list">Company 3</div>
          <div className="list">Company 4</div>
          <div className="list">Company 5</div>
        </div>
        <div className="btn"><button>Apply to All</button></div>
      </div>

    </div>
    </>
  );
}

export default Home;
