import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';

const Container = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[20]} 0;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.text.primary}, 
    ${({ theme }) => theme.colors.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}40`};
  }
`;

const NotFound = () => {
  return (
    <Section>
      <Container
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>404</Title>
        <Subtitle>Oops! Page not found</Subtitle>
        <HomeButton to="/">Back to Home</HomeButton>
      </Container>
    </Section>
  );
};

export default NotFound; 