import React, { useState } from 'react';
import './linkedInRebrand';
import photo1 from '../../../assets/images/looking_over_code.jpg'; 
import photo2 from '../../../assets/images/networking_large_table.jpg'; 

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

    const tips = [
        "Complete profiles are 40 times more likely to receive opportunities.",
        "A professional profile photo can increase profile views by up to 14 times.",
        "Personalizing connection requests increases acceptance rates.",
        "Regularly updating your profile increases your visibility on the platform.",
        "Complete profiles are 40 times more likely to receive opportunities.",
        "A professional profile photo can increase profile views by up to 14 times.",
        "Personalizing connection requests increases acceptance rates.",
        "Regularly updating your profile increases your visibility on the platform.",
        "Adding skills to your profile can lead to up to 13 times more profile views.",
        "Recommendations and endorsements can significantly boost your profile's credibility.",
        "Posting content regularly can increase engagement and connections.",
        "Joining and participating in LinkedIn groups can expand your network."
    ];

    return (
        <div className="submit-linkedin-container">
            <h1>LinkedIn Tips and Facts</h1>

            <form onSubmit={handleSubmit} className="linkedin-form">
                <h2>Submit Your LinkedIn Profile</h2>
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
                {tips.map((tip, index) => (
                    <React.Fragment key={index}>
                        <div className="tip">
                            <h2>Tip {index + 1}</h2>
                            <p>{tip}</p>
                        </div>
                        {index % 2 !== 0 && (
                            <img src={index % 4 === 1 ? photo1 : photo2} alt="Networking" className="linkedin-image" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SubmitLinkedIn;
