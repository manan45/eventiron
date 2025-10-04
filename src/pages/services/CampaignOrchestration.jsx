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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  
  &:before {
    content: '→';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

const CampaignOrchestration = () => {
  const features = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive campaign strategies aligned with your business objectives",
      features: [
        "Goal setting and KPI definition",
        "Audience segmentation",
        "Channel selection and optimization",
        "Timeline and resource planning"
      ],
      glowColor: "#2997FF"
    },
    {
      title: "Campaign Execution",
      description: "Expert implementation of multi-channel marketing campaigns",
      features: [
        "Content creation and optimization",
        "Automation workflow setup",
        "A/B testing implementation",
        "Real-time monitoring and adjustments"
      ],
      glowColor: "#FF2D55"
    },
    {
      title: "Performance Analysis",
      description: "In-depth analysis and optimization of campaign performance",
      features: [
        "Performance metrics tracking",
        "ROI measurement",
        "Conversion optimization",
        "Actionable insights and recommendations"
      ],
      glowColor: "#5856D6"
    }
  ];

  const shapes = [
    { type: 'sphere', color: '#2997FF', position: { x: -2, y: 1, z: -5 } },
    { type: 'cube', color: '#FF2D55', position: { x: 2, y: -1, z: -5 } }
  ];

  return (
    <PageLayout shapes={shapes}>
      <Section
        title="Campaign Orchestration"
        description="Each company invests tens of thousands of dollars on marketing initiatives. We help streamline your campaign planning and execution for maximum impact and ROI."
        glowColor="#2997FF"
      >
        <ServiceGrid>
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} glowColor={feature.glowColor}>
              <FeatureList>
                {feature.features.map((item, featureIndex) => (
                  <FeatureItem key={featureIndex}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </Card>
          ))}
        </ServiceGrid>
      </Section>

      <Section
        title="Why Choose Our Campaign Orchestration?"
        description="Our expert team brings years of experience in planning and executing successful marketing campaigns across various industries."
        glowColor="#FF2D55"
      >
        <ServiceGrid>
          <Card
            title="Data-Driven Approach"
            description="Make informed decisions based on comprehensive data analysis and market insights."
            glowColor="#4CD964"
          />
          <Card
            title="Seamless Integration"
            description="Integrate your campaigns across multiple channels and platforms for consistent messaging."
            glowColor="#AF52DE"
          />
          <Card
            title="Continuous Optimization"
            description="Regular monitoring and optimization to ensure maximum campaign performance and ROI."
            glowColor="#FF9500"
          />
        </ServiceGrid>
      </Section>
    </PageLayout>
  );
};

export default CampaignOrchestration; 