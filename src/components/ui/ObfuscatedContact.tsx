import React, { useEffect, useRef } from 'react';
import { FaWhatsapp, FaWeixin, FaViber } from 'react-icons/fa';

export type ContactPlatform = 'whatsapp' | 'wechat' | 'viber';

interface ObfuscatedContactProps {
  name: string;
  phone: string;
  avatar?: string;
  platforms?: ContactPlatform[];
  size?: 'sm' | 'lg';
}

const ObfuscatedContact: React.FC<ObfuscatedContactProps> = ({ name, phone, avatar, platforms = [], size = 'sm' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getPlatformIcon = (platform: ContactPlatform) => {
    const iconClass = size === 'lg' ? "text-2xl" : "text-lg";
    switch (platform) {
      case 'whatsapp': return <FaWhatsapp className={`text-[#25D366] ${iconClass}`} />;
      case 'wechat': return <FaWeixin className={`text-[#07C160] ${iconClass}`} />;
      case 'viber': return <FaViber className={`text-[#7360F2] ${iconClass}`} />;
      default: return null;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on expected text size to maintain crispness
    // Multiplying by 2 for high-DPI (Retina) displays
    const scale = window.devicePixelRatio || 1;
    
    // Responsive font sizing for 'lg' variant
    const isMobile = window.innerWidth < 768;
    const fontSize = size === 'lg' ? (isMobile ? 14 : 18) : 12;
    const padding = size === 'lg' ? (isMobile ? 6 : 8) : 4;
    
    // Set explicit width and height before scaling
    const text = `${name}: ${phone}`;
    ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
    const textMetrics = ctx.measureText(text);
    const width = textMetrics.width + padding * 2;
    const height = fontSize + padding * 2;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = '100%';
    canvas.style.maxWidth = `${width}px`;
    canvas.style.height = 'auto';

    // Scale context to ensure crisp text
    ctx.scale(scale, scale);

    // Draw text
    ctx.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
    ctx.fillStyle = '#9ca3af'; // Tailwind's text-gray-400 equivalent approx
    ctx.textBaseline = 'middle';
    ctx.fillText(text, padding, height / 2);

    // Optional: Add some faint noise or lines to further confuse OCR 
    // without impacting human readability too much
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2 + 2);
    ctx.stroke();

  }, [name, phone, size]);

  const containerClass = size === 'lg' ? "flex flex-col items-center gap-4 w-full" : "flex items-center gap-3 shrink-0";
  const avatarClass = size === 'lg' 
    ? "w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg bg-gray-800 border-4 border-[var(--color-accent-blue)]" 
    : "w-8 h-8 rounded-full object-cover shadow-sm bg-gray-800";

  return (
    <div className={containerClass} title="Contact Number">
      {avatar && (
        <img 
          src={avatar} 
          alt={`${name} Avatar`} 
          className={avatarClass} 
        />
      )}
      <div className={`flex items-center ${size === 'lg' ? 'gap-3 mt-2 w-full justify-center' : 'gap-1.5'}`}>
        <div className={`${size === 'lg' ? 'flex-1 justify-center' : ''} max-w-full overflow-hidden select-none pointer-events-none flex`} aria-hidden="true">
          <canvas ref={canvasRef} className="block h-auto" />
        </div>
        {platforms.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {platforms.map((platform) => (
              <span key={platform} title={platform} className="cursor-help transition-transform hover:scale-110">
                {getPlatformIcon(platform)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ObfuscatedContact;
