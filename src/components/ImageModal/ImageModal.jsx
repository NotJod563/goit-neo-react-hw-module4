import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, modalData }) => {
  if (!modalData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
      className={css.modal}
      closeTimeoutMS={200}
    >
      <img
        src={modalData.url}
        alt={modalData.alt}
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;