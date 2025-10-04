import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Shape3D from '../components/common/Shape3D';
import PageLayout from '../components/layout/PageLayout';

const AboutContainer = styled(motion.div)`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]} 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[6]};
  }
`;

const ShapeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 600px;
  opacity: 0.1;
  pointer-events: none;
  z-index: -1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
  }
`;

const About = () => {
  const services = [
    {
      title: "Marketing Automation",
      description: "The demand for Marketing automation Platforms is consistently on the rise. In an era where personalized and data-driven marketing is crucial, businesses are seeking advanced automation platforms to stay competitive.",
      glowColor: "#2997FF"
    },
    {
      title: "Data & Compliance Management",
      description: "Any organization's foundation is its data. It has become extremely necessary to regulate how to store, process, and utilize the data.",
      glowColor: "#FF2D55"
    },
    {
      title: "Campaign Orchestration",
      description: "Each company invests tens of thousands of dollars on marketing initiatives. Planning a campaign takes a lot of the marketing managers' time and work.",
      glowColor: "#5856D6"
    },
    {
      title: "Tool & Process Assessment",
      description: "A wonderful technique to assess, gauge & record the preparedness of your various tools is through assessment.",
      glowColor: "#FF9500"
    },
    {
      title: "Martech Integration",
      description: "According to the latest MarTech Landscape released by ChiefMartec, we have over 8,000 Marketing tools available to fulfill the different Marketing needs.",
      glowColor: "#4CD964"
    },
    {
      title: "Reporting & Analytics",
      description: "Any organization's performance is greatly influenced by reporting and analytics. We help you understand how things are going and determine the next steps.",
      glowColor: "#AF52DE"
    }
  ];

  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ShapeContainer>
        <Shape3D type="sphere" color="#2997FF" />
      </ShapeContainer>
      
      <Section
        title="Our Mission At EventIron India"
        description="Our mission is to redefine marketing strategies through the seamless fusion of technology. We endeavor to build an unbreakable bridge between your brand and its audience, leveraging the latest technological advancements to elevate customer experiences, stimulate growth, and optimize returns on investment."
        glowColor="#2997FF"
      />
      
      <Section
        title="Who We Are?"
        description="We are a dynamic collective of skilled professionals who thrive at the intersection of technology and marketing. Our team boasts diverse talents, ranging from visionary digital strategists and creative designers to meticulous data analysts and tech aficionados. With a unified mission, we approach every project comprehensively, embracing challenges and fully dedicated to transforming your marketing dreams into tangible outcomes."
        glowColor="#FF2D55"
      />
      
      <Section title="What do you access?">
        <Grid>
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              glowColor={service.glowColor}
            />
          ))}
        </Grid>
      </Section>
    </AboutContainer>
  );
};

export default About; 