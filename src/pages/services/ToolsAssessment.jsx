import React from 'react';
import styled from 'styled-components';
import Section from '../../components/common/Section';
import Card from '../../components/common/Card';
import PageLayout from '../../components/layout/PageLayout';

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[6]};
  }
`;

// const FeatureList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: ${({ theme }) => theme.spacing[4]} 0;
// `;

// const FeatureItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[3]};
//   color: ${({ theme }) => theme.colors.text.secondary};
//   font-size: ${({ theme }) => theme.typography.fontSize.base};
//   margin-bottom: ${({ theme }) => theme.spacing[3]};
  
//   &:before {
//     content: '→';
//     color: ${({ theme }) => theme.colors.primary};
//     font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   }
// `;

const ToolsAssessment = () => {
  const features = [
    {
      title: "Technology Stack Review",
      description: "Comprehensive assessment of your marketing technology infrastructure",
      features: [
        "Tool inventory and audit",
        "Integration analysis",
        "Performance evaluation",
        "Gap identification"
      ],
      glowColor: "#2997FF"
    },
    {
      title: "Process Optimization",
      description: "Streamline your marketing operations for maximum efficiency",
      features: [
        "Workflow analysis",
        "Bottleneck identification",
        "Automation opportunities",
        "Best practices implementation"
      ],
      glowColor: "#FF2D55"
    },
    {
      title: "Actionable Recommendations",
      description: "Detailed roadmap for improving your marketing technology stack",
      features: [
        "Tool consolidation plan",
        "Integration recommendations",
        "Process improvements",
        "ROI optimization"
      ],
      glowColor: "#5856D6"
    }
  ];

  return (
    <PageLayout>
      <Section
        title="Tools & Process Assessment"
        description="With over 8,000 marketing tools available today, it's crucial to assess your tool preparedness. We help you optimize your marketing technology stack for maximum efficiency."
      >
        <ServiceGrid>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              features={feature.features}
              glowColor={feature.glowColor}
            />
          ))}
        </ServiceGrid>
      </Section>

      <Section
        title="Why Choose Our Assessment Services?"
        description="Our expert team brings years of experience in evaluating and optimizing marketing technology stacks across various industries."
      >
        <ServiceGrid>
          <Card
            title="Holistic Approach"
            description="Comprehensive evaluation of your entire marketing technology ecosystem."
            glowColor="#4CD964"
          />
          <Card
            title="Industry Expertise"
            description="Deep understanding of marketing tools and best practices."
            glowColor="#AF52DE"
          />
          <Card
            title="Actionable Insights"
            description="Clear, practical recommendations for improvement and optimization."
            glowColor="#FF9500"
          />
        </ServiceGrid>
      </Section>
    </PageLayout>
  );
};

export default ToolsAssessment; 