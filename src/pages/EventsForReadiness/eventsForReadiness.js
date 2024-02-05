import React, { useState } from 'react';
import './eventsForReadiness.css';

function EventsForReadiness() {
  const [events, setEvents] = useState([
    {
      id: 0,
      name: "Innovate or Die: The Future of Tech",
      date: "2024-03-01",
      time: "9:00 AM - 3:00 PM",
      about: "A deep dive into how technology is evolving and what businesses need to do to keep up. Featuring keynote speakers from leading tech companies.",
      focus: "Technology, innovation, business strategy",
      expanded: false,
    },
    {
      id: 1,
      name: "Green Tech Summit",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      about: "Exploring sustainable technologies and their impact on our planet. Join us for workshops, panel discussions, and networking with eco-conscious innovators.",
      focus: "Sustainability, renewable energy, green technology",
      expanded: false,
    },
    {
      id: 2,
      name: "AI Revolution Conference",
      date: "2024-04-05",
      time: "10:00 AM - 5:00 PM",
      about: "Unpacking the latest advancements in AI and machine learning. How will AI shape the future of industries from healthcare to finance?",
      focus: "Artificial intelligence, machine learning, industry applications",
      expanded: false,
    },
    {
      id: 3,
      name: "Cybersecurity Unlocked",
      date: "2024-04-20",
      time: "9:00 AM - 2:00 PM",
      about: "A comprehensive look at cybersecurity trends and threats. Learn how to protect your digital assets in interactive sessions with security experts.",
      focus: "Cybersecurity, data protection, threat intelligence",
      expanded: false,
    },
    {
      id: 4,
      name: "Future of Work: Remote Revolution",
      date: "2024-05-10",
      time: "9:00 AM - 1:00 PM",
      about: "Exploring the transformation of work cultures and spaces in the digital age. What does the future hold for remote work and digital nomadism?",
      focus: "Remote work, digital transformation, work culture",
      expanded: false,
    },
    {
      id: 5,
      name: "Blockchain Beyond Bitcoin",
      date: "2024-05-25",
      time: "10:00 AM - 6:00 PM",
      about: "Demystifying blockchain technology and its applications beyond cryptocurrencies. Workshops on how to leverage blockchain for your business.",
      focus: "Blockchain, cryptocurrencies, business applications",
      expanded: false,
    },
    {
      id: 6,
      name: "Women in Tech: Breaking Barriers",
      date: "2024-06-08",
      time: "10:00 AM - 3:00 PM",
      about: "Celebrating the achievements of women in technology and discussing the challenges they face. Panel discussions, mentorship sessions, and networking.",
      focus: "Diversity, empowerment, women in technology",
      expanded: false,
    },
    {
      id: 7,
      name: "Digital Marketing Trends",
      date: "2024-06-22",
      time: "11:00 AM - 4:00 PM",
      about: "Stay ahead of the curve with the latest trends in digital marketing. Interactive sessions on SEO, social media, and content strategy.",
      focus: "Digital marketing, SEO, social media",
      expanded: false,
    },
  ]);

  const toggleEventDetails = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, expanded: !event.expanded } : event
    ));
  };

  return (
    <div className="events-readiness-container">
      <h1>Upcoming Industry Events</h1>
      <div className="events-chart">
        {events.map((event) => (
          <div key={event.id} className={`event ${event.expanded ? 'expanded' : ''}`}>
            <div className="event-details" onClick={() => toggleEventDetails(event.id)}>
              <strong>{event.name}</strong>
              <span>{event.date} | {event.time}</span>
              <button className={`expand-btn ${event.expanded ? 'expanded' : ''}`}>
                {event.expanded ? 'Less Details' : 'More Details'}
              </button>
            </div>
            {event.expanded && (
              <div className="event-extra">
                <p><strong>About:</strong> {event.about}</p>
                <p><strong>Focus:</strong> {event.focus}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsForReadiness;
