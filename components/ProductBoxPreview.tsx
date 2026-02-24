/**
 * ProductBoxPreview | Ultra-Premium Preview v6.0
 * Mobile-first editorial design with glass effects and micro-animations
 */

import React, { useState, useMemo } from 'react';
import { ProductDetails, DeploymentMode, FAQItem } from '../types';

interface ProductBoxPreviewProps {
  product: ProductDetails;
  affiliateTag?: string;
  mode?: DeploymentMode;
}

const DEFAULT_BULLETS = [
  "Premium build quality with attention to detail",
  "Industry-leading performance metrics",
  "Backed by comprehensive warranty",
  "Trusted by thousands of verified buyers"
];

const DEFAULT_FAQS: FAQItem[] = [
  { question: "Is this product covered by warranty?", answer: "Yes, this product comes with a comprehensive manufacturer warranty for complete peace of mind." },
  { question: "How does shipping work?", answer: "Eligible for fast Prime shipping with free returns within 30 days." },
  { question: "What's included in the package?", answer: "Complete package includes the main product, all necessary accessories, and detailed documentation." },
  { question: "Is customer support available?", answer: "24/7 customer support available through phone, email, and live chat for any assistance." }
];

const DEFAULT_VERDICT = "Engineered for discerning users who demand excellence, this premium product delivers professional-grade performance with meticulous attention to detail. Backed by thousands of verified reviews and trusted by industry professionals worldwide.";

const getCurrentDate = (): string => new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

