import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Expertise from '../components/Expertise/Expertise';
import Stats from '../components/Stats/Stats';
import Contact from './Contact';
import LatestArticles from '../components/LatestArticles/LatestArticles';

const HomeContainer = styled(motion.div)`
  position: relative;
`;

const SectionWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[16]};
  }
`;

const Home = () => {
  return (
    <PageLayout>
      <HomeContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <Expertise />
        </SectionWrapper>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
        <SectionWrapper>
          <Stats />
        </SectionWrapper>
        <SectionWrapper>
          <Contact isHomePage={true} />
        </SectionWrapper>
        <SectionWrapper>
          <LatestArticles />
        </SectionWrapper>
      </HomeContainer>
    </PageLayout>
  );
};

export default Home; 