import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Bell,
  Send,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form state to Node.js backend:", formData);
  };

  const partners = [
    {
      name: "Partner 1",
      logo: "/Think Bank.png",
    },
    {
      name: "Partner 2",
      logo: "/Maharashtra First Logo Virendra Patil Final 18 May.png",
    },
    {
      name: "Partner 3",
      logo: "/Pudhari.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* 2. PREMIUM HERO BANNER (Vibrant Data Overlay Background Image) */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-cyan-500 text-white text-center py-16 px-4 overflow-hidden">
        {/* Abstract Data Visualization Vector Grid Effect via CSS Masks */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3 text-white drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-cyan-50 max-w-2xl mx-auto font-light tracking-wide">
            Connect with ThinkMH for Maharashtra Insights &amp; Research
          </p>
        </div>
      </section>

      {/* 3. CORE INTERACTIVE CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTAINER LAYER: Solid Dark Corporate Contact Deck & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Panel */}
            <div className="bg-[#0b132b] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-300 mb-6 pb-3 border-b border-white/5">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email Info Card */}
                <div className="flex items-start space-x-4 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <div className="p-2.5 bg-blue-500/20 text-cyan-400 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href="mailto:connect@thinkmh.in"
                      className="text-sm font-semibold text-white hover:underline mt-0.5 block"
                    >
                      connect@thinkmh.in
                    </a>
                  </div>
                </div>

                {/* Call Info Card */}
                <div className="flex items-start space-x-4 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <div className="p-2.5 bg-blue-500/20 text-cyan-400 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Contact Number
                    </span>
                    <a
                      href="tel:+919511293683"
                      className="text-sm font-semibold text-white hover:underline mt-0.5 block"
                    >
                      +91 9511293683
                    </a>
                  </div>
                </div>

                {/* Location Info Card */}
                <div className="flex items-start space-x-4 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <div className="p-2.5 bg-blue-500/20 text-cyan-400 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Office Address
                    </span>
                    <span className="text-sm font-semibold text-white mt-0.5 block leading-relaxed">
                      Maharashtra, Pune Corporate Zone
                    </span>
                    <a
                      href="https://share.google/YX3wLtWoUmZrSeSR7"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 bg-cyan-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-cyan-300 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" /> View Office Location
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Mini Insight Block */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-white/5">
              <h4 className="text-base font-bold text-cyan-300">
                Get Insights
              </h4>
              <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
                Receive premium updates, public trend models, and strategic
                briefs direct to your node systems.
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
                Get Insights
              </button>
            </div>
          </div>

          {/* RIGHT CONTAINER LAYER: Dynamic Light Cyan Input Deck & CTA Prompts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Interactive Form Body */}
            <div className="bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-blue-950 mb-6">
                Submit an Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full bg-white border border-cyan-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Organisation"
                    className="w-full bg-white border border-cyan-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full bg-white border border-cyan-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile Number"
                    className="w-full bg-white border border-cyan-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 text-slate-800 placeholder:text-slate-400 shadow-sm"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="Message"
                    className="w-full bg-white border border-cyan-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 text-slate-800 placeholder:text-slate-400 resize-none shadow-sm"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-semibold text-sm rounded-xl shadow-md flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" /> Send Inquiry
                  </button>
                </div>
              </form>
            </div>

            {/* Split System Blocks (Purchase Support & News Widget) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Report Purchase Notice Box */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex items-start gap-3">
                <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950">
                    Report Purchase Support
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
                    Connect directly with our secure transaction delivery module
                    systems.
                  </p>
                </div>
              </div>

              {/* Newsletter Sub Box */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-blue-950">
                    Newsletter Subscription
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-light">
                    Get custom insights delivered.
                  </p>
                </div>
                <button className="mt-4 w-full py-2 bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs rounded-lg transition-colors">
                  Subscribe to Insights
                </button>
              </div>
            </div>

            {/* Corporate Eco Partners Display Strip */}

            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-3">
                Partner Ecosystem
              </span>

              <div className="flex items-center gap-8">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
