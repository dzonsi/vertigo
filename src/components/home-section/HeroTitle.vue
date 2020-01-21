<template>
  <h1 class="hero-title">beyond <span>vertigo</span></h1>
</template>

<script>
export default {
  name: 'HeroTitle'
}
</script>

<style lang="scss">
.hero-title {
  font-family: 'Campton Regular', Arial, sans-serif;
  width: 74%;
  font-size: 45px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: calc(2em / 3);
  margin: 0 auto;
  opacity: 0;
  animation: animation-fadein 0.4s ease-in forwards;
  position: absolute;
  top: 50%;
  right: 0;
  left: 40px;
  transform: translateY(-50%);
  z-index: 5;
  color: $white;
  & span {
    font-family: 'Campton Book', Arial, sans-serif;
    font-weight: normal;
  }
}
@keyframes animation-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@include media-breakpoint-down(xs) {
  .hero-title {
    width: 90%;
    font-size: 25px;
    left: 25px;
  }
}
@include media-breakpoint-up(xl) {
  .hero-title {
    width: 100%;
    font-size: 60px;
    left: 30px;
  }
}
</style>
