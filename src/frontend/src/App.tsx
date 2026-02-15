import { useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'products' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const navigateTo = (page: Page, category?: string) => {
    setCurrentPage(page);
    if (category) {
      setCategoryFilter(category);
    } else {
      setCategoryFilter(null);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'products':
        return <ProductsPage initialCategory={categoryFilter} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">{renderPage()}</main>
      <SiteFooter />
    </div>
  );
}

export default App;
