<template>
  <div class="hero">
    <hero-title></hero-title>
    <hero-clients></hero-clients>
    <hero-earth></hero-earth>
  </div>
</template>

<script>
import HeroTitle from '@/components/home-section/HeroTitle.vue'
import HeroEarth from '@/components/home-section/HeroEarth.vue'
import HeroClients from '@/components/home-section/HeroClients.vue'

export default {
  name: 'HomeSection',
  components: {
    HeroTitle,
    HeroEarth,
    HeroClients
  }
}
</script>

<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@include media-breakpoint-down(md) {
  .hero {
    background-color: #070707;
  }
}
</style>
