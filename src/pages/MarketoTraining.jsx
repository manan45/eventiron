import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import PageLayout from '../components/layout/PageLayout';

const TrainingGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};
`;

const MarketoTraining = () => {
  const trainingModules = [
    {
      title: "Fundamentals of Marketo",
      description: "Master the basics of Marketo's marketing automation platform",
      features: [
        "Platform navigation and setup",
        "Email marketing essentials",
        "Landing page creation",
        "Form building and management",
        "Lead scoring fundamentals"
      ],
      glowColor: "#FF6B6B"
    },
    {
      title: "Advanced Automation",
      description: "Learn advanced automation techniques and campaign strategies",
      features: [
        "Smart campaigns and triggers",
        "Complex segmentation",
        "Advanced personalization",
        "A/B testing strategies",
        "Revenue cycle modeling"
      ],
      glowColor: "#4ECDC4"
    },
    {
      title: "Analytics & Reporting",
      description: "Understand Marketo's reporting capabilities and analytics",
      features: [
        "ROI measurement",
        "Campaign performance analysis",
        "Custom report creation",
        "Revenue attribution",
        "Performance optimization"
      ],
      glowColor: "#45B7D1"
    }
  ];

  const additionalFeatures = [
    {
      title: "Hands-on Practice",
      description: "Real-world scenarios and practical exercises",
      features: [
        "Interactive workshops",
        "Real campaign creation",
        "Problem-solving exercises",
        "Best practices implementation",
        "Custom use cases"
      ],
      glowColor: "#96CEB4"
    },
    {
      title: "Certification Prep",
      description: "Prepare for Marketo certification exams",
      features: [
        "Exam preparation materials",
        "Practice questions",
        "Study guides",
        "Mock exams",
        "Certification tips"
      ],
      glowColor: "#D4A5A5"
    },
    {
      title: "Ongoing Support",
      description: "Continuous learning and support resources",
      features: [
        "Q&A sessions",
        "Resource library",
        "Community access",
        "Regular updates",
        "Expert consultation"
      ],
      glowColor: "#9B5DE5"
    }
  ];

  return (
    <PageLayout>
      <Section
        title="Marketo Training Programs"
        description="Comprehensive training programs designed to help you master Marketo's marketing automation platform. From fundamentals to advanced techniques, our courses cover everything you need to succeed."
      >
        <TrainingGrid>
          {trainingModules.map((module, index) => (
            <Card
              key={index}
              title={module.title}
              description={module.description}
              features={module.features}
              glowColor={module.glowColor}
            />
          ))}
        </TrainingGrid>
      </Section>

      <Section
        title="Additional Features"
        description="Enhance your learning experience with our comprehensive support system and practical resources."
      >
        <TrainingGrid>
          {additionalFeatures.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              glowColor={feature.glowColor}
            />
          ))}
        </TrainingGrid>
      </Section>
    </PageLayout>
  );
};

export default MarketoTraining; 