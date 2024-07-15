import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaUserGraduate, FaUniversity, FaUserTie } from 'react-icons/fa';
import Countdown from 'react-countdown';
import './Journey.css';
import textbanner from '../../../assets/images/4x/4x/banner-p2eAsset 9.png';
import aboutUsImage from '../../../assets/images/collage-students/cutout-group-3.png';
import mentorshipImage from '../../../assets/images/remotemeeting.jpg';
import CollageExample from '../../../assets/images/collage-students/full-collage-2.png';
import workshopImage from '../../../assets/images/workshop.jpg';
import networkingImage from '../../../assets/images/conference-event.jpg';
import candidate from '../../../assets/images/shaking hands.jpg';
import LinkedInImage from '../../../assets/images/resume-rebrand-image.jpg';
import interviewImage from '../../../assets/images/interview-example.jpg';
import speakerSeriesImage from '../../../assets/images/remotemeeting.jpg';
import check from '../../../assets/images/check.png';
import meeting from '../../../assets/images/group-meeting.jpg';
import useScreenSize from '../../../hooks/userScreenSize'; // import the custom hook
import CoachOverlay from '../overlays/coachOverlay';
import PlaceOverlay from '../overlays/placeOverlay';
import DiverseTalentOverlay from '../overlays/diverseTalentOverlay';

// Import your coaches represented logos
import chewy from '../../../assets/images/CompanyLogos/CoachesCompanies/chewy-logo.webp';
import mckinseyCoaches from '../../../assets/images/CompanyLogos/CoachesCompanies/McKinsey_&_Company-Logo.png';
import bain from '../../../assets/images/CompanyLogos/CoachesCompanies/Bain_and_Company_Logo.png';
import accenture from '../../../assets/images/CompanyLogos/CoachesCompanies/Accenture_logo.svg.png';
import tjxCoaches from '../../../assets/images/CompanyLogos/CoachesCompanies/TJX_Companies-Logo.wine.png';
import blueCrossBlueShield from '../../../assets/images/CompanyLogos/CoachesCompanies/BlueCross-BlueShield.webp';
import pwcCoaches from '../../../assets/images/CompanyLogos/CoachesCompanies/Logo-pwc.png';
import fidelity from '../../../assets/images/CompanyLogos/CoachesCompanies/Fidelity-Logo.png';
import alpineInvestors from '../../../assets/images/CompanyLogos/CoachesCompanies/alpine-investors.webp';
import easternBankCoaches from '../../../assets/images/CompanyLogos/CoachesCompanies/eastern-bank.png';
import google from '../../../assets/images/CompanyLogos/CoachesCompanies/google-logo.png';
import microsoft from '../../../assets/images/CompanyLogos/Tech/microsoft.webp';
import amazon from '../../../assets/images/CompanyLogos/CoachesCompanies/amazon.png';
import morganStanley from '../../../assets/images/CompanyLogos/CoachesCompanies/Morgan_Stanley_Logo.webp';
import citibank from '../../../assets/images/CompanyLogos/CoachesCompanies/Citibank-Logo.png';
import jpMorganChase from '../../../assets/images/CompanyLogos/CoachesCompanies/jpmorgan-logo.png';
import apple from '../../../assets/images/CompanyLogos/CoachesCompanies/apple.png';
import ibm from '../../../assets/images/CompanyLogos/CoachesCompanies/ibm.png';
import goldmanSachs from '../../../assets/images/CompanyLogos/CoachesCompanies/goldmanSachs.webp';
import blackstone from '../../../assets/images/CompanyLogos/CoachesCompanies/BlackRock.png';
import ubs from '../../../assets/images/CompanyLogos/CoachesCompanies/ubs-logo.png';
import salesforce from '../../../assets/images/CompanyLogos/CoachesCompanies/salesforce-logo.png';
import slack from '../../../assets/images/CompanyLogos/CoachesCompanies/slack.png';
import walmart from '../../../assets/images/CompanyLogos/CoachesCompanies/walmart.webp';
import netflix from '../../../assets/images/CompanyLogos/CoachesCompanies/netflix.png';
import capitalOne from '../../../assets/images/CompanyLogos/CoachesCompanies/Capital-One.png';
import meta from '../../../assets/images/CompanyLogos/CoachesCompanies/Meta-Logo.png';
import nike from '../../../assets/images/CompanyLogos/CoachesCompanies/nike.png';
import alphabet from '../../../assets/images/CompanyLogos/CoachesCompanies/Alphabet-logo.png';
import boeing from '../../../assets/images/CompanyLogos/CoachesCompanies/Boeing.png';
import ge from '../../../assets/images/CompanyLogos/CoachesCompanies/General_Electric.png';
import gm from '../../../assets/images/CompanyLogos/CoachesCompanies/General_Motors.png';
import usBank from '../../../assets/images/CompanyLogos/CoachesCompanies/USbank.png';
import wellsFargo from '../../../assets/images/CompanyLogos/CoachesCompanies/Wells_Fargo.png';
import blackRock from '../../../assets/images/CompanyLogos/CoachesCompanies/BlackRock.png';
import raytheon from '../../../assets/images/CompanyLogos/CoachesCompanies/Raytheon_Technologies.png';
import ups from '../../../assets/images/CompanyLogos/CoachesCompanies/UPS-logo.png';
import bcg from '../../../assets/images/CompanyLogos/CoachesCompanies/Boston_Consulting_Group.png';
import deloitte from '../../../assets/images/CompanyLogos/Consulting/Deloitte.png';


