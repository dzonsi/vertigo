<template>
  <div class="hero-clients" data-aos="fade-up" data-aos-once="true">
    <span class="hero-clients-info"
      >They <br />
      Trust <br />
      Us.</span
    >
    <div class="hero-clients-list">
      <v-icon
        class="hero-clients-list-image"
        name="brands/microsoft"
        :scale="size"
      />
      <v-icon
        class="hero-clients-list-image"
        name="brands/cc-visa"
        :scale="size"
      />
      <v-icon
        class="hero-clients-list-image"
        name="brands/google"
        :scale="size"
      />
      <v-icon
        class="hero-clients-list-image"
        name="brands/apple"
        :scale="size"
      />
      <v-icon
        class="hero-clients-list-image"
        name="brands/cc-paypal"
        :scale="size"
      />
      <v-icon
        class="hero-clients-list-image"
        name="brands/steam"
        :scale="size"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroClients',
  data() {
    return {
      size: 3
    }
  },
  methods: {
    changeSize() {
      window.innerWidth > 1200 ? (this.size = 4) : (this.size = 3)
    }
  },
  created() {
    window.addEventListener('resize', this.changeSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.changeSize)
  }
}
</script>

<style lang="scss">
.hero-clients {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  top: auto;
  right: auto;
}
.hero-clients-info {
  font-weight: 900;
  text-transform: uppercase;
  padding: 15px;
  position: relative;
  &::after {
    width: 30px;
    height: 1px;
    content: '';
    background-color: $white;
    position: absolute;
    right: -10px;
    bottom: 27px;
  }
}
.hero-clients-list {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero-clients-list-image {
  margin: 0;
  opacity: 0.5;
  &:first-of-type {
    margin: 0 0 0 10%;
  }
}
@include media-breakpoint-up(xl) {
  .hero-clients {
    bottom: 40px;
  }
  .hero-clients-info {
    font-size: 18px;
  }
}
@include media-breakpoint-down(md) {
  .hero-clients {
    display: none;
  }
}
</style>
