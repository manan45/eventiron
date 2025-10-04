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

const ReportingAnalytics = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics solutions for data-driven decision making",
      features: [
        "Custom dashboard creation",
        "KPI tracking and analysis",
        "Performance monitoring",
        "Trend identification"
      ],
      glowColor: "#2997FF"
    },
    {
      title: "Custom Reporting",
      description: "Tailored reporting solutions to meet your specific needs",
      features: [
        "Report automation",
        "Data visualization",
        "Cross-channel reporting",
        "Real-time updates"
      ],
      glowColor: "#FF2D55"
    },
    {
      title: "Performance Optimization",
      description: "Continuous improvement through data analysis and insights",
      features: [
        "A/B testing analysis",
        "Conversion optimization",
        "ROI tracking",
        "Recommendations"
      ],
      glowColor: "#5856D6"
    }
  ];

  const additionalFeatures = [
    {
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources for comprehensive insights",
      features: [
        "Multi-source integration",
        "Data synchronization",
        "Real-time processing",
        "Custom connectors"
      ],
      glowColor: "#4CD964"
    },
    {
      title: "Actionable Intelligence",
      description: "Transform complex data into clear, actionable insights",
      features: [
        "Pattern recognition",
        "Predictive analytics",
        "Strategic recommendations",
        "Performance forecasting"
      ],
      glowColor: "#AF52DE"
    },
    {
      title: "Continuous Improvement",
      description: "Regular optimization based on data-driven insights and analysis",
      features: [
        "Performance monitoring",
        "Iterative optimization",
        "Success metrics",
        "Growth strategies"
      ],
      glowColor: "#FF9500"
    }
  ];

  return (
    <PageLayout>
      <Section
        title="Reporting & Analytics"
        description="Reporting and analytics influence organizational performance. We help you transform raw data into actionable insights for better decision-making."
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
        title="Why Choose Our Analytics Services?"
        description="Our expert team helps you unlock the full potential of your marketing data through advanced analytics and reporting solutions."
      >
        <ServiceGrid>
          {additionalFeatures.map((feature, index) => (
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
    </PageLayout>
  );
};

export default ReportingAnalytics; 