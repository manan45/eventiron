import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LayoutContainer = styled(motion.main)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background.primary};
  z-index: -2;
`;

const BackgroundGlow = styled.div`
  position: fixed;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at center, ${({ theme }) => theme.colors.accent.primary}15 0%, transparent 70%);
  filter: blur(100px);
  opacity: 0.5;
  z-index: -1;
  pointer-events: none;
  
  &.top {
    top: -30%;
    right: -30%;
  }
  
  &.bottom {
    bottom: -30%;
    left: -30%;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const PageLayout = ({ children }) => {
  return (
    <LayoutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundGradient />
      <BackgroundGlow className="top" />
      <BackgroundGlow className="bottom" />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default PageLayout; 