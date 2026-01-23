'use client';

import { useState } from 'react';
import { getActiveJobs, type Job } from '@/data/jobs';

// Page Header
function PageHeader() {
  return (
    <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(201, 169, 98, 0.4) 0%, transparent 50%)',
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-label !text-gold mb-6 inline-block">Join Our Team</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
          Careers
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Be part of a team that has been delivering culinary excellence for over 50 years.
        </p>
      </div>
    </section>
  );
}

// Why Work With Us
function WhyWorkWithUs() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Competitive Salary',
      description: 'We offer industry-leading compensation packages',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Great Team',
      description: 'Work with passionate professionals in a supportive environment',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Why Comfort Chefs</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mt-4">
            Why Work With Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                {benefit.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {benefit.title}
              </h3>
              <p className="text-charcoal-light text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Job Listings
function JobListings({ jobs, onApply }: { jobs: Job[]; onApply: (job: Job) => void }) {
  return (
    <section className="py-24 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Open Positions</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mt-4">
            Current Opportunities
          </h2>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-charcoal-light text-lg">
              No open positions at the moment. Please check back later.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-8 shadow-lg card-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-sm rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-forest/10 text-forest text-sm rounded-full font-medium capitalize">
                        {job.type.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-charcoal-light mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <p className="text-charcoal-light leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-display font-semibold text-charcoal mb-3">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.slice(0, 4).map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-charcoal-light text-sm">
                              <svg className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-charcoal mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 4).map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-charcoal-light text-sm">
                              <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8 flex-shrink-0">
                    <button
                      onClick={() => onApply(job)}
                      className="btn-primary whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Application Form
function ApplicationForm({ job, onClose }: { job: Job; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearsOfExperience: '',
    availableStartDate: '',
    coverLetter: '',
    howDidYouHear: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Please upload a PDF or Word document');
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      setResumeFile(null);
      return;
    }

    setUploadError('');
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setUploadError('Please upload your resume');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('jobId', job.id);
    formDataToSend.append('jobTitle', job.title);
    formDataToSend.append('yearsOfExperience', formData.yearsOfExperience);
    formDataToSend.append('availableStartDate', formData.availableStartDate);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('howDidYouHear', formData.howDidYouHear);
    formDataToSend.append('resume', resumeFile);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 bg-charcoal/80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">
            Application Submitted!
          </h3>
          <p className="text-charcoal-light mb-6">
            Thank you for applying for the {job.title} position. We will review your application and get back to you soon.
          </p>
          <button onClick={onClose} className="btn-primary">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-charcoal/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-charcoal">
              Apply for {job.title}
            </h3>
            <p className="text-charcoal-light mt-1">{job.location}</p>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-light hover:text-charcoal transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {errorMessage || 'An error occurred. Please try again.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
            <div>
              <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-charcoal mb-2">
                Years of Experience *
              </label>
              <select
                id="yearsOfExperience"
                name="yearsOfExperience"
                required
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-white"
              >
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="availableStartDate" className="block text-sm font-medium text-charcoal mb-2">
                Available Start Date *
              </label>
              <input
                type="date"
                id="availableStartDate"
                name="availableStartDate"
                required
                value={formData.availableStartDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-charcoal mb-2">
                How did you hear about us?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-white"
              >
                <option value="">Select an option</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Company Website">Company Website</option>
                <option value="Referral">Referral</option>
                <option value="Job Board">Job Board</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-charcoal mb-2">
              Resume/CV * <span className="text-charcoal-light font-normal">(PDF or Word, max 5MB)</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-terracotta/10 file:text-terracotta file:font-medium hover:file:bg-terracotta/20 file:cursor-pointer"
            />
            {uploadError && (
              <p className="mt-2 text-sm text-red-600">{uploadError}</p>
            )}
            {resumeFile && !uploadError && (
              <p className="mt-2 text-sm text-forest">Selected: {resumeFile.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-charcoal mb-2">
              Cover Letter <span className="text-charcoal-light font-normal">(optional)</span>
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={4}
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
              placeholder="Tell us why you're interested in this role..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CareersPage() {
  const jobs = getActiveJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <PageHeader />
      <WhyWorkWithUs />
      <JobListings jobs={jobs} onApply={setSelectedJob} />
      {selectedJob && (
        <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}
