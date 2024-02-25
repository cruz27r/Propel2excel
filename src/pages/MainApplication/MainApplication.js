import React from 'react';
import './MainApplication.css'; // Importing the CSS file

const MainApplication = ({ defaultApplicationType }) => {
  const [applicationType, setApplicationType] = React.useState(defaultApplicationType || 'cohortFellow');

  const handleApplicationTypeChange = (e) => {
    setApplicationType(e.target.value);
  };

  return (
    <div className="main-application">
      <h2>Main Application</h2>
      <div className="filter-section">
        <label>
          Select Application Type:
          <select value={applicationType} onChange={handleApplicationTypeChange}>
            <option value="cohortFellow">Cohort Fellow</option>
            <option value="corporatePartner">Corporate Partner</option>
            <option value="universityPartner">University Partner</option>
            <option value="cohortMentor">Cohort Mentor</option>
          </select>
        </label>
      </div>
      {applicationType === 'cohortFellow' && <CohortFellowForm />}
      {applicationType === 'corporatePartner' && <CorporatePartnerForm />}
      {applicationType === 'universityPartner' && <UniversityPartnerForm />}
      {applicationType === 'cohortMentor' && <CohortMentorForm />}
    </div>
  );
};

const CohortFellowForm = () => {
  return (
    <form className="application-form">
      <h3>Application for Cohort Fellow</h3>
      <label>
        Full Name:
        <input type="text" required />
      </label>
      <label>
        Email Address:
        <input type="email" required />
      </label>
      <label>
        Check the paths you are interested in:
        <label><input type="checkbox" name="path" value="tech" /> Tech</label>
        <label><input type="checkbox" name="path" value="banking" /> Banking</label>
        <label><input type="checkbox" name="path" value="consulting" /> Consulting</label>
      </label>
      <label>
        Resume:
        <input type="file" accept=".pdf,.doc,.docx" required />
      </label>
      <label>
        LinkedIn Profile:
        <input type="url" />
      </label>
      <label>
        Describe your job aspirations:
        <textarea required />
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
};

const CorporatePartnerForm = () => {
  return (
    <div className="application-form">
      <h1>Corporate Partner Application</h1>
      <form>
        <label>Name of Organization:</label>
        <input type="text" placeholder="Enter Name" />
        
        <label>Description of Organization:</label>
        <textarea placeholder="Enter Description"></textarea>
        
        <label>Contact Email:</label>
        <input type="email" placeholder="Enter Email" />

        <label>Website:</label>
        <input type="url" placeholder="Enter Website URL" />

        <label>Type of Partnership:</label>
        <select>
          <option>Strategic Partnership</option>
          <option>Technology Partnership</option>
          <option>Research and Development</option>
        </select>

        <label>Proposed Collaboration Ideas:</label>
        <textarea placeholder="Describe your ideas"></textarea>

        <label>Additional Comments:</label>
        <textarea placeholder="Any additional information"></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

const UniversityPartnerForm = () => {
  return (
    <form className="application-form">
      <h3>Application for University Partner</h3>
      <label>
        Name of Institution:
        <input type="text" required />
      </label>
      <label>
        Description of Institution:
        <textarea required />
      </label>
      <label>
        Contact Email:
        <input type="email" required />
      </label>
      <label>
        Website:
        <input type="url" required />
      </label>
      <label>
        Type of Partnership:
        <select required>
          <option>Educational Collaboration</option>
          <option>Research Partnership</option>
          <option>Community Outreach</option>
          <option>Student Exchange Program</option>
        </select>
      </label>
      <label>
        Areas of Interest:
        <input type="text" required />
      </label>
      <label>
        Proposed Collaboration Ideas:
        <textarea required />
      </label>
      <label>
        Preferred Duration of Partnership:
        <input type="text" required />
      </label>
      <label>
        Additional Comments:
        <textarea></textarea>
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
};

const CohortMentorForm = () => {
  return (
    <form className="application-form">
      <h3>Application for Cohort Mentor</h3>
      <label>
        Years of Professional Experience:
        <input type="number" required />
      </label>
      <label>
        How do you approach mentoring and supporting others in their career development?
        <textarea required />
      </label>
      <label>
        Describe a mentorship experience that had a significant impact on you or your mentee.
        <textarea required />
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default MainApplication;