/* ─── Star Rating ─── */
const StarRating: React.FC<{ rating: number; size?: 'sm' | 'md' }> = ({ rating, size = 'md' }) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const w = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';
  const uid = useMemo(() => `pbp-${Math.random().toString(36).slice(2, 8)}`, []);
  return (
    <div className="flex items-center gap-[1px]" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <svg key={`f${i}`} className={`${w} text-amber-400 drop-shadow-sm`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className={w} viewBox="0 0 20 20">
          <defs><linearGradient id={uid}><stop offset="50%" stopColor="#fbbf24" /><stop offset="50%" stopColor="#e2e8f0" /></linearGradient></defs>
          <path fill={`url(#${uid})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      )}
      {Array.from({ length: empty }, (_, i) => (
        <svg key={`e${i}`} className={`${w} text-slate-200`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

/* ─── Tactical Link ─── */
const TacticalLink: React.FC<{
  product: ProductDetails;
  amazonLink: string;
  imageSrc: string;
  verdict: string;
  onImageError: () => void;
}> = ({ product, amazonLink, imageSrc, verdict, onImageError }) => {
  const currentDate = getCurrentDate();
  return (
    <div className="w-full max-w-[880px] mx-auto group my-8 px-3 sm:px-4">
      <div className="relative bg-white border border-slate-200/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_56px_-12px_rgba(0,0,0,0.14)] hover:border-blue-200/60 transition-all duration-500 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
        {/* Left accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 rounded-l-2xl sm:rounded-l-3xl" />

        {/* Badge */}
        <div className="absolute -top-px -right-px bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[8px] font-black uppercase tracking-[1.5px] py-1.5 px-3.5 rounded-bl-xl rounded-tr-2xl sm:rounded-tr-3xl shadow-lg flex items-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          {"Editor's Pick"}
        </div>

        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100/80 p-2 shadow-inner group-hover:scale-105 transition-transform duration-500">
          <img src={imageSrc} className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-md" alt={product.title} onError={onImageError} loading="lazy" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left min-w-0 space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-[8px] font-black uppercase tracking-[1.5px] text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/80">Top Rated {currentDate}</span>
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating || 4.5} size="sm" />
              <span className="text-[9px] font-bold text-slate-400">({(product.reviewCount || 0).toLocaleString()})</span>
            </div>
          </div>
          <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight line-clamp-2">{product.title}</h3>
          <p className="text-slate-500 text-xs line-clamp-2 hidden sm:block leading-relaxed">{verdict}</p>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
          <div className="text-center">
            <span className="text-[8px] text-slate-400 uppercase tracking-wider font-bold block">Best Price</span>
            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{product.price}</span>
          </div>
          <a
            href={amazonLink}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[10px] font-black uppercase tracking-[2px] rounded-xl hover:from-blue-600 hover:to-indigo-600 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group/btn"
          >
            View Deal
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover/btn:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─── Elite Bento ─── */
const EliteBento: React.FC<{
  product: ProductDetails;
  amazonLink: string;
  imageSrc: string;
  verdict: string;
  bullets: string[];
  faqs: FAQItem[];
  onImageError: () => void;
}> = ({ product, amazonLink, imageSrc, verdict, bullets, faqs, onImageError }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const currentDate = getCurrentDate();

  return (
    <div className="w-full max-w-[1060px] mx-auto my-10 sm:my-16 font-sans antialiased group animate-fade-in px-3 sm:px-4">
      <div className="relative bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.14)] hover:border-slate-200">

        {/* Badge */}
        <div className="absolute top-0 right-0 z-30">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 blur-lg opacity-30" />
            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-[2px] sm:tracking-[3px] py-2.5 sm:py-3 px-5 sm:px-7 rounded-bl-2xl sm:rounded-bl-[24px] shadow-xl flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              {"Editor's Choice"}
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-40%] left-[-15%] w-[400px] h-[400px] bg-gradient-to-br from-blue-100/25 to-violet-100/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-25%] right-[-8%] w-[300px] h-[300px] bg-gradient-to-tr from-amber-100/15 to-orange-100/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

          {/* LEFT: Visual */}
          <div className="lg:w-[40%] bg-gradient-to-br from-slate-50/60 via-white to-slate-50/30 border-b lg:border-b-0 lg:border-r border-slate-100/50 p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center relative">

            {/* Rating pill */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
              <div className="bg-white/90 backdrop-blur-xl border border-slate-100/80 shadow-lg px-3 py-2 rounded-xl flex items-center gap-2">
                <StarRating rating={product.rating || 4.5} size="sm" />
                <div className="h-3 w-px bg-slate-200" />
                <span className="text-[10px] font-bold text-slate-500">{(product.reviewCount || 0).toLocaleString()}</span>
              </div>
            </div>

            {product.prime && (
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 lg:right-auto lg:left-4 sm:lg:left-6 lg:top-[56px] z-20">
                <span className="inline-flex items-center gap-1 bg-[#232f3e] text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  Prime
                </span>
              </div>
            )}

            {/* Product Image */}
            <a href={amazonLink} target="_blank" rel="nofollow sponsored noopener" className="relative group/img w-full flex items-center justify-center aspect-square lg:aspect-auto lg:h-[320px] my-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-violet-400/4 to-pink-400/8 rounded-full blur-[50px] scale-75 group-hover/img:scale-100 transition-transform duration-700" />
              <img src={imageSrc} alt={product.title} onError={onImageError} loading="lazy" className="relative z-10 w-auto max-h-[220px] sm:max-h-[260px] lg:max-h-[290px] object-contain drop-shadow-xl transition-all duration-700 group-hover/img:scale-105" />
            </a>

            {/* Brand */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-300" />
              <p className="text-[8px] font-black uppercase tracking-[3px] text-slate-400">Official {product.brand || 'Brand'} Product</p>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:w-[60%] p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-white relative">
            <div className="space-y-5 sm:space-y-6">

              {/* Category */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-[8px] sm:text-[9px] font-black uppercase tracking-[1.5px] px-3 py-1.5 rounded-full border border-blue-100/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {product.category || "Premium Selection"}
                </span>
                {product.prime && (
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
                    Free Delivery
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black text-slate-900 leading-[1.1] tracking-tight">{product.title}</h2>

              {/* Verdict */}
              <div className="relative">
                <div className="absolute -left-1 -top-2 text-5xl text-blue-100/50 font-serif leading-none select-none pointer-events-none">{"\u201C"}</div>
                <blockquote className="relative pl-5 pr-3 py-4 border-l-[3px] border-blue-400/70 bg-gradient-to-r from-slate-50/70 to-transparent rounded-r-xl">
                  <p className="text-[13px] sm:text-sm font-medium text-slate-600 leading-relaxed">{verdict}</p>
                </blockquote>
                <div className="flex items-center gap-2 mt-2.5 pl-5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#22c55e"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">Verified Analysis</span>
                  <span className="text-slate-300">{"\u00B7"}</span>
                  <span className="text-[9px] font-medium text-slate-400">Updated {currentDate}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 sm:p-3.5 bg-gradient-to-br from-slate-50/70 to-white rounded-xl border border-slate-100/80 hover:border-emerald-200/60 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 group/bullet">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover/bullet:scale-110 transition-transform">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700 leading-snug pt-0.5">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100/80">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-1.5">
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-[2px]">Best Price</span>
                    <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Save Today</span>
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">{product.price}</span>
                </div>

                <a
                  href={amazonLink}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="relative w-full sm:w-auto overflow-hidden group/btn rounded-xl sm:rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-xl sm:rounded-2xl blur-md opacity-50 group-hover/btn:opacity-80 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-[2px] sm:tracking-[3px] shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover/btn:from-blue-600 group-hover/btn:via-indigo-600 group-hover/btn:to-blue-600 group-hover/btn:scale-[1.02] active:scale-[0.98]">
                    <span>Check Price</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover/btn:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="relative z-10 bg-gradient-to-b from-slate-50/50 to-slate-100/30 border-t border-slate-200/50 p-5 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between mb-5 sm:mb-7">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">Common Questions</h3>
                  <p className="text-[10px] text-slate-500">Quick answers for buyers</p>
                </div>
              </div>
              <span className="hidden sm:flex text-[8px] font-bold uppercase tracking-[2px] text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-200 items-center gap-1">{faqs.length} FAQs</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    expandedFaq === idx
                      ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50/50 shadow-lg shadow-blue-100/40'
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md hover:shadow-slate-100/60'
                  }`}
                  aria-expanded={expandedFaq === idx}
                >
                  <div className="p-4 sm:p-5 flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black transition-all duration-300 ${
                      expandedFaq === idx ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/30 scale-105' : 'bg-slate-100 text-slate-400'
                    }`}>Q{idx + 1}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-800 text-[13px] leading-snug pr-6">{faq.question}</h4>
                      <div className="overflow-hidden transition-all duration-500 ease-out" style={{ maxHeight: expandedFaq === idx ? '200px' : '0px', opacity: expandedFaq === idx ? 1 : 0, marginTop: expandedFaq === idx ? '10px' : '0px' }}>
                        <p className="text-[13px] text-slate-500 leading-relaxed border-l-2 border-blue-300/60 pl-3">{faq.answer}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 ${expandedFaq === idx ? 'bg-blue-100 rotate-180' : 'bg-slate-50'}`}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={expandedFaq === idx ? '#3b82f6' : '#94a3b8'} strokeWidth="2" strokeLinecap="round"><path d="M2 4l4 4 4-4" /></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Trust Footer */}
        <div className="border-t border-slate-100/80 bg-white/80 backdrop-blur-sm px-5 sm:px-8 lg:px-10 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {[
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Amazon Verified' },
              { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'Secure Checkout' },
              { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', label: '30-Day Returns' },
              { icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', label: 'Fast Shipping' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors duration-300 cursor-default group/trust">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover/trust:scale-110 transition-transform duration-300"><path d={icon} /></svg>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Export ─── */
export const ProductBoxPreview: React.FC<ProductBoxPreviewProps> = ({
  product,
  affiliateTag = 'tag-20',
  mode = 'ELITE_BENTO'
}) => {
  const [imgError, setImgError] = useState(false);

  const amazonLink = `https://www.amazon.com/dp/${product.asin || "B08N5M7S6K"}?tag=${affiliateTag}`;
  const imageSrc = imgError
    ? `https://via.placeholder.com/800x800.png?text=${encodeURIComponent(product.brand || 'Product')}`
    : (product.imageUrl || 'https://via.placeholder.com/800x800.png?text=Acquiring+Asset');

  const bullets = useMemo(() => (product.evidenceClaims && product.evidenceClaims.length >= 4) ? product.evidenceClaims.slice(0, 4) : DEFAULT_BULLETS, [product.evidenceClaims]);
  const faqs = useMemo(() => (product.faqs && product.faqs.length >= 4) ? product.faqs.slice(0, 4) : DEFAULT_FAQS, [product.faqs]);
  const verdict = useMemo(() => (product.verdict && product.verdict.length > 30) ? product.verdict : DEFAULT_VERDICT, [product.verdict]);

  const handleImageError = () => setImgError(true);

  if (mode === 'TACTICAL_LINK') {
    return <TacticalLink product={product} amazonLink={amazonLink} imageSrc={imageSrc} verdict={verdict} onImageError={handleImageError} />;
  }

  return <EliteBento product={product} amazonLink={amazonLink} imageSrc={imageSrc} verdict={verdict} bullets={bullets} faqs={faqs} onImageError={handleImageError} />;
};

export default ProductBoxPreview;
