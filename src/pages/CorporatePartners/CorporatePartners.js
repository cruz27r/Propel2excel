import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './CorporatePartners.css';

// Import your tech logos
import techlogo1 from '../../assets/images/CompanyLogos/Tech/Bain_Capital_Logo copy.jpg';
import techlogo2 from '../../assets/images/CompanyLogos/Tech/aws.png';
import techlogo3 from '../../assets/images/CompanyLogos/Tech/corsair.png';
import techlogo4 from '../../assets/images/CompanyLogos/Tech/samsung.png';
import techlogo5 from '../../assets/images/CompanyLogos/Tech/meta.png';
import techlogo6 from '../../assets/images/CompanyLogos/Tech/microsoft-text.png';

// Import banking logos
import bankinglogo1 from '../../assets/images/CompanyLogos/Banking/bank-of-america-logo-bank-of-america-icon-transparent-free-png.webp';
import bankinglogo2 from '../../assets/images/CompanyLogos/Banking/Citibank.svg.png';
import bankinglogo3 from '../../assets/images/CompanyLogos/Banking/download.png';
import bankinglogo4 from '../../assets/images/CompanyLogos/Banking/kisspng-logo-goldman-sachs-vector-graphics-brand-font-sponsors-imperial-college-eesoc-electrical-engin-5b7448af33eda6.5907996815343474392127.jpg';
import bankinglogo5 from '../../assets/images/CompanyLogos/Banking/TD-Bank-logo.png';
import bankinglogo6 from '../../assets/images/CompanyLogos/Banking/capitalone.png';

// Import consulting logos
import consultinglogo1 from '../../assets/images/CompanyLogos/Consulting/76924bf3b16400a6d0b6e7e1aeed033d.png';
import consultinglogo2 from '../../assets/images/CompanyLogos/Consulting/Bain_Capital_Logo.jpg';
import consultinglogo3 from '../../assets/images/CompanyLogos/Consulting/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png';
import consultinglogo4 from '../../assets/images/CompanyLogos/Consulting/Goldman_Sachs_Secondary.png';
import consultinglogo5 from '../../assets/images/CompanyLogos/Consulting/Accenture_logo.svg.png';
import consultinglogo6 from '../../assets/images/CompanyLogos/Consulting/Oliver-Wyman.webp';

// Import anticipated logos
import logo1 from '../../assets/images/UMass_Boston_logo.png';
import logo2 from '../../assets/images/umassA.png';
import logo3 from '../../assets/images/bc.png';
import logo4 from '../../assets/images/Northeastern-University-Logo.png';
import logo5 from '../../assets/images/Wentworth.png';
import logo6 from '../../assets/images/BU.png';

