import { CheckCircle, Eye, Heart, TrendingUp } from 'lucide-react';

interface ThankYouPageProps {
  onNavigateHome: () => void;
}

export function ThankYouPage({ onNavigateHome }: ThankYouPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Your Request Has Been Received
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Thank you for requesting a Leadership Clarity Consultation.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Your information has been received and our team will contact you soon to schedule your consultation.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We look forward to helping you strengthen your leadership and create systems that support sustainable success.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-slate-900">See Well</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-slate-900">Be Well</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-slate-900">Lead Well</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-2">Dr. Kennita Williams</p>
            <p className="text-gray-600 mb-6">Founder, Clear Vision Consulting®</p>
            <p className="text-sm text-gray-500">www.clearvisionleader.com</p>
          </div>

          <button
            onClick={onNavigateHome}
            className="mt-8 bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
