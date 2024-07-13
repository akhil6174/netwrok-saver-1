import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';

const Modal = ({ onClose, isOpen, children }) => {
  // Handle click outside the modal to close (optional)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      {isOpen && (
        <div
          className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur"
          onClick={handleBackdropClick}
        >
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
