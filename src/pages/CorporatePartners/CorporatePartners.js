import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, Bar, BarChart, XAxis, YAxis, CartesianGrid, LabelList, ComposedChart, Label, LineChart, Line } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure you have FontAwesome installed
import { faLaptopCode, faUserTie, faPiggyBank } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import './CorporatePartners.css';

// Import your companystats logos
import alpine from '../../assets/images/CompanyLogos/RealPartners/Alpine_Logo.webp';
import bethIsrael from '../../assets/images/CompanyLogos/RealPartners/BILH_System_Lnd_Logo_RGB2.png';
import blueCross from '../../assets/images/CompanyLogos/RealPartners/bluecross-blueshield-logo.png';
import easternBank from '../../assets/images/CompanyLogos/RealPartners/Eastern+Bank.png';
import pwc from '../../assets/images/CompanyLogos/RealPartners/Logo-pwc.png';
import mckinsey from '../../assets/images/CompanyLogos/RealPartners/McKinsey_&_Company-Logo.wine.png';
import tjx from '../../assets/images/CompanyLogos/RealPartners/TJX_Companies-Logo.wine.png';

// Import your coaches represented logos
import chewy from '../../assets/images/CompanyLogos/CoachesCompanies/chewy-logo.webp';
import mckinseyCoaches from '../../assets/images/CompanyLogos/CoachesCompanies/McKinsey_&_Company-Logo.png';
import bain from '../../assets/images/CompanyLogos/CoachesCompanies/Bain_and_Company_Logo.png';
import accenture from '../../assets/images/CompanyLogos/CoachesCompanies/Accenture_logo.svg.png';
import tjxCoaches from '../../assets/images/CompanyLogos/CoachesCompanies/TJX_Companies-Logo.wine.png';
import blueCrossBlueShield from '../../assets/images/CompanyLogos/CoachesCompanies/BlueCross-BlueShield.webp';
import pwcCoaches from '../../assets/images/CompanyLogos/CoachesCompanies/Logo-pwc.png';
import fidelity from '../../assets/images/CompanyLogos/CoachesCompanies/Fidelity-Logo.png';
import alpineInvestors from '../../assets/images/CompanyLogos/CoachesCompanies/alpine-investors.webp';
import easternBankCoaches from '../../assets/images/CompanyLogos/CoachesCompanies/eastern-bank.png';
import google from '../../assets/images/CompanyLogos/CoachesCompanies/google-logo.png';
import microsoft from '../../assets/images/CompanyLogos/CoachesCompanies/microsoft.png';
import amazon from '../../assets/images/CompanyLogos/CoachesCompanies/amazon.png';
import morganStanley from '../../assets/images/CompanyLogos/CoachesCompanies/Morgan_Stanley_Logo.webp';
import citibank from '../../assets/images/CompanyLogos/CoachesCompanies/Citibank-Logo.png';
import jpMorganChase from '../../assets/images/CompanyLogos/CoachesCompanies/jpmorgan-logo.png';
import apple from '../../assets/images/CompanyLogos/CoachesCompanies/apple.png';
import ibm from '../../assets/images/CompanyLogos/CoachesCompanies/ibm.png';
import goldmanSachs from '../../assets/images/CompanyLogos/CoachesCompanies/goldmanSachs.webp';
import blackstone from '../../assets/images/CompanyLogos/CoachesCompanies/BlackRock.png';
import ubs from '../../assets/images/CompanyLogos/CoachesCompanies/ubs-logo.png';
import salesforce from '../../assets/images/CompanyLogos/CoachesCompanies/salesforce-logo.png';
import slack from '../../assets/images/CompanyLogos/CoachesCompanies/slack.png';
import walmart from '../../assets/images/CompanyLogos/CoachesCompanies/walmart.webp';
import netflix from '../../assets/images/CompanyLogos/CoachesCompanies/netflix.png';
import capitalOne from '../../assets/images/CompanyLogos/CoachesCompanies/Capital-One.png';
import meta from '../../assets/images/CompanyLogos/CoachesCompanies/Meta-Logo.png';
import nike from '../../assets/images/CompanyLogos/CoachesCompanies/nike.png';
import alphabet from '../../assets/images/CompanyLogos/CoachesCompanies/Alphabet-logo.png';
import boeing from '../../assets/images/CompanyLogos/CoachesCompanies/Boeing.png';
import ge from '../../assets/images/CompanyLogos/CoachesCompanies/General_Electric.png';
import gm from '../../assets/images/CompanyLogos/CoachesCompanies/General_Motors.png';
import usBank from '../../assets/images/CompanyLogos/CoachesCompanies/USbank.png';
import wellsFargo from '../../assets/images/CompanyLogos/CoachesCompanies/Wells_Fargo.png';
import blackRock from '../../assets/images/CompanyLogos/CoachesCompanies/BlackRock.png';
import raytheon from '../../assets/images/CompanyLogos/CoachesCompanies/Raytheon_Technologies.png';
import ups from '../../assets/images/CompanyLogos/CoachesCompanies/UPS-logo.png';
import bcg from '../../assets/images/CompanyLogos/CoachesCompanies/Boston_Consulting_Group.png';


