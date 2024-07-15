<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/">
          <div class="logo footer-logo">
            <div class="logo-img"><img src="../assets/icons/logo.svg" alt="logo"></div>
            <div class="logo-title">Food<br>Delivery</div>
          </div>
        </router-link>
        <div class="footer-nav"></div>
        <div class="footer-social"></div>
        <div class="footer-nav">
          <ul class="footer-nav-list">
            <li class="footer-nav-link"><a href="#">Ресторанам</a></li>
            <li class="footer-nav-link"><a href="#">Курьерам</a></li>
            <li class="footer-nav-link"><a href="#">Пресс-центр</a></li>
            <li class="footer-nav-link"><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="#">
            <img src="../assets/icons/inst-logo.png" alt="instagram logo" class="social-link">
          </a>
          <a href="#">
            <img src="../assets/icons/fb-logo.png" alt="facebook logo" class="social-link">
          </a>
          <a href="#">
            <img src="../assets/icons/vk-logo.png" alt="vk logo" class="social-link">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  min-height: 156px;
  display: flex;
  align-items: center;
}

.footer-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.footer-nav-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav-list a {
  font-weight: 400;
  font-size: 18px;
  color: var(--gray---gray-8);
}

.footer-social {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 21px;
}
</style>