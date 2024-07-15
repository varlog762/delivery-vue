export const modalFunc = () => {
  const CART_BUTTON_ID = '#cart-btn';
  const MODAL_CLOSE_BUTTON_ID = '#modal-close-btn';

  const cartModal = document.querySelector('.cart-modal__overlay');

  const openModal = () => {
    cartModal.classList.add('open');
    document.body.classList.add('modal-open');
  };
  const closeModal = () => {
    cartModal.classList.remove('open');
    document.body.classList.remove('modal-open');
  };

  document.addEventListener('click', event => {
    if (event.target.closest(CART_BUTTON_ID)) {
      openModal();
    } else if (
      event.target.closest(MODAL_CLOSE_BUTTON_ID) ||
      event.target === cartModal
    ) {
      closeModal();
    }
  });
};
