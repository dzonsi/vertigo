<template>
  <div class="container">
    <div class="how-we-do-it">
      <h2 class="navigation-indicator">How we do it</h2>
      <div
        id="how-we-do-it-aos"
        :class="{ 'animate-description': howWeDoItIsAnimate }"
      >
        <p class="how-we-do-it-lead">
          You haven’t realized it yet, but we have already walked you through
          all of our phases. Wait, what?
        </p>
        <p class="how-we-do-it-lead">
          We discovered each other.
          <br />
          The essence of design is who we are while developing what we do.
          <br />
          Then we do the impossible!
        </p>
        <router-link to="/" class="how-we-do-it-link btn">Explore</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HowWeDoIt',
  computed: mapState(['howWeDoItIsAnimate']),
  mounted() {
    if (window.innerWidth < 576) {
      var e = document.getElementById('how-we-do-it-aos')
      e.setAttribute('data-aos', 'zoom-in')
      e.setAttribute('data-aos-once', true)
    }
  }
}
</script>

<style lang="scss">
.how-we-do-it {
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
.how-we-do-it-lead {
  width: 90%;
  font-size: 20px;
  margin: 0 0 30px;
  &:nth-child(3) {
    margin: 0 0 70px;
  }
}
.how-we-do-it-link {
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
  .how-we-do-it {
    width: 75%;
  }
}
@include media-breakpoint-down(sm) {
  .how-we-do-it {
    width: 100%;
  }
  .how-we-do-it-lead {
    font-size: 18px;
  }
}
@include media-breakpoint-down(xs) {
  .how-we-do-it-link::before {
    left: 0;
  }
}
@include media-breakpoint-up(xl) {
  .how-we-do-it {
    width: 70%;
  }
  .how-we-do-it-lead {
    font-size: 22px;
  }
}
</style>
