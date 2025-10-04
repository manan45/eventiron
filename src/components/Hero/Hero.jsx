import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  position: relative;
  height: 300vh;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  z-index: 0;
`;

const ScrollContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300vh;
  z-index: 0;
`;

const ContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  z-index: 0;
  pointer-events: none;
  opacity: 1;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const CarouselSection = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[6]};
  pointer-events: auto;
  position: relative;
  z-index: 0;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.typography.fontSize['6xl']});
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: 0;
  background: linear-gradient(45deg, #0066FF 20%, #FF0000 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  position: relative;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #0066FF 20%, #FF0000 80%);
    border-radius: 2px;
  }
`;

const Subtitle = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: clamp(${({ theme }) => theme.typography.fontSize.lg}, 2vw, ${({ theme }) => theme.typography.fontSize.xl});
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  width: 100%;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 1em;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  width: fit-content;
  z-index: 1;
  pointer-events: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px ${({ theme }) => theme.colors.primary}40;
    
    &::before {
      left: 100%;
    }
  }
`;

const slides = [
  {
    title: "Dive Into The Future of Marketing Automation",
    subtitle: "We create outstanding online interactions that captivate users and draw in their customers. We achieve this by fusing technology, innovation, and data. Our expertise spans across major platforms including Marketing Cloud, Salesforce, Oracle, HubSpot, and more."
  },
  {
    title: "Elevate your business with proven Martech strategies",
    subtitle: [
      "Drive success with data-driven insights that illuminate our path to growth",
      "From vision to reality, we provide complete development support for your marketing goals",
      "Nurture leads strategically, guiding them to conversion for lasting customer relationships",
      "Experience effortless expansion with scalable solutions tailored to your growth",
      "Leverage industry-leading platforms to maximize your marketing potential"
    ]
  },
  {
    title: "Supporting enterprises in developing high-caliber MarTech ecosystems",
    subtitle: "Transform your marketing operations with our comprehensive suite of services and expertise in leading marketing automation platforms. We help you integrate, optimize, and scale your marketing technology stack for maximum impact and ROI."
  }
];

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Main content wrapper animations
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 0.85], [1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.75, 0.85], [1, 1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 0.75, 0.85], [0, 0, 20]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.75, 0.85], [0, 0, 4]);

  // First slide animations
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0]);
  const slide1Y = useTransform(scrollYProgress, [0, 0.2, 0.33], [0, 0, 20]);
  const slide1Scale = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0.95]);
  const slide1Blur = useTransform(scrollYProgress, [0, 0.2, 0.33], [0, 0, 2]);
  const slide1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.33], [0, 0, -1]);
  const slide1TitleY = useTransform(slide1Y, y => y * 0.5);
  const slide1TitleScale = useTransform(slide1Scale, s => 1 + (s - 1) * 0.5);
  const slide1SubtitleY = useTransform(slide1Y, y => y * 0.7);
  const slide1ButtonScale = useTransform(slide1Scale, s => 1 + (s - 1) * 0.3);
  
  // Second slide animations
  const slide2Opacity = useTransform(scrollYProgress, [0.3, 0.33, 0.5, 0.63], [0, 1, 1, 0]);
  const slide2Y = useTransform(scrollYProgress, [0.3, 0.33, 0.5, 0.63], [20, 0, 0, 20]);
  const slide2Scale = useTransform(scrollYProgress, [0.3, 0.33, 0.5, 0.63], [0.95, 1, 1, 0.95]);
  const slide2Blur = useTransform(scrollYProgress, [0.3, 0.33, 0.5, 0.63], [2, 0, 0, 2]);
  const slide2Rotate = useTransform(scrollYProgress, [0.3, 0.33, 0.5, 0.63], [1, 0, 0, 1]);
  const slide2TitleY = useTransform(slide2Y, y => y * 0.5);
  const slide2TitleScale = useTransform(slide2Scale, s => 1 + (s - 1) * 0.5);
  const slide2SubtitleY = useTransform(slide2Y, y => y * 0.7);
  const slide2ButtonScale = useTransform(slide2Scale, s => 1 + (s - 1) * 0.3);
  
  // Third slide animations
  const slide3Opacity = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.85], [0, 1, 1, 0]);
  const slide3Y = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.85], [20, 0, 0, 20]);
  const slide3Scale = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.85], [0.95, 1, 1, 0.95]);
  const slide3Blur = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.85], [2, 0, 0, 2]);
  const slide3Rotate = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.85], [1, 0, 0, 1]);
  const slide3TitleY = useTransform(slide3Y, y => y * 0.5);
  const slide3TitleScale = useTransform(slide3Scale, s => 1 + (s - 1) * 0.5);
  const slide3SubtitleY = useTransform(slide3Y, y => y * 0.7);
  const slide3ButtonScale = useTransform(slide3Scale, s => 1 + (s - 1) * 0.3);

  const transforms = [
    { 
      opacity: slide1Opacity, 
      y: slide1Y, 
      scale: slide1Scale, 
      blur: slide1Blur, 
      rotate: slide1Rotate,
      titleY: slide1TitleY,
      titleScale: slide1TitleScale,
      subtitleY: slide1SubtitleY,
      buttonScale: slide1ButtonScale
    },
    { 
      opacity: slide2Opacity, 
      y: slide2Y, 
      scale: slide2Scale, 
      blur: slide2Blur, 
      rotate: slide2Rotate,
      titleY: slide2TitleY,
      titleScale: slide2TitleScale,
      subtitleY: slide2SubtitleY,
      buttonScale: slide2ButtonScale
    },
    { 
      opacity: slide3Opacity, 
      y: slide3Y, 
      scale: slide3Scale, 
      blur: slide3Blur, 
      rotate: slide3Rotate,
      titleY: slide3TitleY,
      titleScale: slide3TitleScale,
      subtitleY: slide3SubtitleY,
      buttonScale: slide3ButtonScale
    }
  ];

  return (
    <HeroContainer>
      <ScrollContainer ref={containerRef} />
      <ContentWrapper
        style={{
          opacity: contentOpacity,
          y: contentY,
          scale: contentScale,
          filter: `blur(${contentBlur}px)`
        }}
      >
        <div style={{ 
          maxWidth: '1200px', 
          width: '100%', 
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {slides.map((slide, index) => (
            <CarouselSection
              key={index}
              initial={false}
              style={{
                opacity: transforms[index].opacity,
                y: transforms[index].y,
                scale: transforms[index].scale,
                filter: `blur(${transforms[index].blur}px)`,
                rotate: transforms[index].rotate,
                position: 'absolute',
                left: 0,
                right: 0,
                transformOrigin: 'center center',
                pointerEvents: scrollYProgress.get() >= (index * 0.3) && scrollYProgress.get() < ((index + 1) * 0.3) ? 'auto' : 'none'
              }}
            >
              <Title
                style={{
                  opacity: transforms[index].opacity,
                  y: transforms[index].titleY,
                  scale: transforms[index].titleScale
                }}
              >
                {slide.title}
              </Title>
              <Subtitle
                style={{
                  opacity: transforms[index].opacity,
                  y: transforms[index].subtitleY
                }}
              >
                {Array.isArray(slide.subtitle) ? (
                  <ul>
                    {slide.subtitle.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  slide.subtitle
                )}
              </Subtitle>
              <CTAButton
                to="/contact"
                style={{
                  opacity: transforms[index].opacity,
                  scale: transforms[index].buttonScale
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CTAButton>
            </CarouselSection>
          ))}
        </div>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero; 