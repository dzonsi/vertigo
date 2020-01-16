<template>
  <div class="scroll-indicator"></div>
</template>

<script>
export default {
  name: 'ScrollIndicator'
}
</script>

<style lang="scss">
/* missing class for opacity 0 on first page */
.scroll-indicator {
  width: 30px;
  height: 47px;
  background-image: url('../../assets/mouse.png');
  background-size: cover;
  animation: animate-mouse 2s infinite;
  position: fixed;
  bottom: 34px;
  left: 44px;
  z-index: 2;
  background-position: 30px 0;
}
@keyframes animate-mouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-15px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
@include media-breakpoint-down(md) {
  .scroll-indicator {
    display: none;
  }
}
@include media-breakpoint-up(xl) {
  .scroll-indicator {
    bottom: 60px;
    left: 74px;
  }
}
</style>
