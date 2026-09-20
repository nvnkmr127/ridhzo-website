"use client";

import { useState } from "react";
import { MessageSquare, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactUsSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Real Estate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-border bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Mail className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Talk to Us — We Reply Fast
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Have a question about features, need help connecting your ad account, or want a quick demo?
            Send us a message or reach us directly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h3 className="text-base font-bold text-foreground">Direct Support</h3>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/919820144520?text=Hi%20Ridhzo%20team%2C%20I%20have%20a%20question%20about%20the%20CRM."
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-start gap-3.5 p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary transition-all group"
              >
                <div className="h-9 w-9 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground group-hover:underline">
                    Chat on WhatsApp
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Fastest response · Usually within 5 minutes
                  </p>
                  <p className="text-xs font-mono text-foreground mt-1">+91 98201 44520</p>
                </div>
              </a>

              {/* Email direct */}
              <div className="flex items-start gap-3.5 p-3 rounded-lg border border-border bg-secondary/30">
                <div className="h-9 w-9 rounded-lg bg-secondary border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground">Email Support</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Replies within 2 hours</p>
                  <a
                    href="mailto:support@ridhzo.com"
                    className="focus-ring rounded-sm text-xs font-mono text-foreground hover:underline mt-1 block"
                  >
                    support@ridhzo.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 p-3 rounded-lg border border-border bg-secondary/30">
                <div className="h-9 w-9 rounded-lg bg-secondary border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground">Hours</span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Monday to Saturday, 9:00 AM – 8:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 rounded-xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  We received your message. One of our team members will reach out to you via WhatsApp or email
                  within 15 minutes.
                </p>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="text-xs border-border mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <h3 className="text-base font-bold text-foreground">Send Us a Quick Message</h3>
                <p className="text-xs text-muted-foreground">
                  Fill this out and our team will get back to you directly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-foreground mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-foreground mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business-type" className="block text-xs font-medium text-foreground mb-1">
                      Your Business Type
                    </label>
                    <select
                      id="contact-business-type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                    >
                      <option value="Real Estate">Real Estate Broker / Developer</option>
                      <option value="Marketing Agency">Performance Marketing Agency</option>
                      <option value="Financial Services">Financial &amp; Insurance Advisor</option>
                      <option value="Solar & Services">Solar &amp; Home Contractor</option>
                      <option value="Other">Other Sales Team</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-foreground mb-1">
                    How Can We Help? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us what questions you have or what kind of setup you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="sm"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs h-10 shadow-sm"
                >
                  <Send className="h-3.5 w-3.5 mr-1.5" />
                  <span>Send Message</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
