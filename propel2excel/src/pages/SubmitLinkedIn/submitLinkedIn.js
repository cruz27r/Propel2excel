import React, { useState } from 'react';
import './submitLinkedIn.css';
import photo1 from '../../assets/images/looking_over_code.jpg'; // Sample image

function SubmitLinkedIn() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedinUrl: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/linkedin-submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="submit-linkedin-container">
            <h1>Submit Your LinkedIn Profile</h1>
            <form onSubmit={handleSubmit} className="linkedin-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin-url">LinkedIn Profile URL:</label>
                    <input type="url" id="linkedin-url" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="linkedin-tips">
                <img src={photo1} alt="Professional Networking" className="linkedin-image"/>
                <h2>LinkedIn Tips and Facts</h2>
                <ul>
                    <li>Complete profiles are 40 times more likely to receive opportunities.</li>
                    <li>A professional profile photo can increase profile views by up to 14 times.</li>
                    <li>Personalizing connection requests increases acceptance rates.</li>
                    <li>Regularly updating your profile increases your visibility on the platform.</li>
                    <li>Adding skills to your profile can lead to up to 13 times more profile views.</li>
                    <li>Recommendations and endorsements can significantly boost your profile's credibility.</li>
                    <li>Posting content regularly can increase engagement and connections.</li>
                    <li>Joining and participating in LinkedIn groups can expand your network.</li>
                    <li>LinkedIn Learning offers numerous courses to enhance your professional skills.</li>
                    <li>LinkedIn job alerts can help you stay updated on relevant career opportunities.</li>
                </ul>
            </div>
        </div>
    );
}

export default SubmitLinkedIn;
