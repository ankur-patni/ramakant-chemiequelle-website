import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { ContactFormData } from '../api/types';

export default function Contact() {
  const {
    isLoading,
    error,
    success,
    successMessage,
    fieldErrors,
    submit,
    clearError,
    clearSuccess,
  } = useContactForm();

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    subject: '',
    message: '',
  });

  // Auto-clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        clearSuccess();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, clearSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      // Error will be cleared on next validation
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous error
    if (error) {
      clearError();
    }

    // Submit form using hook
    await submit(formData);

    // Reset form if successful
    if (!error) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="bg-rcq-gray min-h-screen pb-20">
      <div className="bg-rcq-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Get in touch with our global team for inquiries, support, or partnership opportunities.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-rcq-navy mb-6">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm">Vadodara, Gujarat<br/>India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Call / WhatsApp</h4>
                    <p className="text-slate-600 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">sales@ramakantchemiequelle.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Monday - Saturday<br/>9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-rcq-navy mb-8">Send us a Message</h3>

              {/* Success Alert */}
              {success && successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-in slide-in-from-top">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Success!</p>
                      <p className="text-sm mt-1">{successMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 animate-in slide-in-from-top">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Error</p>
                      <p className="text-sm mt-1">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isLoading}
                      aria-label="First name"
                      aria-describedby={fieldErrors.firstName ? 'firstName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        fieldErrors.firstName
                          ? 'border-red-500 bg-red-50 focus:ring-red-500'
                          : 'border-slate-200 focus:ring-rcq-teal'
                      } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      placeholder="John"
                    />
                    {fieldErrors.firstName && (
                      <p id="firstName-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>✕</span> {fieldErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isLoading}
                      aria-label="Last name"
                      aria-describedby={fieldErrors.lastName ? 'lastName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        fieldErrors.lastName
                          ? 'border-red-500 bg-red-50 focus:ring-red-500'
                          : 'border-slate-200 focus:ring-rcq-teal'
                      } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      placeholder="Doe"
                    />
                    {fieldErrors.lastName && (
                      <p id="lastName-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>✕</span> {fieldErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Company Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      aria-label="Email address"
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        fieldErrors.email
                          ? 'border-red-500 bg-red-50 focus:ring-red-500'
                          : 'border-slate-200 focus:ring-rcq-teal'
                      } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      placeholder="john@company.com"
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>✕</span> {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      disabled={isLoading}
                      aria-label="Company name"
                      aria-describedby={fieldErrors.companyName ? 'companyName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        fieldErrors.companyName
                          ? 'border-red-500 bg-red-50 focus:ring-red-500'
                          : 'border-slate-200 focus:ring-rcq-teal'
                      } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      placeholder="Company Ltd."
                    />
                    {fieldErrors.companyName && (
                      <p id="companyName-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>✕</span> {fieldErrors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    aria-label="Subject"
                    aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      fieldErrors.subject
                        ? 'border-red-500 bg-red-50 focus:ring-red-500'
                        : 'border-slate-200 focus:ring-rcq-teal'
                    } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed`}
                    placeholder="How can we help?"
                  />
                  {fieldErrors.subject && (
                    <p id="subject-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span>✕</span> {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      rows={4}
                      aria-label="Message"
                      aria-describedby={fieldErrors.message ? 'message-error' : 'message-hint'}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        fieldErrors.message
                          ? 'border-red-500 bg-red-50 focus:ring-red-500'
                          : 'border-slate-200 focus:ring-rcq-teal'
                      } focus:outline-none focus:ring-2 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed resize-none`}
                      placeholder="Provide details about your query..."
                    />
                    <div className="text-xs text-slate-500 mt-1">
                      {formData.message.length}/5000 characters
                    </div>
                  </div>
                  {fieldErrors.message ? (
                    <p id="message-error" className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span>✕</span> {fieldErrors.message}
                    </p>
                  ) : (
                    <p id="message-hint" className="text-slate-500 text-sm mt-1">
                      Minimum 10 characters required
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto px-8 py-3 bg-rcq-teal hover:bg-rcq-teal-dark text-white rounded-lg font-medium transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Form Info */}
                <p className="text-xs text-slate-500 mt-6">
                  <span className="text-red-500">*</span> Indicates required field. We promise to keep your information secure and never share it with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
             <MapPin size={48} className="mb-4 opacity-50" />
             <p className="font-medium">Map integration (Google Maps) will go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
