import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  ArrowUp,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function Footer({ profile }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactChannels = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'barath-s-52910431a',
      href: profile.linkedin,
      icon: <Linkedin className="w-5 h-5 text-[#E18E7E]" />,
      actionText: 'Connect on LinkedIn',
      copyValue: profile.linkedin
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@Barath029',
      href: profile.github,
      icon: <Github className="w-5 h-5 text-white" />,
      actionText: 'View GitHub Profile',
      copyValue: profile.github
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+91-63837 04886',
      href: profile.whatsapp,
      icon: <MessageCircle className="w-5 h-5 text-[#F2A99B]" />,
      actionText: 'Chat on WhatsApp',
      copyValue: profile.phone
    },
    {
      id: 'email',
      name: 'Email',
      handle: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className="w-5 h-5 text-[#E18E7E]" />,
      actionText: 'Send Direct Email',
      copyValue: profile.email
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@b_a_r_a_t_h_02',
      href: profile.instagram,
      icon: <Instagram className="w-5 h-5 text-[#F2A99B]" />,
      actionText: 'Follow on Instagram',
      copyValue: profile.instagram
    },
    {
      id: 'phone',
      name: 'Direct Phone',
      handle: profile.phone,
      href: `tel:+916383704886`,
      icon: <Phone className="w-5 h-5 text-[#E18E7E]" />,
      actionText: 'Call Direct Line',
      copyValue: profile.phone
    }
  ];

  return (
    <footer id="contact" className="font-sans pt-12">
      
      {/* =========================================================================
          MARINA VOSS SIGNATURE BOTTOM CALL-TO-ACTION BANNER
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2A1627] via-[#200E1D] to-[#1C101A] border border-[#E18E7E]/40 p-8 sm:p-14 overflow-hidden shadow-editorial">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#E18E7E]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono tracking-widest uppercase text-[#F2A99B] font-bold">
                OPEN FOR HIGH-IMPACT OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-poppins font-black uppercase tracking-tight text-[#FFF6F2] leading-tight">
                Let's Build Systems <br className="hidden sm:inline" />That Leave a Mark.
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C6C0] font-sans max-w-xl font-light">
                Available for engineering roles, AI system consulting, QA automation, and full-stack architecture.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href={`mailto:${profile.email}`}
                className="px-8 py-4 rounded-full bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
              >
                <span>GET IN TOUCH ↘</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          6 PLATFORM PROFILE CARDS (All 6 Direct Links & Copy Features)
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#1C101A] border border-[#E18E7E]/25 hover:border-[#E18E7E] transition-all flex items-center justify-between shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#251422] border border-[#E18E7E]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {channel.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-poppins font-bold text-sm text-white group-hover:text-[#F2A99B] transition-colors uppercase tracking-wider">
                    {channel.name}
                  </h4>
                  <span className="text-xs font-mono text-[#D8C6C0] truncate block max-w-[160px]">
                    {channel.handle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleCopy(channel.copyValue, channel.id, e)}
                  title={`Copy ${channel.name}`}
                  className="p-2 rounded-lg bg-[#251422] hover:bg-[#E18E7E] hover:text-[#130911] text-[#D8C6C0] border border-[#E18E7E]/25 transition-all text-xs"
                >
                  {copiedKey === channel.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <div className="w-8 h-8 rounded-lg bg-[#251422] group-hover:bg-[#E18E7E] text-[#D8C6C0] group-hover:text-[#130911] flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* =========================================================================
            SIGNATURE FOOTER (Matching User's Reference Layout)
            Instagram | LinkedIn | GitHub | WhatsApp | Email
            ●
            Barath S — Portfolio
            © 2026 Barath S. Crafted with React & Tailwind CSS.
            Chennai, Tamil Nadu
        ========================================================================= */}
        <div className="pt-12 border-t border-[#E18E7E]/20 flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Top Quick Links Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-xs sm:text-sm font-sans font-medium text-[#D8C6C0]">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2A99B] transition-colors"
            >
              Instagram
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2A99B] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2A99B] transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2A99B] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#F2A99B] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Glowing Rose Gold Center Accent Dot */}
          <div className="pt-1 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E18E7E] animate-pulse" />
          </div>

          {/* Centered Portfolio Signature (Matching User Reference: "Name — Portfolio") */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-white tracking-wide font-normal">
            Barath S — Portfolio
          </h3>

          {/* Credits & Clean Location (Institution Removed per user request) */}
          <div className="space-y-1.5 pt-0.5 text-xs sm:text-sm font-sans text-[#D8C6C0]">
            <p>
              © {new Date().getFullYear()} Barath S. Crafted with React & Tailwind CSS.
            </p>
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#F2A99B] pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#E18E7E]" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <div className="pt-3">
            <button
              onClick={scrollToTop}
              title="Scroll back to top"
              className="w-9 h-9 rounded-full bg-[#1C101A] hover:bg-[#E18E7E] text-[#D8C6C0] hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all cursor-pointer shadow-sm group"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
