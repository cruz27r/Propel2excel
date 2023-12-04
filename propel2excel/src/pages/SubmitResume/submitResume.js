import React, { useState } from 'react';
import './submitResume.css';
import photo1 from '../../assets/images/looking_over_code.jpg'; 
import photo2 from '../../assets/images/networking_large_table.jpg'; 

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
            const response = await fetch('http://localhost:5000/api/submit/resume', {
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

    const resumeTips = [
        "A clear, concise, and well-structured resume is key.",
        "Tailor your resume to the job you're applying for.",
        "A clear, concise, and well-structured resume is key.",
        "Tailor your resume to the job you're applying for.",
        "Highlight measurable achievements, not just duties.",
        "Use keywords relevant to the job description.",
        "Keep your resume to one or two pages maximum.",
        "Use a clean, professional format with readable fonts.",
        "List your most recent and relevant experiences first.",
        "Proofread your resume to avoid grammatical errors.",
        "Include a well-crafted summary statement at the top.",
        "Focus on skills that set you apart from other candidates.",
        "Avoid using too much technical jargon or acronyms.",
    ];

    return (
        <div className="submit-resume-container">
            <form onSubmit={handleSubmit} className="resume-form">
                <h2>Submit Your Resume</h2>
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

            <div className="resume-tips">
                {resumeTips.map((tip, index) => (
                    <React.Fragment key={index}>
                        <div className="tip">
                            <h2>Tip {index + 1}</h2>
                            <p>{tip}</p>
                        </div>
                        {index % 2 !== 0 && (
                            <img src={index % 4 === 1 ? photo1 : photo2} alt="Resume Tips" className="resume-image" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SubmitResume;
