import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Page = 'home' | 'products' | 'about' | 'contact';

interface SiteHeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function SiteHeader({ currentPage, onNavigate }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'products', label: 'Products' },
    { page: 'about', label: 'About' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src="/assets/generated/mobi-digital-logo.dim_512x512.png"
            alt="mobi digital"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold tracking-tight">mobi digital</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.page}
              variant={currentPage === item.page ? 'default' : 'ghost'}
              onClick={() => handleNavClick(item.page)}
              className="font-medium"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Button
                key={item.page}
                variant={currentPage === item.page ? 'default' : 'ghost'}
                onClick={() => handleNavClick(item.page)}
                className="w-full justify-start font-medium"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