const companyStats = [
    {
        name: 'PwC',
        location: 'London, UK',
        numberOfEmployees: '200000',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['tech', 'banking', 'consulting'],
        logo: pwc, // Use the PwC logo
        growthRate: '5%',
        diversityStats: {
            percentageWomen: '40%',
            percentageMen: '58%',
            percentageOtherGender: '2%',
            percentageWhite: '60%',
            percentageBlack: '15%',
            percentageHispanic: '10%',
            percentageAsian: '12%',
            percentageOtherRace: '3%'
        },
        retentionRate: '3 years',
        internshipDetails: {
            numberOfInterns: 500,
            convertToFullTime: '70%'
        },
        companyCultureRating: '4.5/5',
        employeeGrowthInitiatives: 'Leadership training programs, upskilling courses'
    },
    {
        name: 'McKinsey & Company',
        location: 'New York, NY',
        numberOfEmployees: '30000',
        coaches: '500+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 2400,
        numberOfNonIvyLeaguesEmployees: 600,
        categories: ['consulting', 'tech'],
        logo: mckinsey, // Use the McKinsey logo
        growthRate: '3%',
        diversityStats: {
            percentageWomen: '35%',
            percentageMen: '62%',
            percentageOtherGender: '3%',
            percentageWhite: '55%',
            percentageBlack: '18%',
            percentageHispanic: '12%',
            percentageAsian: '13%',
            percentageOtherRace: '2%'
        },
        retentionRate: '2.5 years',
        internshipDetails: {
            numberOfInterns: 300,
            convertToFullTime: '75%'
        },
        companyCultureRating: '4.2/5',
        employeeGrowthInitiatives: 'Mentorship programs, global exchange opportunities'
    },
    {
        name: 'Eastern Bank',
        location: 'Boston, MA',
        numberOfEmployees: '5000',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['banking', 'consulting', 'tech'],
        logo: easternBank, // Use the Eastern Bank logo
        growthRate: '4%',
        diversityStats: {
            percentageWomen: '50%',
            percentageMen: '48%',
            percentageOtherGender: '2%',
            percentageWhite: '65%',
            percentageBlack: '10%',
            percentageHispanic: '15%',
            percentageAsian: '8%',
            percentageOtherRace: '2%'
        },
        retentionRate: '4 years',
        internshipDetails: {
            numberOfInterns: 100,
            convertToFullTime: '60%'
        },
        companyCultureRating: '4.8/5',
        employeeGrowthInitiatives: 'Personal development plans, e-learning portals'
    },
    {
        name: 'Alpine Investors',
        location: 'San Francisco, CA',
        numberOfEmployees: '800',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['banking', 'consulting', 'tech'],
        logo: alpine, // Use the Alpine Investors logo
        growthRate: '6%',
        diversityStats: {
            percentageWomen: '45%',
            percentageMen: '53%',
            percentageOtherGender: '2%',
            percentageWhite: '70%',
            percentageBlack: '5%',
            percentageHispanic: '10%',
            percentageAsian: '13%',
            percentageOtherRace: '2%'
        },
        retentionRate: '5 years',
        internshipDetails: {
            numberOfInterns: 50,
            convertToFullTime: '80%'
        },
        companyCultureRating: '4.6/5',
        employeeGrowthInitiatives: 'Venture programs, startup accelerators'
    },
    {
        name: 'Beth Israel Lahey Health Winchester Hospital',
        location: 'Winchester, MA',
        numberOfEmployees: '1000',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['healthcare', 'tech', 'consulting'],
        logo: bethIsrael, // Use the Beth Israel logo
        growthRate: '2%',
        diversityStats: {
            percentageWomen: '70%',
            percentageMen: '28%',
            percentageOtherGender: '2%',
            percentageWhite: '50%',
            percentageBlack: '20%',
            percentageHispanic: '15%',
            percentageAsian: '12%',
            percentageOtherRace: '3%'
        },
        retentionRate: '7 years',
        internshipDetails: {
            numberOfInterns: 150,
            convertToFullTime: '50%'
        },
        companyCultureRating: '4.7/5',
        employeeGrowthInitiatives: 'Clinical training, medical research grants'
    },
    {
        name: 'BlueCross BlueShield',
        location: 'Chicago, IL',
        numberOfEmployees: '55000',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['healthcare', 'insurance', 'tech', 'consulting'],
        logo: blueCross, // Use the BlueCross BlueShield logo
        growthRate: '4%',
        diversityStats: {
            percentageWomen: '60%',
            percentageMen: '38%',
            percentageOtherGender: '2%',
            percentageWhite: '45%',
            percentageBlack: '25%',
            percentageHispanic: '18%',
            percentageAsian: '10%',
            percentageOtherRace: '2%'
        },
        retentionRate: '6 years',
        internshipDetails: {
            numberOfInterns: 200,
            convertToFullTime: '65%'
        },
        companyCultureRating: '4.3/5',
        employeeGrowthInitiatives: 'Health management programs, insurance education'
    },
    {
        name: 'TJX',
        location: 'Framingham, MA',
        numberOfEmployees: '270000',
        coaches: '100+',
        totalEmployees: 300,
        numberOfIvyLeaguesEmployees: 200,
        numberOfNonIvyLeaguesEmployees: 100,
        categories: ['retail', 'tech', 'consulting'],
        logo: tjx, // Use the TJX logo
        growthRate: '7%',
        diversityStats: {
            percentageWomen: '55%',
            percentageMen: '43%',
            percentageOtherGender: '2%',
            percentageWhite: '55%',
            percentageBlack: '20%',
            percentageHispanic: '15%',
            percentageAsian: '8%',
            percentageOtherRace: '2%'
        },
        retentionRate: '3 years',
        internshipDetails: {
            numberOfInterns: 1000,
            convertToFullTime: '60%'
        },
        companyCultureRating: '4.4/5',
        employeeGrowthInitiatives: 'Retail management training, global sourcing programs'
    }
];

