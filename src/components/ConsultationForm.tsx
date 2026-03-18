import { useState, FormEvent } from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const FORMSPREE_CONSULTATION_ENDPOINT = 'https://formspree.io/f/mqeywyla';
const CALENDLY_URL = 'https://calendly.com/cvadmin-clearvisionleader/30min';

interface ConsultationFormProps {
  onSuccess: () => void;
}

export function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    leadershipRole: '',
    challenge: '',
    contactMethod: '',
    bestTime: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_CONSULTATION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Leadership Clarity Consultation Request from ${formData.fullName}`,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          leadershipRole: formData.leadershipRole,
          challenge: formData.challenge,
          contactMethod: formData.contactMethod,
          bestTime: formData.bestTime,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowConfirmation(true);
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showConfirmation) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          Thank you for requesting a Leadership Clarity Consultation!
        </h3>
        <p className="text-green-800 mb-6">
          Your request has been received successfully.
        </p>
        <p className="text-green-800 mb-6">
          Ready to schedule your consultation now?
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Schedule Your Consultation Now
        </a>
        <p className="text-green-900 font-semibold mt-8">
          — Dr. Kennita Williams
          <br />
          Clear Vision Consulting®
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Request a Leadership Clarity Consultation
      </h3>
      <p className="text-gray-600 mb-6">
        Complete the form below and someone from our team will follow up shortly
        to schedule your consultation.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Organization / Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Leadership Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.leadershipRole}
              onChange={(e) =>
                setFormData({ ...formData, leadershipRole: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            What leadership challenge are you hoping to solve right now?{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={formData.challenge}
            onChange={(e) =>
              setFormData({ ...formData, challenge: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Tell us about your current leadership challenge..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Preferred Contact Method <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.contactMethod}
              onChange={(e) =>
                setFormData({ ...formData, contactMethod: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="either">Either</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Best Time to Connect <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.bestTime}
              onChange={(e) =>
                setFormData({ ...formData, bestTime: e.target.value })
              }
              placeholder="e.g., Weekday mornings"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  );
}
