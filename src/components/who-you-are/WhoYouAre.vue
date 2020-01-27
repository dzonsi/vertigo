<template>
  <div class="container">
    <div class="who-you-are">
      <h2 class="navigation-indicator">Who you are</h2>
      <p class="who-you-are-lead" :class="{ 'animate-description': isAnimate }">
        You are responsible for innovation in your company.
        <br />
        Or, you are involved in your company's digital transformation efforts.
        <br />
        Or perhaps, you might have a brand new product idea.
      </p>
      <p class="who-you-are-lead" :class="{ 'animate-description': isAnimate }">
        Whichever it is, and wherever you are in the process, we can help you
        out - by working with you to discover areas of focus and business value,
        ideating and planning solutions, building and scaling products, and
        validating assumptions, all the while recognizing your need to minimize
        risks and maximize efficiency.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoYouAre',
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
.who-you-are {
  width: 70%;
  padding-top: 170px;
}
.navigation-indicator {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 70px;
}
.who-you-are-lead {
  width: 90%;
  font-size: 20px;
  margin: 0 0 30px;
  &:nth-child(3) {
    margin: 0 0 70px;
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
  .who-you-are {
    width: 75%;
  }
}
@include media-breakpoint-down(sm) {
  .who-you-are {
    width: 100%;
  }
  .who-you-are-lead {
    font-size: 18px;
  }
}
@include media-breakpoint-down(xs) {
  .who-you-are {
    padding-top: 100px;
  }
}
@include media-breakpoint-up(xl) {
  .who-you-are-lead {
    font-size: 22px;
  }
}
</style>
