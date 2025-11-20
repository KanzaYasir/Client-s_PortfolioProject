import React, { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string | string[]; // string or array of image paths
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const isImageGallery = Array.isArray(link);

  const openModal = () => {
    setModalOpen(true);
    setCurrentIndex(0);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    if (!isImageGallery) return;
    setCurrentIndex((prev) => (prev === 0 ? link.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (!isImageGallery) return;
    setCurrentIndex((prev) => (prev === link.length - 1 ? 0 : prev + 1));
  };

  // Close modal when clicking outside the image container
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className="relative backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-3xl p-6 shadow-xl border border-white/10 dark:border-gray-700 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col">
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed flex-grow">{description}</p>

      {/* Handle links / images */}
      {isImageGallery ? (
        <>
          <button
            onClick={openModal}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium shadow transition-all duration-300"
          >
            View Project
          </button>

          {modalOpen && (
            <div
              ref={modalRef}
              onClick={handleClickOutside}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <div className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center">
                
                {/* Left arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 hover:bg-white/20 rounded-full transition z-40"
                >
                  &#10094;
                </button>

                {/* Image */}
                <img
                  src={link[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  className="max-h-full max-w-full rounded-lg shadow-2xl object-contain"
                />

                {/* Right arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-1 hover:bg-white/20 rounded-full transition z-40"
                >
                  &#10095;
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-50">
                  {currentIndex + 1} / {link.length}
                </div>
              </div>
            </div>
          )}
        </>
      ) : link === "Locally Hosted" ? (
        <span className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-gray-500 text-white font-medium shadow cursor-default">
          Locally Hosted
        </span>
      ) : (
        link && (
          <a
            href={link as string}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-medium shadow transition-all duration-300"
          >
            View Project
          </a>
        )
      )}
    </div>
  );
};

export default ProjectCard;