function CorporatePartners() {
    // Index and carousel logic for current partners
    // State for tracking the active index of the currently reached logos
    const [activeIndexReached, setActiveIndexReached] = useState(2);
    
    // State for tracking the active index of the anticipated logos
    const [activeIndexComingTo, setActiveIndexComingTo] = useState(0);
    
    // State to track which section is active
    const [activeSection, setActiveSection] = useState('tech');
    
    // State to track which logo is selected for displaying stats
    const [selectedLogoIndex, setSelectedLogoIndex] = useState(activeIndexReached);
    
    // State to control the visibility of the statistics section
    const [showStatistics, setShowStatistics] = useState(true);

    // Effect for auto-scrolling the currently reached logos carousel
    useEffect(() => {
        const intervalReached = setInterval(() => {
            setActiveIndexReached(current => (current + 1) % techLogos.length);
        }, 8000);
        return () => clearInterval(intervalReached);
    }, []);

    // Effect for auto-scrolling the anticipated logos carousel
    useEffect(() => {
        const intervalComingTo = setInterval(() => {
            setActiveIndexComingTo(current => (current + 1) % anticipatedLogos.length);
        }, 8000);
        return () => clearInterval(intervalComingTo);
    }, []);

    // Function to advance to the next logo in the currently reached logos carousel
    const nextSlideReached = () => {
        const newIndex = (activeIndexReached + 1) % techLogos.length;
        setActiveIndexReached(newIndex);
        setSelectedLogoIndex(newIndex);
    };

    // Function to go back to the previous logo in the currently reached logos carousel
    const prevSlideReached = () => {
        const newIndex = (activeIndexReached - 1 + techLogos.length) % techLogos.length;
        setActiveIndexReached(newIndex);
        setSelectedLogoIndex(newIndex);
    };

    // Function to advance to the next logo in the anticipated logos carousel
    const nextSlideComingTo = () => {
        setActiveIndexComingTo(current => (current + 1) % anticipatedLogos.length);
    };

    // Function to go back to the previous logo in the anticipated logos carousel
    const prevSlideComingTo = () => {
        setActiveIndexComingTo(current => (current - 1 + anticipatedLogos.length) % anticipatedLogos.length);
    };

    // Function to handle clicks on the section names
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Function to handle clicks on a logo, which sets the logo as active and shows its stats
    const handleLogoClick = (index) => {
        setSelectedLogoIndex(index);
        setActiveIndexReached(index); // Also set this logo as the active one in the carousel
        setShowStatistics(true);
    };

    // All logos
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
    const techLogos = [techlogo1, techlogo2, techlogo3, techlogo4, techlogo5, techlogo6]; // Use all logos for each section
    const consultingLogos = [consultinglogo1, consultinglogo2, consultinglogo3, consultinglogo4, consultinglogo5, consultinglogo6];
    const bankingLogos = [bankinglogo1, bankinglogo2, bankinglogo3, bankinglogo4, bankinglogo5, bankinglogo6];
    const anticipatedLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

    // Determine displayed logos based on the active section
    let displayedLogos;
    switch (activeSection) {
        case 'tech':
            displayedLogos = techLogos;
            break;
        case 'consulting':
            displayedLogos = consultingLogos;
            break;
        case 'banking':
            displayedLogos = bankingLogos;
            break;
        default:
            displayedLogos = techLogos;
    }

    // Mock data for company stats
    const companyStats = [
        {
          name: 'Bain Capital',
          location: 'Boston, MA',
          numberOfEmployees: '1000',
          coaches: '5',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Amazon Web Services (AWS)',
          location: 'Seattle, WA',
          numberOfEmployees: '50000',
          coaches: '25',
          totalEmployees: 3000,
          numberOfIvyLeaguesEmployees: 2400,
          numberOfNonIvyLeaguesEmployees: 600,
        },
        {
          name: 'Corsair',
          location: 'Fremont, CA',
          numberOfEmployees: '2000',
          coaches: '10',
          totalEmployees: 2000,
          numberOfIvyLeaguesEmployees: 1683,
          numberOfNonIvyLeaguesEmployees: 317,
        },
        {
          name: 'Samsung',
          location: 'Suwon, South Korea',
          numberOfEmployees: '287000',
          coaches: '50',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Meta (Facebook)',
          location: 'Menlo Park, CA',
          numberOfEmployees: '58604',
          coaches: '30',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Microsoft',
          location: 'Redmond, WA',
          numberOfEmployees: '181000',
          coaches: '40',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Bank of America',
          location: 'Charlotte, NC',
          numberOfEmployees: '208000',
          coaches: '35',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Citibank',
          location: 'New York, NY',
          numberOfEmployees: '204000',
          coaches: '28',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Goldman Sachs',
          location: 'New York, NY',
          numberOfEmployees: '38000',
          coaches: '20',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'TD Bank',
          location: 'Cherry Hill, NJ',
          numberOfEmployees: '26000',
          coaches: '15',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Capital One',
          location: 'McLean, VA',
          numberOfEmployees: '52000',
          coaches: '22',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Google',
          location: 'Mountain View, CA',
          numberOfEmployees: '135301',
          coaches: '45',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Bain & Company',
          location: 'Boston, MA',
          numberOfEmployees: '8000',
          coaches: '18',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Accenture',
          location: 'Dublin, Ireland',
          numberOfEmployees: '505000',
          coaches: '60',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
        {
          name: 'Oliver Wyman',
          location: 'New York, NY',
          numberOfEmployees: '5000',
          coaches: '12',
          totalEmployees: 300,
          numberOfIvyLeaguesEmployees: 200,
          numberOfNonIvyLeaguesEmployees: 100,
        },
      ];

    return (
        <div className="corporate-partners-section">
            <div className="current-partners-section">
                <div className="current-partners-content">
                    <div className="Title-Slider">
                        <h2 className='CurrentTitle'>Current Corporate Partners</h2>
                        <div className="slider-section-names">
                            <div className={`slider-item-name ${activeSection === 'tech' ? 'active' : ''}`} onClick={() => handleSectionClick('tech')}>
                                <h3>Tech</h3>
                            </div>
                            <div className={`slider-item-name ${activeSection === 'consulting' ? 'active' : ''}`} onClick={() => handleSectionClick('consulting')}>
                                <h3>Consulting</h3>
                            </div>
                            <div className={`slider-item-name ${activeSection === 'banking' ? 'active' : ''}`} onClick={() => handleSectionClick('banking')}>
                                <h3>Banking</h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel">
                        <div className="carousel-inner">
                            {displayedLogos.map((logo, index) => (
                                <div className={`item ${activeIndexReached === index ? 'active' : ''}`} key={index} onClick={() => handleLogoClick(index)}>
                                    <img src={logo} alt={`Current partner ${index}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control left" onClick={prevSlideReached}>&lt;</button>
                        <button className="carousel-control right" onClick={nextSlideReached}>&gt;</button>
                    </div> */}
                    <div className="logos-grid">
                        {displayedLogos.map((logo, index) => (
                            <div className="logo-item" key={index} onClick={() => handleLogoClick(index)}>
                                <img src={logo} alt={`Current partner ${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="description">
                        <p>
                            Our current corporate partners play a pivotal role in providing strong connections between our fellows and the industry. These companies offer positions and interview opportunities, along with employees who act as coaches for our 1-on-1 sessions. They help prepare resumes, review interviews, and provide practice tailored to their specific companies. These relationships with the top companies build the bridge for our fellows to start their professional journeys.
                        </p>
                    </div>
                </div>
                {showStatistics && selectedLogoIndex != null && (
                    <div className="statistics-section">
                        <div className="company-details">
                            <h4>Company Name: {companyStats[selectedLogoIndex].name}</h4>
                            <p>Location: {companyStats[selectedLogoIndex].location}</p>
                            <p>Number of Employees: {companyStats[selectedLogoIndex].numberOfEmployees}</p>
                            <p>Coaches Located Here: {companyStats[selectedLogoIndex].coaches}</p>
                        </div>
                        <div className="pie-charts-container">
                            {/* Pie Chart 1 - Breakdown of Ivy League vs. Non-Ivy League Employees */}
                            <div className="pie-chart">
                                <h4>Breakdown of Ivy League vs. Non-Ivy League Employees</h4>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={[
                                                {
                                                    name: 'Ivy League',
                                                    value: companyStats[selectedLogoIndex]?.numberOfIvyLeaguesEmployees || 0,
                                                },
                                                {
                                                    name: 'Non-Ivy League',
                                                    value: companyStats[selectedLogoIndex]?.numberOfNonIvyLeaguesEmployees || 0,
                                                },
                                            ]}
                                            fill="#8884d8"
                                        >
                                            <Cell fill="#82ca9d" />
                                            <Cell fill="#FFBB28" />
                                        </Pie>
                                        <Legend />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            {/* Pie Chart 2 - Placeholder */}
                            <div className="pie-chart">
                                <h4>Placeholder for Pie Chart 2</h4>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={[
                                                {
                                                    name: 'Category 1',
                                                    value: 400,
                                                },
                                                {
                                                    name: 'Category 2',
                                                    value: 300,
                                                },
                                                {
                                                    name: 'Category 3',
                                                    value: 200,
                                                },
                                                {
                                                    name: 'Category 4',
                                                    value: 100,
                                                },
                                            ]}
                                            fill="#8884d8"
                                        >
                                            <Cell fill="#82ca9d" />
                                            <Cell fill="#FFBB28" />
                                            <Cell fill="#FF8042" />
                                            <Cell fill="#0088FE" />
                                        </Pie>
                                        <Legend />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>


                    </div>
                )}
            </div>

            <h2>Our Anticipated Corporate Partners</h2>
            <p className="corporate-description">
                Our anticipated corporate partners will also play a crucial role in providing connections, interview opportunities, coaching, resume preparation, and interview practice. These partnerships will further enhance the opportunities for our fellows to kickstart their professional journeys.
            </p>
            <div className="carousel">
                <div className="carousel-inner">
                    {anticipatedLogos.map((logo, index) => (
                        <div className={`item ${activeIndexComingTo === index ? 'active' : ''}`} key={index} onClick={() => handleLogoClick(index)}>
                            <img src={logo} alt={`Anticipated partner ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control left" onClick={prevSlideComingTo}>&lt;</button>
                <button className="carousel-control right" onClick={nextSlideComingTo}>&gt;</button>
            </div>
        </div>
    );

}

export default CorporatePartners;
