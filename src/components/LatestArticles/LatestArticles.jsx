import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import { FaRegCalendarAlt } from 'react-icons/fa';

const ArticlesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BlogImage = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;

  &:hover {
    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 0.4;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    );
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.8) contrast(1.1);
`;

const Date = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  left: ${({ theme }) => theme.spacing[4]};
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border-radius: 25px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
  z-index: 1;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  ${BlogImage}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1em;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-left: ${({ theme }) => theme.spacing[1]};
  }
`;

const BlogMeta = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9em;

  li:last-child {
    margin-left: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const BlogTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;

  &:hover {
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
    title: "Driving Growth Through Marketing and Sales Alignment: A Comprehensive Guide",
    author: "eventiron01",
    date: "1 October",
    year: "2024",
    image: "https://i0.wp.com/eventiron.com/wp-content/uploads/2024/10/Marketing_sales-1.jpg?resize=881%2C881&ssl=1",
    slug: "driving-growth-through-marketing-and-sales-alignment-a-comprehensive-guide",
    comments: 0
  },
  {
    id: 2,
    title: "Tracking Omnichannel Performance: A Comprehensive Guide for Modern Marketers",
    author: "eventiron01",
    date: "1 October",
    year: "2024",
    image: "https://i0.wp.com/eventiron.com/wp-content/uploads/2024/10/Tracking_omnichannel.png?resize=512%2C512&ssl=1",
    slug: "tracking-omnichannel-performance-a-comprehensive-guide-for-modern-marketers",
    comments: 0
  },
  {
    id: 3,
    title: "The Road to Successful Marketing Operations: A Comprehensive Guide",
    author: "eventiron01",
    date: "30 September",
    year: "2024",
    image: "https://i0.wp.com/eventiron.com/wp-content/uploads/2024/09/Marketing_operations_blog.png?resize=512%2C512&ssl=1",
    slug: "the-road-to-successful-marketing-operations-a-comprehensive-guide",
    comments: 0
  }
];

const LatestArticles = () => {
  return (
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
          <div key={article.id}>
            <BlogImage>
              <Image src={article.image} alt={article.title} />
              <Date>
                <FaRegCalendarAlt />
                {article.date}<span>{article.year}</span>
              </Date>
            </BlogImage>
            <BlogMeta>
              <li><a href={`/author/${article.author}`}>{article.author}</a></li>
              <li><a href={`/${article.slug}#respond`}>Comments ({article.comments})</a></li>
            </BlogMeta>
            <BlogTitle>
              <a href={`/${article.slug}`}>{article.title}</a>
            </BlogTitle>
          </div>
        ))}
      </ArticlesGrid>
      <ViewAllLink to="/articles">
        View All Articles
      </ViewAllLink>
    </Section>
  );
};

export default LatestArticles; 