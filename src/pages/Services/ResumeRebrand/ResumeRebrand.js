import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import './ResumeRebrand.css'; // Use ResumeRebrand.css for styling
import bannerImage1 from '../../../assets/images/looking_over_code.jpg';
import bannerImage2 from '../../../assets/images/networking_large_table.jpg';
// Add additional images as needed

function ResumeRebrand() {
    useEffect(() => {
        let profileViewsChart;
        let skillEndorsementsChart;
        let thirdChart;

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

        const thirdChartCtx = document.getElementById('thirdChart').getContext('2d');
        if (thirdChart) {
            thirdChart.destroy();
        }
        thirdChart = new Chart(thirdChartCtx, {
            type: 'bar',
            data: thirdChartData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
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
        <div className="resume-rebrand-container">
            <div className="main-image-section" style={{ backgroundImage: `url(${bannerImage1})` }}>
                <h1>Resume Rebrand</h1>
                <p>Research-based insights on resume building and job search success...</p>
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

            <div className="main-content-section">
                <div className="resume-tips-section">
                    <div className="resume-tips-row">
                        <div className="resume-tip">
                            <h2>Tip #1: Use Keywords</h2>
                            <p>Incorporate keywords from the job description to pass ATS screenings and grab recruiters' attention.</p>
                        </div>
                        <div className="resume-tip">
                            <h2>Tip #2: Customize for Each Job</h2>
                            <p>Tailor your resume for each job application to highlight relevant skills and experiences.</p>
                        </div>
                    </div>
                    <div className="resume-tips-row">
                        <div className="resume-tip">
                            <h2>Tip #3: Quantify Achievements</h2>
                            <p>Use numbers and statistics to quantify your achievements and demonstrate your impact.</p>
                        </div>
                        <div className="resume-tip">
                            <h2>Tip #4: Use Action Verbs</h2>
                            <p>Start bullet points with strong action verbs to make your resume more engaging and impactful.</p>
                        </div>
                    </div>
                    <div className="resume-tips-row">
                        <div className="resume-tip">
                            <h2>Tip #5: Keep It Concise</h2>
                            <p>Limit your resume to one page if possible, focusing on the most relevant information.</p>
                        </div>
                        <div className="resume-tip">
                            <h2>Tip #6: Use a Professional Format</h2>
                            <p>Choose a clean, professional format with readable fonts and consistent styling.</p>
                        </div>
                    </div>
                    <div className="resume-tips-row">
                        <div className="resume-tip">
                            <h2>Tip #7: Highlight Relevant Skills</h2>
                            <p>Highlight skills that are relevant to the job you're applying for to show your fit for the role.</p>
                        </div>
                        <div className="resume-tip">
                            <h2>Tip #8: Proofread Carefully</h2>
                            <p>Check for typos and grammatical errors to ensure your resume is polished and professional.</p>
                        </div>
                    </div>
                    <div className="resume-tips-row">
                        <div className="resume-tip">
                            <h2>Tip #9: Highlight Relevant Skills</h2>
                            <p>Highlight skills that are relevant to the job you're applying for to show your fit for the role.</p>
                        </div>
                        <div className="resume-tip">
                            <h2>Tip #10: Proofread Carefully</h2>
                            <p>Check for typos and grammatical errors to ensure your resume is polished and professional.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistics-section">
                <Link to="/main-application">
                    <button className="application-button">Join The Fellowship</button>
                </Link>
                <h2>Leading Research and Statistics</h2>
                <canvas id="profileViewsChart" className="firstChart"></canvas>
                <canvas id="skillEndorsementsChart" className="secondChart"></canvas>
                <canvas id="thirdChart" className="thirdChart"></canvas>
            </div>
        </div>
    );
}

export default ResumeRebrand;
