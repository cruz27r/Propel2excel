import React, { useState } from 'react';
import './ResumeRebrand.css';
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
                <h1>Resume Rebrand</h1>
            </div>

            <div className="resume-description">
                <p>Your resume is a vital tool in your job search journey. At Propel2excel, we understand the importance of a resume that stands out. Through our resume rebranding process, we aim to enhance your professional story, making it compelling and relevant for your career aspirations. This step is crucial in preparing you for successful job interviews and a remarkable career path.</p>
            </div>

            <div className="resume-tips">
                <div className="row">
                    <div className="tip">
                        <h2>Tip #1: Clear and Concise Structure</h2>
                        <p>Effective resumes are straightforward and easy to read. A clear structure helps the reviewer quickly understand your qualifications and professional journey.</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #2: Tailor Your Resume</h2>
                        <p>Adapting your resume for each application shows your dedication and interest in the specific role, increasing your chances of catching the employer's attention.</p>
                    </div>
                </div>

                <img src={photo1} alt="Resume Tips" className="resume-image" />

                <div className="row">
                    <div className="tip">
                        <h2>Tip #3: Highlight Achievements</h2>
                        <p>Focusing on achievements rather than just job duties illustrates your impact and effectiveness in previous roles, making you a more compelling candidate.</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #4: Use Keywords</h2>
                        <p>Incorporating keywords from the job description can help your resume pass through Applicant Tracking Systems and shows that you're a good match for the role.</p>
                    </div>
                </div>

                <img src={photo2} alt="Resume Tips" className="resume-image" />

                <div className="row">
                    <div className="tip">
                        <h2>Tip #5: Concise Length</h2>
                        <p>Keeping your resume brief yet informative respects the reviewer's time and ensures that your most pertinent information stands out.</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #6: Professional Format</h2>
                        <p>A professional and clean format with readable fonts presents a polished image and makes your resume easier to read.</p>
                    </div>
                </div>

                <img src={photo3} alt="Resume Tips" className="resume-image" />

                {/* Add more rows for tips #7, #8, and so on */}
                {/* ... */}
            </div>

            <form onSubmit={handleSubmit} className="resume-form">
                <h2>Submit Your Resume</h2>
                <p>Fill in the form to submit your resume for a professional review.</p>
                {/* Form inputs and submit button */}
                {/* ... */}
            </form>
        </div>
    );
}

export default SubmitResume;
