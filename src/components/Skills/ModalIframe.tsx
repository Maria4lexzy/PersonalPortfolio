import React, { useState, useEffect, useRef } from 'react';
import '../../styles/modal.scss';
interface ModalProps {
  url: string;
  onClose: () => void;
}

const ModalIframe: React.FC<ModalProps> = ({ url, onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <div>
      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content' ref={modalRef}>
            <span onClick={closeModal} className='modal-close'>
              Close
            </span>
            <iframe src={url} title='Iframe Modal' frameBorder='0'></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalIframe;
