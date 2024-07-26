import React, { useState } from 'react';
import './CompaniesSection.css';
import googleLogo from '../assets/images/1.webp';
import appleLogo from '../assets/images/apple.png';
import accentureLogo from '../assets/images/accenture.png';
import metaLogo from '../assets/images/meta.png';
import netflixLogo from '../assets/images/netflix.png';
import amazonLogo from '../assets/images/6.webp';
import alphabetLogo from '../assets/images/alphabet.png';
import microsoftLogo from '../assets/images/2.webp';
import goldmansachslogo from '../assets/images/gs.webp';
import jpmorganlogo from '../assets/images/jpmorgan-logo.d3e3e0481bf8abce908a.png';
import deloittelogo from '../assets/images/7.webp';
import wellsfargologo from '../assets/images/Wells_Fargo.ddea222afbf07a398b92.png';
import morganlogo from '../assets/images/Morgan_Stanley_Logo.b47d181f8ddb9e20f0f3.webp';
import usbanklogo from '../assets/images/USbank.bdb0a4c0d8a682cf6d4d.png';
import pwclogo from '../assets/images/Logo-pwc.09f9068acfa615e99c8a.png';
import boeinglogo from '../assets/images/Boeing.232d308c11164ff3fc2f.png';
import gelogo from '../assets/images/General_Electric.85a0dd1472481e2e9338.png';
import ibm from '../assets/images/ibm.6f5b86441b4c7522d519.png';
import slacklogo from '../assets/images/slack.0f2b65123ee4b2562f23.png';
import mckinseylogo from '../assets/images/mckinsey.png';
import bainlogo from '../assets/images/bain.png'
import bcglogo from '../assets/images/Boston_Consulting_Group.1025f1336b5ace0e76f1.png'



const CompaniesSection = () => {
  const [category, setCategory] = useState('tech');

  const categories = {
    tech: [
      { name: 'Google', logo: googleLogo },
      { name: 'Apple', logo: appleLogo },
      { name: 'Accenture', logo: accentureLogo },
      { name: 'Meta', logo: metaLogo },
      { name: 'Netflix', logo: netflixLogo },
      { name: 'Amazon', logo: amazonLogo },
      { name: 'Alphabet', logo: alphabetLogo },
      { name: 'Microsoft', logo: microsoftLogo },
      { name: 'Slack', logo: slacklogo },
      { name: 'IBM', logo: ibm },
      { name: 'Boeing', logo: boeinglogo },
      { name: 'General Electric', logo: gelogo },
    ],
    banking: [
      { name: 'Goldman Sachs', logo: goldmansachslogo },
      { name: 'JP Morgan Chase', logo: jpmorganlogo },
      { name: 'Wells Fargo', logo: wellsfargologo },
      { name: 'Morgan Stanley', logo: morganlogo },
      { name: 'US bank', logo: usbanklogo },
      { name: 'PWC', logo: pwclogo },
      { name: 'Alphabet', logo: alphabetLogo },
      { name: 'Microsoft', logo: microsoftLogo },
    ],
    consulting: [
      { name: 'Deloitte', logo: deloittelogo },
      { name: 'Mckinsey', logo: mckinseylogo },
      { name: 'Accenture', logo: accentureLogo },
      { name: 'PWC', logo: pwclogo },
      { name: 'Bain', logo: bainlogo },
      { name: 'BCG', logo: bcglogo },
      // { name: 'Alphabet', logo: alphabetLogo },
      // { name: 'Microsoft', logo: microsoftLogo },
    ],
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <section className="companies-section">
      <h2>Companies Represented</h2>
      <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div className="companies-logos">
        {categories[category].map((company) => (
          <img key={company.name} src={company.logo} alt={company.name} className="company-logo" />
        ))}
      </div>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('tech')} className={category === 'tech' ? 'active' : ''}>TECH</button>
        <button onClick={() => handleCategoryChange('banking')} className={category === 'banking' ? 'active' : ''}>BANKING</button>
        <button onClick={() => handleCategoryChange('consulting')} className={category === 'consulting' ? 'active' : ''}>CONSULTING</button>
      </div>
    </section>
  );
};

export default CompaniesSection;
