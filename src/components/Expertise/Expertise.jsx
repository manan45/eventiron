import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineSupport, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineClock, HiOutlineLightBulb, HiOutlineCheckCircle } from 'react-icons/hi';

const ExpertiseSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    pointer-events: none;
  }

  &::before {
    top: -50%;
    left: -20%;a
    width: 140%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => `${theme.colors.primary}10`} 0%,
      transparent 50%
    );
    filter: blur(80px);
    transform: rotate(-12deg);
  }

  &::after {
    top: 20%;
    right: -20%;
    width: 60%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => `${theme.colors.primary}08`} 0%,
      transparent 60%
    );
    filter: blur(60px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.typography.fontSize['5xl']});
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.text.primary}, 
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.text.primary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s ease-in-out infinite;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-shadow: 0 0 30px ${({ theme }) => `${theme.colors.primary}40`};
  letter-spacing: -0.02em;

  @keyframes shine {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
`;

const ContentWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
  background: ${({ theme }) => `linear-gradient(145deg, 
    ${theme.colors.background.secondary}08,
    ${theme.colors.background.primary},
    ${theme.colors.background.secondary}05
  )`};
  border-radius: 32px;
  padding: 2rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px ${({ theme }) => `${theme.colors.primary}08`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  backdrop-filter: blur(12px);
  isolation: isolate;
  overflow: hidden;
`;

const BackgroundSVG = styled(motion.div)`
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 30px ${({ theme }) => `${theme.colors.primary}50`});
  }

  .orbital-path {
    stroke: ${({ theme }) => `${theme.colors.primary}30`};
    stroke-width: 1;
    fill: none;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: dash 3s ease-in-out forwards;
  }

  .orbital-circle {
    fill: ${({ theme }) => theme.colors.primary};
    animation: pulse 2s ease-in-out infinite;
  }

  .center-circle {
    fill: ${({ theme }) => theme.colors.primary};
    animation: glow 2s ease-in-out infinite;
  }

  .line {
    stroke: ${({ theme }) => `${theme.colors.primary}40`};
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: dash 2s ease-in-out forwards;
  }

  .gradient-circle {
    stop-color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  @keyframes glow {
    0%, 100% { 
      filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.primary}); 
      transform: scale(1);
    }
    50% { 
      filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.primary}); 
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    opacity: 0.1;
    width: 400px;
    height: 400px;
    right: -20%;
  }
`;

const SVGGraphic = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" className="gradient-circle" stopOpacity="0.2" />
        <stop offset="100%" className="gradient-circle" stopOpacity="0" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background Glow */}
    <circle cx="200" cy="200" r="150" fill="url(#centerGlow)" />

    {/* Orbital Paths */}
    <g transform="rotate(0 200 200)">
      <circle cx="200" cy="200" r="150" className="orbital-path" opacity="0.2" />
      <circle cx="200" cy="50" r="6" className="orbital-circle" filter="url(#glow)" />
    </g>
    <g transform="rotate(60 200 200)">
      <circle cx="200" cy="200" r="120" className="orbital-path" opacity="0.3" />
      <circle cx="200" cy="80" r="8" className="orbital-circle" filter="url(#glow)" />
    </g>
    <g transform="rotate(120 200 200)">
      <circle cx="200" cy="200" r="90" className="orbital-path" opacity="0.4" />
      <circle cx="200" cy="110" r="10" className="orbital-circle" filter="url(#glow)" />
    </g>

    {/* Central Elements */}
    <circle cx="200" cy="200" r="25" className="center-circle" filter="url(#glow)" />
    
    {/* Connecting Lines */}
    <g opacity="0.6">
      <line x1="200" y1="175" x2="200" y2="125" className="line" strokeWidth="2" />
      <line x1="225" y1="200" x2="275" y2="200" className="line" strokeWidth="2" />
      <line x1="200" y1="225" x2="200" y2="275" className="line" strokeWidth="2" />
      <line x1="175" y1="200" x2="125" y2="200" className="line" strokeWidth="2" />
    </g>

    {/* Decorative Dots */}
    <g className="orbital-circle" filter="url(#glow)">
      <circle cx="200" cy="125" r="4" />
      <circle cx="275" cy="200" r="4" />
      <circle cx="200" cy="275" r="4" />
      <circle cx="125" cy="200" r="4" />
    </g>

    {/* Additional Orbital Elements */}
    <g transform="rotate(30 200 200)">
      <path d="M 150 200 Q 200 150 250 200" fill="none" className="orbital-path" opacity="0.3" />
    </g>
    <g transform="rotate(210 200 200)">
      <path d="M 150 200 Q 200 250 250 200" fill="none" className="orbital-path" opacity="0.3" />
    </g>
  </svg>
);

const ExpertiseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const ListItem = styled(motion.li)`
  position: relative;
  background: ${({ theme }) => `linear-gradient(145deg, ${theme.colors.background.secondary}, ${theme.colors.background.primary})`};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center center;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => `${theme.colors.primary}50`} 70%,
      transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 
        0 20px 40px -15px rgba(0, 0, 0, 0.15),
        0 0 20px 0 ${({ theme }) => `${theme.colors.primary}20`};
      
      &::before {
        transform: scaleX(1);
      }
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(0.98) translateY(2px);
    }
  }
`;

const ItemIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    filter: drop-shadow(0 0 8px ${({ theme }) => `${theme.colors.primary}40`});
  }

  @media (hover: hover) {
    ${ListItem}:hover & {
      transform: scale(1.1);
    }
  }
`;

const ItemText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.text.primary}, 
    ${({ theme }) => theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  display: block;
  line-height: 1.2;

  @media (hover: hover) {
    ${ListItem}:hover & {
      transform: translateY(-2px);
    }
  }
`;

const Expertise = () => {
  const expertiseItems = [
    { title: 'Empowering Clients', icon: HiOutlineSparkles },
    { title: 'Maximising Platform Potential', icon: HiOutlineLightningBolt },
    { title: 'Guidance and Assistance', icon: HiOutlineSupport },
    { title: 'Delivering Tangible Values', icon: HiOutlineChartBar },
    { title: 'Collaborative Excellence', icon: HiOutlineUserGroup },
    { title: '24x7 Support', icon: HiOutlineClock },
    { title: 'Creative Solutions', icon: HiOutlineLightBulb },
    { title: 'Claims of duty or the obligations', icon: HiOutlineCheckCircle }
  ];

  return (
    <ExpertiseSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Excel With Us
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We are helping our customers to win everyday by getting most out of their Marketing Automation Platforms.
        </SectionSubtitle>
        
        <ContentWrapper>
          <BackgroundSVG
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SVGGraphic />
          </BackgroundSVG>
          
          <ExpertiseList>
            {expertiseItems.map((item, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05 
                }}
              >
                <ItemIcon>
                  <item.icon />
                </ItemIcon>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.05 + 0.1
                  }}
                >
                  <ItemText>{item.title}</ItemText>
                </motion.div>
              </ListItem>
            ))}
          </ExpertiseList>
        </ContentWrapper>

        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are a team of varied experience in Martech with Combined decades of Experience
        </SectionSubtitle>
      </Container>
    </ExpertiseSection>
  );
};

export default Expertise; 