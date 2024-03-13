import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import './LinkedInRebrand.css'; 
import bannerImage1 from '../../../assets/images/looking_into_laptop.jpg';
import bannerImage2 from '../../../assets/images/networking_large_table.jpg';
// Add additional images as needed

function LinkedInRebrand() {
    useEffect(() => {
        let profileViewsChart;
        let skillEndorsementsChart;
    
        // Example data for the charts
        const profileViewsData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Profile Views',
                data: [1500, 1800, 2000, 2200, 2500, 2800],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
    
        const skillEndorsementsData = {
            labels: ['Technical Skills', 'Soft Skills', 'Industry Knowledge', 'Languages'],
            datasets: [{
                label: 'Skill Endorsements',
                data: [350, 280, 420, 180],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        };
    
        const profileViewsCtx = document.getElementById('profileViewsChart').getContext('2d');
        if (profileViewsChart) {
            profileViewsChart.destroy();
        }
        profileViewsChart = new Chart(profileViewsCtx, {
            type: 'line',
            data: profileViewsData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true, // Ensure the chart resizes based on container size
                maintainAspectRatio: true, // Allow the chart to not maintain aspect ratio
            }
        });

        const skillEndorsementsCtx = document.getElementById('skillEndorsementsChart').getContext('2d');
        if (skillEndorsementsChart) {
            skillEndorsementsChart.destroy();
        }
        skillEndorsementsChart = new Chart(skillEndorsementsCtx, {
            type: 'pie',
            data: skillEndorsementsData,
            options: {
                responsive: true, // Ensure the chart resizes based on container size
                maintainAspectRatio: true, // Allow the chart to not maintain aspect ratio
            }
        });

        const thirdChartData = {
            labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
            datasets: [{
                label: 'Data Label',
                data: [20, 30, 40, 50, 60],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        };
        
        const thirdChartCtx = document.getElementById('thirdChart').getContext('2d');
        let thirdChart;
        if (thirdChart) {
            thirdChart.destroy();
        }
        thirdChart = new Chart(thirdChartCtx, {
            type: 'pie',
            data: thirdChartData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: true,
            }
        });
        

    
        // Cleanup function to destroy the charts when the component unmounts
            return () => {
                if (profileViewsChart) {
                    profileViewsChart.destroy();
                }
                if (skillEndorsementsChart) {
                    skillEndorsementsChart.destroy();
                }
                if (thirdChart) {
                    thirdChart.destroy();
                }
            };
        }, []);
    

    return (
        <div className="linkedin-rebrand-container">
            <div className="main-image-section" style={{ backgroundImage: `url(${bannerImage1})` }}>
                <h1>Optimize Your LinkedIn Profile</h1>
                <p>Enhancing your LinkedIn profile can significantly impact your professional networking and job searching. Here are some expert tips to help you create a compelling LinkedIn presence.</p>
            </div>

            <div className="main-content-section">
                <div className="tips-section">
                    <div className="tips-row">
                        <div className="tip">
                            <h2>Tip #1: Complete Your Profile</h2>
                            <p>A fully completed profile is more likely to receive opportunities. It demonstrates your professionalism and ensures all critical aspects of your career and skills are showcased.</p>
                        </div>
                        <div className="tip">
                            <h2>Tip #2: Professional Photo</h2>
                            <p>Having a professional profile photo increases your profile views. Ensure it's high-quality, professional, and friendly.</p>
                        </div>
                    </div>

                    <div className="tips-row">
                        <div className="tip">
                            <h2>Tip #3: Personalized Connection Requests</h2>
                            <p>Personalizing your connection requests increases acceptance rates. A personalized note shows your genuine interest and can start meaningful professional relationships.</p>
                        </div>
                        <div className="tip">
                            <h2>Tip #4: Compelling Summary</h2>
                            <p>Your summary is your personal pitch. It's an opportunity to tell your professional story and outline your career aspirations. Use this space to make a powerful first impression.</p>
                        </div>
                    </div>

                    <div className="tips-row">
                        <div className="tip">
                            <h2>Tip #5: Showcase Your Experience</h2>
                            <p>Detailing your professional experience, with specific examples and achievements, helps others understand your career journey and skill set. Quantify your achievements where possible.</p>
                        </div>
                        <div className="tip">
                            <h2>Tip #6: Engage with Your Network</h2>
                            <p>Actively engaging with your network through posts and comments. Regular interaction increases your visibility and helps in building stronger connections.</p>
                        </div>
                    </div>

                    <div className="tips-row">
                        <div className="tip">
                            <h2>Tip #7: Skill Endorsements</h2>
                            <p>Endorsements from connections for your skills add credibility to your profile. Encourage colleagues and peers to endorse you for skills relevant to your profession.</p>
                        </div>
                        <div className="tip">
                            <h2>Tip #8: Join Relevant Groups</h2>
                            <p>Joining groups related to your industry or interests can expand your network and visibility. Actively participate in discussions to demonstrate your knowledge and expertise.</p>
                        </div>
                    </div>

                    <div className="tips-row">
                        <div className="tip">
                            <h2>Tip #9: Skill Endorsements</h2>
                            <p>Endorsements from connections for your skills add credibility to your profile. Encourage colleagues and peers to endorse you for skills relevant to your profession.</p>
                        </div>
                        <div className="tip">
                            <h2>Tip #10: Join Relevant Groups</h2>
                            <p>Joining groups related to your industry or interests can expand your network and visibility. Actively participate in discussions to demonstrate your knowledge and expertise.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="statistics-section">
                <Link to="/main-application">
                    <button className="application-button">Join The Fellowship</button>
                </Link>
                <h2>Leading Research and Statistics</h2>
                <canvas id="profileViewsChart" className='firstChart'></canvas>
                <canvas id="skillEndorsementsChart" className='secondChart'></canvas>
                <canvas id="thirdChart" className='thirdChart'></canvas>
                {/* <div className="chart-container">
                    <canvas id="profileViewsChart" className='firstChart'></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="skillEndorsementsChart" className='secondChart'></canvas>
                </div> */}
            </div>
        </div>
    );
}

export default LinkedInRebrand;
