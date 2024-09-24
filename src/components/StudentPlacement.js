import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import './StudentPlacement.css';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const StudentPlacement = () => {
  const [hoveredSegment1, setHoveredSegment1] = useState(null);
  const [hoveredSegment2, setHoveredSegment2] = useState(null);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const data = {
    labels: [
      'Asian',
      'Hispanic',
      'Caucasian',
      'African American',
      'International',
      'Multi-Ethnic'
    ],
    datasets: [
      {
        label: '# of Students',
        data: [12, 13, 12, 26, 9, 5],
        backgroundColor: [
          'rgba(173, 216, 230, 0.8)',  // LightBlue
          'rgba(135, 206, 235, 0.8)',  // SkyBlue
          'rgba(100, 149, 237, 0.8)',  // CornflowerBlue
          'rgba(65, 105, 225, 0.8)',   // RoyalBlue
          'rgba(0, 0, 200, 0.8)',  // Muted Blue
          'rgba(0, 0, 139, 0.8)'       // DarkBlue
        ],
        hoverBackgroundColor: [
          'rgba(173, 216, 230, 1)',    // LightBlue
          'rgba(135, 206, 235, 1)',    // SkyBlue
          'rgba(100, 149, 237, 1)',    // CornflowerBlue
          'rgba(65, 105, 225, 1)',     // RoyalBlue
          'rgba(0, 0, 200, 0.8)',  // Muted Blue
          'rgba(0, 0, 139, 1)'         // DarkBlue
        ],
        borderWidth: 0, // Removed the border
        barPercentage: 0.8, // Adjust bar thickness
        barThickness: 30, // Specific bar thickness
        categoryPercentage: 0.5, // Adjust space between bars
        borderRadius: 0, // Removed border radius
      }
    ]
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        beginAtZero: true
      }
    },
    elements: {
      bar: {
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(0, 136, 254, 1)');
          gradient.addColorStop(1, 'rgba(0, 136, 254, 0.6)');
          return gradient;
        },
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        setHoveredSegment1(index);
      } else {
        setHoveredSegment1(null);
      }
    }
  };

  const data1 = {
    labels: [
      'Microsoft',
      'Capital One',
      'Google',
      'Morgan Stanley',
      'McKinsey & Co.',
      'Mass General Hospital',
      'JP Morgan Chase',
      'Goldman Sachs',
      'Bank of America',
      'Citi',
      'Amazon',
      'Others'
    ],
    datasets: [
      {
        label: '# of Students',
        data: [13, 1, 8, 1, 5, 12, 2, 4, 3, 2, 7, 5],
        backgroundColor: [
          'rgba(240, 240, 255, 0.8)',  // GhostWhite
          'rgba(230, 230, 250, 0.8)',  // Lavender
          'rgba(216, 191, 216, 0.8)',  // Thistle
          'rgba(186, 85, 211, 0.8)',   // MediumOrchid
          'rgba(147, 112, 219, 0.8)',  // MediumPurple
          'rgba(138, 43, 226, 0.8)',   // BlueViolet
          'rgba(148, 0, 211, 0.8)',    // DarkViolet
          'rgba(128, 0, 128, 0.8)',    // Purple
          'rgba(106, 90, 205, 0.8)',   // SlateBlue
          'rgba(75, 0, 130, 0.8)',     // Indigo
          'rgba(72, 61, 139, 0.8)',    // DarkSlateBlue
          'rgba(54, 54, 117, 0.8)'     // Twilight
        ],
        hoverBackgroundColor: [
          'rgba(240, 240, 255, 1)',    // GhostWhite
          'rgba(230, 230, 250, 1)',    // Lavender
          'rgba(216, 191, 216, 1)',    // Thistle
          'rgba(186, 85, 211, 1)',     // MediumOrchid
          'rgba(147, 112, 219, 1)',    // MediumPurple
          'rgba(138, 43, 226, 1)',     // BlueViolet
          'rgba(148, 0, 211, 1)',      // DarkViolet
          'rgba(128, 0, 128, 1)',      // Purple
          'rgba(106, 90, 205, 1)',     // SlateBlue
          'rgba(75, 0, 130, 1)',       // Indigo
          'rgba(72, 61, 139, 1)',      // DarkSlateBlue
          'rgba(54, 54, 117, 1)'       // Twilight
        ],        
        borderWidth: 0, 
        barPercentage: 0.8, 
        barThickness: 30,
        categoryPercentage: 0.5,
        borderRadius: 0, 
      }
    ]
  };

  const options1 = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        beginAtZero: true
      }
    },
    elements: {
      bar: {
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(0, 136, 254, 1)');
          gradient.addColorStop(1, 'rgba(0, 136, 254, 0.6)');
          return gradient;
        },
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        setHoveredSegment2(index);
      } else {
        setHoveredSegment2(null);
      }
    }
  };

  return (
    <div className="chart-container" ref={sectionRef}>
      <div className={`chart-wrapper ${isInView ? 'roll-in' : ''}`}>
        <h3 className="chart-title">Student Profile</h3>
        <Bar data={data} options={options} />
      </div>
      <div className={`chart-wrapper ${isInView ? 'roll-in' : ''}`}>
        <h3 className="chart-title">P2E Placements</h3>
        <Bar data={data1} options={options1} />
      </div>
    </div>
  );
};

export default StudentPlacement;
