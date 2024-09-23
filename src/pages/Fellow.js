import React, { useState, useEffect } from 'react';
import './Fellow.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import apply from '../assets/images/apply.svg';
import mic from '../assets/images/mic.svg';
import mentor from '../assets/images/mentor.svg';
import linkedin from '../assets/images/linkedin (2).svg';
import interview from '../assets/images/interview.svg';
import decision from '../assets/images/tick.svg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import logo from '../assets/images/Logo-P2e-final-v1Asset 12.c5f9e3075a4365128160.png'

const Fellow = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-01T00:00:00');
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Use Intersection Observer for each section
    const heroSectionRef = React.useRef(null);
    const aboutSectionRef = React.useRef(null);
    const programSectionRef = React.useRef(null);
    const requirementsSectionRef = React.useRef(null);
    const applicationSectionRef = React.useRef(null);
    const readySectionRef = React.useRef(null);

    const isHeroVisible = useIntersectionObserver({ target: '.heroSection-text', threshold: 0.1 });
    const isAboutVisible = useIntersectionObserver({ target: '.about-text1', threshold: 0.1 });
    const isProgramVisible = useIntersectionObserver({ target: '.program-title', threshold: 0.1 });
    const isRequirementsVisible = useIntersectionObserver({ target: '.requirements-section', threshold: 0.1 });
    const isApplicationVisible = useIntersectionObserver({ target: '.steps-container', threshold: 0.1 });
    const isReadyVisible = useIntersectionObserver({ target: '.ready', threshold: 0.1 });

    return (
        <div className="fellow">
            <div className={`content1 ${isHeroVisible ? 'fade-in' : ''}`} ref={heroSectionRef}>
            <div className="heroSection-text">
                    <h1>Become A Fellow</h1>
                    <p>Invest in Your Future with <img src={logo} width={200}></img></p>
                </div>
            </div>
            <div className={`about1 ${isAboutVisible ? 'fade-in' : ''}`} ref={aboutSectionRef}>
                <p className="about-text1">
                    The Propel2Excel, Inc. fellowship runs two cohorts per year in the Spring and Fall Semesters.
                    The program is completely virtual and fellows are paired with coaches from top tech, banking, and consulting companies based on their career paths.
                </p>
            </div>
            <div className={`program ${isProgramVisible ? 'fade-in' : ''}`} ref={programSectionRef}>
                <h1 className="program-title">The Program</h1>
                <p className="program-subtitle">Why Join Propel2Excel?</p>
                <div className="program-cards">
                    <div className={`card ${isProgramVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={mic} width={30} alt="mic icon" />
                        </div>
                        <h3>Speaker Series</h3>
                        <p>
                            Speaker Series lectures are delivered by industry professionals in tech,
                            banking, and consulting companies. These events hosted by P2E provide insight into multiple perspectives
                            gained from years of experience. As a fellow, you would have the opportunity to connect with these professionals.
                        </p>
                    </div>
                    <div className={`card ${isProgramVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={mentor} width={30} alt="mentor icon" />
                        </div>
                        <h3>Mentorship</h3>
                        <p>
                            As a fellow, you would be paired with a corporate leader in your chosen career field who would be your mentor.
                            Your mentor will provide career guidance and help you in every step of your application journey.
                        </p>
                    </div>
                    <div className={`card ${isProgramVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={linkedin} width={30} alt="linkedin icon" />
                        </div>
                        <h3>LinkedIn Rebrand</h3>
                        <p>
                            As a fellow, your LinkedIn profile and resume would be optimized by experts with over 10 years of experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`fellowship-requirements ${isRequirementsVisible ? 'fade-in' : ''}`} ref={requirementsSectionRef}>
                <h1>Fellowship Requirements</h1>
                <div className="requirements-section">
                    <h2>The Ideal Propel2Excel Student</h2>
                    <p>Beyond a resume and LinkedIn, the ideal student is also:</p>
                    <br></br>
                    <ul>
                        <li>Ambitious</li>
                        <li>Resilient</li>
                        <li>A strong communicator</li>
                        <li>A great problem Solver</li>
                    </ul>
                </div>
                <div className="requirements-section">
                    <h2>Academic Requirements</h2>
                    <ul>
                        <li>Good Academic Standing: A GPA of 3.3 and above.</li>
                        <li>Special Projects: Participation in significant academic projects.</li>
                        <li>Awards and Achievements: Recognition such as the Dr. Martin Luther King Jr. Award.</li>
                    </ul>
                </div>

                <div className="requirements-section">
                    <h2>Professional Requirements</h2>
                    <ul>
                        <li>Leadership Positions: Preferred positions in clubs, sports, or projects.</li>
                        <li>Internship Experience: Experience in top tech, consulting, or banking companies.</li>
                        <li>Business Certifications: Certifications such as CFA, CPA, or other relevant qualifications.</li>
                    </ul>
                </div>
            </div>
            <div className={`fellowship-application ${isApplicationVisible ? 'fade-in' : ''}`} ref={applicationSectionRef}>
                <h1>How to become a fellow?</h1>
                <div className="steps-container">
                    <div className={`step ${isApplicationVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={apply} width={250} alt="apply icon" />
                        </div>
                        <p>Ready your resume and LinkedIn and submit an online application</p>
                    </div>

                    <div className={`step ${isApplicationVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={interview} alt="interview icon" />
                        </div>
                        <p>Be selected for an interview</p>
                    </div>

                    <div className={`step ${isApplicationVisible ? 'fade-in' : ''}`}>
                        <div className="icon">
                            <img src={decision} alt="decision icon" />
                        </div>
                        <p>Receive a decision via email.</p>
                    </div>
                </div>

                <p className="contact-info">
                    In case of any queries, please write to us at{' '}
                    <a href="mailto:Propel@propel2excel.com">Propel@propel2excel.com</a>
                </p>
            </div>
            <div className={`ready ${isReadyVisible ? 'fade-in' : ''}`} ref={readySectionRef}>
                <h1>Ready to become a Fellow?</h1>
                {/* <h4>October Cohort Applications closes in:</h4>
                    <div className="application-countdown countdown">
                    <div className="time-section">
                        <div className="time">{timeLeft.days}</div>
                        <div className="label">D</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.hours}</div>
                        <div className="label">H</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.minutes}</div>
                        <div className="label">M</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.seconds}</div>
                        <div className="label">S</div>
                    </div>
                </div> */}
            </div>
            <div className='footer1'>
                <div className="footer-content1">
                    <div className=''>
                        <Link to="/main-application">
                            <button className="footer-button1">Apply Now</button>
                        </Link>
                    </div>
                    <h2>Not a Student?</h2>
                    <div className="footer-buttons1">
                        <Link to="/volunteer">
                            <button className="footer-button1">Become a Volunteer</button>
                        </Link>
                        <Link to="/partners">
                            <button className="footer-button1">Become a Partner</button>
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom1">
                    <p>&copy; Propel2Excel, Inc. 2024. All rights reserved.</p>
                    <div className="footer-social1">
                        <a href="https://www.linkedin.com/company/propel2excel/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} />
                        </a>
                        <a href="https://www.instagram.com/propel2excel/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
                        </a>
                        <a href="https://x.com/Propel2Excel" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
                        </a>
                    </div>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div> 
        </div>
    );
};

export default Fellow;
