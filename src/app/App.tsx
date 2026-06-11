import { useEffect, useRef, useState } from 'react';
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
import { AIDeveloperCenterCaseStudy } from './components/AIDeveloperCenterCaseStudy';
import { OwnerSlideReorder } from './components/OwnerSlideReorder';

type CaseStudyPage = 'app-creation' | 'policy' | 'taxonomy' | 'claims' | 'ai-developer-center';
type Page = 'home' | CaseStudyPage;
type HomeSection = 'hero' | 'about' | 'skills' | 'portfolio' | 'contact';
type UrlUpdateMode = 'push' | 'replace';

const caseStudyPages: CaseStudyPage[] = ['app-creation', 'policy', 'taxonomy', 'claims', 'ai-developer-center'];
const homeSections: HomeSection[] = ['hero', 'about', 'skills', 'portfolio', 'contact'];

const getHash = () => window.location.hash || '#home';

const getPageFromHash = (hash: string): Page => {
  const cleanHash = hash.replace(/^#\/?/, '');
  const caseStudySlug = cleanHash.replace(/^case-studies\//, '');

  if (caseStudyPages.includes(caseStudySlug as CaseStudyPage)) {
    return caseStudySlug as CaseStudyPage;
  }

  return 'home';
};

const getSectionFromHash = (hash: string): HomeSection => {
  const cleanHash = hash.replace(/^#\/?/, '');

  if (homeSections.includes(cleanHash as HomeSection)) {
    return cleanHash as HomeSection;
  }

  return 'hero';
};

const getCaseStudyHash = (page: CaseStudyPage) => `#case-studies/${page}`;
const getSectionHash = (section: HomeSection) => (section === 'hero' ? '#home' : `#${section}`);

export default function App() {
  const [locationHash, setLocationHash] = useState(getHash);
  const currentPage = getPageFromHash(locationHash);
  const pendingScrollBehavior = useRef<ScrollBehavior>('auto');
  const scrollTrackingPaused = useRef(false);
  const scrollTrackingTimer = useRef<number | undefined>(undefined);
  const ownerSlideReorderEnabled = import.meta.env.DEV && new URLSearchParams(window.location.search).get('owner') === 'slides';

  const pauseScrollTracking = () => {
    scrollTrackingPaused.current = true;

    if (scrollTrackingTimer.current) {
      window.clearTimeout(scrollTrackingTimer.current);
    }

    scrollTrackingTimer.current = window.setTimeout(() => {
      scrollTrackingPaused.current = false;
    }, 2500);
  };

  const updateUrlHash = (nextHash: string, mode: UrlUpdateMode = 'push', behavior: ScrollBehavior = 'smooth') => {
    pendingScrollBehavior.current = behavior;

    if (mode === 'push') {
      pauseScrollTracking();
    }

    if (window.location.hash === nextHash) {
      setLocationHash(nextHash);
      return;
    }

    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;

    if (mode === 'replace') {
      window.history.replaceState(null, '', nextUrl);
    } else {
      window.history.pushState(null, '', nextUrl);
    }

    setLocationHash(nextHash);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      pendingScrollBehavior.current = 'auto';
      setLocationHash(getHash());
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    const behavior = pendingScrollBehavior.current;

    if (currentPage !== 'home') {
      document.title = `Liz Bevan | ${currentPage.replaceAll('-', ' ')}`;
      window.setTimeout(() => window.scrollTo({ top: 0, behavior }), 0);
      return;
    }

    document.title = 'Liz Bevan | Content Designer';
    const section = getSectionFromHash(locationHash);

    window.setTimeout(() => {
      if (section === 'hero') {
        window.scrollTo({ top: 0, behavior });
        return;
      }

      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior, block: 'start' });
    }, 0);
  }, [currentPage, locationHash]);

  useEffect(() => {
    if (currentPage !== 'home') {
      return;
    }

    const sectionElements = homeSections
      .map((section) => document.getElementById(section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topVisibleSection = visibleEntries[0]?.target.id as HomeSection | undefined;

        if (!topVisibleSection || scrollTrackingPaused.current) {
          return;
        }

        const nextHash = getSectionHash(topVisibleSection);

        if (window.location.hash !== nextHash) {
          updateUrlHash(nextHash, 'replace', 'auto');
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.05, 0.25, 0.5]
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentPage]);

  if (ownerSlideReorderEnabled) {
    return <OwnerSlideReorder />;
  }

  const handleProjectClick = (projectId: string) => {
    if (caseStudyPages.includes(projectId as CaseStudyPage)) {
      updateUrlHash(getCaseStudyHash(projectId as CaseStudyPage));
    }
  };

  const handleSectionNavigation = (section: HomeSection) => {
    updateUrlHash(getSectionHash(section));
  };

  const handleBackToHome = () => {
    updateUrlHash('#portfolio', 'push', 'auto');
  };

  if (currentPage === 'app-creation') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleSectionNavigation} />
        <AppCreationCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'policy') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleSectionNavigation} />
        <DesigningComplianceCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'taxonomy') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleSectionNavigation} />
        <TaxonomyCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'claims') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleSectionNavigation} />
        <MakingClaimsEasierCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'ai-developer-center') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleSectionNavigation} />
        <AIDeveloperCenterCaseStudy onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleSectionNavigation} />
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
