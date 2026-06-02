import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AppCreationCaseStudy } from './components/AppCreationCaseStudy';
import { DesigningComplianceCaseStudy } from './components/DesigningComplianceCaseStudy';
import { TaxonomyCaseStudy } from './components/TaxonomyCaseStudy';
import { MakingClaimsEasierCaseStudy } from './components/MakingClaimsEasierCaseStudy';

type Page = 'home' | 'app-creation' | 'policy' | 'taxonomy' | 'claims';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleProjectClick = (projectId: string) => {
    if (projectId === 'app-creation') {
      setCurrentPage('app-creation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (projectId === 'policy') {
      setCurrentPage('policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (projectId === 'taxonomy') {
      setCurrentPage('taxonomy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (projectId === 'claims') {
      setCurrentPage('claims');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'app-creation') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleBackToHome} />
        <AppCreationCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'policy') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleBackToHome} />
        <DesigningComplianceCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'taxonomy') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleBackToHome} />
        <TaxonomyCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'claims') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleBackToHome} />
        <MakingClaimsEasierCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