const coachesRepresented = [
    {
        name: 'Chewy',
        headquarters: 'Dania Beach, Florida, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: chewy
    },
    {
        name: 'McKinsey & Company',
        headquarters: 'New York, New York, United States',
        coaches: '500+',
        categories: ['Consulting'],
        logo: mckinseyCoaches
    },
    {
        name: 'Bain',
        headquarters: 'Boston, Massachusetts, United States',
        coaches: '500+',
        categories: ['Consulting'],
        logo: bain
    },
    {
        name: 'Accenture',
        headquarters: 'Dublin, Ireland',
        coaches: '500+',
        categories: ['Tech', 'Consulting'],
        logo: accenture
    },
    {
        name: 'TJX',
        headquarters: 'Framingham, Massachusetts, United States',
        coaches: '100+',
        categories: ['Tech', 'Retail'],
        logo: tjxCoaches
    },
    {
        name: 'BlueCross BlueShield',
        headquarters: 'Chicago, Illinois, United States',
        coaches: '100+',
        categories: ['Tech', 'Healthcare'],
        logo: blueCrossBlueShield
    },
    {
        name: 'PwC',
        headquarters: 'London, United Kingdom',
        coaches: '100+',
        categories: ['Tech', 'Banking', 'Consulting'],
        logo: pwcCoaches
    },
    {
        name: 'Fidelity',
        headquarters: 'Boston, Massachusetts, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: fidelity
    },
    {
        name: 'Alpine Investors',
        headquarters: 'San Francisco, California, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: alpineInvestors
    },
    {
        name: 'Eastern Bank',
        headquarters: 'Boston, Massachusetts, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: easternBankCoaches
    },
    {
        name: 'Google',
        headquarters: 'Mountain View, California, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: google
    },
    {
        name: 'Microsoft',
        headquarters: 'Redmond, Washington, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: microsoft
    },
    {
        name: 'Amazon',
        headquarters: 'Seattle, Washington, United States',
        coaches: '100+',
        categories: ['Tech', 'Retail'],
        logo: amazon
    },
    {
        name: 'Morgan Stanley',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: morganStanley
    },
    {
        name: 'Citibank',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: citibank
    },
    {
        name: 'JPMorgan Chase',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: jpMorganChase
    },
    {
        name: 'Apple',
        headquarters: 'Cupertino, California, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: apple
    },
    {
        name: 'IBM',
        headquarters: 'Armonk, New York, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: ibm
    },
    {
        name: 'Goldman Sachs',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: goldmanSachs
    },
    {
        name: 'Blackstone',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: blackstone
    },
    {
        name: 'UBS',
        headquarters: 'Zurich, Switzerland',
        coaches: '100+',
        categories: ['Banking'],
        logo: ubs
    },
    {
        name: 'Salesforce',
        headquarters: 'San Francisco, California, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: salesforce
    },
    {
        name: 'Slack',
        headquarters: 'San Francisco, California, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: slack
    },
    {
        name: 'Walmart',
        headquarters: 'Bentonville, Arkansas, United States',
        coaches: '100+',
        categories: ['Retail'],
        logo: walmart
    },
    {
        name: 'Netflix',
        headquarters: 'Los Gatos, California, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: netflix
    },
    {
        name: 'Capital One',
        headquarters: 'McLean, Virginia, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: capitalOne
    },
    {
        name: 'Meta',
        headquarters: 'Menlo Park, California, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: meta
    },
    {
        name: 'Nike',
        headquarters: 'Beaverton, Oregon, United States',
        coaches: '100+',
        categories: ['Retail'],
        logo: nike
    },
    {
        name: 'Alphabet',
        headquarters: 'Mountain View, California, United States',
        coaches: '1000+',
        categories: ['Tech'],
        logo: alphabet
    },
    {
        name: 'Boeing',
        headquarters: 'Chicago, Illinois, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: boeing
    },
    {
        name: 'GE',
        headquarters: 'Boston, Massachusetts, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: ge
    },
    {
        name: 'GM',
        headquarters: 'Detroit, Michigan, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: gm
    },
    {
        name: 'US Bank',
        headquarters: 'Minneapolis, Minnesota, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: usBank
    },
    {
        name: 'Wells Fargo',
        headquarters: 'San Francisco, California, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: wellsFargo
    },
    {
        name: 'BlackRock',
        headquarters: 'New York, New York, United States',
        coaches: '100+',
        categories: ['Banking'],
        logo: blackRock
    },
    {
        name: 'Raytheon Technologies',
        headquarters: 'Waltham, Massachusetts, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: raytheon
    },
    {
        name: 'UPS',
        headquarters: 'Sandy Springs, Georgia, United States',
        coaches: '100+',
        categories: ['Tech'],
        logo: ups
    },
    {
        name: 'BCG',
        headquarters: 'Boston, Massachusetts, United States',
        coaches: '100+',
        categories: ['Consulting'],
        logo: bcg
    }
];

