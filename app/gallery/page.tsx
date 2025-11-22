"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: number;
}

// List of images in the public/gallary directory
const imageFiles = [
  { name: 'gal1.jpg', alt: 'Gallery Image 1' },
  { name: 'gal2.jpg', alt: 'Gallery Image 2' },
  { name: 'gal3.jpg', alt: 'Gallery Image 3' },
  { name: 'gal4.jpg', alt: 'Gallery Image 4' },
  { name: 'gal5.jpg', alt: 'Gallery Image 5' },
  { name: 'gal6.jpg', alt: 'Gallery Image 6' },
  { name: 'gal7.jpg', alt: 'Gallery Image 7' },
];

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(-1);


  useEffect(() => {
    // Load all images with their dimensions
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imageFiles.map(async (file) => {
          return new Promise<GalleryImage>((resolve) => {
            const img = new Image();
            img.src = `/gallary/${file.name}`;
            img.onload = () => {
              resolve({
                src: `/gallary/${file.name}`,
                alt: file.alt,
                width: img.width,
                height: img.height,
                aspectRatio: img.width / img.height
              });
            };
            // Fallback in case image fails to load
            img.onerror = () => {
              resolve({
                src: `/gallary/${file.name}`,
                alt: file.alt,
                width: 800,
                height: 600,
                aspectRatio: 4/3
              });
            };
          });
        })
      );
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Explore moments from our vibrant campus life and activities
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[50vh]">
                <div className="animate-pulse text-muted-foreground">Loading gallery...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, idx) => (
                  <Card 
                    key={idx} 
                    className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300" 
                    onClick={() => setIndex(idx)}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </Card>
                ))}
              </div>
            )}
          </div>

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images.map(img => ({ src: img.src, alt: img.alt, width: img.width, height: img.height }))}
          />

          {/* Video Tour CTA */}
          <section className="py-20 bg-muted/30 mt-12">
            <div className="container mx-auto px-4">
              <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">Take a Virtual Tour</h2>
                <p className="text-lg text-muted-foreground">
                  Experience our campus from anywhere in the world with our interactive virtual tour.
                </p>
                <div className="aspect-video bg-cover bg-center rounded-lg flex items-center justify-center" 
                   style={{ backgroundImage: `url('/placeholder-tour.jpg')` }}>
                  <div className="text-center space-y-2">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <div className="h-12 w-12 rounded-full bg-primary/40 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-foreground border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Click to start virtual tour</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
