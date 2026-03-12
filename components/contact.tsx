'use client';

import { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fieldClassName = 'w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <section id="contact" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Contact Info */}
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:julienmanan@gmail.com"
                  className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background group-hover:border-accent/40">
                    <Mail className="h-5 w-5 text-accent" />
                  </span>
                  <span className="break-all">juliengmanana@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-background p-5">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to new opportunities, collaborations, and interesting conversations. 
                Feel free to reach out through the form or directly via email.
              </p>
            </div>

            <div className="rounded-xl border border-border/80 bg-background p-5">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Roles I'm Open To</h3>
              <p className="mb-4 text-muted-foreground">
                Especially interested in internships and trainee opportunities where I can contribute,
                learn fast, and grow with strong engineering teams.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Software Engineering Internship</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">AI Internship</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Backend Engineering</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Django Development</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Focus areas: Python, Django, APIs, backend systems, LLM integration, and Artificial Intelligence.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-secondary/20 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={fieldClassName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={6}
                  className={`${fieldClassName} resize-y min-h-[140px]`}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-900/20 border border-green-800 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-900/20 border border-red-800 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-yellow-500 disabled:bg-muted disabled:text-muted-foreground sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
