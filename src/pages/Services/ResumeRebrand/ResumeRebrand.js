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
                <p>In today's competitive job market, your resume is not just a summary of your work history; 
                    it's a personal marketing tool, a passport to your dream job. At Propel2excel, we believe that a 
                    standout resume is a storytelling masterpiece that narrates your professional journey, spotlighting 
                    your achievements, skills, and the unique value you bring to potential employers. Our tailored resume 
                    rebranding service is designed to transform your resume into a compelling narrative that captures the 
                    essence of your professional identity, ensuring you not only get noticed but remembered. Let us help 
                    you turn your resume into a key that unlocks doors to exciting career opportunities, making your job 
                    search journey not just successful, but remarkable.</p>
            </div>

            <div className="resume-tips">
                <div className="tips-row">
                    <div className="tip">
                        <h2>Tip #1: Clear and Concise Structure</h2>
                        <p>Effective resumes are straightforward and easy to read...</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #2: Tailor Your Resume</h2>
                        <p>Adapting your resume for each application shows your dedication...</p>
                    </div>
                </div>
                <img src={photo1} alt="Resume Tips" className="resume-image" />
                <div className="tips-row">
                    <div className="tip">
                        <h2>Tip #3: Highlight Achievements</h2>
                        <p>Focusing on achievements rather than just job duties...</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #4: Use Keywords</h2>
                        <p>Incorporating keywords from the job description can help...</p>
                    </div>
                </div>
                <img src={photo2} alt="Networking Event" className="resume-image" />
                <div className="tips-row">
                    <div className="tip">
                        <h2>Tip #5: Concise Length</h2>
                        <p>Keeping your resume brief yet informative respects the reviewer's time...</p>
                    </div>
                    <div className="tip">
                        <h2>Tip #6: Professional Format</h2>
                        <p>A professional and clean format with readable fonts...</p>
                    </div>
                </div>
                <img src={photo3} alt="Networking Event" className="resume-image" />
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
