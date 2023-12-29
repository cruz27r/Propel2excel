import React, { useState } from 'react';
import './linkedInRebrand.css'; 
import bannerImage1 from '../../../assets/images/looking_into_laptop.jpg';
import bannerImage2 from '../../../assets/images/networking_large_table.jpg';

function LinkedInRebrand() {
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
        <div className="linkedin-rebrand-container">
            <div className="explanation-section">
                <h1>Optimize Your LinkedIn Profile</h1>
                <p>Enhancing your LinkedIn profile can significantly impact your professional networking and job searching. Here are some expert tips to help you create a compelling LinkedIn presence.</p>
            </div>

            <div className="tips-section">
                {/* First pair of tips */}
                <div className="tip half-width">
                    <h2>Tip #1: Complete Your Profile</h2>
                    <p>A fully completed profile is more likely to receive opportunities. It demonstrates your professionalism and ensures all critical aspects of your career and skills are showcased.</p>
                </div>
                <div className="tip half-width">
                    <h2>Tip #2: Professional Photo</h2>
                    <p>Having a professional profile photo increases your profile views. Ensure it's high-quality, professional, and friendly.</p>
                </div>

                {/* First full-width tip with image */}
                <img src={bannerImage1} alt="Banner" className="full-width-banner" />
                <div className="tip full-width">
                    <h2>Tip #3: Personalized Connection Requests</h2>
                    <p>Personalizing your connection requests increases acceptance rates. A personalized note shows your genuine interest and can start meaningful professional relationships.</p>
                </div>

                {/* Second pair of tips */}
                <div className="tip half-width">
                    <h2>Tip #4: Compelling Summary</h2>
                    <p>Your summary is your personal pitch. It's an opportunity to tell your professional story and outline your career aspirations. Use this space to make a powerful first impression.</p>
                </div>
                <div className="tip half-width">
                    <h2>Tip #5: Showcase Your Experience</h2>
                    <p>Detailing your professional experience, with specific examples and achievements, helps others understand your career journey and skill set. Quantify your achievements where possible.</p>
                </div>

                {/* Second full-width tip with image */}
                <img src={bannerImage2} alt="Banner" className="full-width-banner" />
                <div className="tip full-width">
                    <h2>Tip #6: Engage with Your Network</h2>
                    <p>Actively engaging with your network through posts and comments. Regular interaction increases your visibility and helps in building stronger connections.</p>
                </div>

                {/* Third pair of tips */}
                <div className="tip half-width">
                    <h2>Tip #7: Get Endorsed for Your Skills</h2>
                    <p>Adding skills to your profile and getting endorsements from colleagues enhances your credibility. It's a way to validate your professional strengths and abilities.</p>
                </div>
                <div className="tip half-width">
                    <h2>Tip #8: Regular Updates</h2>
                    <p>Regularly updating your profile, including your current position and accomplishments, keeps your network informed and engaged with your professional progress.</p>
                </div>

                {/* Third full-width tip with image */}
                <img src={bannerImage2} alt="Banner" className="full-width-banner" />
                <div className="tip full-width">
                    <h2>Tip #9: Request Recommendations</h2>
                    <p>Recommendations from supervisors, colleagues, or clients act as powerful testimonials to your professional abilities and character, adding a level of trust and credibility.</p>
                </div>

                {/* Additional tips */}
                {/* Add more tips following the same pattern as needed */}
            </div>

            <form onSubmit={handleSubmit} className="linkedin-form">
                <h2>LinkedIn Profile Rebrand Application</h2>
                <p>Submit your profile for a professional rebrand by the Propel2Excel team. We'll work with you to enhance your presence and showcase your professional story on LinkedIn.</p>
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
            </form>
        </div>
    );
}

export default LinkedInRebrand;
