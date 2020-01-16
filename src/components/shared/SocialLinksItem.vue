<template>
  <li class="social-links-item">
    <a href="javascript:void(0)" class="social-links-item-link">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SocialLinksItem'
}
</script>

<style lang="scss">
.social-links-item {
  display: inline-block;
  width: 40px;
  height: 40px;
  transition: all 0.5s;
}
.social-links-item-link {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray-500;
  transition: color 0.2s;
  &:hover {
    color: $purple;
  }
}
@include media-breakpoint-down(sm) {
  .social-links-item {
    width: 30px;
    height: 30px;
  }
  .social-links-item-link {
    width: 30px;
    height: 30px;
  }
}
</style>
