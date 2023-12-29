import React, { useState } from 'react';
import './resumeRebrand.css';
import bannerImage from '../../../assets/images/looking_over_code.jpg'; 
import photo1 from '../../../assets/images/looking_over_code.jpg'; 
import photo2 from '../../../assets/images/networking_large_table.jpg';
import photo3 from '../../../assets/images/networking_event.jpeg';

function SubmitResume() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        careerPath: '',
        resume: null
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('careerPath', formData.careerPath);
        data.append('resume', formData.resume);

        try {
            const response = await fetch('http://localhost:5000/api/resume-submission', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            // Handle success, maybe clear the form or show a success message
        } catch (error) {
            console.error('Submission failed', error);
            // Handle errors, show an error message
        }
    };

    return (
        <div className="submit-resume-container">
           <div className="resume-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-title">Resume Rebrand</h1>
            </div>

            <div className="resume-description">
                <p>Your resume is a vital tool in your job search journey. At Propel2excel, we understand the importance of a resume that stands out. Through our resume rebranding process, we aim to enhance your professional story, making it compelling and relevant for your career aspirations. This step is crucial in preparing you for successful job interviews and a remarkable career path.</p>
            </div>
            <div className="resume-tips">
                <div className="tip">
                    <h2>Tip #1: Clear and Concise Structure</h2>
                    <p>Effective resumes are straightforward and easy to read. A clear structure helps the reviewer quickly understand your qualifications and professional journey.</p>
                </div>
                <div className="tip">
                    <h2>Tip #2: Tailor Your Resume</h2>
                    <p>Adapting your resume for each application shows your dedication and interest in the specific role, increasing your chances of catching the employer's attention.</p>
                </div>

                <img src={photo1} alt="Resume Tips" className="resume-image" />

                <div className="tip">
                    <h2>Tip #3: Highlight Achievements</h2>
                    <p>Focusing on achievements rather than just job duties illustrates your impact and effectiveness in previous roles, making you a more compelling candidate.</p>
                </div>
                <div className="tip">
                    <h2>Tip #4: Use Keywords</h2>
                    <p>Incorporating keywords from the job description can help your resume pass through Applicant Tracking Systems and shows that you're a good match for the role.</p>
                </div>

                <img src={photo2} alt="Resume Tips" className="resume-image" />

                <div className="tip">
                    <h2>Tip #5: Concise Length</h2>
                    <p>Keeping your resume brief yet informative respects the reviewer's time and ensures that your most pertinent information stands out.</p>
                </div>
                <div className="tip">
                    <h2>Tip #6: Professional Format</h2>
                    <p>A professional and clean format with readable fonts presents a polished image and makes your resume easier to read.</p>
                </div>

                <img src={photo3} alt="Resume Tips" className="resume-image" />

                <div className="tip">
                    <h2>Tip #7: Recent and Relevant Experience</h2>
                    <p>Listing recent and relevant experiences first draws attention to your most applicable skills and achievements, aligning with the prospective employer's needs.</p>
                </div>
                <div className="tip">
                    <h2>Tip #8: Proofread</h2>
                    <p>Eliminating grammatical errors and typos in your resume reflects your attention to detail and professionalism.</p>
                </div>

                <div className="tip">
                    <h2>Tip #9: Summary Statement</h2>
                    <p>A well-crafted summary at the top of your resume acts as an elevator pitch, quickly showcasing your skills and career goals.</p>
                </div>
                <div className="tip">
                    <h2>Tip #10: Distinct Skills</h2>
                    <p>Highlighting unique skills sets you apart from other candidates and can make you an invaluable asset to potential employers.</p>
                </div>

                <div className="tip">
                    <h2>Tip #11: Avoid Jargon</h2>
                    <p>Minimizing technical jargon makes your resume accessible to all reviewers, including those not specialized in your field.</p>
                </div>
                <div className="tip">
                    <h2>Tip #12: Volunteer Work</h2>
                    <p>Including volunteer work demonstrates your commitment to community and broadens the scope of your experiences and skills.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="resume-form">
                <h2>Submit Your Resume</h2>
                <p className="form-description"> This form serves as your initial application to request assistance from the Propel2Excel team of 
                experts and professionals. By submitting your resume here, you'll be taking the first step towards a professional rebranding of your 
                resume. Our team will review your submission and provide tailored support to enhance and optimize your resume for your career path.</p>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="career-path">Prospective Career Path:</label>
                    <input type="text" id="career-path" name="careerPath" value={formData.careerPath} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="resume-upload">Upload Resume:</label>
                    <input type="file" id="resume-upload" name="resume-upload" onChange={handleFileChange} required />
                </div>
                <div className="form-group submit-section">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SubmitResume;
