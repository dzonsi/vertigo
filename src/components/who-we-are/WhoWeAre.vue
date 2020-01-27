<template>
  <div class="container">
    <div class="who-we-are">
      <h2 class="navigation-indicator">Who we are</h2>
      <div :class="{ 'animate-description': isAnimate }">
        <p class="who-we-are-lead">
          We are driven, we are talented, and we are on a mission: to build
          exceptional digital solutions that delight and impress.
        </p>
        <h3 class="who-we-are-title">Most of all, we love what we do.</h3>
        <router-link to="/" class="who-we-are-link btn">Explore</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoWeAre',
  data() {
    return {
      isAnimate: false
    }
  },
  methods: {
    changeStatus() {
      this.isAnimate = true
    }
  }
}
</script>

<style lang="scss">
.who-we-are {
  width: 50%;
  padding-top: 170px;
}
.navigation-indicator {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 70px;
}
.who-we-are-lead {
  width: 90%;
  font-size: 20px;
  margin: 0 0 30px;
}
.who-we-are-title {
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 70px;
}
.who-we-are-link {
  color: $white;
  width: 180px;
  font-weight: 900;
  text-align: right;
  text-transform: uppercase;
  position: relative;
  &:hover {
    color: $white;
    &::before {
      width: 100%;
    }
  }
  &:active {
    &::before {
      background-color: $primary;
    }
  }
  &::before {
    display: block;
    content: '';
    width: 70px;
    height: 1px;
    background-color: $white;
    position: absolute;
    top: 50%;
    left: -15px;
    transition: translateY(-50%);
    transition: width 0.2s;
  }
}
.animate-description {
  animation: fadeInTransformY 0.7s 0.7s forwards;
}
@keyframes fadeInTransformY {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@include media-breakpoint-down(md) {
  .who-we-are {
    width: 75%;
  }
}
@include media-breakpoint-down(sm) {
  .who-we-are {
    width: 100%;
  }
  .who-we-are-lead {
    font-size: 18px;
  }
  .who-we-are-title {
    font-size: 20px;
  }
}
@include media-breakpoint-down(xs) {
  .who-we-are-link::before {
    left: 0;
  }
}
@include media-breakpoint-up(xl) {
  .who-we-are {
    width: 70%;
  }
  .who-we-are-lead {
    font-size: 22px;
  }
}
</style>
