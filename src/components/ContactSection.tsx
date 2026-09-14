import { useState, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Full-time Data Analyst',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} (${formData.company || 'Hiring Team'}) - ${formData.roleType}`);
    const body = encodeURIComponent(`Hi Sofiya,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Discuss Analytics Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Currently interviewing for full-time Data Analyst, Business Intelligence, and Analytics Engineering positions. Feel free to connect directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base font-bold text-white mb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-white hover:text-indigo-300">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Phone Number</div>
                    <div className="font-medium text-white">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Location</div>
                    <div className="font-medium text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Professional Profiles:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Recruiter Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-base font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Have an open role or analytical challenge? Send an inquiry and I’ll respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-slate-300">
                  Your default email client was opened to transmit the message. You can also email directly at <strong className="text-emerald-300">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global Tech Partners"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Role Type
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Full-time Data Analyst">Full-time Data Analyst</option>
                      <option value="Business Intelligence Specialist">Business Intelligence Specialist</option>
                      <option value="Analytics Engineer">Analytics Engineer</option>
                      <option value="Contract / Project Consultation">Contract / Project Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the opportunity, team focus, or specific analytical domain..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Sofiya</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
