import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const ArticlesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => `rgba(255, 255, 255, 0.1)`};
`;

const Author = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: left;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: right;
`;

const ArticleExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: ${({ theme }) => `${theme.spacing[3]} 0`};
  flex-grow: 1;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[4]};
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  transition: all 0.3s ease;
  border-radius: 4px;
  background: ${({ theme }) => `rgba(255, 149, 0, 0.1)`};

  &:hover {
    background: ${({ theme }) => `rgba(255, 149, 0, 0.2)`};
    transform: translateY(-1px);
  }

  &::after {
    content: '→';
    margin-left: ${({ theme }) => theme.spacing[2]};
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;

const articles = [
  {
    id: 1,
    title: "The Future of Marketing Automation",
    author: "John Smith",
    date: "March 15, 2024",
    excerpt: "Explore how AI and machine learning are revolutionizing marketing automation and what it means for businesses.",
    slug: "future-of-marketing-automation"
  },
  {
    id: 2,
    title: "Mastering Marketo: Advanced Tips",
    author: "Sarah Johnson",
    date: "March 10, 2024",
    excerpt: "Take your Marketo skills to the next level with these advanced techniques and best practices.",
    slug: "mastering-marketo-advanced-tips"
  },
  {
    id: 3,
    title: "Data Privacy in Marketing",
    author: "Michael Brown",
    date: "March 5, 2024",
    excerpt: "Learn about the importance of data privacy in marketing and how to ensure compliance while maintaining effectiveness.",
    slug: "data-privacy-marketing"
  },
  {
    id: 4,
    title: "Campaign Optimization Strategies",
    author: "Emily Davis",
    date: "February 28, 2024",
    excerpt: "Discover proven strategies to optimize your marketing campaigns for better ROI and engagement.",
    slug: "campaign-optimization-strategies"
  },
  {
    id: 5,
    title: "Marketing Analytics Deep Dive",
    author: "David Wilson",
    date: "February 20, 2024",
    excerpt: "A comprehensive guide to understanding and leveraging marketing analytics for better decision making.",
    slug: "marketing-analytics-deep-dive"
  },
  {
    id: 6,
    title: "Integration Best Practices",
    author: "Lisa Anderson",
    date: "February 15, 2024",
    excerpt: "Best practices for integrating various marketing tools and creating an efficient marketing stack.",
    slug: "integration-best-practices"
  }
];

const Articles = () => {
  return (
    <PageLayout>
      <Section
        title="Latest Articles"
        description="Stay up to date with the latest trends and insights in marketing automation."
      >
        <ArticlesGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={
                <ArticleContent>
                  <ArticleMeta>
                    <Author>{article.author}</Author>
                    <Date>{article.date}</Date>
                  </ArticleMeta>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ReadMoreContainer>
                    <ReadMoreLink to={`/articles/${article.slug}`}>
                      Read More
                    </ReadMoreLink>
                  </ReadMoreContainer>
                </ArticleContent>
              }
              glowColor="#FF9500"
            />
          ))}
        </ArticlesGrid>
      </Section>
    </PageLayout>
  );
};

export default Articles; 