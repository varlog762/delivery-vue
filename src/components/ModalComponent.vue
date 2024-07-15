<script></script>

<template>
  <div class="cart-modal__overlay">
    <div class="cart-modal">
      <div class="cart-modal__title-box">
        <h2 class="cart-modal__title">Корзина</h2>
        <button type="button" id="modal-close-btn" class="btn close-btn">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
              fill="black" />
          </svg>
        </button>
      </div>
      <div class="cart-modal__products-list">
        <ul>
          <li>
            <div class="cart-modal__product-item">
              <div class="product-name">Ролл угорь стандарт</div>
              <div class="product-controls-box">
                <div class="product-price">250 ₽</div>
                <div class="product-btns-box">
                  <button type="button" class="btn cart-modal-btn">-</button>
                  <div class="product-count">1</div>
                  <button type="button" class="btn cart-modal-btn">+</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="cart-modal__product-item">
              <div class="product-name">Окинава стандарт</div>
              <div class="product-controls-box">
                <div class="product-price">250 ₽</div>
                <div class="product-btns-box">
                  <button type="button" class="btn cart-modal-btn">-</button>
                  <div class="product-count">1</div>
                  <button type="button" class="btn cart-modal-btn">+</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="cart-modal__product-item">
              <div class="product-name">Ролл с креветкой стандарт</div>
              <div class="product-controls-box">
                <div class="product-price">250 ₽</div>
                <div class="product-btns-box">
                  <button type="button" class="btn cart-modal-btn">-</button>
                  <div class="product-count">1</div>
                  <button type="button" class="btn cart-modal-btn">+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-modal__total-box">
        <div class="cart-modal__total-sum">750 ₽</div>
        <div class="cart-modal__controls">
          <button type="button" class="btn primary-btn">Оформить заказ</button>
          <button type="button" class="btn outline-btn ">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-modal__overlay {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

.cart-modal__overlay.open {
  display: block;
}

.cart-modal {
  position: relative;
  padding: 40px 46px;
  max-width: 780px;
  min-height: 100px;
  border-radius: 5px;
  background: var(--gray---gray-1);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.cart-modal__title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
}

.product-name {
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  color: var(--gray---gray-10);
}

.close-btn {
  padding: 10px;
  background: inherit;
}

.cart-modal__products-list {
  margin-bottom: 53px;
}

.cart-modal__products-list ul li {
  margin-bottom: 15px;
}

.cart-modal__product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 10px 0;
  border-bottom: 1px solid var(--gray---gray-5);
}

.product-controls-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 47px;
}

.product-price {
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: var(--gray---gray-10);
}

.product-btns-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.product-count {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--gray---gray-10);
}

.cart-modal-btn {
  min-width: 32px;
  border: 1px solid var(--daybreak-blue---blue-5);
  border-radius: 2px;
  padding: 5px 16px;
  background: var(--gray---gray-1);
  color: var(--daybreak-blue---blue-5);
}

.cart-modal__total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-modal__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.cart-modal__total-sum {
  border-radius: 5px;
  padding: 15px 20px;
  min-height: 53px;
  background: var(--gray---gray-9);
  font-weight: 700;
  font-size: 20px;
  color: var(--gray---gray-2);
}
</style>
