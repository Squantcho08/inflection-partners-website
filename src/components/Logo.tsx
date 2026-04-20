import { useState } from 'react';

export default function Logo({ className = "h-8" }: { className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {!error ? (
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/5874400e238d436a87c672b1d0356cda/9817757b32254350993952f99589dfbe" 
          alt="Inflection Partners" 
          className="h-full w-auto block select-none object-contain transition-all duration-700 hover:scale-105"
          style={{ 
            filter: 'contrast(1.1) brightness(1.05) drop-shadow(0 0 8px rgba(45, 212, 191, 0.3))',
            imageRendering: 'auto'
          }}
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg 
          viewBox="0 0 400 620" 
          className="h-full w-auto overflow-visible select-none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Inflection Partners Logo"
        >
          <defs>
            <radialGradient id="bg-glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#14b8a6">
                <animate attributeName="stop-opacity" values="0.25;0.15;0.25" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="s-navy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="teal-swoosh" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>

            <filter id="glow-filter" x="-200%" y="-200%" width="500%" height="500%" colorInterpolationFilters="sRGB">
              <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur">
                <animate attributeName="stdDeviation" values="8;36;8" dur="3s" repeatCount="indefinite" />
              </feGaussianBlur>
              <feFlood floodColor="#2dd4bf" result="flood">
                <animate attributeName="flood-color" values="#2dd4bf;#14b8a6;#2dd4bf" dur="6s" repeatCount="indefinite" />
                <animate attributeName="flood-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </feFlood>
              <feComposite in="flood" in2="blur" operator="in" result="glow" />
              <feComponentTransfer in="glow" result="intense-glow">
                <feFuncA type="linear" slope="2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="intense-glow" />
                <feMergeNode in="intense-glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="logo-content" transform="translate(0, 20)">
            <g className="logo-mark">
              <circle cx="200" cy="280" r="280" fill="url(#bg-glow)" opacity="0.4" />
              <path 
                d="M280 120 C 120 120, 80 280, 200 280 C 320 280, 280 440, 120 440" 
                stroke="url(#s-navy)" 
                strokeWidth="65" 
                strokeLinecap="round" 
              />
              <path 
                d="M80 440 C 150 420, 220 300, 260 180" 
                stroke="url(#teal-swoosh)" 
                strokeWidth="38" 
                strokeLinecap="round" 
                filter="url(#glow-filter)" 
              />
              <circle cx="260" cy="180" r="40" fill="#2dd4bf" opacity="0.8" filter="url(#glow-filter)">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>

            <g transform="translate(0, 520)" className="logo-text">
               <text x="200" y="0" textAnchor="middle" fill="#fff" fontSize="85" fontWeight="900" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>Inflection</text>
               <text x="200" y="75" textAnchor="middle" fill="#fff" opacity="0.6" fontSize="35" fontWeight="700" letterSpacing="18" style={{ fontFamily: 'Inter, sans-serif' }}>PARTNERS</text>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

