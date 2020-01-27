<template>
  <div class="footer-copyright">
    ©2020 Nikola. All Rights Reserved.
    <br class="d-sm-none" />
    <router-link to="/" class="footer-copyright-link"
      >Privacy Policy</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'FooterCopyright'
}
</script>

<style lang="scss">
.footer-copyright {
  color: $primary;
  text-align: center;
  padding: 15px 0;
}
.footer-copyright-link {
  color: $primary;
  text-decoration: none;
  display: inline-block;
  position: relative;
  &:hover {
    color: $primary;
    text-decoration: none;
    &::after {
      width: 0;
    }
  }
  &::after {
    background-color: $primary;
    width: 100%;
    height: 1px;
    margin: 0 auto;
    content: '';
    transition: width 0.2s;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
@include media-breakpoint-up(xl) {
  .footer-copyright {
    padding: 30px 0;
  }
}
</style>
