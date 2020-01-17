<template>
  <header class="header">
    <div class="navbar-header" data-aos="fade-down" data-aos-once="true">
      <router-link to="/" class="navbar-link">
        <LogoSmall></LogoSmall>
      </router-link>
    </div>
  </header>
</template>

<script>
import LogoSmall from '@/components/shared/LogoSmall.vue'
export default {
  name: 'Header',
  components: {
    LogoSmall
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 90px;
  background-color: transparent;
  position: fixed;
  top: 0;
  transition: all 0.2s;
  z-index: 4;
}
.navbar-header {
  width: 60px;
  height: 36px;
  padding: 0;
  position: relative;
  top: 38px;
  left: 44px;
  transition: all 0.2s;
}
.navbar-link {
  display: block;
  width: 100px;
  height: 76px;
  position: absolute;
  top: -20px;
  left: -20px;
  & svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
@include media-breakpoint-down(xs) {
  .navbar-header {
    top: 28px;
    left: 20px;
  }
}
@include media-breakpoint-up(xl) {
  .navbar-header {
    top: 68px;
    left: 74px;
  }
}
</style>
