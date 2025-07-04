import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t border-[#E5E7EB] py-10 lg:pl-14 mt-16">
    <div className="max-w-8xl lg:mx-[100px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo at top */}
          <img src="/logo.png" alt="Vasi Pharma Logo" className="mb-3 mt-[-25px] w-32 h-auto" />
          <h3 className="text-xl font-bold text-[#1464B9] font-inter mb-2">Vasi Pharma LLC</h3>
          <p className="text-[#6B7280] font-poppins text-sm mb-4 max-w-xs">
            Transforming how new medicines <br />are discovered through deep <br />science, advanced technology,<br /> and artificial intelligence
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><a href="#hero" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Home</a></li>
            <li><a href="#therapeutic-areas" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Research Areas</a></li>
            <li><a href="#pipeline" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Pipeline</a></li>
            <li><a href="#technology" className="text-[#6B7280] hover:text-[#1464B9] font-poppins transition">Technology</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Contact</h4>
          <div className="text-[#6B7280] font-poppins text-base space-y-2">
            <p>150 N Research Campus Dr.<br />Suite 4109</p>
            <p>Kannapolis, NC 28081, USA</p>
            <p className="mt-4">
              <a href="mailto:info@vasipharma.com" className="hover:text-[#1464B9] transition">
                info@vasipharma.com
              </a>
            </p>
            <p>
              <a href="tel:+1234567890" className="hover:text-[#1464B9] transition">
                +1 (234) 567-8900
              </a>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#1464B9] font-inter mb-4">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-[#E5E7EB] hover:bg-[#1464B9]/10 rounded-full p-2 text-[#6B7280] hover:text-[#1464B9] transition flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <Linkedin size={20} />
            </a>
            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="bg-[#E5E7EB] hover:bg-[#1464B9]/10 rounded-full p-2 text-[#6B7280] hover:text-[#1464B9] transition flex items-center justify-center"
              style={{ width: 40, height: 40 }}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[#6B7280] text-sm mt-8 font-poppins border-t border-[#E5E7EB] pt-8">
        &copy; 2025 Vasi Pharma LLC. All rights reserved.
      </div>
    </div>
  </footer>
);