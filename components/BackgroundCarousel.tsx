'use client'

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type BackgroundCarouselProps = {
  images: string[];
  className?: string;
};

export function BackgroundCarousel({ images, className }: BackgroundCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="w-full h-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div 
              className="w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                filter: 'blur(2px) brightness(0.8)',
                transform: 'scale(1.02)' // Prevents blur from showing the edges
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
