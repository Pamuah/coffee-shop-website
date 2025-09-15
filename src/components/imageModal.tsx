import React from "react";

// Match the same type used in Gallery
interface GalleryImage {
  id: string | number;
  src: string;
  webp?: string;
  alt: string;
  description?: string;
}

interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <picture>
          {image.webp && <source srcSet={image.webp} type="image/webp" />}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-contain max-h-[80vh]"
          />
        </picture>
        {image.description && (
          <p className="mt-2 text-gray-700 text-center">{image.description}</p>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