function assignLogosToCategories(companyStats, activeSection) {
    return companyStats.filter(company => company.categories.includes(activeSection));
}

function CorporatePartnersPage({ selectedCategory }) {
    // State declarations
    const [activeIndexReached, setActiveIndexReached] = useState(0);
    const [activeSection, setActiveSection] = useState('tech');
    const [selectedLogoIndex, setSelectedLogoIndex] = useState(0);
    const [showStatistics, setShowStatistics] = useState(false);
    const [showAllCategories, setShowAllCategories] = useState(false);

    useEffect(() => {
        setActiveSection(selectedCategory); // Update activeSection whenever selectedCategory changes
    }, [selectedCategory]);

    // Function to handle section clicks
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Function to handle logo clicks
    const handleLogoClick = (index) => {
        setSelectedLogoIndex(index);
        setActiveIndexReached(index);
        setShowStatistics(!showStatistics); // Toggle the showStatistics state

        // Toggle the active class on the statistics section
        const statisticsSection = document.querySelector('.statistics-section');
        if (statisticsSection) {
            statisticsSection.classList.toggle('active');
        }
    };

    // Assign logos to categories and get displayed logos
    const updatedCompanyStats = assignLogosToCategories(companyStats, activeSection);
    let displayedLogos = updatedCompanyStats.map(company => company.logo);

    // Effect for auto-scrolling the logos carousel
    useEffect(() => {
        const intervalReached = setInterval(() => {
            setActiveIndexReached(current => (current + 1) % displayedLogos.length);
        }, 8000);
        return () => clearInterval(intervalReached);
    }, [displayedLogos]);

    function CorporateLogos({ displayedLogos, handleLogoClick, showStatistics, selectedLogoIndex }) {
        const gridClass = showStatistics ? "logos-grid single-column" : "logos-grid three-columns";
        return (
            <div className="outer-container">
                <div className={gridClass}>
                    {displayedLogos.map((logo, index) => (
                        <div className="logo-item" key={index} onClick={() => handleLogoClick(index)}>
                            <img src={logo} alt={`Current partner ${index}`} />
                        </div>
                    ))}
                </div>
                {showStatistics && selectedLogoIndex !== null && (
                    <CorporateStatistics selectedLogoIndex={selectedLogoIndex} />
                )}
            </div>
        );
    }
    
    
    function CorporateStatistics({ showStatistics, selectedLogoIndex }) {
        return (
            <div className="statistics-section">
                <div className="company-details">
                    <h4>Company Name: {companyStats[selectedLogoIndex].name}</h4>
                    <p className="location">Location: {companyStats[selectedLogoIndex].location}</p>
                    <p className="number-of-employees">Number of Employees: {companyStats[selectedLogoIndex].numberOfEmployees}</p>
                    <p className="coaches">Coaches: {companyStats[selectedLogoIndex].coaches}</p>
                    <p className="growth-rate">Growth Rate: {companyStats[selectedLogoIndex].growthRate}</p>
                    <p className="retention-rate">Retention Rate: {companyStats[selectedLogoIndex].retentionRate}</p>
                    <p className="culture-rating">Company Culture Rating: {companyStats[selectedLogoIndex].companyCultureRating}</p>
                    <p className="growth-initiatives">Growth Initiatives: {companyStats[selectedLogoIndex].employeeGrowthInitiatives}</p>
                </div>
                <div className="charts-container">
                    {/* First Row */}
                    <div className="chart-row">
                        <div className="chart">
                            <h4>Intern Statistics</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={[
                                    { name: 'Ivy League', interns: companyStats[selectedLogoIndex].ivyLeagueInterns },
                                    { name: 'Non-Ivy League', interns: companyStats[selectedLogoIndex].nonIvyLeagueInterns }
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="interns" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart">
                            <h4>Intern Conversion Rate</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        dataKey="conversionRate"
                                        data={[{ name: 'Conversion Rate', value: companyStats[selectedLogoIndex].internConversionRate }]}
                                        fill="#8884d8"
                                        label
                                    >
                                        <Cell fill="#82ca9d" />
                                        <Cell fill="#FFBB28" />
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="chart-row">
                        <div className="chart">
                            <h4>Gender Diversity</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={[
                                    { name: 'Male', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageMen) },
                                    { name: 'Female', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageWomen) },
                                    { name: 'Other', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageOtherGender) }
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart">
                            <h4>Racial Diversity</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        dataKey="value"
                                        data={[
                                            { name: 'White', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageWhite) },
                                            { name: 'Black', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageBlack) },
                                            { name: 'Hispanic', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageHispanic) },
                                            { name: 'Asian', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageAsian) },
                                            { name: 'Other Race', value: parseInt(companyStats[selectedLogoIndex].diversityStats.percentageOtherRace) }
                                        ]}
                                        fill="#8884d8"
                                        label
                                    >
                                        <Cell fill="#82ca9d" />
                                        <Cell fill="#FFBB28" />
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const filteredLogos = coachesRepresented.filter(coach => coach.categories.includes(activeSection));

    useEffect(() => {
        if (!showAllCategories) {
            setActiveSection(selectedCategory);
        }
    }, [selectedCategory, showAllCategories]);

    const toggleCategoriesView = () => {
        setShowAllCategories(!showAllCategories);
    };

    const renderHeader = () => {
        if (showAllCategories) {
            return "Tech, Consulting, and Banking";
        }
        return activeSection.toUpperCase();
    };

    const filteredCoaches = coachesRepresented.filter(coach => 
        showAllCategories ? true : coach.categories.includes(activeSection)
    );

    return (
        <div className="corporate-partners-page">
            <div className="header-container">
                <h1 className="industry-header">{renderHeader()}</h1>
                <h2 className="sub-header">Coaches Represented</h2>
            </div>
            <div className="logos-grid">
                {filteredCoaches.map((coach, index) => (
                    <div key={index} className="logo-item">
                        <img src={coach.logo} alt={`${coach.name} logo`} />
                        <div className="coach-count">{coach.coaches}</div>
                    </div>
                ))}
            </div>
            <button className="toggle-button" onClick={toggleCategoriesView}>
                <FontAwesomeIcon icon={faExchangeAlt} /> {showAllCategories ? 'Show Selected' : 'Show All Categories'}
            </button>
        </div>
    );

    // <div className="Title-Slider">
    //             <h2 className='CurrentTitle'>Corporate Partners</h2>
    //             <div className="multi-button">
    //                 <button className={activeSection === 'tech' ? 'active' : ''} onClick={() => setActiveSection('tech')}>
    //                     <FontAwesomeIcon icon={faLaptopCode} /> Tech
    //                 </button>
    //                 <button className={activeSection === 'consulting' ? 'active' : ''} onClick={() => setActiveSection('consulting')}>
    //                     <FontAwesomeIcon icon={faUserTie} /> Consulting
    //                 </button>
    //                 <button className={activeSection === 'banking' ? 'active' : ''} onClick={() => setActiveSection('banking')}>
    //                     <FontAwesomeIcon icon={faPiggyBank} /> Banking
    //                 </button>
    //             </div>
    //         </div>
            

}

export default CorporatePartnersPage;
