<template>
  <div class="container">
    <div class="what-we-do">
      <h1 class="navigation-indicator">What we do</h1>
      <div :class="{ 'animate-description': isAnimate }">
        <h1 class="what-we-do-title">We build successful digital products.</h1>
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
        <a class="what-we-do-link btn" href="javascript:void(0)">Explore</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDo',
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
