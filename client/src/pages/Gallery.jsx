import { useState, useEffect, useRef } from "react";

import { getUploadedImages } from "../utils/service";
import { GallerySkeleton } from "../ui/GallerySkeleton";

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef(null);

  const loadImages = async () => {
    if (isLoading || (!nextCursor && nextCursor !== null)) return;
    setIsLoading(true);
    console.log("Fetching images..."); // Debug log

    try {
      const response = await getUploadedImages(nextCursor);
      console.log("Fetched data:", response); // Debug log
      setImages((prevImages) => [...prevImages, ...response.resources]);
      setNextCursor(response.next_cursor);
    } catch (error) {
      console.error("Failed to load images", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Bottom element is intersecting"); // Debug log
          loadImages();
        }
      },
      { root: null, rootMargin: "20px", threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [nextCursor, isLoading]);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array(8)
                .fill()
                .map((_, index) => <GallerySkeleton key={index} />)
            : images.map((image, index) => (
                <div
                  key={image.asset_id + "_" + index}
                  className="overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.secure_url}
                    alt={image.public_id}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          <div
            ref={loader}
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center"
          >
            {isLoading && "Loading more images..."}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.secure_url}
              alt={selectedImage.public_id}
              className="max-w-3xl max-h-full z-10 rounded-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};
