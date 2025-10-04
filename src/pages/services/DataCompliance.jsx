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

const DataCompliance = () => {
  const features = [
    {
      title: "Data Management",
      description: "Comprehensive data management solutions for marketing automation platforms",
      features: [
        "Data quality assessment",
        "Data cleansing and enrichment",
        "Database optimization",
        "Data governance implementation"
      ],
      glowColor: "#2997FF"
    },
    {
      title: "Compliance Framework",
      description: "Ensure adherence to data protection regulations and industry standards",
      features: [
        "GDPR compliance",
        "CCPA compliance",
        "Industry-specific regulations",
        "Privacy policy implementation"
      ],
      glowColor: "#FF2D55"
    },
    {
      title: "Data Security",
      description: "Robust security measures to protect sensitive marketing data",
      features: [
        "Access control management",
        "Data encryption",
        "Security audits",
        "Incident response planning"
      ],
      glowColor: "#5856D6"
    }
  ];

  return (
    <PageLayout>
      <Section
        title="Data & Compliance Management"
        description="In today's digital landscape, data regulation is more critical than ever. We ensure your marketing automation adheres to all necessary compliance frameworks while maintaining data integrity."
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
        title="Why Choose Our Data & Compliance Services?"
        description="Our expert team ensures your marketing data is secure, compliant, and optimized for performance."
      >
        <ServiceGrid>
          <Card
            title="Proactive Compliance"
            description="Stay ahead of regulatory changes with our proactive compliance monitoring and updates."
            glowColor="#4CD964"
          />
          <Card
            title="Data Optimization"
            description="Improve marketing performance with clean, organized, and enriched data."
            glowColor="#AF52DE"
          />
          <Card
            title="Risk Mitigation"
            description="Minimize compliance risks with our comprehensive security measures."
            glowColor="#FF9500"
          />
        </ServiceGrid>
      </Section>
    </PageLayout>
  );
};

export default DataCompliance; 