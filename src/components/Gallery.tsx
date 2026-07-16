import React, { useState } from 'react';
import { galleryItems } from '../data';
import { ZoomIn, ZoomOut, RefreshCw, X, ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomScale(1);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1));
      setZoomScale(1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % galleryItems.length);
      setZoomScale(1);
    }
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleZoomReset = () => {
    setZoomScale(1);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Project Visuals
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            Pawanputra Project Gallery
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            A visual walk-through of our actual construction sites, heavy equipment layouts, and finished residential/industrial works.
          </p>
        </div>

        {/* Structured 4-Row Gallery Grid */}
        <div className="space-y-12">
          
          {/* Row 1 */}
          {galleryItems.slice(0, 3).length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold block mb-4 border-b border-primary-200 pb-2">
                Row I: Project Planning & Townships
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems.slice(0, 3).map((item, idx) => (
                  <GalleryCard key={item.id} item={item} index={idx} onClick={openLightbox} />
                ))}
              </div>
            </div>
          )}

          {/* Row 2 */}
          {galleryItems.slice(3, 6).length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold block mb-4 border-b border-primary-200 pb-2">
                Row II: Civil Infrastructure, Water Supply & Industrial Assets
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems.slice(3, 6).map((item, idx) => (
                  <GalleryCard key={item.id} item={item} index={idx + 3} onClick={openLightbox} />
                ))}
              </div>
            </div>
          )}

          {/* Row 3 */}
          {galleryItems.slice(6, 9).length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold block mb-4 border-b border-primary-200 pb-2">
                Row III: Heavy Plants & Fluid Reservoirs
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems.slice(6, 9).map((item, idx) => (
                  <GalleryCard key={item.id} item={item} index={idx + 6} onClick={openLightbox} />
                ))}
              </div>
            </div>
          )}

          {/* Row 4 */}
          {galleryItems.slice(9, 12).length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-400 font-bold block mb-4 border-b border-primary-200 pb-2">
                Row IV: Specialized Paving, Boundary & Temple Civic Development
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems.slice(9, 12).map((item, idx) => (
                  <GalleryCard key={item.id} item={item} index={idx + 9} onClick={openLightbox} />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* CUSTOM LIGHTBOX MODAL WITH ZOOM CONTROL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between text-white z-20 shrink-0 py-2 border-b border-white/10 max-w-7xl mx-auto w-full">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                {galleryItems[lightboxIndex].category}
              </span>
              <h4 className="font-display text-lg font-bold">
                {galleryItems[lightboxIndex].title}
              </h4>
            </div>

            {/* Interactive Zoom Toolbar */}
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                className="p-2 bg-white/10 hover:bg-amber-500 hover:text-primary-950 rounded-sm text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                className="p-2 bg-white/10 hover:bg-amber-500 hover:text-primary-950 rounded-sm text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomReset(); }}
                className="p-2 bg-white/10 hover:bg-amber-500 hover:text-primary-950 rounded-sm text-white transition-colors"
                title="Reset Zoom"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              
              <div className="h-5 w-px bg-white/25 mx-1"></div>

              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-rose-500 rounded-sm text-white transition-colors"
                title="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Body (Image & Panning Canvas) */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden w-full max-w-7xl mx-auto py-8">
            
            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-30 bg-white/10 hover:bg-amber-500 hover:text-primary-950 p-3 rounded-sm text-white transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Render Image with dynamic CSS Scale transform */}
            <div 
              className="relative overflow-auto max-h-full max-w-full flex items-center justify-center transition-transform duration-200 cursor-grab active:cursor-grabbing"
              style={{ transform: `scale(${zoomScale})` }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-30 bg-white/10 hover:bg-amber-500 hover:text-primary-950 p-3 rounded-sm text-white transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Photo description block inside Lightbox */}
          <div className="text-center text-white max-w-3xl mx-auto px-6 z-20 shrink-0 pb-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium bg-primary-950/80 border border-primary-800/40 px-6 py-4 rounded-sm shadow-xl backdrop-blur-xs">
              {galleryItems[lightboxIndex].description}
            </p>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="text-center text-white/60 text-xs font-mono shrink-0 py-3 border-t border-white/10 max-w-7xl mx-auto w-full flex items-center justify-between">
            <span>Lightbox zoom scale: {Math.round(zoomScale * 100)}%</span>
            <span className="text-amber-400 font-bold uppercase tracking-wider">
              Photo {lightboxIndex + 1} of {galleryItems.length}
            </span>
            <span>Use buttons above to zoom, reset, or close</span>
          </div>

        </div>
      )}

    </section>
  );
}

// Sub-component GalleryCard for clean structure
interface GalleryCardProps {
  key?: React.Key;
  item: typeof galleryItems[0];
  index: number;
  onClick: (index: number) => void;
}

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  return (
    <div 
      className="bg-primary-50 rounded-sm border border-primary-200 overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border-r-4 border-r-amber-500 flex flex-col h-full"
      onClick={() => onClick(index)}
    >
      <div className="relative h-64 overflow-hidden bg-primary-100 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover overlay panel */}
        <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/95 text-primary-950 p-3 rounded-sm shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Maximize2 className="w-5 h-5 text-amber-600" />
          </div>
        </div>

        {/* Visual Category Badge */}
        <span className="absolute top-4 left-4 bg-primary-900/90 text-[10px] uppercase font-mono tracking-widest text-amber-400 px-2.5 py-1.5 rounded-sm font-bold backdrop-blur-xs border border-amber-500/20">
          {item.category}
        </span>
      </div>

      <div className="p-5 bg-white flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-mono font-bold text-primary-400">
              Gallery Index #{item.id}
            </span>
            <span className="text-[10px] font-mono text-primary-500 font-bold uppercase tracking-wider bg-primary-50 px-2 py-0.5 rounded-sm border border-primary-200">
              Row {item.row}
            </span>
          </div>
          <h4 className="font-display text-base font-bold text-primary-900 group-hover:text-amber-600 transition-colors uppercase">
            {item.title}
          </h4>
          <p className="text-xs text-primary-600 mt-2.5 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
