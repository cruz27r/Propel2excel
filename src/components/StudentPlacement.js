import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './StudentPlacement.css';

ChartJS.register(ArcElement, Tooltip, Legend);

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
          '#0088FE',
          '#00C49F',
          '#FFBB28',
          '#FF8042',
          '#FF6361',
          '#A28FCF'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 15
        }
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

  const infoBlocks = [
    { 
      title: 'Asian',
      details: '12'
    },
    {
      title: 'Hispanic',
      details: '13'
    },
    {
      title: 'Caucasian',
      details: '12'
    },
    {
      title: 'African American',
      details: '26'
    },
    {
      title: 'International',
      details: '9'
    },
    {
      title: 'Multi-Ethnic',
      details: '5'
    }
  ];

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
          '#0088FE',
          '#00C49F',
          '#FFBB28',
          '#FF8042',
          '#FF6361',
          '#A28FCF',
          '#FFA600',
          '#BC5090',
          '#FF5733',
          '#FFD700'
        ],
        borderWidth: 1
      }
    ]
  };

  const options1 = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 15
        }
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

  const infoBlocks1 = [
    {
      title: 'Microsoft',
      details: '13'
    },
    {
      title: 'Capital One',
      details: '1'
    },
    {
      title: 'Google',
      details: '8'
    },
    {
      title: 'Morgan Stanley',
      details: '1'
    },
    {
      title: 'McKinsey & Co.',
      details: '5'
    },
    {
      title: 'Mass General Hospital',
      details: '12'
    },
    {
      title: 'JP Morgan Chase',
      details: '2'
    },
    {
      title: 'Goldman Sachs',
      details: '4'
    },
    {
      title: 'Bank of America',
      details: '3'
    },
    {
      title: 'Citi',
      details: '2'
    },
    {
      title: 'Amazon',
      details: '7'
    },
    {
      title: 'Others',
      details: '5'
    }
  ];

  return (
    <div className="chart-container" ref={sectionRef}>
      <div className={`chart-wrapper ${isInView ? 'roll-in' : ''}`}>
        <h3 className="chart-title">Student Profile</h3>
        <Pie data={data} options={options} />
        {hoveredSegment1 !== null && (
          <div className="hover-info">
            <h3>{infoBlocks[hoveredSegment1].title}</h3>
            <p>{infoBlocks[hoveredSegment1].details}</p>
          </div>
        )}
      </div>
      <div className={`chart-wrapper ${isInView ? 'roll-in' : ''}`}>
        <h3 className="chart-title">P2E Placements</h3>
        <Pie data={data1} options={options1} />
        {hoveredSegment2 !== null && (
          <div className="hover-info1">
            <h3>{infoBlocks1[hoveredSegment2].title}</h3>
            <p>{infoBlocks1[hoveredSegment2].details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPlacement;
