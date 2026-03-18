import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ConsultationPage } from './components/ConsultationPage';
import { ThankYouPage } from './components/ThankYouPage';

const publicUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, '/');
};

type PageType = 'consultation' | 'thank-you';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('consultation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (currentPage === 'thank-you') {
    return <ThankYouPage onNavigateHome={() => setCurrentPage('consultation')} />;
  }

  return (
    <div className="min-h-screen bg-white pb-24 lg:pb-0">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="https://clearvisionleader.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src={publicUrl('cv_logo_.png')}
                  alt="Clear Vision Consulting"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://clearvisionleader.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Main Site
              </a>
              <a
                href="mailto:cvadmin@clearvisionleader.com"
                className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-6 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-slate-900"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="https://clearvisionleader.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Main Site
              </a>
              <a
                href="mailto:cvadmin@clearvisionleader.com"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
      <ConsultationPage onNavigateToThankYou={() => setCurrentPage('thank-you')} />

      <button
        onClick={scrollToForm}
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-amber-500 text-slate-900 font-bold text-base py-4 px-6 mx-4 mb-4 rounded-full shadow-lg hover:bg-amber-400 active:bg-amber-600 transition-all duration-200 transform active:scale-95"
        aria-label="Scroll to consultation form"
      >
        Request Consultation
      </button>
    </div>
  );
}

export default App;
