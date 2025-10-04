import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/common/Section';

const LoadingSpinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.colors.background.card};
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.text.error};
  background: rgba(255, 0, 0, 0.1);
  border-radius: 12px;
  margin: ${({ theme }) => theme.spacing[8]} 0;
`;

const ArticleContainer = styled(motion.article)`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[10]}`};
  background: rgba(255, 255, 255, 0.02);
  border-radius: 32px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(135deg, rgba(255, 149, 0, 0.15), rgba(255, 255, 255, 0.08));
    opacity: 0.6;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[6]}`};
  }
`;

const ArticleHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  position: relative;
  text-align: center;
`;

const ArticleTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #FF9500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  padding-bottom: ${({ theme }) => theme.spacing[10]};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Author = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  display: flex;
  align-items: center;
  
  &::before {
    content: '👤';
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;

const Date = styled.span`
  display: flex;
  align-items: center;
  
  &::before {
    content: '📅';
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;

const ArticleContent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  position: relative;
  z-index: 1;

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin: ${({ theme }) => `${theme.spacing[12]} 0 ${theme.spacing[8]}`};
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    padding-bottom: ${({ theme }) => theme.spacing[4]};
    border-bottom: 2px solid rgba(255, 149, 0, 0.2);
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
    text-align: justify;
    letter-spacing: 0.01em;
  }

  ul {
    margin: ${({ theme }) => `${theme.spacing[8]} 0`};
    padding-left: ${({ theme }) => theme.spacing[10]};
    list-style: none;

    li {
      margin-bottom: ${({ theme }) => theme.spacing[6]};
      position: relative;
      padding-left: ${({ theme }) => theme.spacing[8]};
      font-size: ${({ theme }) => theme.typography.fontSize.lg};

      &::before {
        content: '→';
        color: ${({ theme }) => theme.colors.primary};
        position: absolute;
        left: 0;
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const BackLinkContainer = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.spacing[4]};
  z-index: 10;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 149, 0, 0.05);
    transform: translateX(-3px);
    border-color: rgba(255, 149, 0, 0.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '←';
    margin-right: ${({ theme }) => theme.spacing[3]};
    font-size: 1.2em;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateX(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[8]};
  justify-content: center;
`;

const ShareButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: none;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover {
    background: rgba(255, 149, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EstimatedReadTime = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};

  &::before {
    content: '⏱️';
  }
`;

const TableOfContents = styled.nav`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  border: 1px solid rgba(255, 255, 255, 0.05);

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    
    a {
      color: ${({ theme }) => theme.colors.text.secondary};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const RecommendedSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const RecommendedTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #FF9500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RecommendedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RecommendedCard = styled(Link)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 149, 0, 0.05);
    border-color: rgba(255, 149, 0, 0.1);
  }
`;

const RecommendedCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const RecommendedCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const RecommendedCardExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const articles = {
  'future-of-marketing-automation': {
    title: "The Future of Marketing Automation",
    author: "John Smith",
    date: "March 15, 2024",
    content: `
      <h2>The Evolution of Marketing Technology</h2>
      <p>As we move further into 2024, marketing automation continues to evolve at an unprecedented pace. Artificial Intelligence and Machine Learning are no longer buzzwords but essential components of modern marketing strategies.</p>

      <h2>Key Trends Shaping the Future</h2>
      <ul>
        <li>Predictive Analytics and AI-driven personalization</li>
        <li>Real-time customer journey optimization</li>
        <li>Advanced segmentation capabilities</li>
        <li>Integration of voice and conversational AI</li>
      </ul>

      <h2>Impact on Business Operations</h2>
      <p>The integration of these technologies is transforming how businesses approach their marketing operations. Companies that embrace these changes are seeing significant improvements in customer engagement and ROI.</p>
    `
  },
  'mastering-marketo-advanced-tips': {
    title: "Mastering Marketo: Advanced Tips",
    author: "Sarah Johnson",
    date: "March 10, 2024",
    content: `
      <h2>Advanced Marketo Techniques</h2>
      <p>Mastering Marketo requires understanding its advanced features and capabilities. This guide explores sophisticated techniques that can elevate your marketing automation strategy.</p>

      <h2>Key Strategies for Success</h2>
      <ul>
        <li>Advanced lead scoring implementation</li>
        <li>Custom revenue cycle modeling</li>
        <li>Complex segmentation strategies</li>
        <li>Advanced reporting and analytics</li>
      </ul>

      <h2>Best Practices and Optimization</h2>
      <p>Implementing these advanced techniques requires careful planning and execution. We'll explore the best practices that ensure successful implementation and optimal results.</p>
    `
  },
  'data-privacy-marketing': {
    title: "Data Privacy in Marketing",
    author: "Michael Brown",
    date: "March 5, 2024",
    content: `
      <h2>The Importance of Data Privacy</h2>
      <p>In today's digital age, data privacy has become a critical concern for marketers. Understanding and implementing proper data privacy measures is essential for maintaining trust and compliance.</p>
      
      <h2>Key Privacy Considerations</h2>
      <ul>
        <li>GDPR and CCPA compliance</li>
        <li>Data collection best practices</li>
        <li>Consent management</li>
        <li>Data security measures</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Learn how to implement effective data privacy measures while maintaining marketing effectiveness and building trust with your audience.</p>
    `
  },
  'campaign-optimization-strategies': {
    title: "Campaign Optimization Strategies",
    author: "Emily Davis",
    date: "February 28, 2024",
    content: `
      <h2>Effective Campaign Optimization</h2>
      <p>Optimizing your marketing campaigns is crucial for achieving better ROI and meeting your business objectives. Learn the key strategies for continuous improvement.</p>
      
      <h2>Key Optimization Areas</h2>
      <ul>
        <li>A/B testing methodologies</li>
        <li>Performance metrics analysis</li>
        <li>Audience segmentation</li>
        <li>Content personalization</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Discover how to track and measure the success of your optimization efforts, and how to use these insights for future campaigns.</p>
    `
  },
  'marketing-analytics-deep-dive': {
    title: "Marketing Analytics Deep Dive",
    author: "David Wilson",
    date: "February 20, 2024",
    content: `
      <h2>Understanding Marketing Analytics</h2>
      <p>A comprehensive understanding of marketing analytics is essential for making data-driven decisions and improving campaign performance.</p>
      
      <h2>Key Analytics Metrics</h2>
      <ul>
        <li>Conversion tracking</li>
        <li>Customer journey analysis</li>
        <li>Attribution modeling</li>
        <li>ROI calculation</li>
      </ul>
      
      <h2>Actionable Insights</h2>
      <p>Learn how to turn analytics data into actionable insights that drive business growth and improve marketing effectiveness.</p>
    `
  },
  'integration-best-practices': {
    title: "Integration Best Practices",
    author: "Lisa Anderson",
    date: "February 15, 2024",
    content: `
      <h2>Seamless Tool Integration</h2>
      <p>Effective integration of marketing tools is crucial for creating a streamlined and efficient marketing technology stack.</p>
      
      <h2>Integration Strategies</h2>
      <ul>
        <li>API integration planning</li>
        <li>Data flow optimization</li>
        <li>Tool selection criteria</li>
        <li>Integration testing</li>
      </ul>
      
      <h2>Common Challenges</h2>
      <p>Explore common integration challenges and learn how to overcome them for successful implementation.</p>
    `
  }
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const article = articles[slug];

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!article) {
          throw new Error('Article not found');
        }
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug, article]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article?.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
      default:
        break;
    }
  };

  const getEstimatedReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const extractTableOfContents = (content) => {
    const headings = content.match(/<h2>(.*?)<\/h2>/g) || [];
    return headings.map(heading => {
      const text = heading.replace(/<\/?h2>/g, '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-');
      return { text, id };
    });
  };

  const getRecommendedArticles = (currentSlug, count = 3) => {
    // Get all articles except the current one
    const otherArticles = Object.entries(articles)
      .filter(([slug]) => slug !== currentSlug)
      .map(([slug, article]) => ({
        slug,
        ...article,
        excerpt: article.content
          .replace(/<[^>]*>/g, '')
          .substring(0, 120)
          .trim() + '...'
      }));
    
    // Shuffle array and take first 'count' items
    return otherArticles
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  };

  if (loading) {
    return (
      <PageLayout>
        <Section>
          <BackLinkContainer>
            <BackLink to="/articles">Back to Articles</BackLink>
          </BackLinkContainer>
          <LoadingSpinner
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Section>
      </PageLayout>
    );
  }

  if (error || !article) {
    return (
      <PageLayout>
        <Section>
          <BackLinkContainer>
            <BackLink to="/articles">Back to Articles</BackLink>
          </BackLinkContainer>
          <ErrorMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error || 'Article not found'}
          </ErrorMessage>
        </Section>
      </PageLayout>
    );
  }

  const readTime = getEstimatedReadTime(article.content);
  const tableOfContents = extractTableOfContents(article.content);

  return (
    <PageLayout>
      <Helmet>
        <title>{`${article.title} | EventIron Blog`}</title>
        <meta name="description" content={article.content.substring(0, 160)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Section>
        <BackLinkContainer>
          <BackLink to="/articles">Back to Articles</BackLink>
        </BackLinkContainer>
        <ArticleContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArticleHeader>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleMeta>
              <Author>{article.author}</Author>
              <Date>{article.date}</Date>
            </ArticleMeta>
            <EstimatedReadTime>{readTime} min read</EstimatedReadTime>
          </ArticleHeader>

          <TableOfContents>
            <h3>Table of Contents</h3>
            <ul>
              {tableOfContents.map(({ text, id }) => (
                <li key={id}>
                  <a href={`#${id}`}>{text}</a>
                </li>
              ))}
            </ul>
          </TableOfContents>

          <ArticleContent 
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(
                /<h2>(.*?)<\/h2>/g, 
                (match, content) => `<h2 id="${content.toLowerCase().replace(/\s+/g, '-')}">${content}</h2>`
              )
            }} 
          />

          <ShareButtons>
            <ShareButton onClick={() => handleShare('twitter')}>
              Twitter
            </ShareButton>
            <ShareButton onClick={() => handleShare('linkedin')}>
              LinkedIn
            </ShareButton>
            <ShareButton onClick={() => handleShare('copy')}>
              Copy Link
            </ShareButton>
          </ShareButtons>

          <RecommendedSection>
            <RecommendedTitle>Recommended Articles</RecommendedTitle>
            <RecommendedGrid>
              {getRecommendedArticles(slug).map((recommendedArticle) => (
                <RecommendedCard 
                  key={recommendedArticle.slug}
                  to={`/articles/${recommendedArticle.slug}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <RecommendedCardTitle>{recommendedArticle.title}</RecommendedCardTitle>
                  <RecommendedCardMeta>
                    <span>{recommendedArticle.author}</span>
                    <span>{recommendedArticle.date}</span>
                  </RecommendedCardMeta>
                  <RecommendedCardExcerpt>
                    {recommendedArticle.excerpt}
                  </RecommendedCardExcerpt>
                </RecommendedCard>
              ))}
            </RecommendedGrid>
          </RecommendedSection>
        </ArticleContainer>
      </Section>
    </PageLayout>
  );
};

export default ArticleDetail; 