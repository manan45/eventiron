import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 15, 28, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: rgb(10, 15, 28);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 32px;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.text.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const ServicesButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    transition: transform 0.3s ease;
    ${({ $isOpen }) => $isOpen && 'transform: rotate(180deg);'}
  }
`;

const ServicesDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  background: rgba(10, 15, 28, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing[2]};
  min-width: 260px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
`;

const DropdownLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  z-index: 999;
  background: rgb(10, 15, 28);
  padding-top: 80px;
  overflow-y: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -10px 0 30px -10px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 280px;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.03);
    padding-left: ${({ theme }) => theme.spacing[8]};
  }

  &.active {
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(10, 15, 28, 0.7)',
      height: '80px',
    },
    scrolled: {
      backgroundColor: 'rgba(10, 15, 28, 0.95)',
      height: '72px',
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.34, 1.56, 0.64, 1],
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { 
      x: 50,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <HeaderContainer
      variants={headerVariants}
      animate={scrolled ? 'scrolled' : 'top'}
    >
      <Nav>
        <Logo to="/">
          <img 
            src="https://i0.wp.com/eventiron.com/wp-content/uploads/2023/10/cropped-event.png?fit=299%2C74&ssl=1"
            alt="EventIron"
            width="299"
            height="74"
          />
        </Logo>
        
        <NavLinks>
          <NavLink to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
            About Us
          </NavLink>
          
          <div style={{ position: 'relative' }}>
            <ServicesButton
              $isOpen={isServicesOpen}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ServicesButton>

            <AnimatePresence>
              {isServicesOpen && (
                <ServicesDropdown
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <DropdownLink to="/services/campaign-orchestration">
                    Campaign Orchestration
                  </DropdownLink>
                  <DropdownLink to="/services/data-and-compliance-management">
                    Data & Compliance
                  </DropdownLink>
                  <DropdownLink to="/tools-process-assessment">
                    Tools Assessment
                  </DropdownLink>
                  <DropdownLink to="/reporting-and-analytics">
                    Reporting & Analytics
                  </DropdownLink>
                </ServicesDropdown>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/marketo-training" className={location.pathname === '/marketo-training' ? 'active' : ''}>
            Marketo Training
          </NavLink>
          
          <NavLink to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>
            Articles
          </NavLink>
          
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={isMobileMenuOpen 
                ? "M18 6L6 18M6 6L18 18" 
                : "M4 6H20M4 12H20M4 18H20"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/about-us">
                  About Us
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/services/campaign-orchestration">
                  Campaign Orchestration
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/services/data-and-compliance-management">
                  Data & Compliance
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/tools-process-assessment">
                  Tools Assessment
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/reporting-and-analytics">
                  Reporting & Analytics
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/marketo-training">
                  Marketo Training
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/articles">
                  Articles
                </MobileNavLink>
              </motion.div>
              <motion.div variants={mobileNavItemVariants}>
                <MobileNavLink to="/contact">
                  Contact
                </MobileNavLink>
              </motion.div>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 