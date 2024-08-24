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
          'rgba(0, 136, 254, 0.8)',
          'rgba(0, 196, 159, 0.8)',
          'rgba(255, 187, 40, 0.8)',
          'rgba(255, 128, 66, 0.8)',
          'rgba(255, 99, 97, 0.8)',
          'rgba(162, 143, 207, 0.8)'
        ],
        hoverBackgroundColor: [
          'rgba(0, 136, 254, 1)',
          'rgba(0, 196, 159, 1)',
          'rgba(255, 187, 40, 1)',
          'rgba(255, 128, 66, 1)',
          'rgba(255, 99, 97, 1)',
          'rgba(162, 143, 207, 1)'
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
          'rgba(0, 136, 254, 0.8)',
          'rgba(0, 196, 159, 0.8)',
          'rgba(255, 187, 40, 0.8)',
          'rgba(255, 128, 66, 0.8)',
          'rgba(255, 99, 97, 0.8)',
          'rgba(162, 143, 207, 0.8)',
          'rgba(255, 166, 0, 0.8)',
          'rgba(188, 80, 144, 0.8)',
          'rgba(255, 87, 51, 0.8)',
          'rgba(255, 215, 0, 0.8)'
        ],
        hoverBackgroundColor: [
          'rgba(0, 136, 254, 1)',
          'rgba(0, 196, 159, 1)',
          'rgba(255, 187, 40, 1)',
          'rgba(255, 128, 66, 1)',
          'rgba(255, 99, 97, 1)',
          'rgba(162, 143, 207, 1)',
          'rgba(255, 166, 0, 1)',
          'rgba(188, 80, 144, 1)',
          'rgba(255, 87, 51, 1)',
          'rgba(255, 215, 0, 1)'
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