const studentsData = [
  { name: 'Fabiola Flores', school: 'University A', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/fabiola-flores-esperanza58/' },
  { name: 'Ahsan Khan', school: 'University B', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/ahsan-khan01/' },
  { name: 'Ivana Huges', school: 'University C', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/ivana-hughes/' },
  { name: 'Glenys Yevi', school: 'University D', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/glenysyevi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'JoseManuel Cruz', school: 'University E', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/josemanuel-cruz1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Rafael Cruz', school: 'University F', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/rafaelcruzlagos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Nourien Fouad', school: 'University G', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/nourine-fouad/' },
  { name: 'Marvendy Brutus', school: 'University H', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/marvendy-brutus/' },
  { name: 'Zion Witsell', school: 'University I', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/zionwitsell/' },
  { name: 'Ebuka Ogbuefi', school: 'University J', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/ebuka-ogbuefi/' },
  { name: 'Sparkle Lawson', school: 'University K', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/sparkle-lawson/' },
  { name: 'Ethan Weily', school: 'University L', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/ethan-weily-wvu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Delia Whitehill', school: 'University M', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/deliawhitehill/' },
  { name: 'David Fang', school: 'University N', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/davidffang/' },
  { name: 'Kaden Liu', school: 'University O', major: 'Example Major', linkedin: 'https://www.linkedin.com/in/liukaden?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
];

const coachesRepresented = [
  { name: 'Google', headquarters: 'Mountain View, California, United States', coaches: '1000+', categories: ['Tech'], logo: google },
  { name: 'Microsoft', headquarters: 'Redmond, Washington, United States', coaches: '1000+', categories: ['Tech'], logo: microsoft },
  { name: 'Apple', headquarters: 'Cupertino, California, United States', coaches: '1000+', categories: ['Tech'], logo: apple },
  { name: 'Netflix', headquarters: 'Los Gatos, California, United States', coaches: '1000+', categories: ['Tech'], logo: netflix },
  { name: 'Meta', headquarters: 'Menlo Park, California, United States', coaches: '1000+', categories: ['Tech'], logo: meta },
  { name: 'Alphabet', headquarters: 'Mountain View, California, United States', coaches: '1000+', categories: ['Tech'], logo: alphabet },
  { name: 'McKinsey & Company', headquarters: 'New York, New York, United States', coaches: '500+', categories: ['Consulting'], logo: mckinseyCoaches },
  { name: 'Bain', headquarters: 'Boston, Massachusetts, United States', coaches: '500+', categories: ['Consulting'], logo: bain },
  { name: 'Accenture', headquarters: 'Dublin, Ireland', coaches: '500+', categories: ['Tech', 'Consulting'], logo: accenture },
  { name: 'Chewy', headquarters: 'Dania Beach, Florida, United States', coaches: '100+', categories: ['Tech'], logo: chewy },
  { name: 'Amazon', headquarters: 'Seattle, Washington, United States', coaches: '100+', categories: ['Tech', 'Retail'], logo: amazon },
  { name: 'Goldman Sachs', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Banking'], logo: goldmanSachs },
  { name: 'JPMorgan Chase', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Banking'], logo: jpMorganChase },
  { name: 'Morgan Stanley', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Banking'], logo: morganStanley },
  { name: 'BlackRock', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Banking'], logo: blackRock },
  { name: 'Citibank', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Banking'], logo: citibank },
  { name: 'UBS', headquarters: 'Zurich, Switzerland', coaches: '100+', categories: ['Banking'], logo: ubs },
  { name: 'BCG', headquarters: 'Boston, Massachusetts, United States', coaches: '100+', categories: ['Consulting'], logo: bcg },
  { name: 'PwC', headquarters: 'London, United Kingdom', coaches: '100+', categories: ['Tech', 'Banking', 'Consulting'], logo: pwcCoaches },
  { name: 'IBM', headquarters: 'Armonk, New York, United States', coaches: '100+', categories: ['Tech'], logo: ibm },
  { name: 'Salesforce', headquarters: 'San Francisco, California, United States', coaches: '100+', categories: ['Tech'], logo: salesforce },
  { name: 'Slack', headquarters: 'San Francisco, California, United States', coaches: '100+', categories: ['Tech'], logo: slack },
  { name: 'Raytheon Technologies', headquarters: 'Waltham, Massachusetts, United States', coaches: '100+', categories: ['Tech'], logo: raytheon },
  { name: 'Boeing', headquarters: 'Chicago, Illinois, United States', coaches: '100+', categories: ['Tech'], logo: boeing },
  { name: 'GE', headquarters: 'Boston, Massachusetts, United States', coaches: '100+', categories: ['Tech'], logo: ge },
  { name: 'GM', headquarters: 'Detroit, Michigan, United States', coaches: '100+', categories: ['Tech'], logo: gm },
  { name: 'UPS', headquarters: 'Sandy Springs, Georgia, United States', coaches: '100+', categories: ['Tech'], logo: ups },
  { name: 'TJX', headquarters: 'Framingham, Massachusetts, United States', coaches: '100+', categories: ['Tech', 'Retail'], logo: tjxCoaches },
  { name: 'BlueCross BlueShield', headquarters: 'Chicago, Illinois, United States', coaches: '100+', categories: ['Tech', 'Healthcare'], logo: blueCrossBlueShield },
  { name: 'Nike', headquarters: 'Beaverton, Oregon, United States', coaches: '100+', categories: ['Retail'], logo: nike },
  { name: 'Eastern Bank', headquarters: 'Boston, Massachusetts, United States', coaches: '100+', categories: ['Banking'], logo: easternBankCoaches },
  { name: 'Fidelity', headquarters: 'Boston, Massachusetts, United States', coaches: '100+', categories: ['Banking'], logo: fidelity },
  { name: 'Alpine Investors', headquarters: 'San Francisco, California, United States', coaches: '100+', categories: ['Banking'], logo: alpineInvestors },
  { name: 'Walmart', headquarters: 'Bentonville, Arkansas, United States', coaches: '100+', categories: ['Retail'], logo: walmart },
  { name: 'Capital One', headquarters: 'McLean, Virginia, United States', coaches: '100+', categories: ['Banking'], logo: capitalOne },
  { name: 'US Bank', headquarters: 'Minneapolis, Minnesota, United States', coaches: '100+', categories: ['Banking'], logo: usBank },
  { name: 'Wells Fargo', headquarters: 'San Francisco, California, United States', coaches: '100+', categories: ['Banking'], logo: wellsFargo },
  { name: 'Deloitte', headquarters: 'New York, New York, United States', coaches: '100+', categories: ['Consulting'], logo: deloitte }
];

const renderer = ({ months, days, hours, minutes, seconds }) => (
  <div className="countdown-timer">
    <div className="time-unit">
      <span className="time-value">{days}</span>
      <span className="time-label">d</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{hours}</span>
      <span className="time-label">h</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{minutes}</span>
      <span className="time-label">m</span>
    </div>
    <div className="time-unit">
      <span className="time-value">{seconds}</span>
      <span className="time-label">s</span>
    </div>
  </div>
);

function JourneyHome({ isLoggedIn: initialIsLoggedIn = true, onLogin, onLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [activeEvent, setActiveEvent] = useState('networking');
  const [activeComponent, setActiveComponent] = useState('studentRequirements');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const isMobile = useScreenSize(); // use the custom hook to detect screen size
  const [activeSection, setActiveSection] = useState('All');
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLogoClick = (index) => {
    setSelectedLogoIndex(index);
  };

  const filteredCoaches = activeSection === 'All' 
    ? coachesRepresented 
    : coachesRepresented.filter(coach => coach.categories.includes(activeSection));

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setIsLoggedIn(true);
  };

  const openOverlay = (overlay) => {
    setActiveOverlay(overlay);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  const handleEventClick = (event) => {
    setActiveEvent(event);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const componentImages = {
    studentRequirements: meeting,
    speaking: mentorshipImage,
    linkedin: LinkedInImage,
    interview: interviewImage,
    candidate: candidate,
  };

  const renderDetails = (component) => {
    switch (component) {
      case 'studentRequirements':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Academic Requirements</h4>
              <ul>
                <li><img src={check} alt="check" className="check-icon" /> Good Academic Standing: A GPA of 3.3 and above.</li>
                <li><img src={check} alt="check" className="check-icon" /> Special Projects: Participation in significant academic projects.</li>
                <li><img src={check} alt="check" className="check-icon" /> Awards and Achievements: Recognition such as the Dr. Martin Luther King Jr. Award.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Professional Requirements</h4>
              <ul>
                <li><img src={check} alt="check" className="check-icon" /> Leadership Positions: Preferred positions in clubs, sports, or projects.</li>
                <li><img src={check} alt="check" className="check-icon" /> Internship Experience: Experience in top tech, consulting, or banking companies.</li>
                <li><img src={check} alt="check" className="check-icon" /> Business Certifications: Certifications such as CFA, CPA, or other relevant qualifications.</li>
              </ul>
            </div>
          </div>
        );
      case 'speaking':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Common Mistakes</h4>
              <ul>
                <li>Lack of industry exposure.</li>
                <li>Insufficient networking opportunities.</li>
                <li>Limited access to professional insights.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Our Focus</h4>
              <ul>
                <li>Hosting speaking engagements with industry leaders.</li>
                <li>Fostering professional partnerships.</li>
                <li>Providing valuable industry insights.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Importance</h4>
              <ul>
                <li>Engaging with industry professionals helps students gain valuable insights, build networks, and better understand their chosen fields.</li>
              </ul>
            </div>
          </div>
        );
      case 'linkedin':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Common Mistakes</h4>
              <ul>
                <li>Incomplete or outdated profiles.</li>
                <li>Unprofessional profile photos.</li>
                <li>Failure to showcase skills and accomplishments.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Our Focus</h4>
              <ul>
                <li>LinkedIn profile optimization for professional appearance and completeness.</li>
                <li>Highlighting skills, accomplishments, and experiences relevant to target industries.</li>
                <li>Building a strong professional network through strategic connections.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Importance</h4>
              <ul>
                <li>Optimized LinkedIn profiles and resumes increase students' visibility to potential employers and improve their chances of securing job opportunities.</li>
              </ul>
            </div>
          </div>
        );
      case 'interview':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Common Mistakes</h4>
              <ul>
                <li>Lack of preparation and research.</li>
                <li>Inability to effectively communicate skills and experiences.</li>
                <li>Failure to ask insightful questions or engage with the interviewer.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Our Focus</h4>
              <ul>
                <li>Mock interviews and personalized feedback.</li>
                <li>Training on effective communication and storytelling.</li>
                <li>Guidance on asking questions and engaging with interviewers.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Importance</h4>
              <ul>
                <li>Interview preparation is essential for showcasing one's skills and experiences, demonstrating fit for the role, and ultimately securing the job or internship.</li>
              </ul>
            </div>
          </div>
        );
      case 'candidate':
        return (
          <div className="component-details">
            <div className="details-column">
              <h4>Common Mistakes</h4>
              <ul>
                <li>Unclear career goals and paths.</li>
                <li>Not being adequately prepared for job applications.</li>
                <li>Missing out on suitable job opportunities.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Our Focus</h4>
              <ul>
                <li>Create the most attractive candidates for the most superior opportunities in tech, consulting, and banking.</li>
              </ul>
            </div>
            <div className="details-column">
              <h4>Importance</h4>
              <p>Eliminate the gap in recruiting ambitious students at non-target universities.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const studentProfileData = {
    labels: ["Asian", "Hispanic", "Caucasian", "African American", "International", "Multi-Ethnic"],
    datasets: [{
      data: [12, 13, 12, 26, 9, 5],
      backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FF9F40", "#4BC0C0", "#9966FF"],
      hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FF9F40", "#4BC0C0", "#9966FF"]
    }]
  };

  const p2ePlacementsData = {
    labels: ["Microsoft", "Capital One", "Google", "Morgan Stanley", "McKinsey & Co.", "Mass General Hospital", "JP Morgan Chase", "Goldman Sachs", "Bank of America", "Others", "Citi", "Amazon"],
    datasets: [{
      data: [13, 1, 8, 1, 5, 12, 2, 4, 3, 5, 2, 7],
      backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FF9F40", "#4BC0C0", "#9966FF", "#FF5733", "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFC300"],
      hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#FF9F40", "#4BC0C0", "#9966FF", "#FF5733", "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFC300"]
    }]
  };

  const countdownTargetDate = new Date('2024-10-01T00:00:00');

  return (
    <div className="journey-body">
      <div className="journey-main-content">
        <div className="hero">
          <img src={textbanner} alt="Propel2Excel" className="hero__title-image" />
        </div>
        <div className="about-us">
          <div className="about-us-content">
            <div className="about-us-text">
              <h1>
                <span className="highlight-box" onClick={() => openOverlay('coach')}>Coach</span><br />
                <span className="highlight-box" onClick={() => openOverlay('place')}>Place</span><br />
                <span className="highlight-container" onClick={() => openOverlay('diverse-talent')}>
                  <span className="highlight-box">Diverse Talent</span>
                </span>
              </h1>
            </div>
            <img src={aboutUsImage} alt="About Us" className="about-us-image" />
          </div>
          <Link to="/journeyContent" className="details-button">Continue</Link>
        </div>

        {/* New integrated sections */}
        <div className="student-about-container">
          <div className="program-overview" onClick={toggleOverlay}>
            <div className="program-image-container">
              <img src={CollageExample} alt="Mentorship Program" className="program-image" />
              {overlayVisible && (
                <div className="overlay-2">
                  <button className="close-button-2" onClick={toggleOverlay}>X</button>
                  <div className="students-grid">
                    {studentsData.map((student, index) => (
                      <div className="student-box" key={index}>
                        <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
                          <div className="student-info">
                            <p className="student-name">{student.name}</p>
                            <p className="student-school">{student.school}</p>
                            <p className="student-major">{student.major}</p>
                          </div>
                          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="program-text">
              <h3 className="program-header">Who We Are</h3>
              <p>
                Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities to professionals in top tier <span className='highlight'>tech, consulting, and banking companies</span> — through the "Ivy League recruiting experience".
              </p>
            </div>
          </div>
          
          <div className="key-components-container">
            <h3>Key Components of the Program</h3>
            <div className="key-components-content">
              <ul className="key-components">
                <li onClick={() => handleComponentClick('studentRequirements')} className={activeComponent === 'studentRequirements' ? 'active' : ''}>
                  <strong>Student Requirements:</strong> The necessary criteria for students to join the program.
                  {activeComponent === 'studentRequirements' && <img src={componentImages['studentRequirements']} alt="Student Requirements" className="component-image" />}
                  {isMobile && activeComponent === 'studentRequirements' && renderDetails('studentRequirements')}
                </li>
                <li onClick={() => handleComponentClick('speaking')} className={activeComponent === 'speaking' ? 'active' : ''}>
                  <strong>Speaking Engagements:</strong> Professional speaking engagements foster partnerships with non-target universities and provide industry insights.
                  {activeComponent === 'speaking' && <img src={componentImages['speaking']} alt="Speaking Engagements" className="component-image" />}
                  {isMobile && activeComponent === 'speaking' && renderDetails('speaking')}
                </li>
                <li onClick={() => handleComponentClick('linkedin')} className={activeComponent === 'linkedin' ? 'active' : ''}>
                  <strong>LinkedIn & Resume Rebrand:</strong> Experts with over 10 years of experience optimize students' LinkedIn profiles and resumes.
                  {activeComponent === 'linkedin' && <img src={componentImages['linkedin']} alt="LinkedIn & Resume Rebrand" className="component-image" />}
                  {isMobile && activeComponent === 'linkedin' && renderDetails('linkedin')}
                </li>
                <li onClick={() => handleComponentClick('interview')} className={activeComponent === 'interview' ? 'active' : ''}>
                  <strong>Interview Preparation:</strong> Students receive mock interviews and feedback from current professionals to enhance their readiness.
                  {activeComponent === 'interview' && <img src={componentImages['interview']} alt="Interview Preparation" className="component-image" />}
                  {isMobile && activeComponent === 'interview' && renderDetails('interview')}
                </li>
                <li onClick={() => handleComponentClick('candidate')} className={activeComponent === 'candidate' ? 'active' : ''}>
                  <strong>Candidate Readiness:</strong> Vetted students are introduced to partner companies for internship or full-time opportunities.
                  {activeComponent === 'candidate' && <img src={componentImages['candidate']} alt="Candidate Readiness" className="component-image" />}
                  {isMobile && activeComponent === 'candidate' && renderDetails('candidate')}
                </li>
              </ul>
              {!isMobile && (
                <div className="component-details">
                  {renderDetails(activeComponent)}
                </div>
              )}
            </div>
          </div>

          <div className="charts-section">
            <div className="stat-chart">
              <h3>Student Profile</h3>
              <div className="chart-container">
                <Pie data={studentProfileData} options={{ maintainAspectRatio: false, plugins: { legend: { display: true, position: 'bottom' } } }} />
              </div>
            </div>
            <div className="stat-chart">
              <h3>P2E Placements</h3>
              <div className="chart-container">
                <Pie data={p2ePlacementsData} options={{ maintainAspectRatio: false, plugins: { legend: { display: true, position: 'bottom' } } }} />
              </div>
            </div>
          </div>

          <div className="event-stat-section">
            <div className="left-column">
              <div className="stat-item">
                <h3>Live Cohort</h3>
                <div className="stat-icon-item">
                  <FaUserGraduate className="stat-icon" />
                  <p className="highlight-stat">250</p>
                  <p>Students</p>
                </div>
                <div className="stat-icon-item">
                  <FaUniversity className="stat-icon" />
                  <p className="highlight-stat">60</p>
                  <p>Universities (US)</p>
                </div>
                <div className="stat-icon-item">
                  <FaUserTie className="stat-icon" />
                  <p className="highlight-stat">8,000</p>
                  <p>Coaches</p>
                </div>
              </div>
              <div className="stat-item">
                <h3>October Applications</h3>
                <Countdown date={countdownTargetDate} renderer={renderer} />
                <p>
                  <span className="highlight-stat">1,200</span> within 2 months<br />
                  Projected October Applications: <span className="highlight-stat">5,000</span>
                </p>
              </div>
            </div>
            <div className="right-column">
              <div className="events">
                <div className="events-content">
                  <h2>Events That Lead and Inspire</h2>
                  <p>Our exclusive events provide invaluable insights into industry practices and networking opportunities, preparing our fellows to become industry leaders.</p>
                </div>
                <div className="events-image">
                  <img
                    src={
                      activeEvent === 'networking'
                        ? networkingImage
                        : activeEvent === 'speakerSeries'
                        ? speakerSeriesImage
                        : workshopImage
                    }
                    alt="Event"
                  />
                </div>
                <div className="events-buttons">
                  <button
                    onClick={() => handleEventClick('networking')}
                    className={activeEvent === 'networking' ? 'active-button' : ''}
                  >
                    Networking Events
                  </button>
                  <button
                    onClick={() => handleEventClick('speakerSeries')}
                    className={activeEvent === 'speakerSeries' ? 'active-button' : ''}
                  >
                    Speaker Series
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="corporate-partners-page">
            <div className="header-container">
              <h1 className="industry-header">Corporate Partners</h1>
              <h2 className="sub-header">Coaches Represented</h2>
            </div>
            <div className="button-container">
              <button className={`filter-button ${activeSection === 'All' ? 'active' : ''}`} onClick={() => handleSectionClick('All')}>All</button>
              <button className={`filter-button ${activeSection === 'Tech' ? 'active' : ''}`} onClick={() => handleSectionClick('Tech')}>Tech</button>
              <button className={`filter-button ${activeSection === 'Consulting' ? 'active' : ''}`} onClick={() => handleSectionClick('Consulting')}>Consulting</button>
              <button className={`filter-button ${activeSection === 'Banking' ? 'active' : ''}`} onClick={() => handleSectionClick('Banking')}>Banking</button>
            </div>
            <div className="logos-grid">
              {filteredCoaches.map((coach, index) => (
                <div
                  key={index}
                  className="logo-container"
                  onMouseEnter={() => setSelectedLogoIndex(index)}
                  onMouseLeave={() => setSelectedLogoIndex(null)}
                  onClick={() => handleLogoClick(index)}
                >
                  <img src={coach.logo} alt={`${coach.name} logo`} className="logo-image" />
                  <div className="coach-count">{coach.coaches}</div>
                  {selectedLogoIndex === index && (
                    <div className="logo-overlay">
                      <div className="overlay-text">
                        <h3>{coach.name}</h3>
                        <p>Headquarters: {coach.headquarters}</p>
                        <p>Coaches: {coach.coaches}</p>
                        <p>Categories: {coach.categories.join(', ')}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cta-buttons">
            <button className="cta-button">Become a Fellow</button>
            <button className="cta-button">Become a Volunteer</button>
            <button className="cta-button">Become a Partner</button>
          </div>

        </div>
      </div>

      {activeOverlay === 'coach' && <CoachOverlay onClose={closeOverlay} />}
      {activeOverlay === 'place' && <PlaceOverlay onClose={closeOverlay} />}
      {activeOverlay === 'diverse-talent' && <DiverseTalentOverlay onClose={closeOverlay} />}
    </div>
  );
}

export default JourneyHome;
