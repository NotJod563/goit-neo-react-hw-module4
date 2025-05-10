import css from './ImageModal.module.css';
import { useEffect } from 'react';

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!image || !image.urls) return null;

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Modal image'}
          className={css.image}
        />
      </div>
    </div>
  );
};

export default ImageModal;
