import { useState, FormEvent, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Mic,
  Users,
  Target,
  Sunrise,
  CheckCircle,
  Phone,
  Mail,
  Plus,
  Minus,
} from 'lucide-react';
import { ConsultationPage } from './components/ConsultationPage';
import { ThankYouPage } from './components/ThankYouPage';
import { AssessmentPage } from './components/AssessmentPage';

const publicUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, '/');
};

type PageType = 'home' | 'consultation' | 'thank-you' | 'assessment';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const services = [
    {
      icon: Mic,
      title: 'Signature Keynotes',
      description:
        'Inspiring, actionable presentations that challenge leaders to pause, recalibrate, and lead from wholeness. Dr. Kay combines research, story, and the P3 Method® to deliver messages that move audiences from burnout to breakthrough.',
      idealFor: [
        'Conferences and annual meetings',
        'Leadership summits',
        'Organizational kick-offs',
      ],
    },
    {
      icon: Users,
      title: 'Workshops & Team Intensives',
      description:
        "Interactive, hands-on sessions designed to equip teams with practical tools for decision-making, stress management, and sustainable leadership. Workshops are fully customizable to your organization's needs.",
      idealFor: [
        'Executive teams and boards',
        'Department-wide training',
        'Leadership development programs',
      ],
    },
    {
      icon: Target,
      title: 'Executive / Leadership Coaching',
      description:
        'Building strong leadership systems while protecting your energy is key to long-term success. When leaders intentionally pause, evaluate what\'s working, and create clear protocols, the business or organization begins to run with greater clarity and less pressure on the leader. Clear Vision Consulting provides executive and leadership coaching designed to help leaders strengthen their leadership capacity, prevent burnout, and develop systems that support sustainable success. Our leadership philosophy is simple: See Well. Be Well. Lead Well. Through the Leadership Clarity Consultation, leaders can explore short-term reset support, a 90-day coaching experience, or a deeper long-term leadership intensive.',
      idealFor: [
        'C-suite executives',
        'Emerging leaders',
        'Leaders in transition or facing burnout',
      ],
      linkText: 'Schedule a Leadership Clarity Consultation',
      linkAction: 'consultation',
    },
    {
      icon: Sunrise,
      title: 'Retreats & Leadership Renewal',
      description:
        'Immersive experiences that combine strategic planning, team alignment, and personal restoration. These retreats create space for leaders to pause, reconnect with their purpose, and chart a clear path forward.',
      idealFor: [
        'Leadership teams needing reset',
        'Organizations in transition',
        'Groups seeking clarity and cohesion',
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Dr. Kay's clarity framework changed how we lead under pressure.",
      author: 'Chief Operations Officer',
      org: 'Healthcare System',
    },
    {
      quote: 'The pause helped our team regain focus and direction.',
      author: 'Director of Strategic Initiatives',
      org: 'Nonprofit Organization',
    },
    {
      quote: 'Practical, powerful, and immediately applicable.',
      author: 'Executive Director',
      org: 'Education Network',
    },
  ];

  const faqs = [
    {
      question: 'What types of organizations do you work with?',
      answer:
        "Clear Vision Consulting serves a wide range of sectors including corporate, healthcare, military, education, nonprofit, faith-based, and community organizations. If you carry responsibility for others and want to lead from wholeness, this work is for you.",
    },
    {
      question: 'Do you customize keynotes and workshops?',
      answer:
        "Absolutely. Every engagement is tailored to your organization's unique culture, challenges, and goals. Dr. Kay works closely with you to ensure the content resonates and delivers real impact.",
    },
    {
      question: 'What is the typical length for workshops or intensives?',
      answer:
        "Workshops typically range from 90 minutes to full-day intensives. Multi-day retreats and leadership renewal experiences are also available. We'll work with you to design the format that best serves your team.",
    },
    {
      question: 'Do you offer virtual options?',
      answer:
        'Yes. Dr. Kay offers both in-person and virtual keynotes, workshops, and coaching. Virtual sessions are highly interactive and designed to maintain engagement and impact.',
    },
    {
      question: 'How do we book Dr. Kay?',
      answer:
        "Simply reach out via the contact form below, email cvadmin@clearvisionleader.com, or call +1 (850) 499-3261. We'll schedule a consultation to discuss your needs and create a customized proposal.",
    },
  ];

  if (currentPage === 'assessment') {
    return (
      <AssessmentPage
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateToConsultation={() => setCurrentPage('consultation')}
      />
    );
  }

  if (currentPage === 'consultation') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a
                  href="https://clearvisionleader.com"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src={publicUrl('cv_logo_.png')}
                    alt="Clear Vision Consulting"
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <a
                  href="https://clearvisionleader.com/small-groups/"
                  className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Small Groups
                </a>
                <a
                  href="https://claritycollection.clearvisionleader.com/"
                  className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Clarity Collection
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1"
                >
                  CV Academy (Coming Soon)
                  <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded font-semibold">
                    NEW
                  </span>
                </a>

                <div className="relative">
                  <button
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1"
                  >
                    More
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {moreDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                      <a
                        href="https://clearvisionleader.com/news/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                      >
                        News
                      </a>
                      <a
                        href="https://clearvisionleader.com/books/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                      >
                        Books
                      </a>
                      <a
                        href="https://clearvisionleader.com/contact-us/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                      >
                        Contact
                      </a>
                      <a
                        href="https://clearvisionleader.com/about-us/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                      >
                        About
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setCurrentPage('assessment')}
                  className="ml-4 bg-amber-500 text-slate-900 hover:bg-amber-400 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                >
                  Power in the Pause™ Assessment
                </button>
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
                <button
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                  className="block w-full text-left text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </button>
                <a
                  href="https://clearvisionleader.com/small-groups/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  Small Groups
                </a>
                <a
                  href="https://claritycollection.clearvisionleader.com/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  Clarity Collection
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  CV Academy (Coming Soon){' '}
                  <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded font-semibold ml-1">
                    NEW
                  </span>
                </a>
                <a
                  href="https://clearvisionleader.com/news/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  News
                </a>
                <a
                  href="https://clearvisionleader.com/books/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  Books
                </a>
                <a
                  href="https://clearvisionleader.com/contact-us/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
                <a
                  href="https://clearvisionleader.com/about-us/"
                  className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <button
                  onClick={() => { setCurrentPage('assessment'); setMobileMenuOpen(false); }}
                  className="w-full text-left bg-amber-500 text-slate-900 hover:bg-amber-400 px-3 py-2 rounded-md text-base font-semibold mt-2"
                >
                  Power in the Pause™ Assessment
                </button>
              </div>
            </div>
          )}
        </nav>
        <ConsultationPage onNavigateToThankYou={() => setCurrentPage('thank-you')} />
      </div>
    );
  }

  if (currentPage === 'thank-you') {
    return <ThankYouPage onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="https://clearvisionleader.com"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src={publicUrl('cv_logo_.png')}
                  alt="Clear Vision Consulting"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <a
                href="https://clearvisionleader.com/small-groups/"
                className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Small Groups
              </a>
              <a
                href="https://claritycollection.clearvisionleader.com/"
                className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Clarity Collection
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                CV Academy (Coming Soon)
                <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded font-semibold">
                  NEW
                </span>
              </a>

              <div className="relative">
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className="text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1"
                >
                  More
                  <ChevronDown className="w-4 h-4" />
                </button>
                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                    <a
                      href="https://clearvisionleader.com/news/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                    >
                      News
                    </a>
                    <a
                      href="https://clearvisionleader.com/books/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                    >
                      Books
                    </a>
                    <a
                      href="https://clearvisionleader.com/contact-us/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                    >
                      Contact
                    </a>
                    <a
                      href="https://clearvisionleader.com/about-us/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                    >
                      About
                    </a>
                  </div>
                )}
              </div>

              <button
                onClick={() => setCurrentPage('assessment')}
                className="ml-4 bg-amber-500 text-slate-900 hover:bg-amber-400 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Power in the Pause™ Assessment
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
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
              <button
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </button>
              <a
                href="https://clearvisionleader.com/small-groups/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Small Groups
              </a>
              <a
                href="https://claritycollection.clearvisionleader.com/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Clarity Collection
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                CV Academy (Coming Soon){' '}
                <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded font-semibold ml-1">
                  NEW
                </span>
              </a>
              <a
                href="https://clearvisionleader.com/news/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                News
              </a>
              <a
                href="https://clearvisionleader.com/books/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Books
              </a>
              <a
                href="https://clearvisionleader.com/contact-us/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <a
                href="https://clearvisionleader.com/about-us/"
                className="block text-gray-700 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <button
                onClick={() => { setCurrentPage('assessment'); setMobileMenuOpen(false); }}
                className="w-full text-left bg-amber-500 text-slate-900 hover:bg-amber-400 px-3 py-2 rounded-md text-base font-semibold mt-2"
              >
                Power in the Pause™ Assessment
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="bg-slate-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Services That Bring Clarity, Wholeness, and Forward Movement
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 text-balance">
              Clear Vision Consulting equips overwhelmed leaders and
              organizations to reduce burnout, strengthen decision-making, and
              lead from wholeness using the proven P3 Method®.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="#contact"
                className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Book Dr. Kay
              </a>
              <a
                href={publicUrl('speaker-kit-dr-kay.pdf')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Download Speaker Kit (PDF)
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Trusted by leaders across healthcare, military, education,
              nonprofit, and corporate teams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            How We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Ideal for:
                    </p>
                    <ul className="space-y-1">
                      {service.idealFor.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-amber-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {(service as any).linkAction === 'consultation' ? (
                    <button
                      onClick={() => setCurrentPage('consultation')}
                      className="text-amber-600 hover:text-amber-700 text-sm font-medium inline-flex items-center"
                    >
                      {(service as any).linkText || 'Inquire about this'} →
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      className="text-amber-600 hover:text-amber-700 text-sm font-medium inline-flex items-center"
                    >
                      Inquire about this →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-4">
            The P3 Method®
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            A proven framework for leaders who need to interrupt burnout,
            recalibrate their priorities, and lead with clarity and confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">PAUSE</h3>
              <p className="text-gray-700">
                Interrupt burnout patterns and gain awareness of what&apos;s truly
                happening in your leadership and life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">PLAN</h3>
              <p className="text-gray-700">
                Create clarity, alignment, and a strategic roadmap for
                sustainable forward movement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                PROCEED
              </h3>
              <p className="text-gray-700">
                Execute your plan with intention, sustainable rhythms, and
                ongoing accountability.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-slate-900 text-center italic">
              "Leaders don't need more pressure — they need a practiced Pause."
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">
                    Corporate & nonprofit executives
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">Healthcare leaders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">
                    Military / high-stakes teams
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">
                    Educators & administrators
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">
                    Faith-based & community leaders
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">
                    Emerging leaders and leadership pipelines
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-gray-300 text-center">
            If you carry responsibility for others, this is for you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            What You Can Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Clear next-step plan
                </h3>
                <p className="text-gray-700">
                  Leave with a concrete roadmap for the next 30-90 days.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Practical tools
                </h3>
                <p className="text-gray-700">
                  Gain strategies for decision-making and energy protection.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Stronger culture
                </h3>
                <p className="text-gray-700">
                  Build healthier communication rhythms and team dynamics.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Renewed clarity
                </h3>
                <p className="text-gray-700">
                  Regain leadership confidence and forward momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            What Leaders Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <p className="text-gray-800 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <Minus className="w-5 h-5 text-amber-500 flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-amber-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Ready to Bring Clear Vision to Your Organization?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Let's start a conversation about how Clear Vision Consulting can
            serve your team.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="tel:+18504993261"
              className="bg-slate-800 rounded-lg p-6 flex items-center hover:bg-slate-700 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Call us</p>
                <p className="text-lg font-semibold">+1 (850) 499-3261</p>
              </div>
            </a>
            <a
              href="mailto:cvadmin@clearvisionleader.com"
              className="bg-slate-800 rounded-lg p-6 flex items-center hover:bg-slate-700 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email us</p>
                <p className="text-lg font-semibold break-all">
                  cvadmin@clearvisionleader.com
                </p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-900 mb-2">
                  Thank you for your inquiry!
                </h4>
                <p className="text-green-800">
                  We&apos;ll be in touch with you shortly to discuss how we can serve
                  your organization.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    What are you interested in?{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="keynote">Signature Keynote</option>
                    <option value="workshop">Workshop or Team Intensive</option>
                    <option value="coaching">
                      Executive / Leadership Coaching
                    </option>
                    <option value="retreat">
                      Retreat & Leadership Renewal
                    </option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your needs, timeline, and any questions you have..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Clear Vision Consulting. All rights reserved. | Pause.
              Plan. Proceed.® is a registered trademark.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
