import { useState, useEffect } from 'react';
import { Eye, Heart, TrendingUp, ArrowLeft, ArrowRight, CheckCircle, Pause, ClipboardList, Play } from 'lucide-react';
import {
  assessmentSections,
  responseOptions,
  calculateResults,
  P3Results,
} from '../data/assessmentData';
import { LeadCaptureForm } from './LeadCaptureForm';
import { submitAssessmentToFormspree } from '../lib/formspree';

interface AssessmentPageProps {
  onNavigateHome: () => void;
  onNavigateToConsultation: () => void;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
}

export function AssessmentPage({
  onNavigateHome,
  onNavigateToConsultation,
}: AssessmentPageProps) {
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [started, setStarted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<P3Results | null>(null);
  const [isSubmittingResults, setIsSubmittingResults] = useState(false);

  const currentSection = assessmentSections[currentSectionIndex];
  const isLastSection = currentSectionIndex === assessmentSections.length - 1;
  const allQuestionsAnswered = currentSection?.questions.every(
    (q) => responses[q.id] !== undefined
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex]);

  const handleResponse = (questionId: string, value: number) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = async () => {
    if (isLastSection) {
      const calculatedResults = calculateResults(responses);
      setResults(calculatedResults);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (leadInfo) {
        setIsSubmittingResults(true);
        const success = await submitAssessmentToFormspree({
          name: leadInfo.name,
          email: leadInfo.email,
          phone: leadInfo.phone,
          pauseScore: calculatedResults.pauseScore,
          planScore: calculatedResults.planScore,
          proceedScore: calculatedResults.proceedScore,
          totalScore: calculatedResults.totalScore,
          profileTitle: calculatedResults.profileTitle,
          profileDescription: calculatedResults.profileDescription,
          prescription: calculatedResults.prescription,
          pauseInsight: calculatedResults.pauseInsight,
          planInsight: calculatedResults.planInsight,
          proceedInsight: calculatedResults.proceedInsight,
          responses,
        });

        setIsSubmittingResults(false);

        if (!success) {
          console.warn('Failed to submit results to Formspree');
        }
      }
    } else {
      setCurrentSectionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentSectionIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentSectionIndex(0);
    setResponses({});
    setResults(null);
  };

  const handleLeadSubmit = (name: string, email: string, phone: string) => {
    setLeadInfo({ name, email, phone });
    setLeadCaptured(true);
  };

  if (!leadCaptured) {
    return (
      <LeadCaptureForm
        onSubmit={handleLeadSubmit}
        onBack={onNavigateHome}
        isSubmitting={false}
      />
    );
  }

  const getP3Icon = (area: string) => {
    if (area === 'pause') return Pause;
    if (area === 'plan') return ClipboardList;
    return Play;
  };

  const getP3Label = (area: string) => {
    if (area === 'pause') return 'PAUSE';
    if (area === 'plan') return 'PLAN';
    return 'PROCEED';
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-amber-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {results.profileTitle}
              </h1>
              <p className="text-gray-600">Power in the Pause™ Assessment (P3 Method® Edition)</p>
              <p className="text-lg text-amber-600 font-semibold mt-2">Total Score: {results.totalScore} / 54</p>

              {isSubmittingResults && (
                <div className="mt-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
                  Sending your results...
                </div>
              )}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-800 leading-relaxed">{results.profileDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Your P3 Breakdown</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Pause className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-600 mb-1">PAUSE</p>
                  <p className="text-3xl font-bold text-slate-900 mb-3">{results.pauseScore}%</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{results.pauseInsight}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <ClipboardList className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-600 mb-1">PLAN</p>
                  <p className="text-3xl font-bold text-slate-900 mb-3">{results.planScore}%</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{results.planInsight}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Play className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-600 mb-1">PROCEED</p>
                  <p className="text-3xl font-bold text-slate-900 mb-3">{results.proceedScore}%</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{results.proceedInsight}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Your Prescription</h3>
              <p className="text-gray-800 leading-relaxed">{results.prescription}</p>
            </div>

            <div className="bg-slate-900 text-white rounded-lg p-8 mb-8">
              <p className="text-lg text-center font-medium mb-6">
                Clarity begins when leaders pause long enough to see clearly, plan wisely, and
                proceed with purpose.
              </p>
              <div className="flex items-center justify-center gap-8 mb-4">
                <div className="text-center">
                  <Eye className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <span className="text-sm">See Well</span>
                </div>
                <div className="text-center">
                  <Heart className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <span className="text-sm">Be Well</span>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <span className="text-sm">Lead Well</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">
                Schedule Your Leadership Clarity Consultation
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Your results have been sent to cvadmin@clearvisionleader.com. If this assessment
                helped you identify areas where your leadership needs greater clarity, stronger
                planning, or more sustainable execution, schedule a focused conversation.
              </p>
              <button
                onClick={onNavigateToConsultation}
                className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Schedule a Leadership Clarity Consultation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="text-gray-600 hover:text-slate-900 px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Retake Assessment
              </button>
              <button
                onClick={onNavigateHome}
                className="text-gray-600 hover:text-slate-900 px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <button
              onClick={onNavigateHome}
              className="text-gray-600 hover:text-slate-900 mb-6 inline-flex items-center text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Power in the Pause™ Assessment
            </h1>
            <p className="text-xl text-amber-600 font-semibold mb-4">P3 Method® Edition</p>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This assessment is designed to help leaders pause, reflect, and evaluate how they
                are currently leading. Using Dr. Kennita Williams' <strong>P3 Method® — Pause. Plan. Proceed.</strong> — this
                experience helps identify where pressure may be building, where clarity is needed,
                and what next steps may support stronger and more sustainable leadership.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                <p className="text-gray-800 font-medium">
                  Take a few moments to reflect honestly. Your responses will help reveal
                  opportunities to lead with greater clarity, intention, and strength.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Pause className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PAUSE</h3>
                  <p className="text-sm text-gray-600">
                    Awareness & Reflection
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <ClipboardList className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PLAN</h3>
                  <p className="text-sm text-gray-600">
                    Clarity & Strategy
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Play className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PROCEED</h3>
                  <p className="text-sm text-gray-600">
                    Execution & Sustainability
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 mb-8 py-6 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <Eye className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-900">See Well</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Be Well</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Lead Well</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const sectionIcons = [Pause, ClipboardList, Play, Heart, TrendingUp, CheckCircle];
  const CurrentIcon = sectionIcons[currentSectionIndex] || Pause;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Section {currentSectionIndex + 1} of {assessmentSections.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentSectionIndex + 1) / assessmentSections.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-amber-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSectionIndex + 1) / assessmentSections.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-2 flex-wrap">
              {assessmentSections.map((section, index) => (
                <div
                  key={section.id}
                  className={`flex items-center px-3 py-2 rounded-lg text-xs font-medium ${
                    index < currentSectionIndex
                      ? 'bg-green-50 text-green-700'
                      : index === currentSectionIndex
                      ? 'bg-amber-50 text-amber-700 border-2 border-amber-500'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {index < currentSectionIndex ? (
                    <CheckCircle className="w-4 h-4 mr-1" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center mr-1 text-xs">
                      {index + 1}
                    </span>
                  )}
                  <span>{section.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 text-center">
            <CurrentIcon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentSection.title}</h2>
            <p className="text-lg text-amber-600 font-semibold mb-2">{currentSection.subtitle}</p>
            <p className="text-gray-600">{currentSection.description}</p>
          </div>

          <div className="space-y-8 mb-8">
            {currentSection.questions.map((question) => (
              <div key={question.id} className="border-b border-gray-200 pb-8 last:border-0">
                <p className="text-lg text-gray-800 mb-4 font-medium">{question.text}</p>
                <div className="grid grid-cols-1 gap-3">
                  {question.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleResponse(question.id, option.value)}
                      className={`px-6 py-4 rounded-lg border-2 transition-all text-left ${
                        responses[question.id] === option.value
                          ? 'border-amber-500 bg-amber-50 text-slate-900 font-medium'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-amber-300 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentSectionIndex === 0}
              className="inline-flex items-center px-6 py-3 rounded-full text-gray-700 hover:text-slate-900 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!allQuestionsAnswered}
              className="inline-flex items-center px-8 py-3 rounded-full bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastSection ? 'View Your P3 Snapshot' : 'Next Section'}
              {!isLastSection && <ArrowRight className="w-5 h-5 ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lightbulb({ className }: { className?: string }) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
