const getModal = (modalContent: HTMLElement): HTMLElement => {
  const modalBackcground = document.createElement("div");
  modalBackcground.className = "modal-background";

  const Modal = document.createElement("div");
  Modal.className = "modal";

  modalBackcground.appendChild(Modal);

  Modal.appendChild(modalContent);

  setTimeout(() => {
    modalBackcground.remove();
  }, 2000);

  return modalBackcground;
};

export default getModal;
