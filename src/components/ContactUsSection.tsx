import React from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

export const ContactUsSection: React.FC = () => (
  <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 flex-col">
    <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-4 font-inter text-center md:text-left">
      Contact Us
    </h2>
    <div className="mb-12  text-[#6B7280] text-base font-poppins text-center md:text-left">
      We’d love to hear from you. Please fill out the form and our team will get back to you soon.
    </div>
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
      {/* Left: Image */}
      <div className="relative flex-1 min-h-[350px] md:min-h-[600px] flex items-center justify-center">
        <img
          src="/ChatGPT Image Jun 29, 2025, 10_52_48 PM 2.png"
          alt="Scientist in laboratory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8 text-center">
          <h3 className="text-base md:text-lg font-bold mb-1 tracking-wide text-white drop-shadow">
            WELCOME TO
          </h3>
          <div className="text-lg md:text-2xl font-extrabold mb-2 tracking-widest text-white drop-shadow">
            VASI PHARMACY
          </div>
          <p className="text-white text-opacity-90 max-w-xs text-sm md:text-base drop-shadow">
            We welcome your questions and ideas. Reach out and our team will respond promptly.
          </p>
        </div>
      </div>
      {/* Right: Form */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
        <h3 className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2 font-inter text-center md:text-left">
          Get in touch
        </h3>
        <div className="mb-6 text-[#6B7280] text-sm font-poppins text-center md:text-left">
          Fill in your details and message below.
        </div>
        <form className="flex flex-col gap-5">
          {/* Name */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <User className="h-5 w-5 text-[#6B7280]" />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-base transition"
              autoComplete="off"
            />
          </div>
          {/* Email */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Mail className="h-5 w-5 text-[#6B7280]" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-base transition"
              autoComplete="off"
            />
          </div>
          {/* Phone */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Phone className="h-5 w-5 text-[#6B7280]" />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-base transition"
              autoComplete="off"
            />
          </div>
          {/* Message */}
          <div className="relative">
            <span className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-[#6B7280]" />
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1464B9] focus:ring-2 focus:ring-[#1464B9]/20 outline-none font-poppins text-base transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1464B9] text-white font-semibold py-3 rounded-lg mt-2 hover:bg-[#174ea6] transition-colors font-inter text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);