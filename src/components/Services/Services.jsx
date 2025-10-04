import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaRobot, FaShieldAlt, FaBullhorn, FaTools, FaPlug, FaChartLine } from 'react-icons/fa';
import Section from '../common/Section';
import Card from '../common/Card';

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.typography.fontSize['5xl']});
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.text.primary}, 
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.text.primary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s ease-in-out infinite;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-shadow: 0 0 30px ${({ theme }) => `${theme.colors.primary}40`};
  letter-spacing: -0.02em;

  @keyframes shine {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Description = styled(motion.p)`
  text-align: center;
  max-width: 900px;
  margin: 2rem auto;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
    margin-top: ${({ theme }) => theme.spacing[8]};
  }
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
  
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const ContactBanner = styled(motion.div)`
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.background.primary}
  );
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing[12]};
  margin-top: ${({ theme }) => theme.spacing[16]};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: ${({ theme }) => `${theme.colors.primary}10`};
    border-radius: 50%;
  }

  &::before {
    top: -100px;
    left: -100px;
  }

  &::after {
    bottom: -100px;
    right: -100px;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}40`};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`;

const services = [
  {
    title: 'Marketing Automation',
    description: 'The demand for Marketing automation Platforms is consistently on the rise. In an era where personalized and data-driven marketing is crucial, businesses are seeking advanced automation platforms to stay competitive.',
    features: ['Campaign Management', 'Lead Nurturing', 'Email Marketing', 'Analytics & Reporting'],
    link: '/services/marketing-automation',
    glowColor: '#FF9500',
    icon: FaRobot
  },
  {
    title: 'Data & Compliance Management',
    description: 'Any organization\'s foundation is its data. It has become extremely necessary to regulate how to store, process, and utilize the data.',
    features: ['Data Privacy', 'GDPR Compliance', 'Data Security', 'Audit Trails'],
    link: '/services/data-and-compliance-management',
    glowColor: '#00B4D8',
    icon: FaShieldAlt
  },
  {
    title: 'Campaign Orchestration',
    description: 'Each company invests tens of thousands of dollars on marketing initiatives. Planning a campaign takes a lot of the marketing managers\' time and work.',
    features: ['Strategy Development', 'Content Planning', 'Channel Integration', 'Performance Tracking'],
    link: '/services/campaign-orchestration',
    glowColor: '#4CAF50',
    icon: FaBullhorn
  },
  {
    title: 'Tools & Process Assessment',
    description: 'A wonderful technique to assess, gauge & record the preparedness of your various tools is through assessment.',
    features: ['Tech Stack Review', 'Process Optimization', 'Integration Analysis', 'ROI Assessment'],
    link: '/services/tools-process-assessment',
    glowColor: '#9C27B0',
    icon: FaTools
  },
  {
    title: 'Martech Integration',
    description: 'According to the latest MarTech Landscape released by ChiefMartec, we have over 8,000 Marketing tools available to fulfill the different Marketing needs.',
    features: ['Tool Selection', 'System Integration', 'Workflow Automation', 'Training & Support'],
    link: '/services/martech-integration',
    glowColor: '#F44336',
    icon: FaPlug
  },
  {
    title: 'Reporting & Analytics',
    description: 'Any organization\'s performance is greatly influenced by reporting and analytics. How things are going and determine.',
    features: ['Custom Dashboards', 'KPI Tracking', 'Data Visualization', 'Insights Generation'],
    link: '/services/reporting-and-analytics',
    glowColor: '#2196F3',
    icon: FaChartLine
  }
];

const Services = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Section>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span>Services</span>
      </SectionTitle>
      
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        EventIron offers a comprehensive array of services tailored to enhance your marketing endeavors. Our proficiency extends from aligning sales and marketing endeavors to propel revenue growth, to meticulous data management that ensures compliance while driving revenue and ROI.
      </Description>

      <ServicesGrid
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service) => (
          <ServiceLink 
            key={service.title} 
            to={service.link}
            onClick={handleServiceClick}
          >
            <Card
              title={service.title}
              description={service.description}
              features={service.features}
              glowColor={service.glowColor}
              icon={service.icon}
              isService={true}
            />
          </ServiceLink>
        ))}
      </ServicesGrid>
      
      <ContactBanner
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Do You Need Any <span>Marketing Automation Services?</span></h3>
        <p>We create outstanding online interactions that captivate users and draw in their customers. We achieve this by fusing technology, innovation, and data.</p>
        <ContactButton to="/contact" onClick={handleContactClick}>Contact Us</ContactButton>
      </ContactBanner>
    </Section>
  );
};

export default Services; 