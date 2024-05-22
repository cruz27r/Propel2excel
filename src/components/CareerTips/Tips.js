import React from 'react';
import './Tips.css';

const Tips = () => {
  const tipSections = [
    {
      title: 'Find a Job',
      links: [
        { name: 'Navigating Job Boards', description: 'Tips on using job boards effectively.', url: 'https://www.thebalancecareers.com/best-job-search-websites-2064080', image: 'https://www.thebalancecareers.com/thmb/DPm4RaCEUyM6mOERu91BGvnw-1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/job-search-58b73ef43df78c353c650d57.jpg' },
        { name: 'Networking Online', description: 'How to expand your professional network remotely.', url: 'https://www.themuse.com/advice/networking-from-home', image: 'https://www.themuse.com/advice/attachments/6841.jpg' },
        { name: 'Leveraging LinkedIn', description: 'Using LinkedIn to its full potential in job hunting.', url: 'https://business.linkedin.com/talent-solutions/blog/job-seeker-tips/2021/how-to-use-linkedin-effectively', image: 'https://business.linkedin.com/content/dam/me/business/en-us/talent-solutions/resources/content-marketing-to-surge-your-talent-pipeline-1.jpg' },
      ],
    },
    {
      title: 'Career Development',
      links: [
        { name: 'Building a Professional Network', description: 'Strategies for expanding your professional connections.', url: 'https://www.indeed.com/career-advice/career-development/building-a-professional-network', image: 'https://d4y70tum9c2ak.cloudfront.net/indeed-uploads/2021/07/building-a-network.jpg' },
        { name: 'Skills Development', description: 'How to identify and develop in-demand skills.', url: 'https://hbr.org/2020/10/a-step-by-step-guide-to-creating-your-skills-development-plan', image: 'https://hbr.org/resources/images/article_assets/2020/10/Oct20_16_1134902396-600x315.jpg' },
        { name: 'Navigating Career Transitions', description: 'Advice for smoothly changing industries or roles.', url: 'https://www.linkedin.com/pulse/navigating-career-transition-lessons-ive-learned-way-stacey/', image: 'https://media-exp1.licdn.com/dms/image/C4E03AQER0KtoYI-aeQ/profile-displayphoto-shrink_200_200/0/1609463890976?e=1659571200&v=beta&t=fT-1NiTiGVfZcInDCI4ps3bMJ9unmC3AnfEdgxSxgh0' },
      ],
    },
    {
      title: 'Working Remotely',
      links: [
        { name: 'Remote Work Best Practices', description: 'Tips for productivity and work-life balance when working from home.', url: 'https://nira.com/remote-work-best-practices/', image: 'https://nira.com/wp-content/uploads/2020/04/remote-work.jpg' },
        { name: 'Essential Tools for Remote Work', description: 'A review of the best tools for remote collaboration.', url: 'https://www.adobe.com/acrobat/resources/remote-work-tools.html', image: 'https://www.adobe.com/content/dam/cc/us/en/acrobat/resources/images/tools-for-remote-work-social_1200x628.jpg' },
        { name: 'Finding Remote Work Opportunities', description: 'Where to look for and how to land remote positions.', url: 'https://www.linkedin.com/pulse/remote-job-search-mistakes-avoid-oluwaseun-gabby-akinola-gnnnc/', image: 'https://media-exp1.licdn.com/dms/image/C4E22AQFcuKbFc7_SXw/feedshare-shrink_800/0/1618500688024?e=1659571200&v=beta&t=yEEc12xtGp8aawLTCGi6Gp5l_6klCQ8OT8m94DQFJmE' },
      ],
    },
    {
      title: 'Interview Preparation',
      links: [
        { name: 'Common Interview Questions', description: 'Preparing for the most frequently asked interview questions.', url: 'https://www.themuse.com/advice/interview-questions-and-answers', image: 'https://images.ctfassets.net/ii3k8n6p1keg/6pkp2qCNpGqEXZLR5BfAdI/6d6be0ef357eeaf0c09a6c150ee0375d/Common-Interview-Questions-Blog-Header.jpg' },
        { name: 'The 10 Rules of Interview Etiquette', description: 'The dos and don’ts during an interview.', url: 'https://www.themuse.com/advice/the-10-rules-of-interview-etiquette', image: 'https://images.ctfassets.net/ii3k8n6p1keg/6pkp2qCNpGqEXZLR5BfAdI/6d6be0ef357eeaf0c09a6c150ee0375d/Common-Interview-Questions-Blog-Header.jpg' },
        { name: 'How to Make a Good Impression in a Virtual Job Interview', description: 'How to make a great impression in a virtual interview setting.', url: 'https://joinhandshake.com/blog/students/how-to-make-a-good-impression-in-a-virtual-job-interview/', image: 'https://assets.ctfassets.net/xux6p8a7yqq8/2svuMRkwNTTYCT2aUBT82k/d537c5a49d79a3d6cd1c7c7c86526473/Handshake_Thumbnail.jpg' },
      ],
    },
    {
      title: 'Applicant Insights',
      links: [
        { name: 'Understanding the Hiring Process', description: 'An inside look at the recruitment cycle from application to offer.', url: 'https://www.linkedin.com/pulse/other-side-table-understanding-hiring-process-from-candidates-gfiie/', image: 'https://media-exp1.licdn.com/dms/image/C4D22AQFsuZbZhlmpCQ/feedshare-shrink_2048_1536/0/1633696928765?e=1659571200&v=beta&t=sXCBw2CnR_vzGmGJK3EMy1pAqvZhOTD8lmBDKyeMDM8' },
        { name: 'Company Culture and Fit', description: 'How to evaluate a company’s culture for fit before you apply.', url: 'https://www.glassdoor.com/blog/guide/company-culture/', image: 'https://media.glassdoor.com/home/1000x400/blog.png' },
        { name: 'Salary Negotiation Strategies', description: 'Tactics to help you negotiate the salary you deserve.', url: 'https://www.indeed.com/career-advice/pay-salary/negotiation-strategies-salary', image: 'https://d4y70tum9c2ak.cloudfront.net/indeed-uploads/2021/07/Salary-Negotiation.jpg' },
      ],
    },
    {
      title: 'Remote Job Resources',
      links: [
        { name: 'Top Sites for Remote Job Searches', description: 'A curated list of websites to find remote work.', url: 'https://www.flexjobs.com/blog/post/best-sites-find-remote-work/', image: 'https://www.flexjobs.com/blog/wp-content/uploads/2020/10/top-sites-for-remote-work.jpg' },
        { name: 'Preparing for a Remote Career', description: 'Skills and tools you’ll need to thrive remotely.', url: 'https://www.linkedin.com/pulse/preparing-remote-job-comprehensive-guide-blazon-globe-technology-uwwlf/', image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZ2L61VZ_w6w/profile-displayphoto-shrink_200_200/0/1516924829789?e=1659571200&v=beta&t=mF3eD6lw26K0lmR_8ixskVe6xU7TWZb_8yHzgFv5nXM' },
        { name: 'Leading Global Remote Teams: 11 Strategies for Success', description: 'How to be an effective team member when working remotely.', url: 'https://www.forbes.com/sites/forbesbusinesscouncil/2024/03/01/leading-global-remote-teams-11-strategies-for-success/?sh=3f43c41941b1', image: 'https://imageio.forbes.com/specials-images/imageserve/5e609a9e0bf81a0006f91f5d/0x0.jpg' },
      ],
    },
  ];

  return (
    <div className="tips-page">
      <div className="intro-banner">
        <h1>Career Tips and Resources</h1>
        <p>Discover guides and strategies to boost your career path.</p>
      </div>
      {tipSections.map((section, index) => (
        <div key={index} className="tips-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="link-container">
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="resource-link">
                <div className="image-placeholder" style={{ backgroundImage: `url(${link.image})` }}></div>
                <h3 className="link-title">{link.name}</h3>
                <p className="link-description">{link.description}</p>
                <a href={link.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tips;
