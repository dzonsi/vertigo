<template>
  <div class="container">
    <div class="what-we-do">
      <h2 class="navigation-indicator">What we do</h2>
      <h3
        class="what-we-do-title"
        :class="{ 'animate-description': whatWeDoIsAnimate }"
      >
        We build successful digital products.
      </h3>
      <div
        id="what-we-do-aos"
        :class="{ 'animate-description': whatWeDoIsAnimate }"
      >
        <p class="what-we-do-lead">
          Our philosophy is to only work on products where we feel we can
          contribute and collaborate to produce results.
        </p>
        <p class="what-we-do-lead">
          We understand business, we understand users, and we understand
          technology. This lets us work together with you to define, build, and
          scale the perfect solution for your specific business need or
          opportunity.
        </p>
        <router-link to="/" class="what-we-do-link btn">Explore</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WhatWeDo',
  computed: mapState(['whatWeDoIsAnimate']),
  mounted() {
    if (window.innerWidth < 576) {
      var div = document.getElementById('what-we-do-aos')
      div.setAttribute('data-aos', 'zoom-in')
      div.setAttribute('data-aos-once', true)
      var h3 = document.getElementsByClassName('what-we-do-title')
      h3[0].setAttribute('data-aos', 'zoom-in')
      h3[0].setAttribute('data-aos-once', true)
    }
  }
}
</script>

<style lang="scss">
.what-we-do {
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
.what-we-do-lead {
  width: 90%;
  font-size: 20px;
  margin: 0 0 30px;
  &:nth-child(3) {
    margin: 0 0 70px;
  }
}
.what-we-do-title {
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 30px;
}
.what-we-do-link {
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
  .what-we-do {
    width: 75%;
  }
}
@include media-breakpoint-down(sm) {
  .what-we-do {
    width: 100%;
  }
  .what-we-do-lead {
    font-size: 18px;
  }
  .what-we-do-title {
    font-size: 20px;
  }
}
@include media-breakpoint-down(xs) {
  .what-we-do {
    padding-top: 100px;
  }
  .what-we-do-link::before {
    left: 0;
  }
}
@include media-breakpoint-up(xl) {
  .what-we-do {
    width: 70%;
  }
  .what-we-do-lead {
    font-size: 22px;
  }
}
</style>
