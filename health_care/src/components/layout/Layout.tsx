import { ReactNode } from 'react';
import { DisclaimerBanner } from './DisclaimerBanner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onOpenSearch?: () => void;
}

export function Layout({ children, onOpenSearch }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white transition-colors duration-200">
      <DisclaimerBanner />
      <Navbar onOpenSearch={onOpenSearch} />
      <main className="flex-1 focus:outline-none" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

