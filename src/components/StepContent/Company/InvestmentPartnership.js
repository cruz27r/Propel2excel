import React from 'react';
import './InvestmentPartnership.css';
import tableComputer from '../../../assets/images/table-computers.jpg';
import testimonialImage1 from '../../../assets/images/table-computers.jpg';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const testimonials = [
  { name: 'IB Associate @ BOA', testimonial: 'I am incredibly grateful for this program and I know if other students had this opportunity they\'d feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.' },
  { name: 'Analyst @ Capital One', testimonial: 'Propel2Excel\'s Buddy System provided me with the guidance and support I needed to secure a role at Capital One. The mentorship was invaluable.' },
  { name: 'IB Associate @ BOA', testimonial: 'I am incredibly grateful for this program and I know if other students had this opportunity they\'d feel the same way. I wish Propel2Excel existed sooner, I have already gotten so much value from it in my first financial state of the program like P2E extends to all. It has raised my competencies as well.' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FCF', '#FF6361', '#BC5090', '#FFA600'];

const companySuccessData = [
  { name: 'Success', value: 80 },
  { name: 'Other', value: 20 },
];

const conversionData = [
  { name: 'Full-time', value: 60 },
  { name: 'Internship', value: 40 },
];

const intervieweesData = [
  { name: 'Provided', value: 100 },
  { name: 'Not Provided', value: 0 },
];

const InvestmentPage = () => {
  return (
    <div className="investment-page">
      <header className="hero-section" style={{ backgroundImage: `url(${tableComputer})` }}>
        <div className="hero-content">
          <h1>Invest in the Future with Propel2Excel</h1>
          <p>Join us in empowering the next generation of leaders and innovators.</p>
          <button className="cta-button">Invest Now</button>
        </div>
      </header>

      <div className="content-container">
        <section className="introduction-section">
          <h2>Why Invest with Propel2Excel?</h2>
          <p>
            Propel2Excel offers a unique investment opportunity to support ambitious students at non-targeted universities. By investing in our program, you are contributing to the development of future leaders in tech, consulting, and banking industries.
          </p>
        </section>

        <section className="benefits-section">
          <h2>Benefits for Companies</h2>
          <div className="benefits-content">
            <div className="benefit">
              <h3>Access to Top Talent</h3>
              <p>Investing in Propel2Excel provides companies with direct access to a pool of highly talented and motivated students who are ready to make a significant impact in their respective fields.</p>
            </div>
            <div className="benefit">
              <h3>Enhanced Corporate Image</h3>
              <p>Partnering with a non-profit organization dedicated to educational equity and professional development enhances your company's image and demonstrates a commitment to social responsibility.</p>
            </div>
            <div className="benefit">
              <h3>Building Future Leaders</h3>
              <p>By supporting our program, you are helping to cultivate the next generation of leaders who will drive innovation and growth in tech, consulting, and banking industries.</p>
            </div>
            <div className="benefit">
              <h3>Diverse Workforce</h3>
              <p>Our program emphasizes diversity and inclusion, providing companies with access to a diverse talent pool that can bring fresh perspectives and innovative solutions to your business.</p>
            </div>
            <div className="benefit">
              <h3>Networking Opportunities</h3>
              <p>Engaging with Propel2Excel offers numerous networking opportunities with industry leaders, professionals, and other corporate partners.</p>
            </div>
            <div className="benefit">
              <h3>Community Impact</h3>
              <p>Your investment helps create a lasting positive impact on communities by providing students with the resources and support they need to succeed.</p>
            </div>
          </div>
        </section>

        <section className="key-stats-section">
          <h2>Key Statistics</h2>
          <div className="charts-container">
            <div className="chart-wrapper">
              <h3 className="chart-title">Company Success Rate</h3>
              <PieChart width={300} height={300}>
                <Pie data={companySuccessData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {companySuccessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="chart-wrapper">
              <h3 className="chart-title">Conversion to Full-Time</h3>
              <PieChart width={300} height={300}>
                <Pie data={conversionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="chart-wrapper">
              <h3 className="chart-title">Interviewees Provided</h3>
              <PieChart width={300} height={300}>
                <Pie data={intervieweesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#ffc658" label>
                  {intervieweesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </section>

        {/* <section className="impact-section" style={{ backgroundImage: `url(${tableComputer})` }}>
          <h2>Our Impact</h2>
          <p>
            Your investment will help us make a significant impact on the community. By supporting our program, you are helping students gain valuable skills, build professional networks, and secure high-profile job placements.
          </p>
        </section> */}

        <section className="testimonials-section">
          <h2>Investor Testimonials</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p>{testimonial.testimonial}</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Invest?</h2>
          <button className="cta-button">Invest Now</button>
        </section>
      </div>
    </div>
  );
};

export default InvestmentPage;
