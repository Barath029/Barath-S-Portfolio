import React, { useState, useRef } from 'react';
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
  MapPin,
  Sparkles
} from 'lucide-react';
import { CinematicHeading, StaggerContainer, StaggerItem, GlassGlowCard, Magnetic } from '../animations';
import {
  FooterParticleCanvas,
  FooterCursorSpotlight,
  FooterSweepingLine,
  GiantNameReveal,
  FooterScrollProgressButton,
  FooterLink,
  PulsingLocationDot,
  StaggeredFooterText
} from '../animations/FooterAnimations';

export default function Footer({ profile, theme = 'dark' }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const signatureFooterRef = useRef(null);

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
      icon: <Linkedin className={`w-5 h-5 ${theme === 'light' ? 'text-[#C97262]' : 'text-[#E18E7E]'}`} />,
      actionText: 'Connect on LinkedIn',
      copyValue: profile.linkedin
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@Barath029',
      href: profile.github,
      icon: <Github className={`w-5 h-5 ${theme === 'light' ? 'text-[#1C101A]' : 'text-white'}`} />,
      actionText: 'View GitHub Profile',
      copyValue: profile.github
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+91-63837 04886',
      href: profile.whatsapp,
      icon: <MessageCircle className={`w-5 h-5 ${theme === 'light' ? 'text-[#B55242]' : 'text-[#F2A99B]'}`} />,
      actionText: 'Chat on WhatsApp',
      copyValue: profile.phone
    },
    {
      id: 'email',
      name: 'Email',
      handle: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className={`w-5 h-5 ${theme === 'light' ? 'text-[#C97262]' : 'text-[#E18E7E]'}`} />,
      actionText: 'Send Direct Email',
      copyValue: profile.email
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@b_a_r_a_t_h_02',
      href: profile.instagram,
      icon: <Instagram className={`w-5 h-5 ${theme === 'light' ? 'text-[#B55242]' : 'text-[#F2A99B]'}`} />,
      actionText: 'Follow on Instagram',
      copyValue: profile.instagram
    },
    {
      id: 'phone',
      name: 'Direct Phone',
      handle: profile.phone,
      href: `tel:+916383704886`,
      icon: <Phone className={`w-5 h-5 ${theme === 'light' ? 'text-[#C97262]' : 'text-[#E18E7E]'}`} />,
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
        <div className={`relative rounded-3xl p-8 sm:p-14 overflow-hidden shadow-editorial transition-all duration-300 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-[#FFFFFF] via-[#FFF7F2] to-[#F5EAE3] border border-[#C97262]/35 shadow-sm'
            : 'bg-gradient-to-r from-[#2A1627] via-[#200E1D] to-[#1C101A] border border-[#E18E7E]/40'
        }`}>
          
          {/* Subtle Ambient Radial Glow */}
          <div className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none ${
            theme === 'light' ? 'bg-[#C97262]/10' : 'bg-[#E18E7E]/15'
          }`} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className={`text-xs font-mono tracking-widest uppercase font-bold ${
                theme === 'light' ? 'text-[#B55242]' : 'text-[#F2A99B]'
              }`}>
                OPEN FOR HIGH-IMPACT OPPORTUNITIES
              </span>
              <CinematicHeading as="h2" className={`text-3xl sm:text-5xl font-poppins font-black uppercase tracking-tight leading-tight ${
                theme === 'light' ? 'text-[#1C101A]' : 'text-[#FFF6F2]'
              }`}>
                Let's Build Systems <br className="hidden sm:inline" />That Leave a Mark.
              </CinematicHeading>
              <p className={`text-xs sm:text-sm font-sans max-w-xl font-light ${
                theme === 'light' ? 'text-[#4A3240]' : 'text-[#D8C6C0]'
              }`}>
                Available for engineering roles, AI system consulting, QA automation, and full-stack architecture.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Magnetic strength={0.3} maxDistance={60}>
                <a
                  href={`mailto:${profile.email}`}
                  className={`px-8 py-4 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer ${
                    theme === 'light'
                      ? 'bg-[#C97262] hover:bg-[#B55242] text-white hover:shadow-[0_0_25px_rgba(201,114,98,0.45)]'
                      : 'bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] hover:shadow-[0_0_25px_rgba(224,80,107,0.5)]'
                  }`}
                >
                  <span>GET IN TOUCH ↘</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          6 PLATFORM PROFILE CARDS (All 6 Direct Links & Copy Features)
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 space-y-12">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactChannels.map((channel) => (
            <StaggerItem key={channel.id}>
              <GlassGlowCard className={`rounded-2xl border transition-all duration-300 shadow-sm ${
                theme === 'light'
                  ? 'bg-white border-[#C97262]/25 hover:border-[#C97262]/50'
                  : 'bg-[#1C101A] border border-[#E18E7E]/25'
              }`}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 flex items-center justify-between cursor-pointer w-full"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                      theme === 'light'
                        ? 'bg-[#F8F1EB] border-[#C97262]/30'
                        : 'bg-[#251422] border-[#E18E7E]/30'
                    }`}>
                      {channel.icon}
                    </div>
                    <div className="text-left">
                      <h4 className={`font-poppins font-bold text-sm uppercase tracking-wider transition-colors ${
                        theme === 'light' ? 'text-[#1C101A] group-hover:text-[#C97262]' : 'text-white group-hover:text-[#F2A99B]'
                      }`}>
                        {channel.name}
                      </h4>
                      <span className={`text-xs font-mono truncate block max-w-[160px] ${
                        theme === 'light' ? 'text-[#5A3F4E]' : 'text-[#D8C6C0]'
                      }`}>
                        {channel.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopy(channel.copyValue, channel.id, e)}
                      title={`Copy ${channel.name}`}
                      className={`p-2 rounded-lg border transition-all text-xs ${
                        theme === 'light'
                          ? 'bg-[#F8F1EB] hover:bg-[#C97262] hover:text-white text-[#4A3240] border-[#C97262]/25'
                          : 'bg-[#251422] hover:bg-[#E18E7E] hover:text-[#130911] text-[#D8C6C0] border border-[#E18E7E]/25'
                      }`}
                    >
                      {copiedKey === channel.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      theme === 'light'
                        ? 'bg-[#F8F1EB] group-hover:bg-[#C97262] text-[#4A3240] group-hover:text-white'
                        : 'bg-[#251422] group-hover:bg-[#E18E7E] text-[#D8C6C0] group-hover:text-[#130911]'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </GlassGlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* =========================================================================
            SIGNATURE FOOTER (Enhanced with 8 Impressive Animation Themes)
            Features:
            1. Sweeping 2px top glowing border line (4s loop)
            2. Ambient burgundy floating particle canvas
            3. Cursor-following smooth lag spotlight
            4. Giant outlined "BARATH S." letter-by-letter reveal + hover fill & glow
            5. Quick links with animated draw underlines
            6. Staggered fade-up for "Barath S — Portfolio" & "© 2026 Barath S."
            7. Location detail with 2s pulsing indicator dot
            8. Dynamic SVG scroll progress ring with bobbing arrow back-to-top button
        ========================================================================= */}
        <div 
          ref={signatureFooterRef}
          className={`relative rounded-3xl mt-8 pt-8 pb-8 px-4 sm:px-10 border transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl overflow-hidden group select-none ${
            theme === 'light'
              ? 'bg-gradient-to-b from-[#FFFFFF] via-[#FFF8F3] to-[#F5ECE5] border-[#C97262]/35 text-[#1C101A] shadow-[0_15px_40px_-10px_rgba(130,70,60,0.12)]'
              : 'bg-gradient-to-b from-[#1C101A] via-[#140812] to-[#0A0A0A] border-[#E18E7E]/30 text-white'
          }`}
        >
          {/* 1. Sweeping Top Glowing Line */}
          <FooterSweepingLine theme={theme} />

          {/* 2. Ambient Particles Canvas (38 dots desktop, 20 mobile) */}
          <FooterParticleCanvas theme={theme} />

          {/* 3. Smooth Lag Cursor Spotlight */}
          <FooterCursorSpotlight containerRef={signatureFooterRef} theme={theme} />

          {/* Bottom Deep Radial Glow */}
          <div 
            aria-hidden="true" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-52 pointer-events-none opacity-40 z-0"
            style={{
              background: theme === 'light'
                ? 'radial-gradient(ellipse 75% 70% at 50% 100%, rgba(225, 142, 126, 0.35) 0%, rgba(201, 114, 98, 0.08) 50%, transparent 80%)'
                : 'radial-gradient(ellipse 75% 70% at 50% 100%, rgba(109, 0, 26, 0.7) 0%, rgba(224, 80, 107, 0.12) 50%, transparent 80%)'
            }}
          />

          {/* 4. Giant Name Reveal ("BARATH S.") */}
          <GiantNameReveal text="BARATH S." className="z-10 -mb-3" theme={theme} />

          {/* Quick Links Strip with Animated Underline Draw */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-xs sm:text-sm font-sans font-medium">
            <FooterLink href={profile.instagram} theme={theme}>Instagram</FooterLink>
            <FooterLink href={profile.linkedin} theme={theme}>LinkedIn</FooterLink>
            <FooterLink href={profile.github} theme={theme}>GitHub</FooterLink>
            <FooterLink href={profile.whatsapp} theme={theme}>WhatsApp</FooterLink>
            <FooterLink href={`mailto:${profile.email}`} isExternal={false} theme={theme}>Email</FooterLink>
          </div>

          {/* Glowing Center Accent Dot */}
          <div className="relative z-10 pt-0.5 flex items-center justify-center">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              theme === 'light'
                ? 'bg-[#C97262] shadow-[0_0_8px_#C97262]'
                : 'bg-[#E18E7E] shadow-[0_0_8px_#E18E7E]'
            }`} />
          </div>

          {/* 5. Staggered Text Reveal for Signature, Credits & Location */}
          <StaggeredFooterText delay={0.35} className="relative z-10 space-y-2">
            <h3 className={`font-serif italic text-2xl sm:text-3xl tracking-wide font-normal ${
              theme === 'light' ? 'text-[#1C101A]' : 'text-white'
            }`}>
              Barath S — Portfolio
            </h3>

            <div className={`space-y-1.5 text-xs sm:text-sm font-sans ${
              theme === 'light' ? 'text-[#4A3240]' : 'text-[#D8C6C0]'
            }`}>
              <p>
                © {new Date().getFullYear()} Barath S.
              </p>
              
              {/* 6. Location Detail with Pulsing Indicator Dot */}
              <div className={`flex items-center justify-center gap-2 text-xs font-mono pt-0.5 ${
                theme === 'light' ? 'text-[#B55242]' : 'text-[#F2A99B]'
              }`}>
                <MapPin className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-[#C97262]' : 'text-[#E18E7E]'}`} />
                <span>Chennai, Tamil Nadu</span>
                <PulsingLocationDot theme={theme} />
              </div>
            </div>
          </StaggeredFooterText>

          {/* 7. Scroll to Top Button with SVG Progress Ring + Bobbing Arrow */}
          <div className="relative z-10 pt-2">
            <FooterScrollProgressButton onClick={scrollToTop} theme={theme} />
          </div>
        </div>

      </div>

    </footer>
  );
}
