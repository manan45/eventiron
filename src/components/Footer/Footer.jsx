import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const FooterContainer = styled.footer`
  background: rgba(10, 15, 28, 0.95);
  padding: ${({ theme }) => theme.spacing[16]} 0 ${({ theme }) => theme.spacing[8]};
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[8]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const FooterColumn = styled(motion.div)`
  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 40px;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const AchievementsSection = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    text-align: center;
  }

  .swiper {
    padding: ${({ theme }) => theme.spacing[4]} 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }
`;

const AchievementImage = styled(motion.img)`
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
`;

const CompanyInfo = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text.primary}, ${({ theme }) => theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  position: relative;
  z-index: 2;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 16px;
    padding: 8px 0;
    display: block;
    position: relative;
    z-index: 2;
    pointer-events: all;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 149, 0, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Copyright = styled(motion.div)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Newsletter = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NewsletterButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => `${theme.colors.primary}dd`});
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 149, 0, 0.2);
  }
`;

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const achievements = [
    {
      id: 1,
      image: 'https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/08/alogo5-1.png',
      alt: 'Achievement 1'
    },
    {
      id: 2,
      image: 'https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/08/alogo4.png',
      alt: 'Achievement 2'
    },
    {
      id: 3,
      image: 'https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/08/alogo3.png',
      alt: 'Achievement 3'
    },
    {
      id: 4,
      image: 'https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/08/alogo2.png',
      alt: 'Achievement 4'
    },
    {
      id: 5,
      image: 'https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/08/alogo1.png',
      alt: 'Achievement 5'
    }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo to="/" onClick={handleLinkClick}>
              <img src="https://staging-f7bd-eventiron.wpcomstaging.com/wp-content/uploads/2023/10/eventiron-logo-no-background.png" alt="EventIron" />
            </Logo>
            <CompanyInfo>
              <p>
                Our team is a marketing automation industry leader with decades of experience.
              </p>
              <SocialLinks>
                <SocialLink 
                  href="https://www.linkedin.com/company/eventiron/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </CompanyInfo>
          </FooterColumn>

          <FooterColumn
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Our Services</h3>
            <FooterLinks>
              <FooterLink>
                <Link to="/services/marketing-automation" onClick={handleLinkClick}>Marketing Automation</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services/campaign-orchestration" onClick={handleLinkClick}>Campaign Orchestration</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services/data-and-compliance-management" onClick={handleLinkClick}>Data & Compliance Management</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services/tools-process-assessment" onClick={handleLinkClick}>Tools & Process Assessment</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/services/reporting-and-analytics" onClick={handleLinkClick}>Reporting and Analytics</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Contact Us</h3>
            <FooterLinks>
              <FooterLink>
                <a href="mailto:sales@eventiron.com">sales@eventiron.com</a>
              </FooterLink>
              <FooterLink>
                <a href="https://maps.app.goo.gl/UKK8rgLikLGmgWE18" target="_blank" rel="noopener noreferrer">
                  1241, Tower B, iThum Tower,<br />
                  Plot no. A, 40, Block A,<br />
                  Industrial Area, Sector 62,<br />
                  Noida, Uttar Pradesh 201301
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>More Info</h3>
            <FooterLinks>
              <FooterLink>
                <Link to="/marketo-training" onClick={handleLinkClick}>Marketo Training</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/articles" onClick={handleLinkClick}>Articles</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>

        <AchievementsSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3>Achievements:</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.id}>
                <AchievementImage
                  src={achievement.image}
                  alt={achievement.alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </AchievementsSection>

        <Copyright
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          © {new Date().getFullYear()} EventIron India Pvt. Ltd. | <Link to="/privacy-policy" onClick={handleLinkClick}>Privacy Policy</Link> | <Link to="/terms" onClick={handleLinkClick}>Terms of Service</Link>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 