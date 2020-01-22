<template>
  <div class="hero-earth"></div>
</template>

<script>
export default {
  name: 'HeroEarth'
}
</script>

<style lang="scss">
.hero-earth {
  display: none;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  &::after {
    display: block;
    width: 590px;
    height: 590px;
    content: '';
    margin: 0 auto;
    background-image: url('../../assets/planet.jpg');
    background-size: cover;
    border-radius: 100%;
    animation: animate-earth 15s linear both infinite;
  }
}
@keyframes animate-earth {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@include media-breakpoint-down(md) {
  .hero-earth {
    display: block;
  }
}
@include media-breakpoint-down(sm) {
  .hero-earth {
    &::after {
      width: 450px;
      height: 450px;
    }
  }
}
@include media-breakpoint-down(xs) {
  .hero-earth {
    &::after {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
