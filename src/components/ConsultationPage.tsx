import { useState, useEffect } from 'react';
import { Eye, Heart, TrendingUp, Clock, Shield, Lightbulb, CheckCircle, Zap, Award, Star } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ConsultationPageProps {
  onNavigateToThankYou: () => void;
}

export function ConsultationPage({ onNavigateToThankYou }: ConsultationPageProps) {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('consultation-form');
      if (formSection) {
        const formTop = formSection.getBoundingClientRect().top;
        setShowStickyButton(formTop > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {showStickyButton && (
        <button
          onClick={scrollToForm}
          className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-amber-500 text-slate-900 hover:bg-amber-400 px-6 py-4 rounded-full text-base font-semibold transition-colors shadow-lg"
        >
          Request Consultation
        </button>
      )}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Strengthen Your Leadership Without Burning Out
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 text-balance">
              A focused consultation designed to help leaders gain clarity, strengthen systems, and reduce the pressure that often comes with leadership.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Many leaders carry responsibilities that should be supported by systems, protocols, and leadership structure. This consultation helps you pause, evaluate what's working, and identify practical steps to lead with greater clarity and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Request Your Leadership Consultation
              </button>
              <button
                onClick={() => document.getElementById('what-we-explore')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
              >
                Learn What We'll Cover
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            Why Leaders Seek This Consultation
          </h2>
          <p className="text-xl text-gray-700 text-center mb-10">
            Leaders often reach out when they:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Feel overwhelmed by leadership responsibilities</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Want to prevent burnout</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Need stronger operational systems</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Want greater clarity in decision-making</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Want to build leadership structures that support their organization</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-center text-slate-900 mt-8">
            Leadership should be sustainable — not exhausting.
          </p>
        </div>
      </section>

      <section id="what-we-explore" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-4">
            What We Will Explore
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            During the Leadership Clarity Consultation we will explore:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Your Leadership Role</h3>
              <p className="text-gray-700">
                How your responsibilities are currently structured.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pressure Points</h3>
              <p className="text-gray-700">
                Where leadership demands may be creating stress or fatigue.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Systems and Protocols</h3>
              <p className="text-gray-700">
                Whether your organization's systems support you or depend entirely on you.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Opportunities</h3>
              <p className="text-gray-700">
                Practical ways to strengthen your leadership structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            The Clear Vision Framework
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            This consultation is grounded in the Clear Vision leadership philosophy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">See Well</h3>
              <p className="text-gray-300">
                Gain clarity about your leadership role.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Be Well</h3>
              <p className="text-gray-300">
                Protect your energy and prevent burnout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Lead Well</h3>
              <p className="text-gray-300">
                Develop systems and practices that support long-term success.
              </p>
            </div>
          </div>
          <div className="bg-amber-500 bg-opacity-10 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-center">
              At the heart of this approach is the <span className="text-amber-400">Power in the Pause</span> — the principle that leaders must pause long enough to gain clarity before moving forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            What Happens Next
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">
            After requesting your consultation:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <p className="text-gray-700 font-medium">
                Our team reviews your request
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <p className="text-gray-700 font-medium">
                We contact you to schedule your consultation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <p className="text-gray-700 font-medium">
                We meet for a focused leadership conversation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <p className="text-gray-700 font-medium">
                You receive clarity and recommended next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-6">
            Ways to Work With Me
          </h2>
          <p className="text-lg text-gray-700 text-center mb-4 max-w-3xl mx-auto">
            Following your Leadership Clarity Consultation, there are several ways we can continue working together depending on the level of support you need.
          </p>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Each experience is designed to help you strengthen your leadership, reduce burnout, and build systems that allow your organization to run with greater clarity and confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Power in the Pause Leadership Reset
              </h3>
              <p className="text-sm font-semibold text-amber-600 mb-4">
                Short-Term Leadership Reset
              </p>
              <p className="text-gray-700 mb-4 flex-grow">
                A focused coaching experience designed to help leaders gain immediate clarity, identify burnout triggers, and implement initial leadership protocols.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Best for:</p>
                <p className="text-gray-600">
                  Leaders who need clarity and a quick reset.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col border-2 border-amber-500 relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold inline-flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Most Popular
                </span>
              </div>
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Clear Vision Leadership Reset
              </h3>
              <p className="text-sm font-semibold text-amber-600 mb-4">
                90-Day Coaching Experience
              </p>
              <p className="text-gray-700 mb-4 flex-grow">
                A structured leadership transformation experience focused on strengthening leadership systems, improving decision-making, and reducing operational pressure.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Best for:</p>
                <p className="text-gray-600">
                  Leaders ready to build sustainable leadership practices and long-term clarity.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Whole Health Leadership Intensive
              </h3>
              <p className="text-sm font-semibold text-amber-600 mb-4">
                6-Month Coaching Experience
              </p>
              <p className="text-gray-700 mb-4 flex-grow">
                A high-level coaching partnership for leaders who want deep transformation, strategic leadership development, and ongoing support.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Best for:</p>
                <p className="text-gray-600">
                  Executives, founders, and high-impact leaders seeking long-term leadership growth and sustainability.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 mb-8">
            We will discuss the best option for you during your consultation based on your leadership goals and current needs.
          </p>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Request Your Leadership Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-6">
            About Dr. Kennita Williams
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-4">
              Dr. Kennita Williams is a Visionary Leadership Coach, Resilience Expert, and Founder of Clear Vision Consulting®.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              She helps leaders gain clarity, prevent burnout, and build leadership systems that support both personal wellbeing and organizational success.
            </p>
            <p className="text-xl font-semibold text-slate-900 text-center mt-6">
              Her philosophy: <span className="text-amber-600">See Well. Be Well. Lead Well.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Lead With Clarity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're ready to strengthen your leadership and create systems that support sustainable success, request your consultation below.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
          >
            Request Your Leadership Consultation
          </button>
        </div>
      </section>

      <section id="consultation-form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm onSuccess={onNavigateToThankYou} />
        </div>
      </section>
    </div>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
