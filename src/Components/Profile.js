import React, { useState } from 'react';
import './Profile.css';

const ProfileForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [cvupload, setCvupload] = useState(null);
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [duration, setDuration] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [workDuration, setWorkDuration] = useState('');
  const [currentCTC, setCurrentCTC] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [certifications, setCertifications] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckboxChange = (language) => {
    const updatedLanguages = [...programmingLanguages];
    const index = updatedLanguages.indexOf(language);
    if (index === -1) {
      updatedLanguages.push(language);
    } else {
      updatedLanguages.splice(index, 1);
    }
    setProgrammingLanguages(updatedLanguages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      contactNo,
      cvupload,
      education: {
        college,
        degree,
        specialization,
        duration,
      },
      workExperience: {
        companyName,
        jobTitle,
        workDuration,
        currentCTC,
      },
      currentLocation,
      programmingLanguages,
      certifications,
    };

    try {
      
      setSuccessMessage('Data successfully submitted');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="dashboard">
       
        <a href="#video-resumes">Profile</a>
          <a href="#record-update">Search Jobs</a>
          <a href="#feedback">Applied Jobs</a>
      </div>

      <div className="content">
        <div className="App">
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </label>
              
              
            <label>
               Email ID:
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
           </label>

            <label>
             Contact No:
             <input type="number" name="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
            </label>
            <label>
                CV Upload:
                <input type="file" name="cvupload" onChange={(e) => setCvupload(e.target.files[0])} />
              </label>


                <label>
                 Education:
                <label>
                College:
                  <input type="text" name="cname" value={college} onChange={(e) => setCollege(e.target.value)} />
                </label>
                 <label>
    Degree:
    <input type="text" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
  </label>
  <label>
    Specialization:
    <input type="text" name="special" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
  </label>
  <label>
    Duration:
    <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
  </label>
</label>


   <label>
      Work Experience:
          <label>
              Company:
          <input type="text" name="companyname" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </label>
  <label>
    Job Title:
    <input type="text" name="jobtitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
  </label>
  <label>
    Duration:
    <input type="text" name="workduration" value={workDuration} onChange={(e) => setWorkDuration(e.target.value)} />
  </label>
  <label>
    Current CTC:
    <input type="number" name="cctc" value={currentCTC} onChange={(e) => setCurrentCTC(e.target.value)} />
  </label>
</label>

<label>
  Current Location:
  <input type="text" name="clocation" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} />
</label>
              <label>
                Technical Skill set:
                <label>
                  <input
                    type="checkbox"
                    name="programmingLanguages"
                    value="Java"
                    checked={programmingLanguages.includes('Java')}
                    onChange={() => handleCheckboxChange('Java')}
                  />
                  Java
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="programmingLanguages"
                    value="Python"
                    checked={programmingLanguages.includes('Python')}
                    onChange={() => handleCheckboxChange('Python')}
                  />
                  Python
                </label>
              </label>

            
              <label>
                Certifications:
                <input type="file" name="certifications" onChange={(e) => setCertifications(e.target.files[0])} />
              </label>

              <button type="submit">Record/Update</button>
            </form>

           
            {successMessage && <p className="success-message">{successMessage}</p>}

            
            <div className="additional-links">
              <a href="#video-resumes">Video Resumes</a>
              <a href="#feedback">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
