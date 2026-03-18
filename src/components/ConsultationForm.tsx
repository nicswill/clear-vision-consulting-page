import { useState, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

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
      // Save to database
      const { error } = await supabase
        .from('consultation_requests')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            leadership_role: formData.leadershipRole,
            challenge: formData.challenge,
            contact_method: formData.contactMethod,
            best_time: formData.bestTime,
          },
        ]);

      if (error) throw error;

      // Send email notifications
      const emailResponse = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-consultation-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            leadershipRole: formData.leadershipRole,
            challenge: formData.challenge,
            contactMethod: formData.contactMethod,
            bestTime: formData.bestTime,
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error('Email notification failed, but form was saved to database');
      }

      setShowConfirmation(true);
      setTimeout(() => {
        onSuccess();
      }, 3000);
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
          Thank you for requesting a Leadership Clarity Consultation.
        </h3>
        <p className="text-green-800 mb-4">
          Your request has been received and our team will follow up shortly to
          schedule your consultation.
        </p>
        <p className="text-green-800 mb-4">
          We look forward to helping you gain clarity and strengthen your
          leadership.
        </p>
        <p className="text-green-900 font-semibold">
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
