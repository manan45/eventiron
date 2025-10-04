import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import MarketoTraining from './pages/MarketoTraining';
import CampaignOrchestration from './pages/services/CampaignOrchestration';
import DataCompliance from './pages/services/DataCompliance';
import ToolsAssessment from './pages/services/ToolsAssessment';
import ReportingAnalytics from './pages/services/ReportingAnalytics';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '72px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/marketo-training" element={<MarketoTraining />} />
            <Route path="/services/campaign-orchestration" element={<CampaignOrchestration />} />
            <Route path="/services/data-and-compliance-management" element={<DataCompliance />} />
            <Route path="/services/tools-process-assessment" element={<ToolsAssessment />} />
            <Route path="/services/reporting-and-analytics" element={<ReportingAnalytics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
