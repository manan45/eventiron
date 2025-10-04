import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/common/Section';
import { FaUserCircle, FaEnvelope, FaBuilding, FaGlobe, FaCommentAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const HomePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  width: 100%;
`;

const ContactSection = styled.div`
  padding: ${({ theme }) => theme.spacing[8]} 0;
  overflow: hidden;
  position: relative;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[12]};
  margin-top: ${({ theme, $isHomePage }) => $isHomePage ? '0' : theme.spacing[8]};
  position: relative;
  align-items: stretch;
  min-height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const AddressBlock = styled.div`
  padding: ${({ theme }) => theme.spacing[8]};
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, ${({ theme }) => theme.colors.primary}15, transparent 70%);
    pointer-events: none;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.text.primary}, ${({ theme }) => theme.colors.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    line-height: 1.6;
    position: relative;
  }
`;

const AddressList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  position: relative;
`;

const AddressItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[4]};
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    .icon {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .icon {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.text.secondary};
    flex-shrink: 0;
    padding: 6px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    transition: color 0.3s ease;
    line-height: 1.6;
    flex-grow: 1;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing[8]};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at bottom left, ${({ theme }) => theme.colors.primary}15, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  position: relative;
  z-index: 2;

  .input-icon {
    position: absolute;
    left: ${({ theme }) => theme.spacing[3]};
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 3;
  }

  input:focus ~ .input-icon,
  textarea:focus ~ .input-icon {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-50%) scale(1.05);
  }

  input, textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[12]};
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}15;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 0.5;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
    padding-left: ${({ theme }) => theme.spacing[3]};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => `${theme.colors.primary}dd`});
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: auto;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}40;

    &::before {
      opacity: 1;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(76, 217, 100, 0.1);
  border: 1px solid rgba(76, 217, 100, 0.2);
  backdrop-filter: blur(10px);
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  z-index: 100;

  svg {
    width: 20px;
    height: 20px;
    color: #4CD964;
  }
`;

const Contact = ({ isHomePage = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      country: '',
      message: ''
    });
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const content = (
    <ContactSection>
      <ContactGrid $isHomePage={isHomePage}>
        <AddressBlock>
          <h2>Get In Touch</h2>
          <p>We create outstanding online interactions that captivate users and draw in their customers. We achieve this by fusing technology, innovation, and data.</p>
          <AddressList>
            <AddressItem>
              <div className="icon">
                <FaEnvelope />
              </div>
              <a href="mailto:info@eventiron.com">info@eventiron.com</a>
            </AddressItem>
            <AddressItem>
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <a href="https://maps.app.goo.gl/UKK8rgLikLGmgWE18">
                1241, Tower B, iThum Tower, Plot no. A, 40, Block A,<br />
                Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
              </a>
            </AddressItem>
          </AddressList>
        </AddressBlock>

        <FormContainer onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <div className="input-icon">
                <FaUserCircle />
              </div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <div className="input-icon">
                <FaUserCircle />
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <div className="input-icon">
                <FaBuilding />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                required
              />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <div className="input-icon">
              <FaGlobe />
            </div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </FormGroup>
          <FormGroup>
            <div className="input-icon" style={{ transform: 'translateY(10px)' }}>
              <FaCommentAlt />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message Here..."
              required
            />
          </FormGroup>
          <SubmitButton type="submit">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              Send Message
              <FaPaperPlane />
            </span>
          </SubmitButton>
        </FormContainer>
      </ContactGrid>

      <AnimatePresence>
        {showSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Message sent successfully!
          </SuccessMessage>
        )}
      </AnimatePresence>
    </ContactSection>
  );

  if (isHomePage) {
    return <HomePageContainer>{content}</HomePageContainer>;
  }

  return (
    <PageLayout>
      <Section
        title="Contact Us"
        description="Have a question or need assistance? We're here to help! Reach out to our team for expert guidance on marketing automation solutions."
      >
        {content}
      </Section>
    </PageLayout>
  );
};

export default Contact; 