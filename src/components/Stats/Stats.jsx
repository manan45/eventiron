import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const FounderSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.default};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const TeamColumn = styled.div`
  flex: 1;
  max-width: 33.333%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const ContentColumn = styled.div`
  flex: 2;
  max-width: 66.666%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const TeamCard = styled(motion.div)`
  position: relative;
  text-align: center;
`;

const SocialLinks = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  gap: 10px;

  a {
    color: white;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      transform: translateY(-3px);
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  i {
    font-size: inherit;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    ${SocialLinks} {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const BrokenCircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

const ProfileImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const CertificationLogos = styled.img`
  max-width: 100%;
  height: auto;
`;

const Stats = () => {
  return (
    <FounderSection>
      <Container>
        <TeamColumn>
          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageWrapper>
              <BrokenCircle src="/assets/images/team/broken-circle.svg" alt="decorative circle" />
              <ProfileImage src="https://i0.wp.com/eventiron.com/wp-content/uploads/2023/08/ceo.png?ssl=1" alt="Amit Jain" />
              <SocialLinks>
                <a href="https://www.linkedin.com/in/amitjainmaexpert/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <i className="bx bxl-linkedin" aria-hidden="true"></i>
                </a>
              </SocialLinks>
            </ImageWrapper>
            <h4>Amit Jain</h4>
            <p>Co-founder & CEO​</p>
          </TeamCard>
        </TeamColumn>

        <ContentColumn>
          <Title>Meet Our <span>Founder</span></Title>
          <Description>
            A passionate marketing automation consultant. He is 2x Marketo Champion, Marketo Certified Expert, and Eloqua B2B Master certified. He enjoys finding ways to use processes and technology to work more efficiently while being customer-centric. In his 11 years of diversified experience, he has helped 35+ companies set up/optimize their MAP. He loves to explore ways to "Automate the Automation" which encourages him to keep exploring and learning something new daily.
          </Description>
          <CertificationLogos src="https://i0.wp.com/eventiron.com/wp-content/uploads/2023/08/ceologo.png?fit=827%2C122&ssl=1" alt="Certifications" />
        </ContentColumn>
      </Container>
    </FounderSection>
  );
};

export default Stats; 