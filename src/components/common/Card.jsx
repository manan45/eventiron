import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => `linear-gradient(145deg, ${theme.colors.background.secondary}, ${theme.colors.background.primary})`};
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing[8]};
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center center;
  height: 100%;
  cursor: ${({ isClickable }) => isClickable ? 'pointer' : 'default'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary}, 
      ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 0.5)` : `${theme.colors.primary}50`} 70%,
      transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  @media (hover: hover) {
    &:hover {
      transform: ${({ isClickable }) => isClickable ? 'translateY(-8px)' : 'none'};
      box-shadow: ${({ isClickable, glowColor }) => isClickable ? `
        0 20px 40px -15px rgba(0, 0, 0, 0.15),
        0 0 20px 0 rgba(${glowColor}, 0.2)
      ` : '0 4px 20px rgba(0, 0, 0, 0.1)'};
      
      &::before {
        transform: scaleX(1);
      }
    }
  }
`;

const ExploreButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[4]};
  transition: all 0.3s ease;

  span {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
  }

  svg {
    font-size: 1.2em;
    transition: transform 0.3s ease;
  }

  ${CardContainer}:hover & {
    transform: translateX(8px);
    
    span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.text.primary}, 
    ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    transform: translateY(-2px);
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.7;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: translateY(-2px);
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary};
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    transform: translateY(-2px) scale(1.1);
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  transition: transform 0.3s ease;

  @media (hover: hover) {
    a:hover &, a:focus & {
      transform: translateY(-2px);
    }
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:before {
    content: '→';
    color: ${({ theme, glowColor }) => glowColor ? `rgba(${glowColor}, 1)` : theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    transition: transform 0.3s ease;
  }

  @media (hover: hover) {
    a:hover &, a:focus & {
      opacity: 1;
      transform: translateX(4px);
      
      &:before {
        transform: translateX(-2px);
      }
    }
  }
`;

const Card = ({ title, description, features = [], glowColor, icon: Icon, isService = false, children }) => {
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 255, 255';
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <CardContainer
      glowColor={hexToRgb(glowColor)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      isClickable={isService}
    >
      <motion.div 
        variants={contentVariants}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {Icon && (
          <IconContainer glowColor={hexToRgb(glowColor)}>
            <Icon />
          </IconContainer>
        )}
        <Title glowColor={hexToRgb(glowColor)}>{title}</Title>
        {description && <Description>{description}</Description>}
        {isService ? (
          <ExploreButton glowColor={hexToRgb(glowColor)}>
            <span>Explore More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </ExploreButton>
        ) : (
          <>
            {features && features.length > 0 && (
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem 
                    key={index}
                    as={motion.li}
                    variants={contentVariants}
                    glowColor={hexToRgb(glowColor)}
                  >
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            )}
            {children}
          </>
        )}
      </motion.div>
    </CardContainer>
  );
};

export default Card; 